import { Box, Heading, Text } from "@chakra-ui/react";

interface FaqBoxProps {
  title: string;
  content: string;
}
export const FaqBox = ({ title, content }: FaqBoxProps) => {
  return (
    <Box
      maxW="370px"
      h={["100%", "350px"]}
      p="24px"
      bg="#FAFAFA"
      borderRadius="24px"
      margin={["auto", '0']}
    >
      <Heading as="h3" color="#1C1D21" fontWeight="600" fontSize="28px">
        {title}
      </Heading>
      <Text color="#1c1d2199" fontWeight="500" mt="24px">
        {content}
      </Text>
    </Box>
  );
};
