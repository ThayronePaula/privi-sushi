import React from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Avatar,
  Button,
  Switch,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CgSync, CgShapeRhombus } from "react-icons/cg";
import ManageTokenList from "./ManageTokenList";

const ModalSelect = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };
  const [value, setValue] = React.useState("t");
  const handleChange = (event) => setValue(event.target.value);
  const [isToggled, setIsToggled] = React.useState(false);
  return (
    <Flex
      flexDirection="column"
      justify="center"
      align="center"
      borderRadius="1.5rem"
    >
      <Box w="100%" paddingTop="24px">
        <InputGroup w="100%" boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)">
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon />}
          />
          <Input
            type="search"
            placeholder="http:// or ipfs:// or ENS name"
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>

      <Tabs
        variant="unstyled"
        isFitted
        align="center"
        colorScheme="green"
        width="100%"
        bg={"#FDFDFD"}
      >
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
            _focus={{ boxShadow: "0px 12px 54px rgba(46, 46, 46, 0.1)" }}
            roundedLeft={12}
            roundedRight={12}
            _selected={{
              color: "#fff",
              bg: "#1D1D1D",
            }}
          >
            <CgSync /> List
          </Tab>
          <Tab
            _focus={{ boxShadow: "0px 12px 54px rgba(46, 46, 46, 0.1)" }}
            roundedLeft={12}
            roundedRight={12}
            _selected={{
              color: "#fff",
              bg: "#1D1D1D",
            }}
            style={{ position: "relative" }}
          >
            <CgShapeRhombus /> Token
          </Tab>
        </TabList>
        {value.length > 0 && (
          <Text w="100%" align="left" fontSize="18px" fontWeight={600}>
            Search result for “{value}”
          </Text>
        )}
        <TabPanels>
          <TabPanel
            p="0"
            h="400px"
            overflow="auto"
            style={{ scrollbarWidth: "none" }}
          >
            <SimpleGrid minChildWidth="233px" spacing="16px">
              <Box
                bgGradient={
                  isToggled
                    ? "linear(to-br, #672FAC, #AA6CB7, #CFA0C4, #E9DAD6,)"
                    : ""
                }
                height="160px"
                borderRadius="16px"
                p={16.5}
              >
                <Flex justify="space-between">
                  <Avatar src="https://thispersondoesnotexist.com/image" />
                  <Switch
                    onChange={() => setIsToggled(!isToggled)}
                    colorScheme="rgba(255,255,255,0.1)"
                    size="lg"
                  />
                </Flex>
                <Flex marginTop="45px" marginRight="110px" direction="column">
                  <Text display="flex" color="#ffffff">
                    Gemini Tokens
                  </Text>
                  <Text direction="row" color="rgba(255, 255, 255, 0.6)">
                    123 tokens
                  </Text>
                </Flex>
              </Box>
              <Box bg="#FFFFFF" height="160px" borderRadius="16px" p={16.5}>
                <Flex justify="space-between">
                  <Avatar src="https://thispersondoesnotexist.com/image" />
                  <Switch colorScheme="rgba(255,255,255,0.1)" size="lg" />
                </Flex>
                <Flex marginTop="45px" marginRight="110px" direction="column">
                  <Text display="flex" color="#ffffff">
                    Gemini Tokens
                  </Text>
                  <Text direction="row" color="rgba(255, 255, 255, 0.6)">
                    123 tokens
                  </Text>
                </Flex>
              </Box>
              <Box bg="#FFFFFF" height="160px" borderRadius="16px" p={16.5}>
                <Flex justify="space-between">
                  <Avatar src="https://thispersondoesnotexist.com/image" />
                  <Switch colorScheme="rgba(255,255,255,0.1)" size="lg" />
                </Flex>
                <Flex marginTop="45px" marginRight="110px" direction="column">
                  <Text display="flex" color="#ffffff">
                    Gemini Tokens
                  </Text>
                  <Text direction="row" color="rgba(255, 255, 255, 0.6)">
                    123 tokens
                  </Text>
                </Flex>
              </Box>
              <Box
                bgGradient={
                  isToggled
                    ? "linear(to-br, #672FAC, #AA6CB7, #CFA0C4, #E9DAD6,)"
                    : ""
                }
                height="160px"
                borderRadius="16px"
                p={16.5}
              >
                <Flex justify="space-between">
                  <Avatar src="https://thispersondoesnotexist.com/image" />
                  <Switch
                    onChange={() => setIsToggled(!isToggled)}
                    colorScheme="rgba(255,255,255,0.1)"
                    size="lg"
                  />
                </Flex>
                <Flex marginTop="45px" marginRight="110px" direction="column">
                  <Text display="flex" color="#ffffff">
                    Gemini Tokens
                  </Text>
                  <Text direction="row" color="rgba(255, 255, 255, 0.6)">
                    123 tokens
                  </Text>
                </Flex>
              </Box>
              <Box bg="#FFFFFF" height="160px" borderRadius="16px" p={16.5}>
                <Flex justify="space-between">
                  <Avatar src="https://thispersondoesnotexist.com/image" />
                  <Switch colorScheme="rgba(255,255,255,0.1)" size="lg" />
                </Flex>
                <Flex marginTop="45px" marginRight="110px" direction="column">
                  <Text display="flex" color="#ffffff">
                    Gemini Tokens
                  </Text>
                  <Text direction="row" color="rgba(255, 255, 255, 0.6)">
                    123 tokens
                  </Text>
                </Flex>
              </Box>
              <Box bg="#FFFFFF" height="160px" borderRadius="16px" p={16.5}>
                <Flex justify="space-between">
                  <Avatar src="https://thispersondoesnotexist.com/image" />
                  <Switch colorScheme="#EB3CA2" size="lg" />
                </Flex>
                <Flex marginTop="45px" marginRight="110px" direction="column">
                  <Text display="flex" color="#ffffff">
                    Gemini Tokens
                  </Text>
                  <Text direction="row" color="rgba(255, 255, 255, 0.6)">
                    123 tokens
                  </Text>
                </Flex>
              </Box>
            </SimpleGrid>
          </TabPanel>
          <TabPanel p="0">
            <ManageTokenList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
export default ModalSelect;
