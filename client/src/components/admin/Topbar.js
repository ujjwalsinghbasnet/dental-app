import React from "react";
import { Flex, Heading, Text, Avatar, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";

function Topbar({ title, closeSidebar }) {
  const user = useSelector((state) => state.auth && state.auth.user?.user);

  const greet = () => {
    const hrs = new Date().getHours();
    if (hrs < 12) {
      return "Good Morning,";
    } else if (hrs >= 12 && hrs <= 17) {
      return "Good Afternoon,";
    } else {
      return "Good Evening";
    }
  };

  return (
    <Box>
      <Flex justify={"space-between"} height={"5%"} align="center" w="100%">
        <Flex align="center">
          <GiHamburgerMenu
            style={{ fontSize: "1.5rem", cursor: "pointer", color: "#797171" }}
            onClick={closeSidebar}
          />
          <Heading
            ml="1rem"
            fontSize={{ base: "0.9rem", sm: "1rem", md: "1rem", lg: "1.5rem" }}
          >
            {title}
          </Heading>
        </Flex>
        <Flex h="100%" align={"center"}>
          <Text
            fontSize={{
              base: "0.8rem",
              sm: "0.8rem",
              md: "0.9rem",
              lg: "1rem",
            }}
            mr="1rem"
            display={{ base: "none", sm: "block", md: "block", lg: "block" }}
          >
            <span>{greet()}</span>
            <br />
            {user?.name}
          </Text>
          <Avatar
            size="lg"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Topbar;
