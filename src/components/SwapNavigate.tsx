import { Box, Tabs, TabList, Tab, FlexProps } from '@chakra-ui/react'
import { CgSync, CgShapeRhombus, CgShapeCircle } from 'react-icons/cg'
import { SwapCard } from './SwapCard'
import BackgroundCard from '../assets/backgroundCard.png'
export const SwapNavigate = (props: FlexProps) => {
  const lineIcon = {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    width: '1px',
    height: '24px',
    background: '#1C1D21'
  }
  return (
    <Box
      h="auto"
      w="697px"
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
          <Tab
            _focus={{ boxShadow: 0 }}
            _selected={{ color: '#E60B8B' }}
            gridGap={11}
          >
            <CgSync /> Swap
          </Tab>

          <Tab
            _focus={{ boxShadow: 0 }}
            _selected={{ color: '#E60B8B' }}
            style={{ position: 'relative' }}
            _before={{ ...lineIcon, left: 0 }}
            _after={{ ...lineIcon, right: 0 }}
            gridGap={11}
          >
            <CgShapeRhombus /> Limit
          </Tab>
          <Tab
            _focus={{ boxShadow: 0 }}
            _selected={{ color: '#e60b8b' }}
            gridGap={11}
          >
            <CgShapeCircle />
            Liquidity
          </Tab>
        </TabList>
        <Box>
          <SwapCard />
        </Box>
      </Tabs>
    </Box>
  )
}
