import React, { useMemo } from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Avatar,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorMode,
  FlexProps,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useMoralis } from "react-moralis";
import { useEtherscan } from "../shared/hooks";
import { convertWeiToEth } from "../shared/helpers";
import ModalTemplate from "../components/modal/ModalTemplate";
import ModalSelect from "../components/modal/ModalSelect";

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
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      gridGap={4}
      bg={bgCard[colorMode]}
      color={color[colorMode]}
      roundedLeft={20}
      roundedRight={20}
      pt={18}
      pl={23}
      pr={23}
      pb={10}
      {...props}
    >
      <Box p="30px" w="100%">
        <Text color="#818184" fontWeight={500} textAlign="left" fontSize={16}>
          Swap From
        </Text>
        <Flex  align="center" mt={2} mb={26}>
          <Avatar
            name="Dan Abrahmov"
            src="https://imgr.search.brave.com/l5nYpwJMmizUsxXq9usckNMVfER6zWgW1MF6_2ZGyM0/fit/1000/1000/ce/1/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvZXRoZXIt/bG9nby04LmpwZw"
            size="sm"
          />
          <Button 
            rightIcon={<ChevronDownIcon  w={6} h={6} />}
            color="#000"
            fontWeight={500}
            iconSpacing="0.5rem"
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            _active={{ bg: "none" }}
            fontSize="20px"
          >
            Ethereum
          </Button>
        </Flex>
        <InputGroup size="lg"  mb={33}>
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
        <Text color="#818184" mb={29.5} textAlign="left">
          Exchange Rate:
        </Text>
      </Box>
      <Box marginBottom="6px" paddingRight="30px" w="100%" h={233}>
        <Text color="#818184" fontWeight={500} textAlign="left">
          Swap To
        </Text>
        <Flex align="center" mt={2} mb={6}>
          <Button
           bg={bgColor[colorMode]}
            size="none"
            p={3}
            color="#EB3CA2"
            fontWeight={500}
            onClick={onOpen}
          >
            Select Token
          </Button>
          <ModalTemplate title="Select Token" isOpen={isOpen} onClose={onClose}>
            <ModalSelect />
          </ModalTemplate>
        </Flex>
        <InputGroup size="lg" mb={34}>
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
        <Flex justify="end">
          {!isAuthenticated ? (
            <Button
              bg={color[colorMode]}
              colorScheme="white"
              size="md"
              onClick={() => authenticate()}
            >
              Connect Wallet To Swap
            </Button>
          ) : (
            <Button
              bg={color[colorMode]}
              colorScheme="white"
              size="md"
              onClick={() => logout()}
            >
              Select Tokens
            </Button>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
