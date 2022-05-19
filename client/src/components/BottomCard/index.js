import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";

const bottomData = [
  {
    heading: "Opening Time",
    text: "open from 9am - 3pm",
    icon: <AiOutlineClockCircle fontSize="3rem" />,
  },
  {
    heading: "Opening Days",
    text: "we serve sunday to friday",
    icon: <AiOutlineClockCircle fontSize="3rem" />,
  },
  {
    heading: "Opening Time",
    text: "open from 9am - 3pm",
    icon: <AiOutlineClockCircle fontSize="3rem" />,
  },
];

function BottomCard() {
  return (
    <Flex
      justify="space-between"
      w="100%"
      mt={{ base: "-3rem", sm: "-7.6rem", md: "-5rem", lg: "-3rem" }}
      color="white"
      px={{ base: "2rem", sm: "3.5rem", md: "4rem", lg: "6rem" }}
      display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }}
    >
      {bottomData.map((data, index) => (
        <Flex
          p={{ base: 2, sm: 2, md: 4, lg: 5 }}
          w={{ base: "33%", sm: "33%", md: "33%", lg: "28%" }}
          justify="space-between"
          bg="transparentPrimary"
          align="center"
          backdropFilter="blur(5px)"
          key={index}
        >
          {data.icon}
          <Flex w="90%" direction="column" pl={2}>
            <Heading
              as="h3"
              fontWeight="medium"
              fontSize={{
                base: "1rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.2rem",
              }}
            >
              {data.heading}
            </Heading>
            <Text>{data.text}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default BottomCard;
