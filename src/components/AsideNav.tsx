import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { ReactText } from "react";

import { SubNav } from "../components/SubNav";
interface LinkItemProps {
  name: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "All Farms" },
  { name: "2x Reward Farms" },
  { name: "Chronos Farms" },
];

export default function AsideNav({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%" bg={useColorModeValue("gray.100", "gray.900")}>
      <Grid templateRows="1fr" templateColumns="repeat(4, 1fr)">
        <GridItem rowSpan={1} colSpan={4} bg="tomato" h={108}>
          <MobileNav onOpen={onOpen} />
        </GridItem>
        <GridItem rowSpan={3} colSpan={1} bg="#000">
          <SidebarContent
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
        </GridItem>
        <GridItem rowSpan={3} colSpan={3} bg="#000">
          <Box ml={{ base: 0, md: 0 }} p="4">
            {children}
          </Box>
        </GridItem>
      </Grid>

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

interface SidebarProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose }: SidebarProps) => {
  return (
    <Flex
      transition="3s ease"
      direction="column"
      bg={"#fff"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
    >
      <Flex
        h="20"
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <CloseButton onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name}>{link.name}</NavItem>
      ))}
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#EFF0F3",
          color: "#1C1D21",
          fontWeight: "600",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <SubNav title="Farm" />
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            ></MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

// <Grid
// h="200px"
// templateRows="repeat(2, 1fr)"
// templateColumns="repeat(4, 1fr)"
// gap={1}
// >
// <GridItem rowSpan={1} colSpan={4} bg="tomato" />
// <GridItem colSpan={1} bg="papayawhip" />
// <GridItem rowSpan={1} colSpan={3} bg="papayawhip" />
// </Grid>
