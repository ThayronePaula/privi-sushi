import { Flex, Heading, Text, VStack, Divider, Box, Grid } from '@chakra-ui/react'

import { useRouter } from 'next/router'

function Main({ children }) {
  const router = useRouter()
  const asPath = router.asPath

  return (
    <main
      className="flex flex-col items-center justify-start flex-grow w-full h-full"
      style={{ height: 'max-content' }}
    >
      {asPath === '/lend' || asPath === '/farm' || asPath === '/borrow' || asPath === '/stake' ? (
        children
      ) : (
        <div className="flex flex-row">
          <Flex w="100%" height="100vh" direction={['column', 'column', 'column', 'row']} align="center" gridGap={50}>
            <VStack w={['100%', '100%', '100%', '40%']} spacing={8} alignItems="flex-start" paddingLeft="50">
              <Heading as="h1" size="lg" fontSize={['48px', '64px']} fontWeight="600">
                Sushiswap
              </Heading>
              {console.log(router)}
              <Text fontSize="20px" fontWeight="400" color="rgba(0,0,0,0.6)">
                Be a DeFi Chef with Sushi. Swap, earn, stack yields, lend, borrow, leverage all on one decentralized,
                community driven platform. Welcome home to DeFi.
              </Text>
              <Divider orientation="horizontal" border="0.6px solid rgba(0, 0, 0, 0.2)" />
              <Grid templateColumns="repeat(4, 4fr)" gap={6} textAlign="center">
                <Box d="flex" flexDirection="column" alignItems="center" gridGap={2}>
                  <Text fontSize={['md', '24px']} fontWeight="600" color="#E60B8B">
                    $11.91
                  </Text>
                  <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                    Sushi Price
                  </Text>
                </Box>
                <Box d="flex" flexDirection="column" alignItems="center" gridGap={2}>
                  <Text fontSize={['md', '24px']} fontWeight="600" color="#E60B8B">
                    $4.44b
                  </Text>
                  <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                    Total Liquidity
                  </Text>
                </Box>
                <Box d="flex" flexDirection="column" alignItems="center" gridGap={2}>
                  <Text fontSize={['md', '24px']} fontWeight="600" color="#E60B8B">
                    $104.8b
                  </Text>
                  <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                    Total Volume
                  </Text>
                </Box>
                <Box d="flex" flexDirection="column" alignItems="center" gridGap={2}>
                  <Text fontSize={['sm', '24px']} fontWeight="600" color="#E60B8B">
                    1.863
                  </Text>
                  <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                    Total Pairs
                  </Text>
                </Box>
              </Grid>
            </VStack>
            <VStack w={['100%', '100%', '100%', '60%']}>{children}</VStack>
          </Flex>
        </div>
      )}
    </main>
  )
}

export default Main
