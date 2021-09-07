import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import   NavBar  from '../components/NavBar'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'


const Index = () => (

  <Container height="100vh">
    <NavBar />
    <Hero />
    <Main>
     </Main>
    <DarkModeSwitch />
    <Footer>
      <Text>build ❤️ Brazil</Text>
    </Footer>
  </Container>
)

export default Index
