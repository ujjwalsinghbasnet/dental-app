import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import DentistCards from "../DentistCards";
import Section from "../Layouts/SectionLayout";
import image from "../../images/hero_image-min.png";

function Dentists() {
  const dentists = [
    {
      id: 0,
      name: "Dr. Marie Cooper",
      designation: "Dental Surgeon",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!",
      image,
    },
    {
      id: 1,
      name: "Dr. Marie Cooper",
      designation: "Dental Surgeon",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!",
      image,
    },
    {
      id: 2,
      name: "Dr. Marie Cooper",
      designation: "Dental Surgeon",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!",
      image,
    },
  ];

  return (
    <Section>
      <Box mt="-5rem" id="dentists">
        <Heading
          as="h1"
          fontSize={"4rem"}
          color="primary"
          textAlign={"center"}
          lineHeight={"90%"}
          mb="4rem"
        >
          Dentists
        </Heading>
        <Flex
          width="100%"
          position="relative"
          flexWrap={"wrap"}
          justify={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "space-between",
          }}
        >
          {dentists.map((dentist) => (
            <DentistCards
              key={dentist.id}
              image={dentist.image}
              name={dentist.name}
              text={dentist.text}
              designation={dentist.designation}
            />
          ))}
        </Flex>
      </Box>
    </Section>
  );
}

export default Dentists;
