import { Flex, Heading } from "@chakra-ui/react";
import { SwapNavigate } from "../components/SwapNavigate";
export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    flexDirection="column"
  >
    <Heading fontSize="6vw">{title}</Heading>
    <SwapNavigate />
  </Flex>
);

Hero.defaultProps = {
  title: "sushiswap and Oito.work",
};
