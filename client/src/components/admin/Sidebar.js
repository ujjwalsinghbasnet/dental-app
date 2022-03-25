import React, {useState,useEffect} from 'react'
import {
    Box,
    Flex,
    Text,
    Heading,
    Button,
    VStack
} from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'


function Sidebar({ closeSidebar, isOpen }) {
    
    const [pos,setPos] = useState(false)

    useEffect(() => {
        if(window.innerWidth <= 975){
            setPos(true)
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 975){
                setPos(true)
            } else {
                setPos(false)
            }
        })
        return () => {
            window.removeEventListener('resize', null)
        }
    },[])

  return (
    <Box 
        background={!pos ? 'primary' : 'rgba(24,210,177,0.6)'}
        width={{base: '20rem', sm: '20rem', md: '30rem', lg: '20%'}}
        color='white'
        p={'1rem'}
        height='100vh'
        display={isOpen ? 'block': 'none'}
        position ={ pos ? 'absolute' : ''}
        zIndex='2'
        backdropFilter={'blur(5px)'}
    >
        <Flex
            height={'5%'}
            justify={'space-between'}
            align='center'
        >   
            <Heading as='h1' fontSize={{base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '2rem'}}>Dental World</Heading>
            {
                pos ?  <GiHamburgerMenu style={{fontSize: '2rem', cursor: 'pointer', color: '#797171'}} onClick={closeSidebar} /> : ''
            }
        </Flex>
        <VStack
            align='flex-start'
            height={'90%'}
            spacing={'2rem'}
            pt='10rem'
        >
            <NavLink to='/admin'>
                <Text fontSize={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg:'1.8rem' }}>Dashboard</Text>
            </NavLink>
            <NavLink to='/admin/schedules'>
                <Text fontSize={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg:'1.8rem' }}>Schedules</Text>
            </NavLink>
            <NavLink to='/admin/patients'>
                <Text fontSize={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg:'1.8rem' }}>Patients</Text>
            </NavLink>
            <NavLink to='/admin/doctors'>
                <Text fontSize={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg:'1.8rem' }}>Doctors</Text>
            </NavLink>
        </VStack>
        <Flex
            height={'5%'}
            align='center'
            mb={'0'}
        >   
            <Button
                rightIcon={<FiLogOut />} 
                backgroundColor='transparent'
                border='none'
                p='0'
                fontSize={'1.5rem'}
                _hover={{
                    backgroundColor: 'transparent',
                    border: 'none'
                }}
                _focus={{
                    backgroundColor: 'transparent',
                    border: 'none'
                }}
                _active={{
                    backgroundColor: 'transparent',
                    border: 'none'
                }}
            >
                Logout
            </Button>
        </Flex>
    </Box>
  )
}

export default Sidebar