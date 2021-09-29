import { Container } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../../shared/constants";
import NavBar from "./../../components/NavBar";
import AsideNav from "./../../components/AsideNav";
import { TableFarm } from "./../../components/TableFarm";

const Farm = () => {
  return (
    <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
      <Container maxW="100%">
        <NavBar />
        <AsideNav
          LinkItems={LinkItems}
          titleSubNav="Farm"
          filterTitle="Filters"
        >
          <TableFarm />
        </AsideNav>
      </Container>
    </MoralisProvider>
  );
};
export default Farm;

const LinkItems = [
  { name: "All Farms" },
  { name: "2x Reward Farms" },
  { name: "Chronos Farms" },
];
