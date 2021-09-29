import { Container } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../shared/constants";
import NavBar from "../components/NavBar";
import AsideNav from "../components/AsideNav";
import { TableBarrow } from "../components/barrow/TableBarrow";

const Barrow = () => {
  return (
    <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
      <Container maxW="100%" px="5%">
        <NavBar />
        <AsideNav LinkItems={LinkItems} titleSubNav="Barrow">
          <TableBarrow />
        </AsideNav>
      </Container>
    </MoralisProvider>
  );
};
export default Barrow;

const LinkItems = [
  { name: "Lending" },
  { name: "Barrow" },
  { name: "Create Market" },
];
