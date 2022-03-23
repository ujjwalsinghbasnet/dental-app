import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
    Button,
    Flex
} from '@chakra-ui/react'

function Navigation() {
  const [fixNav,setFixNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 400){
        setFixNav(true)
      } else {
        setFixNav(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', null)
    }
  },[])
  return (
      <Flex 
        w='100%'
        maxW='1600px'
        h='4.5rem'
        pos={ fixNav ? 'fixed' : 'absolute'}
        top='0'
        l='0'
        justify='space-between'
        align='center'
        bgColor={fixNav ? 'rgb(246,241,241,0.6)' : ''}
        backdropFilter='blur(5px)'
        boxShadow={fixNav ? '0px 2px 8px rgba(0,0,0,0.6)' : 'none'}
        transition='0.3s linear'
        px='3rem'
        zIndex={3}
      >
          <Flex color='menu' w='40%' justify='space-between' ml={12}>
            <NavLink to='#'>Home</NavLink>
            <NavLink to='#'>Services</NavLink>
            <NavLink to='#'>Dentists</NavLink>
            <NavLink to='#'>Contact Us</NavLink>
          </Flex>
          <Flex 
            w='25%'
            justify='space-evenly'
            align='center'
            color='primary'
          >
            <NavLink to='#'>Login</NavLink>
            <NavLink to='#'>
                <Button variant='primary-btn'>
                    Create Account
                </Button>
            </NavLink>
          </Flex>
      </Flex>
  )
}

export default Navigation;
