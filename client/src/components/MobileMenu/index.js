import React, { useState } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';



function MobileMenu() {

    const [isOpen,setIsOpen] = useState(false)

  return (
      <>
        { !isOpen ? <Flex justify='center' align='center' h='3rem' w='3rem' fontSize='2rem' color='primary' onClick={() => setIsOpen(true)}>X</Flex> : 
            <Flex
                height='100vh'
                width={['100%', '50%', '60%']}
                direction='column'
                bg='rgb(246,240,241,0.6)'
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
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/'>
                    <Text>Why Us</Text>
                </NavLink>
                <NavLink to='/'>
                    <Text>Services</Text>
                </NavLink>
                <NavLink to='/'>
                    <Text>Dentists</Text>
                </NavLink>
                <NavLink to='/'>Login</NavLink>
                <NavLink to='/'>
                    <Button variant='primary-btn'>
                        Create Account
                    </Button>
                </NavLink>
            </Flex>
        }
      </>
  );
}

export default MobileMenu;
