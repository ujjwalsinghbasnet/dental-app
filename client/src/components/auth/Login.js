import { 
  Box, 
  Flex, 
  Heading,
  FormControl,
  FormLabel,
  Text,
  Input,
  Image,
  VStack,
  Spacer,
  Button,
  HStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavResponsive from '../NavResponsive';


function Login() {
  const [info,setInfo] = useState({
    name: '',
    email: '',
    password: '',
    gender: ''
  })

  const changeHandler = (e) => {
    setInfo({...info, [e.target.name]: e.target.value});
  }

  return (
    <Box w='100%' maxW='1600px' margin='auto'>
      <NavResponsive />
      <Flex justify='space-between' w='100%' maxW='1600px' h='100vh' px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}} margin='auto' pt='8rem'>
        <Box w={{base: '100%', sm: '100%', md: '100%', lg:'55%'}} >
          <Heading as='h1' color='primary' fontSize={{ base: '2.8rem', sm: '3.8rem', md: '4.5rem', lg: '4rem'}} >Login and start booking</Heading>
          <VStack
            mt='5rem'
            w='95%'
            align='start'
          >
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Email</FormLabel>
                <Input id='email' type='email' onChange={changeHandler}/>
              </FormControl>
              <Spacer/>
              <Spacer/>
              <FormControl isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' onChange={changeHandler}/>
              </FormControl>
              <Spacer />
              <Spacer />
              <HStack height='4rem' align='center' spacing={4}>
                <Button variant='primary-btn'>Login</Button>
                <Spacer />
                <Text>Don't have an account?<NavLink to='/auth/register'><Text color='primary' textDecoration={'underline'}>Signup</Text></NavLink></Text>
              </HStack>
            </VStack>
        </Box>
        <Box
          position='relative'
          h='60%'
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex'}}
          w={{base: '100%', sm: '100%', md: '50%', lg:'45%'}}
        >
          <Image src='/images/login.jpg' alt='login in dental-world' w='100%' h='100%'/>
        </Box>
      </Flex>    
    </Box>
  );
}

export default Login;
