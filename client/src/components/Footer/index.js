import React from "react";
import { Box, Flex, Heading, Spacer, HStack, Text } from "@chakra-ui/react";
import Section from "../Layouts/SectionLayout";
import { BsFacebook, BsTwitter, BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <Box width="100%" backgroundColor="primary" pos="relative" id="contact">
      <Section>
        <Heading
          as="h2"
          color="secondary"
          fontSize={{ base: "1.5rem", sm: "1.8rem", md: "2rem", lg: "2rem" }}
        >
          Dental World
        </Heading>
        <Flex
          mt="1rem"
          justify="space-between"
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        >
          <Flex
            direction="column"
            w={{ base: "100%", sm: "100%", md: "30%", lg: "30%" }}
            h="50%"
            mt="1rem"
          >
            <Heading
              as="h2"
              fontSize={{
                base: "1rem",
                sm: "1rem",
                md: "1.3rem",
                lg: "1.5rem",
              }}
            >
              Links
            </Heading>
            <a href="#home">Home</a>
            <Spacer />
            <a href="#why-us">Why Us</a>
            <Spacer />
            <a href="#services">Services</a>
            <Spacer />
            <a href="#dentists">Dentists</a>
          </Flex>
          <Flex
            direction="column"
            w={{ base: "100%", sm: "100%", md: "30%", lg: "30%" }}
            h="50%"
            mt="1rem"
          >
            <Heading
              as="h2"
              fontSize={{
                base: "1rem",
                sm: "1rem",
                md: "1.3rem",
                lg: "1.5rem",
              }}
            >
              Social Links
            </Heading>
            <HStack align="center" py="0.1rem" cursor="pointer">
              <BsFacebook /> <Text>/dental_world</Text>
            </HStack>
            <HStack align="center" py="0.1rem" cursor="pointer">
              <FaInstagram /> <Text>@dental_world</Text>
            </HStack>
            <HStack align="center" py="0.1rem" cursor="pointer">
              <BsTwitter /> <Text>@dental_world</Text>
            </HStack>
          </Flex>
          <Flex
            direction="column"
            w={{ base: "100%", sm: "100%", md: "30%", lg: "30%" }}
            h="50%"
            mt="1rem"
          >
            <Heading
              as="h2"
              fontSize={{
                base: "1rem",
                sm: "1rem",
                md: "1.3rem",
                lg: "1.5rem",
              }}
            >
              Contact
            </Heading>
            <HStack align="center" py="0.1rem" cursor="pointer">
              <BsFillTelephoneFill /> <Text>01-5645233</Text>
            </HStack>
            <HStack align="center" py="0.1rem" cursor="pointer">
              <FaMobileAlt /> <Text>+977-9876543210</Text>
            </HStack>
            <HStack align="center" py="0.1rem" cursor="pointer">
              <AiOutlineMail /> <Text>dentalworld@gmail.com</Text>
            </HStack>
          </Flex>
          <Flex
            direction="column"
            w={{ base: "100%", sm: "100%", md: "30%", lg: "30%" }}
            h="50%"
            mt="1rem"
          >
            <Heading
              as="h2"
              fontSize={{
                base: "1rem",
                sm: "1rem",
                md: "1.3rem",
                lg: "1.5rem",
              }}
            >
              Download our app
            </Heading>
            <HStack
              align="center"
              py="0.1rem"
              px="1rem"
              w="fit-content"
              cursor="pointer"
              bgColor="white"
              mt="1rem"
              borderRadius="0.3rem"
            >
              <IoLogoGooglePlaystore /> <Text>playstore</Text>
            </HStack>
          </Flex>
        </Flex>
        <Heading
          as="h3"
          fontSize={{ base: "0.8rem", sm: "0.85rem", md: "1rem", lg: "1rem" }}
          textAlign="center"
          mt="1.5rem"
        >
          All rights reserved &copy;{new Date().getFullYear()} . Dental World
        </Heading>
      </Section>
    </Box>
  );
};

export default Footer;
