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
  HStack,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { NavLink, useNavigate,useLocation } from 'react-router-dom';
import { login } from '../../features/authSlice';
import NavResponsive from '../NavResponsive';
import { loginValidation } from './formValidation';


function Login() {
  const toast = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const state = useSelector(state => state.auth)
  const [info,setInfo] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (e) => {
    setInfo({...info, [e.target.id]: e.target.value});
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    const details = loginValidation(info)
    if(!details.status){
      toast({
        title: details.title,
        description: details.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      dispatch(login(info)).then((res) => {
        console.log(res)
        if(location.state?.from){
          navigate(location.state.from, {replace: true})
        } else {
          navigate('/', { replace: true })
        }
      })
    }
  }
  

  return (
    <Box w='100%' maxW='1600px' margin='auto'>
      <NavResponsive />
      <Flex justify='space-between' w='100%' maxW='1600px' h='100vh' px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}} margin='auto' pt='8rem'>
        <Box w={{base: '100%', sm: '100%', md: '100%', lg:'55%'}} >
          <Heading as='h1' color='primary' fontSize={{ base: '2.8rem', sm: '3rem', md: '3.5rem', lg: '3.5rem'}} >Login and start booking</Heading>
          <VStack
            mt='5rem'
            w='95%'
            align='start'
          >
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Email</FormLabel>
                <Input id='email' type='email' onChange={changeHandler} defaultValue={info.email}/>
              </FormControl>
              <Spacer/>
              <Spacer/>
              <FormControl isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' defaultValue={info.password} onChange={changeHandler}/>
              </FormControl>
              <Spacer />
              <Spacer />
              <HStack height='4rem' align='center' spacing={4}>
                <Button variant='primary-btn' onClick={submitHandler}>{state.isLoading ? 'Logging...' : 'Login'}</Button>
                <Spacer />
                <Text>Don't have an account?<NavLink to='/auth/register'><span style={{textDecoration: 'underline', color: '#18D2B1', marginLeft: '0.5rem'}}>Signup</span></NavLink></Text>
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
