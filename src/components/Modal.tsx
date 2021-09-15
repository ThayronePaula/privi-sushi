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
  Avatar
} from '@chakra-ui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchIcon } from '@chakra-ui/icons'
import { Center, Divider, List, ListItem, Stack } from '@chakra-ui/layout'

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
    >
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Heading fontSize="28px" fontWeight="600" color="#1C1D21">
          Select Token
        </Heading>
        <Spacer />
        <AiOutlineCloseCircle />
      </Flex>

      <Box alignItems="center" width="100%" paddingTop="24px">
        <InputGroup boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)">
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon />}
          />
          <Input type="search" placeholder="Search token" />
        </InputGroup>
      </Box>

      <Stack direction="row" spacing={4} alignItems="center" w="100%">
        <Button
          my="30px"
          leftIcon={
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
          }
          borderRadius="200px"
          color="white"
          backgroundColor="black"
          hover="none"
          fontSize="16px"
        >
          WMATIC
        </Button>
        <Button
          leftIcon={
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
          }
          borderRadius="200px"
          color="white"
          backgroundColor="black"
          hover="none"
          fontSize="16px"
        >
          USDT
        </Button>
        <Button
          leftIcon={
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
          }
          borderRadius="200px"
          color="white"
          backgroundColor="black"
          hover="none"
          fontSize="16px"
        >
          WETH
        </Button>
        <Button
          leftIcon={
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
          }
          borderRadius="200px"
          color="white"
          backgroundColor="black"
          hover="none"
          fontSize="16px"
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

        <ListItem
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="12px 0 8px 0"
        >
          <Flex align="center" gridGap="10px">
            <Text>2</Text>
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

        <ListItem
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="12px 0 8px 0"
        >
          <Flex align="center" gridGap="10px">
            <Text>3</Text>
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
