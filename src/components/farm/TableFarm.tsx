import React, { useMemo } from "react";
import {
  Flex,
  Box,
  Text,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useMediaQuery,
} from "@chakra-ui/react";

export const TableFarm = () => {
  const [isLargerThan1280] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box h='79vh' overflow='auto' css={{
      '::-webkit-scrollbar': {
      width: 6,
    }}}>
      <Table variant="unstyled" h='100%'>
        <Thead>
          <Tr position='sticky' top='0' bg='#fff' zIndex='25'>
            <Th >Pool</Th>
            {!isLargerThan1280 && <Th position='sticky'>TVL</Th>}
            {!isLargerThan1280 && <Th position="sticky"> Rewards</Th>}
            <Th position="sticky" textAlign="right">
              APR
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}

            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
              <Text color="#1C1D21" fontWeight="600" fontSize="sm">
                7.21%
              </Text>
              <Text color="rgba(28, 29, 33,0.6)" fontSize="sm">
                annualized
              </Text>
            </Td>
          </Tr>
          <Tr>
            <Td w="25%">
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
                <Box ml={["0", "10px"]}>
                  <Text
                    align={["center", "left"]}
                    color="#1C1D21"
                    fontSize="16px"
                  >
                    CRV / WETH
                  </Text>
                  <Text
                    align={["center", "left"]}
                    color="rgba(28, 29, 33,0.6)"
                    fontSize="14px"
                  >
                    Chronoswap Farm
                  </Text>
                </Box>
              </Flex>
            </Td>
            {!isLargerThan1280 && (
              <Td w="25%">
                <Text fontWeight="medium" fontSize="sm">
                  $6,637,726
                </Text>
              </Td>
            )}
            {!isLargerThan1280 && (
              <Td w="25%">
                <Flex
                  align={["center"]}
                  direction={["column", "column", "row"]}
                  gridGap="6px"
                >
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/489/354"
                  />
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://picsum.photos/536/486"
                  />
                  <Box ml={["0", "10px"]} color="rgba(28, 29, 33,0.6)">
                    <Text align={["center", "left"]} fontSize="14px">
                      111.5 CHRO / DAY
                    </Text>
                    <Text align={["center", "left"]} fontSize="14px">
                      112.3 MATIC / DAY
                    </Text>
                  </Box>
                </Flex>
              </Td>
            )}
            <Td w="25%" textAlign="right">
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
