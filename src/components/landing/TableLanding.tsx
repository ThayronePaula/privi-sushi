import React, { useMemo } from "react";
import {
  Flex,
  Box,
  Text,
  Avatar,
  Progress,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useMediaQuery,
} from "@chakra-ui/react";

export const TableLanding = () => {
  const [isLargerThan1280] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box
      h="79vh"
      overflow="auto"
      css={{
        "::-webkit-scrollbar": {
          width: 6,
        },
      }}
    >
      <Table variant="unstyled" h="100%">
        <Thead>
          <Tr position="sticky" top="0" bg="#fff" zIndex="25">
            <Th>Market</Th>
            <Th>Lending</Th>
            <Th>Collateral</Th>
            <Th>Oracle</Th>
            <Th>APR</Th>
            <Th>Borrowed</Th>
            <Th textAlign="right">Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          
          <Tr >
            <Td w="14.28%" verticalAlign="top" h='10px'>
              <Flex
                align={["center"]}
                direction={["column", "row"]}
                gridGap="6px"
              >
                <Avatar
                  size="sm"
                  name="Christian Nwamba"
                  src="https://picsum.photos/200/354"
                />
                <Avatar
                  size="sm"
                  name="Christian Nwamba"
                  src="https://picsum.photos/148/354"
                />
              </Flex>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Box>
                <Text
                  align={["center", "left"]}
                  color="#1C1D21"
                  fontSize="16px"
                >
                  USDC
                </Text>
                <Text
                  align={["center", "left"]}
                  color="rgba(28, 29, 33,0.6)"
                  fontSize="14px"
                >
                  USDC Coin
                </Text>
              </Box>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Box>
                <Text
                  align={["center", "left"]}
                  color="#1C1D21"
                  fontSize="16px"
                >
                  WETH
                </Text>
                <Text
                  align={["center", "left"]}
                  color="rgba(28, 29, 33,0.6)"
                  fontSize="14px"
                >
                  Wrapped Ether
                </Text>
              </Box>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                Chainlink
              </Text>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                85.27%
              </Text>
              <Progress
                value={85.27}
                size="xs"
                css={{ "& div": { backgroundColor: "#EB3CA2" } }}
              />
            </Td>

            <Td textAlign="right" w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr >
            <Td w="14.28%" verticalAlign="top" h='10px'>
              <Flex
                align={["center"]}
                direction={["column", "row"]}
                gridGap="6px"
              >
                <Avatar
                  size="sm"
                  name="Christian Nwamba"
                  src="https://picsum.photos/200/354"
                />
                <Avatar
                  size="sm"
                  name="Christian Nwamba"
                  src="https://picsum.photos/148/354"
                />
              </Flex>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Box>
                <Text
                  align={["center", "left"]}
                  color="#1C1D21"
                  fontSize="16px"
                >
                  USDC
                </Text>
                <Text
                  align={["center", "left"]}
                  color="rgba(28, 29, 33,0.6)"
                  fontSize="14px"
                >
                  USDC Coin
                </Text>
              </Box>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Box>
                <Text
                  align={["center", "left"]}
                  color="#1C1D21"
                  fontSize="16px"
                >
                  WETH
                </Text>
                <Text
                  align={["center", "left"]}
                  color="rgba(28, 29, 33,0.6)"
                  fontSize="14px"
                >
                  Wrapped Ether
                </Text>
              </Box>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                Chainlink
              </Text>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                85.27%
              </Text>
              <Progress
                value={85.27}
                size="xs"
                css={{ "& div": { backgroundColor: "#EB3CA2" } }}
              />
            </Td>

            <Td textAlign="right" w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr >
            <Td w="14.28%" verticalAlign="top" >
              <Flex
                align={["center"]}
                direction={["column", "row"]}
                gridGap="6px"
              >
                <Avatar
                  size="sm"
                  name="Christian Nwamba"
                  src="https://picsum.photos/200/354"
                />
                <Avatar
                  size="sm"
                  name="Christian Nwamba"
                  src="https://picsum.photos/148/354"
                />
              </Flex>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Box>
                <Text
                  align={["center", "left"]}
                  color="#1C1D21"
                  fontSize="16px"
                >
                  USDC
                </Text>
                <Text
                  align={["center", "left"]}
                  color="rgba(28, 29, 33,0.6)"
                  fontSize="14px"
                >
                  USDC Coin
                </Text>
              </Box>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Box>
                <Text
                  align={["center", "left"]}
                  color="#1C1D21"
                  fontSize="16px"
                >
                  WETH
                </Text>
                <Text
                  align={["center", "left"]}
                  color="rgba(28, 29, 33,0.6)"
                  fontSize="14px"
                >
                  Wrapped Ether
                </Text>
              </Box>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                Chainlink
              </Text>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
            </Td>

            <Td w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                85.27%
              </Text>
              <Progress
                value={85.27}
                size="xs"
                css={{ "& div": { backgroundColor: "#EB3CA2" } }}
              />
            </Td>

            <Td textAlign="right" w="14.28%" verticalAlign="top">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
