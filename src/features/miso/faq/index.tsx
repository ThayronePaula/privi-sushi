import { Heading, SimpleGrid } from '@chakra-ui/react'
import CardInfo from './faq'
import FaqBox from './FaqBox'
const Faq = () => {
  return (
    <>
      <Heading as="h2" fontSize="28px" mt="12px" className="font-semibold text-center text-privi-dark lg:text-left">
        FAQ
      </Heading>
      <SimpleGrid minChildWidth={['100%', '370px']} spacing="52px" className="mt-11">
        {CardInfo.map(({ title, content }, index) => (
          <FaqBox key={index} title={title} content={content} />
        ))}
      </SimpleGrid>
    </>
  )
}
export default Faq
