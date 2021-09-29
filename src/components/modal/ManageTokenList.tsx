import React from 'react'
import {
  Flex,
  List,
  ListItem,
  Box,
  Text,
  Avatar,
  Switch,
  Center,
  Divider
} from '@chakra-ui/react'

const ManageTokenList = () => {
  const [value, setValue] = React.useState('t')
  const handleChange = event => setValue(event.target.value)
  const [over, setOver] = React.useState(false)
  return (
    <List spacing={3} w="100%" h="full" mt="30px">
      <ListItem
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="12px 0 8px 0"
        pr={23}
      >
        <Flex align="center" gridGap="12px">
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
          <Text>1</Text>
          <Avatar
            size="md"
            name="Dan Abrahmov"
            src="https://thispersondoesnotexist.com/image"
          />
          <Box d="flex" flexDirection="column" alignItems="flex-start">
            <Text fontSize="16px" fontWeight="600" color="#1C1D21">
              ETH
            </Text>
            <Text fontSize="14px" fontWeight="600" color="#1C1D21">
              Ethereum
            </Text>
          </Box>
        </Flex>
        <Switch id="#" colorScheme={'pink'} />
      </ListItem>
      <Center justifyContent="end">
        <Divider
          w="77.5%"
          style={{ border: '1px solid #1C1D21 60%' }}
          mt="8px"
          mb="8px"
        />
      </Center>
      <ListItem
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
        pr={23}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        _hover={{ bg: '#EFF0F3', borderRadius: 16, pl: 25 }}
        _active={{ bg: '#EB3CA2' }}
      >
        <Flex align="center" gridGap="12px">
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
          <Text>2</Text>
          <Avatar
            size="md"
            name="Dan Abrahmov"
            src="https://thispersondoesnotexist.com/image"
          />
          <Box d="flex" flexDirection="column" alignItems="flex-start">
            <Text fontSize="16px" fontWeight="600" color="#1C1D21">
              ETH
            </Text>
            <Text fontSize="14px" fontWeight="600" color="#1C1D21">
              Ethereum
            </Text>
          </Box>
        </Flex>
        <Switch id="#" colorScheme={'pink'} />
      </ListItem>
      <Center h="10px" justifyContent="end">
        <Divider
          mt="8px"
          mb="8px"
          w="77.5%"
          style={{ border: '1px solid #1C1D21 60%' }}
        />
      </Center>
      <ListItem
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="12px 0 8px 0"
        pr={23}
      >
        <Flex align="center" gridGap="12px">
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
            size="md"
            name="Dan Abrahmov"
            src="https://thispersondoesnotexist.com/image"
          />
          <Box d="flex" flexDirection="column" alignItems="flex-start">
            <Text fontSize="16px" fontWeight="600" color="#1C1D21">
              ETH
            </Text>
            <Text fontSize="14px" fontWeight="600" color="#1C1D21">
              Ethereum
            </Text>
          </Box>
        </Flex>
        <Switch id="#" colorScheme={'pink'} />
      </ListItem>
      <Center justifyContent="end">
        <Divider
          w="77.5%"
          style={{ border: '1px solid #1C1D21 60%' }}
          mt="8px"
          mb="8px"
        />
      </Center>
      <ListItem
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        pr={23}
      >
        <Flex align="center" gridGap="12px">
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
          <Text>4</Text>
          <Avatar
            size="md"
            name="Dan Abrahmov"
            src="https://thispersondoesnotexist.com/image"
          />
          <Box d="flex" flexDirection="column" alignItems="flex-start">
            <Text fontSize="16px" fontWeight="600" color="#1C1D21">
              ETH
            </Text>
            <Text fontSize="14px" fontWeight="600" color="#1C1D21">
              Ethereum
            </Text>
          </Box>
        </Flex>
        <Switch id="#" colorScheme={'pink'} />
      </ListItem>
    </List>
  )
}
export default ManageTokenList
