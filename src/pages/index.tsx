import NavBar from '../components/NavBar'

import { Container } from '../components/Container'

import { SwapNavigate } from '../components/SwapNavigate'
import { MoralisProvider } from 'react-moralis'
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from '../shared/constants'
import {
  Flex,
  Heading,
  Text,
  VStack,
  Divider,
  Box,
  Grid
} from '@chakra-ui/react'
import ExpertMode from '../components/modal/ExpertMode'

const Index = () => (
  <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
    <Container height="100vh">
      <NavBar />
      <ExpertMode />
      <Flex
        w="100%"
        height="100vh"
        direction={['column', 'column', 'column', 'row']}
        align="center"
        px="5%"
        gridGap={50}
      >
        <VStack
          w={['100%', '100%', '100%', '40%']}
          spacing={8}
          alignItems="flex-start"
        >
          <Heading
            as="h1"
            size="lg"
            fontSize={['48px', '64px']}
            fontWeight="600"
          >
            Sushiswap
          </Heading>
          <Text fontSize="20px" fontWeight="400" color="rgba(0,0,0,0.6)">
            Be a DeFi Chef with Sushi. Swap, earn, stack yields, lend, borrow,
            leverage all on one decentralized, community driven platform.
            Welcome home to DeFi.
          </Text>
          <Divider
            orientation="horizontal"
            border="0.6px solid rgba(0, 0, 0, 0.2)"
          />
          <Grid templateColumns="repeat(4, 4fr)" gap={6} textAlign="center">
            <Box
              d="flex"
              flexDirection="column"
              alignItems="center"
              gridGap={2}
            >
              <Text fontSize={['md', '24px']} fontWeight="600" color="#E60B8B">
                $11.91
              </Text>
              <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                Sushi Price
              </Text>
            </Box>
            <Box
              d="flex"
              flexDirection="column"
              alignItems="center"
              gridGap={2}
            >
              <Text fontSize={['md', '24px']} fontWeight="600" color="#E60B8B">
                $4.44b
              </Text>
              <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                Total Liquidity
              </Text>
            </Box>
            <Box
              d="flex"
              flexDirection="column"
              alignItems="center"
              gridGap={2}
            >
              <Text fontSize={['md', '24px']} fontWeight="600" color="#E60B8B">
                $104.8b
              </Text>
              <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                Total Volume
              </Text>
            </Box>
            <Box
              d="flex"
              flexDirection="column"
              alignItems="center"
              gridGap={2}
            >
              <Text fontSize={['sm', '24px']} fontWeight="600" color="#E60B8B">
                1.863
              </Text>
              <Text fontSize="14px" color="rgba(0,0,0,0.6)">
                Total Pairs
              </Text>
            </Box>
          </Grid>
        </VStack>
        <VStack w={['100%', '100%', '100%', '60%']}>
          <SwapNavigate />
        </VStack>
      </Flex>
    </Container>
  </MoralisProvider>
)

export default Index
