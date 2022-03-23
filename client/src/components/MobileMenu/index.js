import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'


function MobileMenu() {

    const [isOpen,setIsOpen] = useState(false)
  return (
      <>
        { !isOpen ? <Flex pos='absolute' top= '1.5rem' right= '2rem' cursor='pointer' color='primary' onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu style={{fontSize:'2rem'}}/>
        </Flex> : 
            <Flex
                height='100vh'
                width={{ base: '100%', sm: '100%', md: '50%', lg:'100%'}}
                direction='column'
                bg='rgba(24,210,177,0.6)'
                backdropFilter={'blur(6px)'}
                pos='fixed'
                top='0'
                right='0'
                zIndex='4'
                justify='space-evenly'
                align='center'
                py='2rem'
                fontSize='1.1rem'
            >
                <AiOutlineClose onClick={() => setIsOpen(false)} style={{fontSize: '3rem', color: '#5A5353', cursor: 'pointer', position:'absolute', top: '1.5rem', right: '2rem'}}/>
                <NavLink to='/'>
                    <Text fontSize={'2rem'}>Home</Text>
                </NavLink>
                <NavLink to='/'>
                    <Text fontSize={'2rem'}>Why Us</Text>
                </NavLink>
                <NavLink to='/'>
                    <Text fontSize={'2rem'}>Services</Text>
                </NavLink>
                <NavLink to='/'>
                    <Text fontSize={'2rem'}>Dentists</Text>
                </NavLink>
                <NavLink to='/'><Text fontSize={'2rem'}>Login</Text></NavLink>
                <NavLink to='/'>
                    <Button px='1rem' py='2rem' fontSize={'1.5rem'} background={'rgb(246,241,242, 0.4)'} backdropFilter='5px'>
                        Create Account
                    </Button>
                </NavLink>
            </Flex>
        }
      </>
  );
}

export default MobileMenu;
