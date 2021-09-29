import { Box, HStack, VStack, Text, Button, Divider } from '@chakra-ui/react'
import BackgroundStake from '../assets/backgroundStake.png'
export const SushiBarStates = () => {
  return (
    <Box
      h="auto"
      maxW={['100%', '100%', '100%', '697px']}
      w={['100%', '100%', '100%', 'none']}
      bgImage={`url(${BackgroundStake.src})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      roundedLeft={'16px'}
      roundedRight={'16px'}
      px={'24px'}
      py={'24px'}
    >
      <HStack justify="space-between">
        <VStack align="flex-start">
          <Text fontSize="16px" fontWeight="500" color="#fff">
            Balance
          </Text>
          <Text fontSize="16px" fontWeight="400" color="#fff">
            1,325 x SUSHI
          </Text>
        </VStack>
        <Divider orientation="vertical" h="65px" />
        <VStack align="center">
          <Text fontSize="16px" fontWeight="500" color="#fff">
            Unstaked
          </Text>
          <Text fontSize="16px" fontWeight="400" color="#fff">
            12 x SUSHI
          </Text>
        </VStack>
        <Divider orientation="vertical" h="65px" />
        <Button
          color="
          #E60B8B"
          fontSize="14px"
          fontWeight="600"
          py={'21px'}
          borderRadius="8px"
          bg="#fff"
          colorScheme="#"
          w="205px"
        >
          Your SushiBar Stats
        </Button>
      </HStack>
    </Box>
  )
}
