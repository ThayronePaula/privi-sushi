import {
  Flex,
  Spacer,
  Box,
  Text,
  Select,
  Avatar,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  FlexProps,
} from "@chakra-ui/react";
import { CgSync, CgShapeRhombus, CgShapeCircle } from "react-icons/cg";

export const SwapNavigate = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };
  const bgCard = { light: "#EFF0F3", dark: "#e2e2e2" };
  const color = { light: "black", dark: "white" };
  const lineIcon = {
    content: '""',
    display: "block",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    width: "1px",
    height: "24px",
    background: "#1C1D21",
  };
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      bg={bgCard[colorMode]}
      color={color[colorMode]}
      roundedLeft={12}
      roundedRight={12}
      {...props}
    >
      <Tabs
        variant="unstyled"
        isFitted
        align="center"
        colorScheme="green"
        width="100%"
      >
        <TabList h={58}>
          <Tab _focus={{ boxShadow: 0 }} _selected={{ color: "#E60B8B" }}>
            <CgSync /> Swap
          </Tab>

          <Tab
            _focus={{ boxShadow: 0 }}
            _selected={{ color: "#E60B8B" }}
            style={{ position: "relative" }}
            _before={{ ...lineIcon, left: 0 }}
            _after={{ ...lineIcon, right: 0 }}
          >
            <CgShapeRhombus /> Limit
          </Tab>

          <Tab _focus={{ boxShadow: 0 }} _selected={{ color: "#E60B8B" }}>
            <CgShapeCircle />
            
            Liquidity
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
