import {
  Flex,
  Box,
  Text,
  Divider,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  HStack,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { CgShapeHexagon, CgShapeRhombus } from "react-icons/cg";

import BackgroundLend from "../../assets/backgroundLend.png";
const ModalLend = () => {
  return (
    <Box>
      <Flex color="#1c1d2199" mt="4px">
        <Text mr="12px">
          Collateral : {""}
          <Text as="span" color="#1C1D21" fontWeight="500">
            WETH
          </Text>
        </Text>
        <Text>
          Oracle : {""}
          <Text as="span" color="#1C1D21" fontWeight="500">
            Chainlink
          </Text>
        </Text>
      </Flex>
      <Box
        bgImage={`url(${BackgroundLend.src})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        roundedLeft={"16px"}
        roundedRight={"16px"}
        mt="24px"
      >
        <Flex
          w="100%"
          justify="space-between"
          p="20px 30px"
          fontSize="md"
          color="#fff"
          h={["auto", "122px"]}
        >
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Lent
            </Text>
            <Text>5,476 USDC</Text>
            <Text color="#ffffff99">%7,324.2</Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#ffffff33" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Borrowed
            </Text>
            <Text>85.27%</Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#ffffff33" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Supply APR
            </Text>
            <Text>7.21%</Text>
          </Box>
        </Flex>
      </Box>

      <Tabs
        variant="unstyled"
        isFitted
        align="center"
        colorScheme="green"
        width="100%"
        bg={"#FDFDFD"}
        mt="24px"
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
            <CgShapeHexagon /> Deposit
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
            <CgShapeRhombus /> Withdraw
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <TabLend titleAction="Deposit" />
          </TabPanel>
          <TabPanel p="0">
            <TabLend titleAction="Withdraw" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default ModalLend;

const TabLend = ({ titleAction }: { titleAction?: string }) => {
  return (
    <>
      <Heading
        as="h4"
        textAlign="left"
        fontSize="18px"
        fontWeight="600"
        mb="26px"
      >
        {titleAction} USDC
      </Heading>
      <Box d="flex" flexDirection="column">
        <HStack justify="space-between">
          <Flex align="center" fontWeight="500">
            <Text fontSize="md" fontWeight="500" color="#1c1d2166">
              {titleAction} USDC from
            </Text>
            <Badge
              ml="12px"
              fontWeight="500"
              color="#EB3CA2"
              bg="#eb3ca214"
              colorScheme="green"
              borderRadius="100px"
              fontSize="14px"
              textTransform="capitalize"
            >
              Wallet
            </Badge>
          </Flex>
          <Text fontWeight="500" fontSize="md" color="#EB3CA2">
            Balance 7,346.20
          </Text>
        </HStack>
        <InputGroup size="lg" mt="26px">
          <Input
            type="text"
            placeholder="0"
            _placeholder={{ color: "gray.500" }}
          />
          <InputRightElement width="4.5rem">
            <Text fontWeight={500}>USDT</Text>
          </InputRightElement>
        </InputGroup>
        <Button
          borderRadius="10px"
          bg={"#1C1D21"}
          colorScheme="white"
          size="lg"
          mt="24px"
          fontSize="14px"
        >
          Approve {titleAction}
        </Button>
      </Box>
    </>
  );
};
