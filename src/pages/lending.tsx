import { Container } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../shared/constants";
import NavBar from "../components/NavBar";
import AsideNav from "../components/AsideNav";
import { TableLanding } from "../components/landing/TableLanding";

const Landing = () => {
  return (
    <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
      <Container maxW="100%">
        <NavBar />
        <AsideNav LinkItems={LinkItems} titleSubNav="Lending">
          <TableLanding />
        </AsideNav>
      </Container>
    </MoralisProvider>
  );
};
export default Landing;

const LinkItems = [
  { name: "Lending" },
  { name: "Barrow" },
  { name: "Create Market" },
];
