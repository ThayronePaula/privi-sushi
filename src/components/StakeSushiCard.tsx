import React from 'react'
import {
  Flex,
  Text,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorMode,
  FlexProps,
  VStack,
  HStack
} from '@chakra-ui/react'

export const StakeSushiCard = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }

  return (
    <Flex
      direction="column"
      bg="rgba(255, 255, 255, 0.7)"
      roundedLeft={20}
      roundedRight={20}
      p={['30px 2%', '30px 41px 30px 40px']}
      h={['full', 'auto']}
      w="637px"
      {...props}
    >
      <VStack align="flex-start" spacing="24px">
        <Heading fontSize="20px">Stake SUSHI</Heading>
        <InputGroup size="lg" mt="26px">
          <Input
            fontSize="18px"
            pr="4.5rem"
            type="number"
            placeholder="0.0 SUSHI"
            bg={bgColor[colorMode]}
            _placeholder={{ color: color[colorMode] }}
            _focus={{ border: 'none', outline: 'none' }}
          />
          <InputRightElement width="4.5rem">
            <Text fontSize="16px" fontWeight={500}>
              Balance: 0
            </Text>
          </InputRightElement>
        </InputGroup>
        <HStack justify="space-between" align="flex-start" w="100%">
          <Text>1 x SUSHI = 1.1435 SUSHI</Text>
          <Button
            py={'21px'}
            borderRadius="10px"
            bg={color[colorMode]}
            colorScheme="white"
            size="sm"
          >
            Enter Ammount
          </Button>
        </HStack>
      </VStack>
    </Flex>
  )
}
