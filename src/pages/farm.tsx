import { Container } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../shared/constants";
import NavBar from "../components/NavBar";
import AsideNav from "../components/AsideNav";
import { TableFarm } from "../components/farm/TableFarm";

const Farm = () => {
  return (
    <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
      <Container maxW="100%">
        <NavBar />
        <AsideNav filterTitle='Filters'>
          <TableFarm />
        </AsideNav>
      </Container>
    </MoralisProvider>
  );
};
export default Farm;
