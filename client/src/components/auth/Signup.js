import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  RadioGroup,
  Radio,
  HStack,
  Image,
  VStack,
  Spacer,
  Button,
  Text
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import NavResponsive from '../NavResponsive';

function Signup() {

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
      <Flex justify='space-between' w='100%' h='100vh' px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}} pt='8rem'>
        <Box w={{base: '100%', sm: '100%', md: '100%', lg:'55%'}} >
          <Heading as='h1' color='primary' fontSize={{ base: '2.8rem', sm: '3.8rem', md: '4.5rem', lg: '4rem'}} >Register in Dental World</Heading>
          <VStack
            mt='5rem'
            w='95%'
            align='start'
          >
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='name' type='name' onChange={changeHandler}/>
              </FormControl>
              <Spacer/>
              <Spacer/>
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Email</FormLabel>
                <Input id='email' type='email' onChange={changeHandler}/>
              </FormControl>
              <Spacer/>
              <Spacer/>
              <FormControl isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' onChange={changeHandler}/>
                <FormHelperText>must be 6 digit and should consist of number and symbols</FormHelperText>
              </FormControl>
              <Spacer />
              <Spacer />
              <FormControl as='fieldset'>
              <FormLabel as='legend'>Gender</FormLabel>
                <RadioGroup defaultValue='notConfirmed' onChange={changeHandler}>
                  <HStack spacing='24px' mb='2rem'>
                    <Radio value='male'>Male</Radio>
                    <Radio value='female'>Female</Radio>
                    <Radio value='notConfirmed'>Prefer not to say</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <HStack height='4rem' align='center' spacing={4}>
                <Button variant='primary-btn'>Signup</Button>
                <Spacer />
                <Text>Already have account?<NavLink to='/auth/login'><Text color='primary' textDecoration={'underline'}>Login</Text></NavLink></Text>
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

export default Signup;
