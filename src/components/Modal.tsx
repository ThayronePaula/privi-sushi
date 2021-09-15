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
import {
  Center,
  Divider,
  Grid,
  GridItem,
  List,
  ListItem,
  Stack
} from '@chakra-ui/layout'

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
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Heading fontSize="28px" fontWeight="600" color="#1C1D21">
          Select Token
        </Heading>
        <Spacer />
        <SmallCloseIcon />
      </Flex>

      <Box alignItems="center" width="100%" paddingTop="24px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon />}
          />
          <Input type="search" placeholder="Search token" />
        </InputGroup>
      </Box>

      <Stack direction="row" spacing={4} alignItems="center" w="100%" p="24px">
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

      <Box w="100%" pb="24px">
        <Text fontSize="18px" fontWeight="600" color="#1C1D21">
          Trending
        </Text>
      </Box>

      <List spacing={3} w="100%">
        <ListItem
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="12px 0 8px 0"
        >
          <Flex align="center" gridGap="10px">
            <Text>1</Text>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>
          </Flex>

          <Text fontSize="16px" fontWeight="600" color="##1C1D21">
            1,683
          </Text>
        </ListItem>
        <Center h="20px" justifyContent="end">
          <Divider w="84.5%" style={{ border: '1px solid #1C1D21 60%' }} />
        </Center>
      </List>
    </Flex>
  )
}
export default Modal
