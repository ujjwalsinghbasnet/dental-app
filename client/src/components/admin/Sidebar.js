<<<<<<< HEAD
import React from "react";
import { Box, Flex, Text, Heading, Button, VStack } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { reset } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import useWidthSidebar from "../../hooks/useWidthSidebar";

function Sidebar({ closeSidebar, isOpen, menu }) {
  const pos = useWidthSidebar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(reset());
    navigate("/", { replace: true });
  };

  return (
    <Box
      background={!pos ? "primary" : "rgba(24,210,177,0.6)"}
      width={{ base: "20rem", sm: "20rem", md: "30rem", lg: "20%" }}
      color="white"
      p={"1rem"}
      height="100%"
      minH="100vh"
      display={isOpen ? "block" : "none"}
      position={pos ? "absolute" : "fixed"}
      zIndex="2"
      backdropFilter={"blur(5px)"}
    >
      <Flex height={"5%"} justify={"space-between"} align="center">
        <NavLink to="/">
          <Heading
            as="h1"
            fontSize={{ base: "0.9rem", sm: "1rem", md: "1rem", lg: "1.5rem" }}
          >
            Dental World
          </Heading>
        </NavLink>
        {pos ? (
          <GiHamburgerMenu
            style={{ fontSize: "2rem", cursor: "pointer", color: "#797171" }}
            onClick={closeSidebar}
          />
        ) : (
          ""
        )}
      </Flex>
      <VStack align="flex-start" height={"90%"} spacing={"2rem"} pt="10rem">
        {menu &&
          menu.map((single) => (
            <NavLink to={single.link} key={single.text}>
              <Text
                fontSize={{
                  base: "0.8rem",
                  sm: "0.8rem",
                  md: "0.9rem",
                  lg: "1.2rem",
                }}
              >
                {single.text}
              </Text>
            </NavLink>
          ))}
      </VStack>
      <Flex height={"5%"} align="center" mb={"0"}>
        <Button
          rightIcon={<FiLogOut />}
          backgroundColor="transparent"
          border="none"
          p="0"
          fontSize={{
            base: "0.8rem",
            sm: "0.8rem",
            md: "0.9rem",
            lg: "1.2rem",
          }}
          _hover={{
            backgroundColor: "transparent",
            border: "none",
          }}
          _focus={{
            backgroundColor: "transparent",
            border: "none",
          }}
          _active={{
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={logoutUser}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

export default Sidebar;
=======
import React from 'react'
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
import { useDispatch } from 'react-redux'
import { reset } from '../../features/authSlice'
import { useNavigate } from 'react-router-dom'
import useWidthSidebar from '../../hooks/useWidthSidebar'

function Sidebar({ closeSidebar, isOpen,menu }) {
    const pos = useWidthSidebar()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutUser = () => {
        dispatch(reset())
        navigate('/', {replace:true})
    }

  return (
    <Box 
        background={!pos ? 'primary' : 'rgba(24,210,177,0.6)'}
        width={{base: '20rem', sm: '20rem', md: '30rem', lg: '20%'}}
        color='white'
        p={'1rem'}
        height='100%'
        minH='100vh'
        display={isOpen ? 'block': 'none'}
        position ={ pos ? 'absolute' : 'fixed'}
        zIndex='2'
        backdropFilter={'blur(5px)'}
    >
        <Flex
            height={'5%'}
            justify={'space-between'}
            align='center'
        >   
            <Heading as='h1' fontSize={{base: '0.9rem', sm: '1rem', md: '1rem', lg: '1.5rem'}}>Dental World</Heading>
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
            {
                menu && menu.map((single) => (
                    <NavLink to={single.link} key={single.text}>
                        <Text fontSize={{ base: '0.8rem', sm: '0.8rem', md: '0.9rem', lg:'1.2rem' }}>{single.text}</Text>
                    </NavLink>
                ))
            }
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
                fontSize={{ base: '0.8rem', sm: '0.8rem', md: '0.9rem', lg:'1.2rem' }}
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
                onClick={logoutUser}
            >
                Logout
            </Button>
        </Flex>
    </Box>
  )
}

export default Sidebar
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
