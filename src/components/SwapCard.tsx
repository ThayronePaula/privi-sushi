import {
  Flex,
  Spacer,
  Box,
  Text,
  Select,
  Avatar,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useColorMode,
  FlexProps,
} from "@chakra-ui/react";

export const SwapCard = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  //background: #f3f4f7;

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    >
      <Box p="4" bg="#ccc" w="100%" h={300}>
        <Text color="#818184" fontWeight={500}>
          Swap From
        </Text>
        <Flex align="center" gridGap={11} mt={2} mb={26}>
          <Avatar
            name="Dan Abrahmov"
            src="https://thispersondoesnotexist.com/image"
            size="sm"
          />
          <Select
            w={110}
            placeholder="Ethereum"
            size="md"
            fontWeight={500}
            variant="unstyled"
            border="none"
          />
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
        <Text color="#818184" mb={39}>
          Exchange Rate:
        </Text>
      </Box>
      <Spacer />
      {/* part 2 */}
      <Box p="4" bg="#ccc" w="100%" h={300}>
        <Text color="#818184" fontWeight={500}>
          Swap To
        </Text>
        <Flex align="center" gridGap={11} mt={2} mb={26}>
          <Button bg={bgColor[colorMode]} color="red" fontWeight={500}>
            Select Token
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
        <Flex justify="end">
          <Button bg={color[colorMode]} colorScheme="white" size="md">
            Connect Wallet To Swap
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
