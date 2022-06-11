import React, { useState } from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

function ServiceCard({ title, image, text }) {
  const [hoverStatus, setHoverStatus] = useState(false);

  return (
    <Box
      width="21rem"
      height="23rem"
      minW="3rem"
      pos="relative"
      cursor={"pointer"}
      overflow="hidden"
      mr={{ md: "2rem" }}
      onMouseOver={() => setHoverStatus(true)}
      onMouseLeave={() => setHoverStatus(false)}
      mb="2rem"
    >
      <Image src={image} alt={title} objectFit="cover" height="100%" w="100%" />
      <Box
        pos="absolute"
        bg="transparentPrimary"
        // backdropFilter={'blur(5px'}
        h="15%"
        w="100%"
        placeItems="center"
        bottom="0"
        display={hoverStatus ? "none" : "grid"}
      >
        <Heading as="h3" fontSize="1.9rem" color="white">
          {title}
        </Heading>
      </Box>

      <Box
        position="absolute"
        h="100%"
        w="100%"
        top={hoverStatus ? "0" : "100%"}
        left="0"
        padding="1rem"
        bg="transparentPrimary"
        color="white"
        backdropFilter={"blur(5px)"}
        transition="linear 0.5s"
      >
        <Heading as="h3" fontSize="1.9rem">
          {title}
        </Heading>
        <Text textAlign="justify" mt="0.5rem">
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default ServiceCard;
