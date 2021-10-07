import React from 'react'
import { Flex, Text, Heading, Box, Button } from '@chakra-ui/react'

const StackInfoCard = () => {
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
          View Stats
        </Button>
        <Box>
          <Text fontSize="md" color="#EB3CA2" textAlign={['left', 'right']}>
            5,85%
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
