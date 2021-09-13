import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  FlexProps,
} from "@chakra-ui/react";
import { CgSync, CgShapeRhombus, CgShapeCircle } from "react-icons/cg";
import { SwapCard } from "./SwapCard";

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
    <Tabs
      variant="unstyled"
      isFitted
      align="center"
      colorScheme="green"
      width="100%"
      bg={bgColor[colorMode]}
    >
      <TabList
        h={58}
        justifyContent="center"
        mb={100}
        width={430}
        roundedLeft={12}
        roundedRight={12}
        bg="#fff"
        color="#000"
      >
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
          <SwapCard />
        </TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>
          <SwapCard />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
