import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ImFileEmpty } from "react-icons/im";

const EmptyList = () => {
  return (
    <Box
      w="100%"
      h="8rem"
      display="grid"
      placeItems="center"
      border="2px solid grey"
      opacity={0.6}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.3rem",
            lg: "1.5rem",
          }}
        >
          No Appointment
        </Text>
        <Box w="2.5rem" h="2.5rem">
          <ImFileEmpty fontSize="2.5rem" />
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyList;
