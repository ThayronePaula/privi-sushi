import React from 'react'
import { VStack, HStack, Text, Flex, Button, Heading } from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const ExpertMode = () => {
  return (
    <VStack
      bg="#fff"
      borderRadius="12px"
      h="295px"
      w="470px"
      align="flex-start"
      spacing="24px"
      p={'24px'}
    >
      <HStack align="center" justify="space-between" w="100%">
        <Heading fontSize="28px" fontWeight="600">
          Are you sure?
        </Heading>
        <Button colorScheme="white" size="xs" _focus={{ bg: 'none' }}>
          <AiOutlineCloseCircle size="1.5rem" color="#212121" />
        </Button>
      </HStack>
      <Text fontSize="16px" fontWeight="500" color="#1C1D21">
        Expert mode turns off confirm transaction prompt and allows high
        slippage trades/nthat often result in bad rates and lost funds.
      </Text>
      <Text fontSize="16px" fontWeight="500" color="#1C1D21">
        *ONLY USE THIS MODE IF YOU KNOW WHAT ARE DOING
      </Text>
      <Flex w="100%" justify="center">
        <Button
          py={'21px'}
          borderRadius="8px"
          bg="
          #FD3C40"
          colorScheme="white"
          w="412px"
          fontSize="14px"
          fontWeight="600"
        >
          Turn On Expert Mode
        </Button>
      </Flex>
    </VStack>
  )
}
export default ExpertMode
