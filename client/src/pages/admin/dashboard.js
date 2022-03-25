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
            <TopCard title='Total Number of Appointment today' value='10' />
            <TopCard title='Total Number of Appointment today' value='10' />
            <TopCard title='Total Number of Appointment today' value='10' />
        </Flex>
    </Layout>
  )
}

const TopCard = ({ title,value }) => {
    return (
        <VStack 
            w='30%'
            minW='20rem'
            mb='1.5rem'
            bg='primary'
            p='1.5rem'
            borderRadius={'1.5rem'}
        >
            <Text fontSize='1.5rem' fontWeight='bold' textAlign={'center'}>{title}</Text>
            <Text fontSize='1.5rem'>{value}</Text>
        </VStack>
    )
}

export default Dashboard