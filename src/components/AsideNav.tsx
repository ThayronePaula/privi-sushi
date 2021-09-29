import React, { ReactNode, useState } from "react";
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
import NextLink from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiFillPlayCircle } from "react-icons/ai";
import { CgSync, CgShapeRhombus, CgShapeCircle } from "react-icons/cg";

import { SubNav } from "../components/SubNav";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

interface AsideNavProps {
  children: ReactNode;
  filterTitle?: string;
  titleSubNav: string;
  LinkItems: {
    name: string;
  }[];
}
export default function AsideNav({
  titleSubNav,
  filterTitle,
  children,
  LinkItems,
}: AsideNavProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%" bg={useColorModeValue("gray.100", "gray.900")}>
      <MobileNav titleSubNav={titleSubNav} onOpen={onOpen} />

      <Flex>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          subTitle={filterTitle}
          LinkItems={LinkItems}
        />

        <Box bg="#fff" ml={{ base: 0, md: 0 }} flex="1">
          {children}
        </Box>
      </Flex>

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
          <SidebarContent
            LinkItems={LinkItems}
            subTitle={filterTitle}
            onClose={onClose}
          />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
interface SidebarProps extends BoxProps {
  onClose: () => void;
  subTitle?: string;
  LinkItems: {
    name: string;
  }[];
}
const SidebarContent = ({
  onClose,
  subTitle,
  LinkItems,
  ...rest
}: SidebarProps) => {
  const router = useRouter();
  const [activeBg, setActiveBg] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storagedTabName = localStorage.getItem("@tabName");
      if (storagedTabName) {
        return storagedTabName;
      }
    }
    return "";
  });
  if (typeof window !== "undefined") {
    if (
      router.pathname === "/lending" &&
      window.localStorage.getItem("@tabName") === "Barrow"
    ) {
      router.push("/" + activeBg.toLowerCase());
    }
  }
  const handleSidebarLink = (event: any) => {
    window.localStorage.setItem("@tabName", event.target.innerText);
    const getLinkName = window.localStorage.getItem("@tabName");
    setActiveBg(getLinkName);
    const spaceNumber = event.target.innerText.split(" ").length - 1;
    if (!spaceNumber) {
      router.push("/" + getLinkName.toLowerCase());
    }
  };

  return (
    <Box
      mt={{ base: 0, md: 0 }}
      bg="#fff"
      w={{ base: "full", md: 60 }}
      borderRight="1px"
      borderRightColor={"#00000033"}
      {...rest}
      pt={2}
      h="79vh"
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
      <Flex direction="column" pl="7%" h="full" justify="space-between">
        <Box>
          {subTitle && (
            <Text color="#1C1D21" fontSize="14px" fontWeight="medium">
              {subTitle}
            </Text>
          )}
          {LinkItems.map(({ name }) => {
            if (
              router.pathname === "/lending" ||
              router.pathname === "/barrow"
            ) {
              let Icon: IconType;
              switch (name) {
                case "Lending":
                  Icon = CgSync;
                  break;
                case "Barrow":
                  Icon = CgShapeRhombus;
                  break;
                default:
                  Icon = CgShapeCircle;
                  break;
              }
              return (
                <NavItem
                  key={name}
                  color={activeBg === name && "#fff"}
                  bg={activeBg === name && "#1C1D21"}
                  onClick={handleSidebarLink}
                  mb={"6px"}
                >
                  <Icon style={{ marginRight: 13 }} /> {name}
                </NavItem>
              );
            } else {
              return (
                <NavItem
                  key={name}
                  color={activeBg === name && "#fff"}
                  bg={activeBg === name && "#1C1D21"}
                  onClick={handleSidebarLink}
                  mb={"6px"}
                >
                  {name}
                </NavItem>
              );
            }
          })}
        </Box>
        <CardWorks />
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactNode;
}
const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
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
  );
};

interface MobileProps extends FlexProps {
  titleSubNav: string;
  onOpen: () => void;
}
const MobileNav = ({ titleSubNav, onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="108"
      alignItems={["flex-end", "center"]}
      bg={"#FFFFFF"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <SubNav title={titleSubNav} />
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
  return (
    <Box
      maxW={"216px"}
      w={"full"}
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
