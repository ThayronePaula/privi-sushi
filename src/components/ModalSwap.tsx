import {
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchIcon } from "@chakra-ui/icons";
import { Center, Divider, List, ListItem, Stack } from "@chakra-ui/layout";
import React from "react";

interface ModalSwapProps {
  onClosed: () => void;
}

const ModalSwap = ({ onClosed }: ModalSwapProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  const [over, setOver] = React.useState(false);
  console.table(over);
  return (
    <Flex
      flexDirection="column"
      p="32px 24px 24px 24px"
      justify="center"
      align="center"
      borderRadius="1.5rem"
    >
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Heading fontSize="28px" fontWeight="600" color="#1C1D21">
          Select Token
        </Heading>
        <Spacer />

        <Button
          colorScheme="white"
          size="xs"
          onClick={onClosed}
          _focus={{ bg: "none" }}
        >
          <AiOutlineCloseCircle size="1.5rem" color="#212121" />
        </Button>
      </Flex>

      <Box alignItems="center" width="100%" paddingTop="24px">
        <InputGroup boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)">
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon />}
          />
          <Input
            type="search"
            placeholder="Search token"
            value={value}
            onChange={handleChange}
          />
        </InputGroup>
      </Box>

      {value.length ? (
        <Text w="100%" align="left" fontSize="18px" fontWeight={600} my="24px">
          Search result for “{value}”
        </Text>
      ) : (
        <Stack direction="row" spacing={4} alignItems="center" w="100%">
          <Button
            my="30px"
            leftIcon={
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://thispersondoesnotexist.com/image"
              />
            }
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
            fontSize="16px"
          >
            WMATIC
          </Button>
          <Button
            leftIcon={
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://thispersondoesnotexist.com/image"
              />
            }
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
            fontSize="16px"
          >
            USDT
          </Button>
          <Button
            leftIcon={
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://thispersondoesnotexist.com/image"
              />
            }
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
            fontSize="16px"
          >
            WETH
          </Button>
          <Button
            leftIcon={
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://thispersondoesnotexist.com/image"
              />
            }
            borderRadius="200px"
            color="white"
            backgroundColor="black"
            hover="none"
            fontSize="16px"
          >
            BNB
          </Button>
        </Stack>
      )}
      <Box w="100%" pb="24px">
        <Text fontSize="18px" fontWeight="600" color="#1C1D21">
          Trending
        </Text>
      </Box>

      <List spacing={3} w="100%">
        <ListItem
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="12px 0 8px 0"
          cursor="pointer"
          px={7}
          py={2}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          _hover={{ bg: "#EFF0F3", borderRadius: 16 }}
        >
          <Flex align="center" gridGap="10px">
            {!over && (
              <svg
                width="15"
                height="6"
                viewBox="0 0 15 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM3 3.5L15 3.5V2.5L3 2.5V3.5Z"
                  fill="#1C1D21"
                />
              </svg>
            )}
            <Text>1</Text>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>
          </Flex>

          <Text fontSize="16px" fontWeight="600" color="##1C1D21">
            1,683
          </Text>
        </ListItem>
        <Center h="20px" justifyContent="end">
          <Divider w="84.5%" style={{ border: "1px solid #1C1D21 60%" }} />
        </Center>

        <ListItem
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="12px 0 8px 0"
          px={0}
          py={0}
        >
          <Flex align="center" gridGap="10px">
            <svg
              width="15"
              height="6"
              viewBox="0 0 15 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM3 3.5L15 3.5V2.5L3 2.5V3.5Z"
                fill="#1C1D21"
              />
            </svg>
            <Text>2</Text>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>
          </Flex>

          <Text fontSize="16px" fontWeight="600" color="##1C1D21">
            1,683
          </Text>
        </ListItem>
        <Center h="20px" justifyContent="end">
          <Divider w="84.5%" style={{ border: "1px solid #1C1D21 60%" }} />
        </Center>

        <ListItem
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          margin="12px 0 8px 0"
          px={7}
          py={2}
        >
          <Flex align="center" gridGap="10px">
            <svg
              width="15"
              height="6"
              viewBox="0 0 15 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM3 3.5L15 3.5V2.5L3 2.5V3.5Z"
                fill="#1C1D21"
              />
            </svg>
            <Text>3</Text>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://thispersondoesnotexist.com/image"
            />
            <Box d="flex" flexDirection="column">
              <Text fontSize="16px" fontWeight="600" color="#1C1D21">
                ETH
              </Text>
              <Text fontSize="14px" fontWeight="600" color="#1C1D21">
                Ethereum
              </Text>
            </Box>
          </Flex>

          <Text fontSize="16px" fontWeight="600" color="##1C1D21">
            1,683
          </Text>
        </ListItem>
        <Center h="20px" justifyContent="end">
          <Divider w="84.5%" style={{ border: "1px solid #1C1D21 60%" }} />
        </Center>
      </List>
    </Flex>
  );
};
export default ModalSwap;
