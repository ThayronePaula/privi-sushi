import {
  Box,
  Tabs,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
  FlexProps,
} from "@chakra-ui/react";
import { CgSync, CgShapeRhombus, CgShapeCircle } from "react-icons/cg";
import { SwapCard } from "./SwapCard";
import BackgroundCard from "../assets/backgroundCard.png";
export const SwapNavigate = (props: FlexProps) => {
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
      h="auto"
      maxW={["100%", "100%", "100%", "697px"]}
      w={["100%", "100%", "100%", "none"]}
      bgImage={`url(${BackgroundCard.src})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      roundedLeft={32}
      roundedRight={32}
      px={["2%", "30px"]}
      py={["4%", "40px"]}
    >
      <Tabs w="100%" m="0 auto" variant="unstyled" isFitted>
        <TabList
          h={58}
          m="auto"
          mb={48.01}
          maxW={430}
          roundedLeft={12}
          roundedRight={12}
          bg="#fff"
          color="#000"
        >
          <Tab
            fontWeight={600}
            fontSize={["12px", "14px"]}
            _focus={{ boxShadow: 0 }}
            _selected={{ color: "#E60B8B" }}
            gridGap={["0", "11px"]}
          >
            <CgSync /> Swap
          </Tab>

          <Tab
            fontWeight={600}
            fontSize={["12px", "14px"]}
            _focus={{ boxShadow: 0 }}
            _selected={{ color: "#E60B8B" }}
            style={{ position: "relative" }}
            _before={{ ...lineIcon, left: 0 }}
            _after={{ ...lineIcon, right: 0 }}
            gridGap={["0", "11px"]}
          >
            <CgShapeRhombus /> Limit
          </Tab>
          <Tab
            fontWeight={600}
            fontSize={["12px", "14px"]}
            _focus={{ boxShadow: 0 }}
            _selected={{ color: "#e60b8b" }}
            gridGap={["0", "11px"]}
          >
            <CgShapeCircle />
            Liquidity
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <SwapCard />
          </TabPanel>
          <TabPanel p="0">
            <SwapCard />
          </TabPanel>
          <TabPanel p="0">
            <SwapCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
