import React, { useEffect, useState } from 'react'
import { Flex, Text, Heading, Box, Button, Link } from '@chakra-ui/react'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { BAR_ADDRESS, ZERO } from '@sushiswap/sdk'
import { SUSHI, XSUSHI } from '../../config/tokens'
import { ChainId } from '@sushiswap/sdk'
import TransactionFailedModal from '../../modals/TransactionFailedModal'
import { request } from 'graphql-request'
import sushiData from '@sushiswap/sushi-data'
import { t } from '@lingui/macro'
import { tryParseAmount } from '../../functions/parse'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'
import useSWR from 'swr'
import useSushiBar from '../../hooks/useSushiBar'
import { useSushiPrice } from '../../services/graph'
import { useTokenBalance } from '../../state/wallet/hooks'
import { useWalletModalToggle } from '../../state/application/hooks'

const INPUT_CHAR_LIMIT = 18

const sendTx = async (txFunc: () => Promise<any>): Promise<boolean> => {
  let success = true
  try {
    const ret = await txFunc()
    if (ret?.error) {
      success = false
    }
  } catch (e) {
    console.error(e)
    success = false
  }
  return success
}


const fetcher = (query) => request('https://api.thegraph.com/subgraphs/name/matthewlilley/bar', query)


const StackInfoCard = () => {
  const { i18n } = useLingui()
  const { account } = useActiveWeb3React()
  const sushiBalance = useTokenBalance(account ?? undefined, SUSHI[ChainId.MAINNET])
  const xSushiBalance = useTokenBalance(account ?? undefined, XSUSHI)

  const sushiPrice = useSushiPrice()

  const { enter, leave } = useSushiBar()

  const { data } = useSWR(`{bar(id: "0x8798249c2e607446efb7ad49ec89dd1865ff4272") {ratio, totalSupply}}`, fetcher)

  const xSushiPerSushi = parseFloat(data?.bar?.ratio)

  const walletConnected = !!account
  const toggleWalletModal = useWalletModalToggle()

  const [activeTab, setActiveTab] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const [input, setInput] = useState<string>('')
  const [usingBalance, setUsingBalance] = useState(false)

  const balance = activeTab === 0 ? sushiBalance : xSushiBalance

  const formattedBalance = balance?.toSignificant(4)

  const parsedAmount = usingBalance ? balance : tryParseAmount(input, balance?.currency)

  const [approvalState, approve] = useApproveCallback(parsedAmount, BAR_ADDRESS[ChainId.MAINNET])

  const handleInput = (v: string) => {
    if (v.length <= INPUT_CHAR_LIMIT) {
      setUsingBalance(false)
      setInput(v)
    }
  }

  const handleClickMax = () => {
    setInput(parsedAmount ? parsedAmount.toSignificant(balance.currency.decimals).substring(0, INPUT_CHAR_LIMIT) : '')
    setUsingBalance(true)
  }

  const insufficientFunds = (balance && balance.equalTo(ZERO)) || parsedAmount?.greaterThan(balance)

  const inputError = insufficientFunds

  const [pendingTx, setPendingTx] = useState(false)

  const buttonDisabled = !input || pendingTx || (parsedAmount && parsedAmount.equalTo(ZERO))

  const handleClickButton = async () => {
    if (buttonDisabled) return

    if (!walletConnected) {
      toggleWalletModal()
    } else {
      setPendingTx(true)

      if (activeTab === 0) {
        if (approvalState === ApprovalState.NOT_APPROVED) {
          const success = await sendTx(() => approve())
          if (!success) {
            setPendingTx(false)
            // setModalOpen(true)
            return
          }
        }
        const success = await sendTx(() => enter(parsedAmount))
        if (!success) {
          setPendingTx(false)
          // setModalOpen(true)
          return
        }
      } else if (activeTab === 1) {
        const success = await sendTx(() => leave(parsedAmount))
        if (!success) {
          setPendingTx(false)
          // setModalOpen(true)
          return
        }
      }

      handleInput('')
      setPendingTx(false)
    }
  }

  const [apr, setApr] = useState<any>()

  // TODO: DROP AND USE SWR HOOKS INSTEAD
  useEffect(() => {
    const fetchData = async () => {
      const results = await sushiData.exchange.dayData()
      const apr = (((results[1].volumeUSD * 0.05) / data?.bar?.totalSupply) * 365) / (data?.bar?.ratio * sushiPrice)

      setApr(apr)
    }
    fetchData()
  }, [data?.bar?.ratio, data?.bar?.totalSupply, sushiPrice])
  return (
    <Box w={['100%', '440px']} h={['100%', '339px']} bg="#FAFAFA" p="24px" boxShadow="0px 12px 54px #2e2e2e19">
      <Heading as="h5" fontSize="20px" fontWeight="600" mb="24px">
        Maximize your token with staking
      </Heading>
      <Text fontSize="20px" color="#1c1d21cc">
        For every swap on the exchange on every chain, 0.05% of the swap fees are distributed as SUSHI proportional to
        your share of the SushiBar.
      </Text>
      <Text color="#1C1D21" fontSize="16px" fontWeight="500" my="24px">
        Staking APR
      </Text>
      <Flex justify="space-between" align={['start', 'center']} direction={['column-reverse', 'row']}>
        <Button px={'63px'} py={'9px'} borderRadius="10px" bg="#E60B8B" colorScheme="white" size="md">
          <Link href="https://analytics.sushi.com/bar" isExternal></Link>
          View Stats
        </Button>
        <Box>
          <Text fontSize="md" color="#EB3CA2" textAlign={['left', 'right']}>
          {`${apr ? apr.toFixed(2) + '%' : i18n._(t`Loading...`)}`}
          </Text>
          <Text color="#1c1d2199" fontSize="14px">
            Yesterday APR
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
export default StackInfoCard
