import React from 'react'
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Avatar,
  Switch
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { CgSync, CgShapeRhombus } from 'react-icons/cg'
import ManageTokenList from './ManageTokenList'

const ModalSelect = () => {
  const [value, setValue] = React.useState('l')
  const handleChange = event => setValue(event.target.value)
  const [isToggled, setIsToggled] = React.useState(false)

  return (
    <Flex flexDirection="column" justify="center" align="center">
      <Box w="100%" paddingTop="24px" bg="#fff">
        <InputGroup
          w="100%"
          boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)"
          borderRadius="12px"
        >
          <InputLeftElement
            ml="5px"
            color="#1C1D21"
            opacity="60%"
            h="48px"
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon />}
          />
          <Input
            fontSize="16px"
            fontWeight="500"
            pl="50px"
            border="1px solid rgba(0, 0, 0, 0.2)"
            borderRadius="12px"
            h="48px"
            type="search"
            placeholder="http:// or ipfs:// or ENS name"
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>

      <Tabs bg="#fff" variant="unstyled" isFitted align="center" width="100%">
        <TabList
          h={58}
          justifyContent="center"
          my="24px"
          roundedLeft={12}
          roundedRight={12}
          bg="#fff"
          color="#000"
        >
          <Tab
            gridGap="8px"
            _focus={{ boxShadow: '0px 12px 54px rgba(46, 46, 46, 0.1)' }}
            roundedLeft={12}
            roundedRight={12}
            _selected={{
              color: '#fff',
              bg: '#1D1D1D'
            }}
          >
            <CgSync /> List
          </Tab>
          <Tab
            gridGap="8px"
            _focus={{ boxShadow: '0px 12px 54px rgba(46, 46, 46, 0.1)' }}
            roundedLeft={12}
            roundedRight={12}
            _selected={{
              color: '#fff',
              bg: '#1D1D1D'
            }}
            style={{ position: 'relative' }}
          >
            <CgShapeRhombus /> Token
          </Tab>
        </TabList>

        {value.length > 0 && (
          <Text w="100%" align="left" fontSize="16px" fontWeight={600}>
            Search result for “{value}”
          </Text>
        )}
        <TabPanels>
          <TabPanel
            p="0"
            h="400px"
            overflow="auto"
            style={{ scrollbarWidth: 'none' }}
          >
            <Box
              h="400px"
              overflow="auto"
              css={{
                '::-webkit-scrollbar': {
                  width: 0
                }
              }}
            >
              <SimpleGrid
                minChildWidth="233px"
                spacing="16px"
                bg="#fff"
                mt="24px"
              >
                <Box
                  border="1px solid rgba(0, 0, 0, 0.2)"
                  bgGradient={
                    isToggled
                      ? 'linear(to-br, #672FAC, #AA6CB7, #CFA0C4, #E9DAD6,)'
                      : ''
                  }
                  h="160px"
                  borderRadius="16px"
                  p={16.5}
                >
                  <Flex justify="space-between">
                    <Avatar
                      src="https://thispersondoesnotexist.com/image"
                      size="sm"
                    />
                    <Switch
                      onChange={() => setIsToggled(!isToggled)}
                      colorScheme="rgba(255, 255, 255, 0.1)"
                      size="sm"
                    />
                  </Flex>
                  <Flex
                    gridGap="2px"
                    align="flex-start"
                    w="100%"
                    marginTop="45px"
                    marginRight="110px"
                    direction="column"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      lineHeight="20px"
                      color="#ffffff"
                    >
                      Gemini Tokens
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      123 tokens
                    </Text>
                  </Flex>
                </Box>

                <Box
                  border="1px solid rgba(0, 0, 0, 0.2)"
                  bg="#FFFFFF"
                  height="160px"
                  borderRadius="16px"
                  p={16.5}
                >
                  <Flex justify="space-between">
                    <Avatar
                      src="https://thispersondoesnotexist.com/image"
                      size="sm"
                    />
                    <Switch colorScheme="rgba(255,255,255,0.1)" size="sm" />
                  </Flex>
                  <Flex
                    w="100%"
                    gridGap="2px"
                    align="flex-start"
                    marginTop="45px"
                    marginRight="110px"
                    direction="column"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      lineHeight="20px"
                      color="#ffffff"
                    >
                      Gemini Tokens
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      123 tokens
                    </Text>
                  </Flex>
                </Box>
                <Box
                  border="1px solid rgba(0, 0, 0, 0.2)"
                  bg="#FFFFFF"
                  height="160px"
                  borderRadius="16px"
                  p={16.5}
                >
                  <Flex justify="space-between">
                    <Avatar
                      src="https://thispersondoesnotexist.com/image"
                      size="sm"
                    />
                    <Switch colorScheme="rgba(255,255,255,0.1)" size="sm" />
                  </Flex>
                  <Flex
                    w="100%"
                    gridGap="2px"
                    align="flex-start"
                    marginTop="45px"
                    marginRight="110px"
                    direction="column"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      lineHeight="20px"
                      color="#ffffff"
                    >
                      Gemini Tokens
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      123 tokens
                    </Text>
                  </Flex>
                </Box>
                <Box
                  border="1px solid rgba(0, 0, 0, 0.2)"
                  bgGradient={
                    isToggled
                      ? 'linear(to-br, #672FAC, #AA6CB7, #CFA0C4, #E9DAD6,)'
                      : ''
                  }
                  height="160px"
                  borderRadius="16px"
                  p={16.5}
                >
                  <Flex justify="space-between">
                    <Avatar
                      src="https://thispersondoesnotexist.com/image"
                      size="sm"
                    />
                    <Switch
                      onChange={() => setIsToggled(!isToggled)}
                      colorScheme="rgba(255,255,255,0.1)"
                      size="sm"
                    />
                  </Flex>
                  <Flex
                    w="100%"
                    gridGap="2px"
                    align="flex-start"
                    marginTop="45px"
                    marginRight="110px"
                    direction="column"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      lineHeight="20px"
                      color="#ffffff"
                    >
                      Gemini Tokens
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      123 tokens
                    </Text>
                  </Flex>
                </Box>
                <Box
                  border="1px solid rgba(0, 0, 0, 0.2)"
                  bg="#FFFFFF"
                  height="160px"
                  borderRadius="16px"
                  p={16.5}
                >
                  <Flex justify="space-between">
                    <Avatar
                      src="https://thispersondoesnotexist.com/image"
                      size="sm"
                    />
                    <Switch colorScheme="rgba(255,255,255,0.1)" size="sm" />
                  </Flex>
                  <Flex
                    w="100%"
                    gridGap="2px"
                    align="flex-start"
                    marginTop="45px"
                    marginRight="110px"
                    direction="column"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      lineHeight="20px"
                      color="#ffffff"
                    >
                      Gemini Tokens
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      123 tokens
                    </Text>
                  </Flex>
                </Box>
                <Box
                  border="1px solid rgba(0, 0, 0, 0.2)"
                  bg="#FFFFFF"
                  height="160px"
                  borderRadius="16px"
                  p={16.5}
                >
                  <Flex justify="space-between">
                    <Avatar
                      src="https://thispersondoesnotexist.com/image"
                      size="sm"
                    />
                    <Switch colorScheme="#EB3CA2" size="sm" />
                  </Flex>
                  <Flex
                    w="100%"
                    gridGap="2px"
                    align="flex-start"
                    marginTop="45px"
                    marginRight="110px"
                    direction="column"
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="500"
                      lineHeight="20px"
                      color="#ffffff"
                    >
                      Gemini Tokens
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="600"
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      123 tokens
                    </Text>
                  </Flex>
                </Box>
              </SimpleGrid>
            </Box>
          </TabPanel>
          <TabPanel p="0">
            <ManageTokenList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
export default ModalSelect
