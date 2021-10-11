import { Box, Heading, Text } from '@chakra-ui/react'

interface FaqBoxProps {
  title: string
  content: string
}
const FaqBox = ({ title, content }: FaqBoxProps) => {
  return (
    <Box maxW="370px" h={['100%', '350px']} p="24px" bg="#FAFAFA" borderRadius="24px" className="m-auto lg:m-0">
      <Heading as="h3" className="font-semibold text-privi-dark" fontSize="28px">
        {title}
      </Heading>
      <Text color="#1c1d2199" className="font-medium mt-6">
        {content}
      </Text>
    </Box>
  )
}
export default FaqBox
