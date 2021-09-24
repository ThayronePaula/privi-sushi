import React, { ReactNode, useEffect } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
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
  Heading,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
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
interface AsideNavProps {
  children: ReactNode;
  filterTitle?: string;
}
export default function AsideNav({ children, filterTitle }: AsideNavProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%" bg={useColorModeValue("gray.100", "gray.900")}>
      <MobileNav onOpen={onOpen} />

      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        subTitle={filterTitle}
      />

      <Box bg="#fff" ml={{ base: 0, md: 60 }}>
        {children}
      </Box>

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
          <SidebarContent subTitle={filterTitle} onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
interface SidebarProps extends BoxProps {
  onClose: () => void;
  subTitle?: string;
}
const SidebarContent = ({ onClose, subTitle, ...rest }: SidebarProps) => {
  const [scrollSidebar, setScrollSidebar] = React.useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 190) {
      setScrollSidebar(-191);
    } else {
      setScrollSidebar(-window.scrollY + 0.0001);
    }
  };
  return (
    <Box
      pos="fixed"
      mt={{ base: 0, md: scrollSidebar }}
      bg="#fff"
      h="102%"
      w={{ base: "full", md: 60 }}
      borderRight="1px"
      borderRightColor={"#00000033"}
      {...rest}
      pt={2}
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
      <Flex direction="column"  pl="7%">
        {subTitle && (
          <Text color="#1C1D21" fontSize="14px" fontWeight="medium">
            {subTitle}
          </Text>
        )}
        <Box mb="150px">
          {LinkItems.map((link) => (
            <NavItem key={link.name}>{link.name}</NavItem>
          ))}
        </Box>
        <CardWorks />
      </Flex>
    </Box>
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
      height="108"
      alignItems="center"
      bg={"#FFFFFF"}
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

const CardWorks = () => {
  const [heightScreen, setHeightScreen] = React.useState(0);

  useEffect(() => {
    if (heightScreen === 0) setHeightScreen(window.innerHeight);
    const handleResize = () => {
      setHeightScreen(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box
      maxW={"216px"}
      w={"full"}
      pos="absolute"
      top={heightScreen > 800 ? "75%" : "30%"}
      transform={`translateY(${heightScreen > 800 ? "-100%" : "30%"})`}
      bg={"#FAFAFA"}
      roundedLeft={16}
      roundedRight={16}
      p={"16.0px 20px 16px 16px"}
    >
      <Heading as="h3" fontSize={"14px"} fontFamily={"body"} fontWeight={600}>
        Lindsey James
      </Heading>
      <Text color={"rgba(28, 29, 33,0.6)"} m={"4px 0 16px 0"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ctus leo, at
        volutpat, integer euismod nisi vel.
      </Text>

      <Link href="https://chakra-ui.com" isExternal _hover={{}} _focus={{}}>
        <AiFillPlayCircle
          color="#EB3CA2"
          size={24}
          style={{ display: "inline" }}
        />
        <Text
          as="span"
          ml="6px"
          fontSize="xs"
          fontWeight={500}
          color={"#1C1D21"}
        >
          Learn more
        </Text>
      </Link>
    </Box>
  );
};
