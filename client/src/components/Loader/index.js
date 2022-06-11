import { Box, Image } from "@chakra-ui/react";
import React from "react";
import loader from "../../images/loader.gif";

const Loader = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      pos="absolute"
      backgroundColor="RGB(24, 210, 177, 0.5)"
      z-zIndex={5}
      display="grid"
      placeItems="center"
    >
      <Box h="10rem" w="10rem">
        <Image src={loader} h="100%" w="100%" />
      </Box>
    </Box>
  );
};

export default Loader;
