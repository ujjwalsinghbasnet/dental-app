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
  Text,
  useToast
} from '@chakra-ui/react';
import { useNavigate, NavLink } from 'react-router-dom';
import NavResponsive from '../NavResponsive';
import { formValidation } from './formValidation';
import { useDispatch } from 'react-redux'
import { register } from '../../features/authSlice'

function Signup() {

  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()

  const [info,setInfo] = useState({
    name: '',
    email: '',
    password: '',
    password1: '',
    phone: '',
    gender: 'notConfirmed'
  })

  const changeHandler = (e) => {
    setInfo({...info, [e.target.id]: e.target.value});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const details = formValidation(info)
    if(!details.status){
      toast({
        title: details.title,
        description: details.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      dispatch(register(info)).then(() => {
        navigate('/login', {replace: true})
      })
    }
  }

  return (
    <Box w='100%' maxW='1600px' margin='auto'>
      <NavResponsive />
      <Flex justify='space-between' w='100%' h='100vh' px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}} pt='8rem'>
        <Box w={{base: '100%', sm: '100%', md: '100%', lg:'50%'}} >
          <Heading as='h1' color='primary' fontSize={{ base: '2.8rem', sm: '3rem', md: '3.5rem', lg: '3.5rem'}} >Register in Dental World</Heading>
          <VStack
            mt='3rem'
            w='95%'
            align='start'
          >
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id='name' type='name' value={info.name} onChange={changeHandler}/>
                <FormHelperText>must be at least 6 characters long</FormHelperText>
              </FormControl>
              <Spacer/>
              <Spacer/>
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Email</FormLabel>
                <Input id='email' type='email' value={info.email} onChange={changeHandler}/>
              </FormControl>
              <Spacer/>
              <Spacer/>
              <FormControl isRequired>
                <FormLabel htmlFor='phone'>Phone</FormLabel>
                <Input id='phone' type='number' value={info.phone} onChange={changeHandler}/>
              </FormControl>
              <Spacer/>
              <Spacer/>
              <FormControl isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' value={info.password} onChange={changeHandler}/>
                <FormHelperText>must be 6 digit and should consist of number and symbols</FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='password1'>Confirm Password</FormLabel>
                <Input id='password1' type='password' value={info.password1} onChange={changeHandler}/>
                <FormHelperText>password must match</FormHelperText>
              </FormControl>
              <Spacer />
              <FormControl as='fieldset'>
              <FormLabel as='legend'>Gender</FormLabel>
                <RadioGroup defaultValue={info.gender} onChange={changeHandler}>
                  <HStack spacing='24px' mb='1rem'>
                    <Radio value='male'>Male</Radio>
                    <Radio value='female'>Female</Radio>
                    <Radio value='notConfirmed'>Prefer not to say</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <HStack height='4rem' align='center' spacing={4}>
                <Button variant='primary-btn' onClick={submitHandler}>Signup</Button>
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
          <Image src='/images/login.jpg' alt='login in dental-world' boxSize={'100%'} objectFit='cover'/>
        </Box>
      </Flex>
    </Box>
  );
}

export default Signup;
