import { ChainId } from '@sushiswap/sdk'
import NavLink from '../../components/NavLink'
import React from 'react'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { Link } from '@chakra-ui/react'

const Menu = ({ positionsLength }) => {
  const { account, chainId } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  return (
    <div className="space-y-4">
      {account ? (
        <NavLink
          exact
          href={`/farm?filter=portfolio`}
          activeClassName="font-bold bg-transparent border rounded text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
        >
          <Link className="flex items-center justify-between px-4 py-6 text-base font-bold text-white border border-transparent rounded cursor-pointer">
            Farm
          </Link>
        </NavLink>
      ) : (
        <Link
          className="flex items-center justify-between text-3xl font-semibold text-black border border-transparent rounded cursor-pointer "
          onClick={toggleWalletModal}
        >
          Farm
        </Link>
      )}

      <div className="w-full">
        <h4 className="text-sm font-medium">Filters</h4>
      </div>

      <NavLink
        exact
        href="/farm"
        activeClassName="font-bold bg-transparent border rounded text-pink text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
      >
        <Link
          color="#1c1d2166"
          _hover={{ bg: '#EFF0F3', color: '#1C1D21' }}
          className="flex items-center justify-between px-4 py-6 text-sm border border-transparent cursor-pointer hover:rounded-2xl hover:font-semibold"
        >
          All Farms
        </Link>
      </NavLink>

      {(chainId === ChainId.MAINNET || chainId === ChainId.MATIC) && (
        <NavLink
          exact
          href={`/farm?filter=2x`}
          activeClassName="bg-transparent border rounded text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
        >
          <Link
            color="#1c1d2166"
            className="flex items-center justify-between px-4 py-6 text-sm font-bold border border-transparent rounded cursor-pointer hover:bg-dark-800"
          >
            2x Reward Farms
          </Link>
        </NavLink>
      )}
      {chainId === ChainId.MAINNET && (
        <>
          <NavLink
            exact
            href={`/farm?filter=sushi`}
            activeClassName="font-bold bg-transparent border rounded text-high-emphesis border-transparent border-gradient-r-blue-pink-dark-900"
          >
            <Link
              color="#1c1d2166"
              className="flex items-center justify-between px-4 py-6 text-sm font-bold border border-transparent rounded cursor-pointer hover:bg-dark-800"
            >
              SushiSwap Farms
            </Link>
          </NavLink>
        </>
      )}
    </div>
  )
}

export default Menu
