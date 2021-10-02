import { Flex, VStack } from '@chakra-ui/react'
import MainCTA from '../MainCTA'

import { useRouter } from 'next/router'

function Main({ children }) {
  const router = useRouter()
  const asPath = router.pathname
  console.log(asPath)

  return (
    <main
      className="flex flex-col items-center justify-start flex-grow w-full h-full"
      style={{ height: 'max-content' }}
    >
      {asPath === '/kashi/lend' ||
      asPath === '/farm' ||
      asPath === '/borrow' ||
      asPath === '/lend' ||
      asPath === '/borrow' ||
      asPath === '/kashi/borrow' ||
      asPath === '/stake' ||
      asPath === '/bar' ||
      asPath === '/farm' ? (
        children
      ) : (
        <div className="flex flex-row">
          <Flex w="100%" height="100vh" direction={['column', 'column', 'column', 'row']} align="center" gridGap={50}>
            <MainCTA />
            <VStack w={['100%', '100%', '100%', '60%']}>{children}</VStack>
          </Flex>
        </div>
      )}
    </main>
  )
}

export default Main
