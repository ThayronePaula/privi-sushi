import React, { useMemo } from 'react'
import {
  Flex,
  Text,
  Avatar,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorMode,
  FlexProps,
  useDisclosure,
  VStack,
  HStack
} from '@chakra-ui/react'
import { ChevronDownIcon, SettingsIcon } from '@chakra-ui/icons'
import { useMoralis } from 'react-moralis'
import { useEtherscan } from '../shared/hooks'
import { convertWeiToEth } from '../shared/helpers'
import ModalTemplate from '../components/modal/ModalTemplate'
import ManageTokenCard from './modal/ManageTokenCard'

export const LiquidityCard = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  const { authenticate, isAuthenticated, logout, user } = useMoralis()

  const primaryEthAddress = useMemo(
    () => isAuthenticated && user.get('accounts')[0],
    [isAuthenticated, user]
  )

  const { walletBalance, isLoading } = useEtherscan(primaryEthAddress || null)

  const convertedWalletBalance = walletBalance && convertWeiToEth(walletBalance)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      direction="column"
      gridGap={'34px'}
      bg="rgba(255, 255, 255, 0.7)"
      roundedLeft={20}
      roundedRight={20}
      p={['30px 2%', '30px 41px 30px 40px']}
      h={['full', 'auto']}
      {...props}
    >
      <HStack justify="space-between">
        <Button
          fontSize="14px"
          fontWeight="600"
          borderRadius="12px"
          colorScheme="white"
          w="247px"
          h="50px"
          color="#fff"
          bg="#EB3CA2"
        >
          Add
        </Button>
        <Button
          fontSize="14px"
          fontWeight="600"
          py={'21px'}
          borderRadius="12px"
          colorScheme="white"
          w="247px"
          h="50px"
          color="#000"
        >
          Remove
        </Button>
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5611 11.0196C18.4611 11.0196 20 12.5325 20 14.3992C20 16.2648 18.4611 17.7778 16.5611 17.7778C14.6623 17.7778 13.1223 16.2648 13.1223 14.3992C13.1223 12.5325 14.6623 11.0196 16.5611 11.0196ZM8.08329 12.958C8.91551 12.958 9.59106 13.6217 9.59106 14.4393C9.59106 15.2558 8.91551 15.9206 8.08329 15.9206H1.50777C0.675552 15.9206 0 15.2558 0 14.4393C0 13.6217 0.675552 12.958 1.50777 12.958H8.08329ZM3.43887 0C5.33886 0 6.87774 1.51298 6.87774 3.37856C6.87774 5.24523 5.33886 6.75821 3.43887 6.75821C1.53999 6.75821 0 5.24523 0 3.37856C0 1.51298 1.53999 0 3.43887 0ZM18.4933 1.89833C19.3244 1.89833 20 2.56203 20 3.37856C20 4.19618 19.3244 4.85989 18.4933 4.85989H11.9178C11.0856 4.85989 10.4101 4.19618 10.4101 3.37856C10.4101 2.56203 11.0856 1.89833 11.9178 1.89833H18.4933Z"
            fill="black"
          />
        </svg>
      </HStack>

      <HStack spacing="30px">
        <VStack
          alignItems="flex-start"
          w={['100%', '50%']}
          h={'192px'}
          spacing="none"
        >
          <Text color="#818184" fontWeight={500} textAlign="left" fontSize={16}>
            Input
          </Text>
          <Flex align="center" mt="8px">
            <Avatar
              name="Dan Abrahmov"
              src="https://imgr.search.brave.com/l5nYpwJMmizUsxXq9usckNMVfER6zWgW1MF6_2ZGyM0/fit/1000/1000/ce/1/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvZXRoZXIt/bG9nby04LmpwZw"
              size="sm"
            />
            <Button
              bg="none"
              fontSize={20}
              size="xs"
              rightIcon={<ChevronDownIcon w={6} h={6} />}
              color="#000"
              fontWeight={500}
              iconSpacing="0.5rem"
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              _active={{ bg: 'none' }}
            >
              Ethereum
            </Button>
          </Flex>
          <InputGroup size="lg" mt="26px">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="120"
              bg={bgColor[colorMode]}
              _placeholder={{ color: color[colorMode] }}
              _focus={{ border: 'none', outline: 'none' }}
            />
            <InputRightElement width="4.5rem">
              <Text fontWeight={500}>ETH</Text>
            </InputRightElement>
          </InputGroup>
          <VStack spacing={'2px'} alignItems="flex-start" mt="24px">
            <Text color="#818184">0.000456654 WETH per MATIC</Text>
            <Text color="#818184">2189.84 MATIC per WETH</Text>
          </VStack>
        </VStack>

        <VStack
          alignItems="flex-start"
          w={['100%', '50%']}
          h={'192px'}
          spacing="none"
        >
          <Text color="#818184" fontWeight={500} textAlign="left">
            Input
          </Text>
          <Flex align="center" mt="8px">
            <Button
              bg="#fff"
              w="116px"
              size="sm"
              py="6px"
              px="16px"
              borderRadius="10px"
              color="#EB3CA2"
              fontWeight={500}
              fontSize={14}
              iconSpacing="0.5rem"
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              _active={{ bg: 'none' }}
              onClick={onOpen}
            >
              Select Token
            </Button>
            <ModalTemplate
              title="Select Token"
              isOpen={isOpen}
              onClose={onClose}
            >
              <ManageTokenCard />
            </ModalTemplate>
          </Flex>
          <InputGroup size="lg" mt="26px">
            <Input
              type="text"
              placeholder="0.012345"
              bg={bgColor[colorMode]}
              _placeholder={{ color: color[colorMode] }}
              _focus={{ border: 'none', outline: 'none' }}
            />
            <InputRightElement width="4.5rem">
              <Text fontWeight={500}>USDT</Text>
            </InputRightElement>
          </InputGroup>
          <HStack justify="space-between" w={'full'} mt="24px">
            <VStack alignItems="flex-end" spacing={'2px'}>
              <Text color="#818184">001%</Text>
              <Text color="#818184">Share of Pool</Text>
            </VStack>
            {!isAuthenticated ? (
              <Button
                py={'21px'}
                borderRadius="10px"
                bg={color[colorMode]}
                colorScheme="white"
                size="sm"
                onClick={() => authenticate()}
              >
                Approve USDT
              </Button>
            ) : (
              <Button
                py={'21px'}
                px={'20.5px'}
                bg={color[colorMode]}
                colorScheme="white"
                size="md"
                onClick={() => logout()}
              >
                Select Tokens
              </Button>
            )}
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  )
}
