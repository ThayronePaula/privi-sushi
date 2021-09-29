import {
  Flex,
  Heading,
  Text,
  VStack,
  Divider,
  Box,
  Badge,
  Avatar,
} from "@chakra-ui/react";
import NftImage from "../../assets/nft.png";
const Nft = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      direction={["column", "column", "column", "row"]}
      align="center"
      gridGap="80px"
      px='5%'
    >
      <VStack w={["100%", "100%", "100%", "492px"]}>
        <Box
          h="492px"
          w={["100%", "100%", "100%"]}
          bgImage={`url(${NftImage.src})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          roundedLeft={32}
          roundedRight={32}
          px={["2%", "30px"]}
          py={["4%", "40px"]}
          alignSelf="start"
        />
      </VStack>

      <VStack
        w={["100%", "100%", "100%", "566px"]}
        spacing={"48px"}
        alignItems="flex-start"
      >
        <Box
          d="flex"
          w="100%"
          flexDirection={["column", "row", "row"]}
          alignItems="center"
          justifyContent="space-between"
        >
          <Avatar
            w={["64px", "96px", "103.25px"]}
            h={["64px", "96px", "103.25px"]}
            src="https://thispersondoesnotexist.com/image"
            alt="Text"
          />
          <Box>
            <Text textAlign={["center", "left", "left"]}>Trident NFT</Text>
            <Text
              fontSize={["32px", "48px", "64px"]}
              fontWeight="600"
              lineHeight={["50px", "80px"]}
            >
              Whiplash
            </Text>
          </Box>
          <Badge
            fontWeight="500"
            color="#EB3CA2"
            bg="#eb3ca214"
            colorScheme="green"
            fontSize="14px"
            textTransform="capitalize"
            py="9px"
            px="24px"
            mt="43px"
          >
            $LSD
          </Badge>
        </Box>
        <Flex
          w="100%"
          justify="space-between"
          fontSize="md"
          color="#000"
          lineHeight="20px"
        >
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Auction Type
            </Text>
            <Text color="#EB3CA2">Batch Auction</Text>
            <Text mt="4px">Icon</Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#1c1d2133" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              MIN Raised
            </Text>
            <Text color="#EB3CA2">1380 $SUSHI</Text>
            <Text mt="4px" color="#1c1d2199">
              {" "}
              $1140 USD
            </Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#1c1d2133" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Token For Sale
            </Text>
            <Text color="#EB3CA2">20</Text>
            <Text mt="4px" color="#1c1d2199">
              $LSD
            </Text>
          </Box>
          <Divider orientation="vertical" h="41px" borderColor="#1c1d2133" />
          <Box>
            <Text as="h5" fontWeight="500" mb="12px">
              Ends On
            </Text>
            <Text color="#EB3CA2">June, 21 2021</Text>
            <Text mt="4px" color="#1c1d2199">
              12:30 GMT
            </Text>
          </Box>
        </Flex>
        <Box maxW={["100%", "90%", "476px"]}>
          <Heading
            as="h5"
            size="lg"
            fontSize={["12px", "16px"]}
            fontWeight="600"
          >
            About
          </Heading>
          <Text fontSize="14px" color="#00000099" mt="12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ctus leo,
            at volutpat, integer euismod nisi vel. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ctus leo, at volutpat, integer euismod
            nisi vel.
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Nft;
