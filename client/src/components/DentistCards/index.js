import React, { useState } from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

function DentistCards({ name, designation, image, text }) {
  const [hoverStatus, setHoverStatus] = useState(false);

  return (
    <Box
      width="21rem"
      height="25rem"
      minW="3rem"
      pos="relative"
      cursor={"pointer"}
      overflow="hidden"
      mb="2rem"
      mr={{ md: "2rem" }}
      onMouseOver={() => setHoverStatus(true)}
      onMouseLeave={() => setHoverStatus(false)}
    >
      <Image src={image} alt={name} objectFit="cover" height="100%" w="100%" />
      <Box
        position="absolute"
        h="100%"
        w="100%"
        top="0"
        left={hoverStatus ? "0" : "100%"}
        padding="1.5rem"
        bg="transparentPrimary"
        color="white"
        backdropFilter={"blur(5px)"}
        transition="linear 0.5s"
      >
        <Heading as="h3" fontSize="1.9rem">
          {name}
        </Heading>
        <Text fontSize={"0.9rem"} fontWeight={500}>
          {designation}
        </Text>
        <Text textAlign="justify" mt="1.5rem">
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default DentistCards;
