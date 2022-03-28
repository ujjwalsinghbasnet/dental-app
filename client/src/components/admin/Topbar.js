import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Avatar,
    Box
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'


function Topbar({ title, closeSidebar }) {
  return (
    <Box>
        <Flex
        justify={'space-between'}    
        height={'5%'}
        align='center'
        w='100%'
        >
            <Flex align='center'>
                <GiHamburgerMenu style={{fontSize: '1.5rem', cursor: 'pointer', color: '#797171'}} onClick={closeSidebar} />
                <Heading ml='1rem' fontSize={{base: '0.9rem', sm: '1rem', md: '1rem', lg: '1.5rem'}}>{title}</Heading>
            </Flex>
            <Flex h='100%' align={'center'}>
                <Text fontSize={{ base: '0.8rem', sm: '0.8rem', md: '0.9rem', lg:'1.2rem' }} mr='1rem' display={{ base: 'none', sm: 'block', md: 'block', lg: 'block'}}>
                    <span>Good Morning,</span><br />
                    Ujjwal Singh Basnet
                </Text>
                <Avatar size='lg' name='Christian Nwamba' src='https://bit.ly/code-beast' />
            </Flex>
        </Flex>
    </Box>
  )
}

export default Topbar