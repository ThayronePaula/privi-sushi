import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CardInfo from "./faq";
import { FaqBox } from "./FaqBox";
export const Faq = () => {
  return (
    <>
      <Heading
        as="h2"
        color="#1C1D21"
        fontSize="28px"
        fontWeight="600"
        textAlign={["center", "left"]}
        mt='101px'
      >
        FAQ
      </Heading>
      <SimpleGrid minChildWidth={["100%", "370px"]} spacing="52px" mt="44px">
        {CardInfo.map(({ title, content }, index) => (
          <FaqBox key={index} title={title} content={content} />
        ))}
      </SimpleGrid>
    </>
  );
};
