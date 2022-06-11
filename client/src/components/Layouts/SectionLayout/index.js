import React from "react";
import { Box } from "@chakra-ui/react";

function Section({ children }) {
  return (
    <Box
      px={{ base: "2rem", sm: "3.5rem", md: "4rem", lg: "6rem" }}
      width="100%"
      maxW="1600px"
      py={"2.5rem"}
      margin="0 auto"
      mt="5rem"
    >
      {children}
    </Box>
  );
}

export default Section;
