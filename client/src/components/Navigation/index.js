import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
    Button,
    Flex
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { reset } from '../../features/authSlice'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  const [fixNav,setFixNav] = useState(false)
  const [admin,setAdmin] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('dental_user'))
    setAdmin(user?.isAdmin)
    if(user){
      setIsLoggedIn(true)
    }
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 400){
        setFixNav(true)
      } else {
        setFixNav(false)
      }
    })
    return () => {
      window.removeEventListener('scroll',null)
    }
  },[setIsLoggedIn])

  const logoutUser = () => {
    dispatch(reset())
    navigate('/', {replace:true})
    setIsLoggedIn(false)
}

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
        px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}}
        zIndex={3}
      >
          <Flex color='menu' w='40%' justify='space-between'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='#services'>Services</NavLink>
            <NavLink to='#'>Dentists</NavLink>
            <NavLink to='#'>Contact Us</NavLink>
          </Flex>
          {
            ! isLoggedIn ? ( 
            <Flex 
              w='25%'
              align='center'
              color='primary'
              justify='end'
            >
            <NavLink to='/auth/login'>Login</NavLink>
            <NavLink to='/auth/register'>
                <Button variant='primary-btn'  ml='2rem'>
                    Create Account
                </Button>
            </NavLink>
            </Flex>
            ) : (
              <Flex 
                w='25%'
                align='center'
                color='primary'
                justify='end'
              >
                <NavLink to={admin ? '/admin' : '/user/profile'}>{
                  admin ? 'Dashboard' : 'Profile'
                }</NavLink>
                <Button variant='primary-btn'  ml='2rem' onClick={logoutUser}>
                    Logout
                </Button>
              </Flex>
            )
          }
      </Flex>
  )
}

export default Navigation;
