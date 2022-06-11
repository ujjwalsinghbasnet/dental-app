import React from "react";
import { Box, Image } from "@chakra-ui/react";
import loader from "../../images/loader.gif";

const LoadingAppointment = () => {
  return (
    <Box w="100%" h="10rem" display="grid" placeItems="center">
      <Box w="5rem" h="5rem">
        <Image src={loader} h="100%" w="100%" />
      </Box>
    </Box>
  );
};

export default LoadingAppointment;
