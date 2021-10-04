import { classNames, formatNumber, formatPercent } from '../../functions'

import { Disclosure } from '@headlessui/react'
import DoubleLogo from '../../components/DoubleLogo'
import FarmListItemDetails from './FarmListItemDetails'
import Image from '../../components/Image'
import { PairType } from './enum'
import React from 'react'
import { useCurrency } from '../../hooks/Tokens'
import QuestionHelper from '../../components/QuestionHelper'
import { Text, Box } from '@chakra-ui/react'

const FarmListItem = ({ farm, ...rest }) => {
  const token0 = useCurrency(farm.pair.token0.id)
  const token1 = useCurrency(farm.pair.token1.id)

  return (
    <Disclosure {...rest}>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={classNames(
              open && 'rounded-b-none',
              'w-full px-4 py-6 text-left rounded cursor-pointer select-none text-primary text-sm md:text-lg'
            )}
          >
            <Box className="grid grid-cols-4" color="#1C1D21">
              <div className="flex col-span-2 space-x-4 rounded-full md:col-span-1">
                <DoubleLogo logoClassName="rounded-full" currency0={token0} currency1={token1} size={37.8} />
                <div className="flex flex-col justify-center">
                  <Box textAlign={['center', 'left']} fontSize="16px">
                    <Text as="span">{farm?.pair?.token0?.symbol}T</Text>/
                    <Text as="span" className={farm?.pair?.type === PairType.KASHI ? 'font-thin' : 'text-base'}>
                      {farm?.pair?.token1?.symbol}
                    </Text>
                  </Box>
                  {farm?.pair?.type === PairType.SWAP && (
                    <Text
                      align={['center', 'left']}
                      color="#1c1d2199"
                      fontSize="14px"
                      className="text-xs text-secondary"
                    >
                      Sushiswap Farm
                    </Text>
                  )}
                  {farm?.pair?.type === PairType.KASHI && (
                    <div className="text-xs md:text-base text-secondary">Kashi Farm</div>
                  )}
                </div>
              </div>
              <Text fontWeight="500" fontSize="16px" className="flex flex-col justify-center">
                {formatNumber(farm.tvl, true)}
              </Text>
              <div className="flex-row items-center hidden space-x-4 md:flex">
                <div className="flex items-center space-x-2">
                  {farm?.rewards?.map((reward, i) => (
                    <div key={i} className="flex items-center">
                      <Image
                        src={reward.icon}
                        width="37.8px"
                        height="37.8px"
                        className="rounded-full"
                        layout="fixed"
                        alt={reward.token}
                      />
                    </div>
                  ))}
                </div>
                <Box fontSize="14px" color="#1c1d2199" className="flex flex-col space-y-1">
                  {farm?.rewards?.map((reward, i) => (
                    <div key={i} className="text-xs md:text-sm whitespace-nowrap">
                      {formatNumber(reward.rewardPerDay)} {reward.token} / DAY
                    </div>
                  ))}
                </Box>
              </div>
              <div className="flex flex-col items-end justify-center">
                <Box fontSize="14px" className="flex flex-row items-center font-semibold text-right">
                  {farm?.tvl !== 0
                    ? farm?.roiPerYear > 10000
                      ? '>10,000%'
                      : formatPercent(farm?.roiPerYear * 100)
                    : 'Infinite'}
                  {/* {!!farm?.feeApyPerYear && (
                    <QuestionHelper
                      text={
                        <div className="flex flex-col">
                          <div>
                            Reward APR:{' '}
                            {farm?.tvl !== 0
                              ? farm?.rewardAprPerYear > 10000
                                ? '>10,000%'
                                : formatPercent(farm?.rewardAprPerYear * 100)
                              : 'Infinite'}
                          </div>
                          <div>
                            Fee APY:{' '}
                            {farm?.feeApyPerYear < 10000 ? formatPercent(farm?.feeApyPerYear * 100) : '>10,000%'}
                          </div>
                        </div>
                      }
                    />
                  )} */}
                </Box>
                <Box fontSize="14px" color="#1c1d2199" className="text-right">
                  annualized
                </Box>
              </div>
            </Box>
          </Disclosure.Button>

          {open && <FarmListItemDetails farm={farm} />}
        </div>
      )}
    </Disclosure>
  )
}

export default FarmListItem
