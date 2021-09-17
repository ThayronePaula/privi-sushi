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
import ModalManageToken from "../components/modal/ModalManageToken";

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
      bg={bgCard[colorMode]}
      color={color[colorMode]}
      roundedLeft={20}
      roundedRight={20}
      {...props}
    >
      <Box p="4" w="100%" h={300}>
        <Text color="#818184" fontWeight={500} textAlign="left">
          Swap From
        </Text>
        <Flex align="center" mt={2} mb={25}>
          <Avatar
            name="Dan Abrahmov"
            src="https://thispersondoesnotexist.com/image"
            size="sm"
          />
          <Button
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
        <Text color="#818184" mb={39} textAlign="left">
          Exchange Rate:
        </Text>
      </Box>
      <Spacer />
      {/* part 2 */}
      <Box p="4" w="100%" h={300}>
        <Text color="#818184" fontWeight={500} textAlign="left">
          Swap To
        </Text>
        <Flex align="center" gridGap={11} mt={2} mb={6}>
          {/* here */}
          <Button
            bg={bgColor[colorMode]}
            size="md"
            color="red"
            fontWeight={500}
            onClick={onOpen}
          >
            Select Token
          </Button>
          <ModalTemplate title="Manage Token" isOpen={isOpen} onClose={onClose}>
            <ModalManageToken />
          </ModalTemplate>
          {/* here */}
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
              size="lg"
              onClick={() => authenticate()}
            >
              Connect Wallet To Swap
            </Button>
          ) : (
            <Button
              bg={color[colorMode]}
              colorScheme="white"
              size="lg"
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
