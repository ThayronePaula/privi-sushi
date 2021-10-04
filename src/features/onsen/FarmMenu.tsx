import { ChainId } from '@sushiswap/sdk'
import NavLink from '../../components/NavLink'
import React from 'react'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { Box, Flex, Text, Heading, Link } from '@chakra-ui/react'
import { AiFillPlayCircle } from 'react-icons/ai'
const Menu = ({ positionsLength }) => {
  const { account, chainId } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  return (
    <Flex direction="column" justify="space-between">
      <div className="space-y-4">
        {account ? (
          <NavLink
            exact
            href={`/farm?filter=portfolio`}
            activeClassName="font-bold bg-transparent border rounded text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
          >
            <Link
              fontSize="28px"
              className="flex items-center justify-between font-semibold leading-none text-black border border-transparent rounded cursor-pointer"
              mb="2rem"
            >
              Farm
            </Link>
          </NavLink>
        ) : (
          <Link
            fontSize="28px"
            mb="2.5rem"
            className="flex items-center justify-between font-semibold leading-none text-black border border-transparent rounded cursor-pointer"
            onClick={toggleWalletModal}
          >
            Farm
          </Link>
        )}

        <div className="w-full">
          <h4 className="text-sm font-medium">Filters</h4>
        </div>

        <NavLink exact href="/farm" activeClassName="text-white bg-gray-900 font-semibold">
          <Link
            color="#1c1d2166"
            _hover={{ bg: '#EFF0F3', color: '#1C1D21' }}
            className="flex items-center justify-between px-4 py-6 text-sm border border-transparent cursor-pointer hover:rounded-2xl hover:font-semibold"
          >
            All Farms
          </Link>
        </NavLink>

        {(chainId === ChainId.MAINNET || chainId === ChainId.MATIC) && (
          <NavLink exact href={`/farm?filter=2x`} activeClassName="text-white bg-gray-900 font-semibold">
            <Link
              color="#1c1d2166"
              _hover={{ bg: '#EFF0F3', color: '#1C1D21' }}
              className="flex items-center justify-between px-4 py-6 text-sm border border-transparent cursor-pointer hover:rounded-2xl hover:font-semibold"
            >
              2x Reward Farms
            </Link>
          </NavLink>
        )}
        {chainId === ChainId.MAINNET && (
          <>
            <NavLink exact href={`/farm?filter=sushi`} activeClassName="text-white bg-gray-900 font-semibold">
              <Link
                color="#1c1d2166"
                _hover={{ bg: '#EFF0F3', color: '#1C1D21' }}
                className="flex items-center justify-between px-4 py-6 text-sm border border-transparent cursor-pointer hover:rounded-2xl hover:font-semibold"
              >
                SushiSwap Farms
              </Link>
            </NavLink>
          </>
        )}
      </div>
      <Box maxW={'216px'} w={'full'} bg={'#FAFAFA'} roundedLeft={16} roundedRight={16} p={'16.0px 20px 16px 16px'}>
        <Heading as="h3" fontSize={'14px'} fontFamily={'body'} fontWeight={600}>
          Lindsey James
        </Heading>
        <Text color={'rgba(28, 29, 33,0.6)'} m={'4px 0 16px 0'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ctus leo, at volutpat, integer euismod nisi vel.
        </Text>

        <Link href="https://chakra-ui.com" isExternal _hover={{}} _focus={{}}>
          <AiFillPlayCircle color="#EB3CA2" size={24} style={{ display: 'inline' }} />
          <Text as="span" ml="6px" fontSize="xs" fontWeight={500} color={'#1C1D21'}>
            Learn more
          </Text>
        </Link>
      </Box>
    </Flex>
  )
}

export default Menu
