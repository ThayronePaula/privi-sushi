import { Flex, VStack } from '@chakra-ui/react'
import MainCTA from '../MainCTA'

import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

function Main({ children }) {
  const router = useRouter()
  const [path, setPath] = useState('')

  useEffect(() => {
    if (router) {
      const asPath = router.pathname
      setPath(asPath)
    }
  }, [router])

  return (
    <main
      className="flex flex-col items-center justify-start flex-grow w-full h-full"
      style={{ height: 'max-content' }}
    >
      {path === '/kashi/lend' ||
      path === '/farm' ||
      path === '/borrow' ||
      path === '/lend' ||
      path === '/kashi/borrow' ||
      path === '/stake' ||
      path === '/bar' ||
      path === '/stake/' ? (
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
