import {
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  OrderedList,
  Avatar
} from '@chakra-ui/react'
import { EmailIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { ListItem, Stack } from '@chakra-ui/layout'

const Modal = () => {
  return (
    <Flex
      flexDirection="column"
      p="32px 24px 24px 24px"
      w="531px"
      height="auto"
      justify="center"
      align="center"
      borderRadius="1.5rem"
      border="1px solid black"
    >
      <Box w="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading fontSize="28px" fontWeight="600" color="#1C1D21">
            Select Token
          </Heading>
          <Spacer />
          <SmallCloseIcon />
        </Flex>
      </Box>

      <Box alignItems="center" w="100%" p="24px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon />}
          />
          <Input type="search" placeholder="Search token" />
        </InputGroup>
      </Box>

      <Box alignItems="center" w="100%" p="24px">
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<EmailIcon />}
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
          >
            WMATIC
          </Button>
          <Button
            leftIcon={<EmailIcon />}
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
          >
            USDT
          </Button>
          <Button
            leftIcon={<EmailIcon />}
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
          >
            WETH
          </Button>
          <Button
            leftIcon={<EmailIcon />}
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
          >
            BNB
          </Button>
        </Stack>
      </Box>

      <Box w="100%">
        <Text fontSize="18px" fontWeight="600" color="#1C1D21">
          Trending
        </Text>
      </Box>

      <OrderedList>
        <ListItem>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>

            <Box>
              <Text fontSize="16px" fontWeight="600" color="##1C1D21">
                1,683
              </Text>
            </Box>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>

            <Box>
              <Text fontSize="16px" fontWeight="600" color="##1C1D21">
                1,683
              </Text>
            </Box>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>

            <Box>
              <Text fontSize="16px" fontWeight="600" color="##1C1D21">
                1,683
              </Text>
            </Box>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>

            <Box>
              <Text fontSize="16px" fontWeight="600" color="##1C1D21">
                1,683
              </Text>
            </Box>
          </Flex>
        </ListItem>
      </OrderedList>
    </Flex>
  )
}
export default Modal
