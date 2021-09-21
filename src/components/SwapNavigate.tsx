import {
  Box,
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
import BackgroundCard from "../assets/backgroundCard.png";
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
    <Box
      bgImage={`url(${BackgroundCard.src})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      roundedLeft={32}
      roundedRight={32}
      px={28.5}
      pt={36.01}
      pb={40.01}
    >
      <Tabs
        d="flex"
        maxH={637}
        variant="unstyled"
        isFitted
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TabList
          h={58}
          justifyContent="center"
          mb={47.5}
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
          <Tab _focus={{ boxShadow: 0 }} _selected={{ color: "#e60b8b" }}>
            <CgShapeCircle />
            Liquidity
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <SwapCard />
          </TabPanel>
          <TabPanel p={0}>2</TabPanel>
          <TabPanel p={0}>
            <SwapCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
