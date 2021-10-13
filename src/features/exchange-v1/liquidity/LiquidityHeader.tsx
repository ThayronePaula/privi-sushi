import NavLink from '../../../components/NavLink'
import React from 'react'
import { currencyId } from '../../../functions/currency'
import { useActiveWeb3React } from '../../../hooks'
import { Link } from '@chakra-ui/react'

export default function LiquidityHeader({ input = undefined, output = undefined }: any): JSX.Element {
  const { chainId } = useActiveWeb3React()
  return (
    <div className="grid grid-cols-2 rounded-md p-3px text-privi-dark">
      <NavLink
        activeClassName="text-white font-bold bg-privi-pink"
        href={`/add/${currencyId(input)}/${currencyId(output)}`}
      >
        <Link
          fontSize="14px"
          fontWeight="600"
          borderRadius="12px"
          colorScheme="white"
          w="247px"
          h="50px"
          color="#fff"
          className="flex items-center justify-center px-4 py-3 text-base font-medium text-center rounded-md md:px-10 cursor-pointer"
        >
          Add
        </Link>
      </NavLink>
      <NavLink
        onClick={(event) => {
          if (!output) event.preventDefault()
        }}
        activeClassName="font-bold bg-privi-pink"
        href={`/remove/${currencyId(input)}/${currencyId(output)}`}
      >
        <Link
          fontSize="14px"
          fontWeight="600"
          py={'21px'}
          borderRadius="12px"
          colorScheme="white"
          w="247px"
          h="50px"
          className="flex items-center justify-center px-4 py-3 text-base font-medium text-center rounded-md md:px-10 cursor-pointer"
        >
          Remove
        </Link>
      </NavLink>
    </div>
  )
}
// {/* <Button
//               fontSize="14px"
//               fontWeight="600"
//               borderRadius="12px"
//               colorScheme="white"
//               w="247px"
//               h="50px"
//               color="#fff"
//               bg="#EB3CA2"
//             >
//               Add
//             </Button>
//             <Button
//               fontSize="14px"
//               fontWeight="600"
//               py={'21px'}
//               borderRadius="12px"
//               colorScheme="white"
//               w="247px"
//               h="50px"
//               color="#000"
//             >
//               Remove
//             </Button> */}
