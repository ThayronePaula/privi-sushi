import React, { useMemo } from "react";
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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useMoralis } from "react-moralis";
import { useEtherscan } from "../shared/hooks";
import { convertWeiToEth } from "../shared/helpers";
import ModalTemplate from "../components/modal/ModalTemplate";
import ManageTokenCard from "./modal/ManageTokenCard";

export const SwapCard = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.900" };
  const bgCard = { light: "#EFF0F3", dark: "#e2e2e2" };
  const color = { light: "black", dark: "white" };
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const primaryEthAddress = useMemo(
    () => isAuthenticated && user.get("accounts")[0],
    [isAuthenticated, user]
  );

  const { walletBalance, isLoading } = useEtherscan(primaryEthAddress || null);

  const convertedWalletBalance =
    walletBalance && convertWeiToEth(walletBalance);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction={["column", "row"]}
      gridGap={"30px"}
      bg="rgba(255, 255, 255, 0.7)"
      color={color[colorMode]}
      roundedLeft={20}
      roundedRight={20}
      p={["30px 2%", "30px 41px 30px 40px"]}
      h={["full", "262px"]}
      {...props}
    >
      <VStack
        alignItems="flex-start"
        w={["100%", "50%"]}
        h={"192px"}
        spacing="none"
      >
        <Text color="#818184" fontWeight={500} textAlign="left" fontSize={16}>
          Swap From
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
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            _active={{ bg: "none" }}
          >
            Ethereum
          </Button>
        </Flex>
        <InputGroup size="lg" mt="26px">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="0,0"
            bg={bgColor[colorMode]}
            _placeholder={{ color: color[colorMode] }}
            _focus={{ border: "none", outline: "none" }}
          />
          <InputRightElement width="4.5rem">
            <Text fontWeight={500}>ETH</Text>
          </InputRightElement>
        </InputGroup>
        <Text color="#818184" textAlign="left" mt="34px">
          Exchange Rate:
        </Text>
      </VStack>

      <VStack
        alignItems="flex-start"
        w={["100%", "50%"]}
        h={"192px"}
        spacing="none"
      >
        <Text color="#818184" fontWeight={500} textAlign="left">
          Swap To
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
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            _active={{ bg: "none" }}
            onClick={onOpen}
          >
            Select Token
          </Button>
          <ModalTemplate title="Select Token" isOpen={isOpen} onClose={onClose}>
            <ManageTokenCard />
          </ModalTemplate>
        </Flex>
        <InputGroup size="lg" mt="26px">
          <Input
            type="text"
            placeholder="0,0"
            bg={bgColor[colorMode]}
            _placeholder={{ color: color[colorMode] }}
            _focus={{ border: "none", outline: "none" }}
          />
          <InputRightElement width="4.5rem">
            <Text fontWeight={500}>USDT</Text>
          </InputRightElement>
        </InputGroup>
        <Flex justify="flex-end" w="100%" mt="24px">
          {!isAuthenticated ? (
            <Button
              py={"21px"}
              borderRadius="10px"
              bg={color[colorMode]}
              colorScheme="white"
              size="sm"
              onClick={() => authenticate()}
            >
              Connect Wallet To Swap
            </Button>
          ) : (
            <Button
              py={"21px"}
              px={"20.5px"}
              bg={color[colorMode]}
              colorScheme="white"
              size="md"
              onClick={() => logout()}
            >
              Select Tokens
            </Button>
          )}
        </Flex>
      </VStack>
    </Flex>
  );
};
