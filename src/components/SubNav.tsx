import React, { useMemo } from "react";
import {
  Flex,
  Spacer,
  Heading,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SubNavProps {
  title: string;
}

export const SubNav = ({ title }: SubNavProps) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <Flex w="100%" direction={["column", "row"]}>
      <Heading align="center">{title}</Heading>
      <Spacer />
      <Box>
        <InputGroup w={["100%", "322px"]}>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon boxSize={15} />}
            h={44.01}
          />
          <Input
            type="text"
            placeholder="Search by name, symbol, or address"
            roundedLeft={12}
            roundedRight={12}
            h={44.01}
            value={value}
            onChange={handleChange}
            border="1px solid rgba(28, 29, 33, 0.2)"
            boxShadow="0px 12px 54px rgba(46, 46, 46, 0.1)"
            _focus={{}}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};
