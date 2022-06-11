<<<<<<< HEAD
import React from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";
import Layout from "../../components/admin/Layout";

function Dashboard() {
  return (
    <Layout title="Dashboard">
      <Flex w="100%" justify={"space-between"} mt="10rem" flexWrap={"wrap"}>
        <TopCard
          title="Total Number of Appointment today"
          value="10"
          color="#3DA5F4"
        />
        <TopCard
          title="Total Number of Appointment today"
          value="10"
          color="#00C689"
        />
        <TopCard
          title="Total Number of Appointment today"
          value="10"
          color="#FDA006"
        />
      </Flex>
    </Layout>
  );
}

const TopCard = ({ title, value, color }) => {
  return (
    <VStack
      w="30%"
      minW="15rem"
      mb="1.5rem"
      bg={color}
      p="1.5rem"
      borderRadius={"1.5rem"}
    >
      <Text
        fontSize={{ base: "0.8rem", sm: "0.8rem", md: "0.9rem", lg: "1.2rem" }}
        fontWeight="bold"
        textAlign={"center"}
        color="white"
      >
        {title}
      </Text>
      <Text fontSize="1.5rem" color="white">
        {value}
      </Text>
    </VStack>
  );
};

export default Dashboard;
=======
import React from 'react'
import {
    Flex,
    Text,
    VStack
} from '@chakra-ui/react'
import Layout from '../../components/admin/Layout'

function Dashboard() {
  return (
    <Layout title='Dashboard'>
        <Flex
            w='100%'
            justify={'space-between'}
            mt='10rem'
            flexWrap={'wrap'}
        >
            <TopCard title='Total Number of Appointment today' value='10' color='#3DA5F4'/>
            <TopCard title='Total Number of Appointment today' value='10' color='#00C689'/>
            <TopCard title='Total Number of Appointment today' value='10' color='#FDA006'/>
        </Flex>
    </Layout>
  )
}

const TopCard = ({ title,value,color }) => {
    return (
        <VStack 
            w='30%'
            minW='15rem'
            mb='1.5rem'
            bg={color}
            p='1.5rem'
            borderRadius={'1.5rem'}
        >
            <Text fontSize={{ base: '0.8rem', sm: '0.8rem', md: '0.9rem', lg:'1.2rem' }} fontWeight='bold' textAlign={'center'} color='white'>{title}</Text>
            <Text fontSize='1.5rem' color='white'>{value}</Text>
        </VStack>
    )
}

export default Dashboard
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
