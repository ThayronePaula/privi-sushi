import { Flex, Heading } from "@chakra-ui/react";
import { SwapCard } from "./SwapCard";

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
    <SwapCard />
  </Flex>
);

Hero.defaultProps = {
  title: "sushiswap and Oito.work",
};
