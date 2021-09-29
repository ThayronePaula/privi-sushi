import { useMemo } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Avatar,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useMoralis } from "react-moralis";

import { useRouter } from "next/router";
export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  const buttonDisconnectBgColor = useColorModeValue("white", "black");
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const primaryEthAddress = useMemo(
    () => isAuthenticated && user.get("accounts")[0],
    [isAuthenticated, user]
  );

  return (
    <>
      <Box d="flex" alignItems="center" justifyContent="space-between" w="100%">
        <Text fontFamily="Roboto" fontSize={["md", "22px"]} fontWeight="600">
          Sushiswap
        </Text>
        <Flex
          bg={useColorModeValue("transparent", "transparent")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={["flex", "flex", "flex", "none"]}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex display={["none", "none", "none", "flex"]} ml={12}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>
        <Flex display={["none", "none", "none", "flex"]}>
          {isAuthenticated ? (
            <Tooltip
              hasArrow
              label="Click to disconnect"
              bg="white.600"
              color="black.600"
            >
              <Button
                onClick={() => logout()}
                boxShadow="xl"
                rounded="md"
                bg={buttonDisconnectBgColor}
              >
                <Avatar
                  size="sm"
                  name="Ether"
                  src="https://thispersondoesnotexist.com/image"
                  mr={5}
                />
                #{primaryEthAddress.slice(0, 11)}...
                {primaryEthAddress.slice(-4)}
              </Button>
            </Tooltip>
          ) : (
            <Button
              bg={"#1C1D21"}
              colorScheme="white"
              onClick={() => authenticate()}
              borderRadius="12px"
              fontSize="14px"
              fontFamily="Roboto"
              px={25}
              py={3}
              h={"auto"}
            >
              Connect My Wallet
            </Button>
          )}
        </Flex>
        <Collapse in={isOpen} unmountOnExit={false}>
          <MobileNav onToggle={onToggle} />
        </Collapse>
      </Box>
      <Divider
        orientation="horizontal"
        border="1px solid black"
        w="100%"
        mt="5px"
      />
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const buttonDisconnectBgColor = useColorModeValue("white", "black");
  const { isAuthenticated, user } = useMoralis();

  const primaryEthAddress = useMemo(
    () => isAuthenticated && user.get("accounts")[0],
    [isAuthenticated, user]
  );
  const lineIcon = {
    content: '""',
    display: "block",
    position: "absolute",
    top: "200%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "16px",
    height: "2px",
    background: "#1C1D21",
  };
  const router = useRouter();
  return (
    <Stack direction={"row"} gridGap={29}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} style={{ position: "relative" }}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={"14px"}
                fontWeight={500}
                fontFamily="Roboto"
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                _after={
                  navItem.href === router.pathname ||
                  (router.pathname === "/barrow" && navItem.label === "Lending")
                    ? { ...lineIcon }
                    : {}
                }
                onClick={() => router.push(navItem.href)}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
interface MobileNavProps {
  onToggle: () => void;
}
const MobileNav = ({ onToggle }: MobileNavProps) => {
  const buttonDisconnectBgColor = useColorModeValue("white", "black");
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const primaryEthAddress = useMemo(
    () => isAuthenticated && user.get("accounts")[0],
    [isAuthenticated, user]
  );
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      w="100%"
      p={4}
      display={["flex", "flex", "flex", "none"]}
      pos="fixed"
      top="0"
      left="0"
      zIndex="99999999999"
      alignItems="center"
    >
      <IconButton
        w={50}
        onClick={onToggle}
        icon={<CloseIcon w={3} h={3} />}
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      {isAuthenticated ? (
        <Tooltip
          hasArrow
          label="Click to disconnect"
          bg="white.600"
          color="black.600"
        >
          <Button
            onClick={() => logout()}
            boxShadow="xl"
            rounded="md"
            bg={buttonDisconnectBgColor}
          >
            <Avatar
              size="sm"
              name="Ether"
              src="https://thispersondoesnotexist.com/image"
              mr={5}
            />
            #{primaryEthAddress.slice(0, 11)}...
            {primaryEthAddress.slice(-4)}
          </Button>
        </Tooltip>
      ) : (
        <Button
          bg={"#1C1D21"}
          colorScheme="white"
          onClick={() => authenticate()}
          borderRadius="12px"
          fontSize={["12px", "14px"]}
          fontFamily="Roboto"
          px={["8px", 25]}
          py={[3]}
          h={"auto"}
        >
          Connect My Wallet
        </Button>
      )}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Swap",
    href: "/",
  },
  {
    label: "Pool",
    href: "/pool",
  },
  {
    label: "Migrate",
    href: "/migrate",
  },
  {
    label: "Farming",
    href: "/farm",
  },
  {
    label: "Lending",
    href: "/lending",
  },
];
