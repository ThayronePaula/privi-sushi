import React from 'react'
import {
  VStack,
  HStack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Switch
} from '@chakra-ui/react'

const TransactionSettings = () => {
  return (
    <VStack
      boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)"
      bg="#fff"
      borderRadius="16px"
      h="334px"
      w="291px"
      align="flex-start"
      spacing={2}
      p={'24px'}
    >
      <Heading fontSize="14px" fontWeight="600">
        Transaction Settings
      </Heading>
      <Text fontSize="14px" fontWeight="400">
        Slippage Tolerance
      </Text>
      <HStack w="100%" align="center" spacing="8px">
        <InputGroup>
          <Input
            border="1px solid rgba(28, 29, 33, 0.2)"
            boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)"
            type="number"
            placeholder="0.50"
            bg={'#fff'}
            _placeholder={{ color: '#000' }}
            _focus={{ border: 'none', outline: 'none' }}
          />
          <InputRightElement mr="10px">
            <Text fontWeight={500}>%</Text>
          </InputRightElement>
        </InputGroup>
        <Button
          py={'21px'}
          fontSize="14px"
          borderRadius="8px"
          bg={'#1C1D21'}
          colorScheme="#fff"
          w="75px"
          h="34px"
        >
          Auto
        </Button>
      </HStack>
      <Text fontSize="14px" fontWeight="400">
        Transaction Deadline
      </Text>
      <HStack w="100%" align="center" spacing="13px">
        <InputGroup>
          <Input
            boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)"
            type="number"
            placeholder="30"
            bg={'#fff'}
            _placeholder={{ color: '#000' }}
            _focus={{ border: 'none', outline: 'none' }}
          />
        </InputGroup>

        <Text>minutes</Text>
      </HStack>
      <Heading fontSize="14px" fontWeight="600">
        Interface Settings
      </Heading>
      <HStack w="100%" justify="space-between" align="flex-start">
        <Text fontSize="14px" fontWeight="400">
          Toggle Expert Mode
        </Text>
        <Switch size="sm" colorScheme="pink" />
      </HStack>
      <HStack w="100%" justify="space-between" align="flex-start">
        <Text fontSize="14px" fontWeight="400">
          Disable Multihops
        </Text>
        <Switch size="sm" colorScheme="pink" />
      </HStack>
    </VStack>
  )
}
export default TransactionSettings
