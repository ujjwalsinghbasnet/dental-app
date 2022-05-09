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
  useToast,
  useRadioGroup
} from '@chakra-ui/react';
import { useNavigate, NavLink } from 'react-router-dom';
import NavResponsive from '../NavResponsive';
import { formValidation } from './formValidation';
import { useDispatch } from 'react-redux'
import { register } from '../../features/authSlice'
import loginImage from '../../images/login.jpg'

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
    address: '',
  })

  const changeHandler = (e) => {
    setInfo({...info, [e.target.id]: e.target.value});
  }

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: 'notConfirmed',
    // onChange: changeHandler
  })


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
        const formData = {...info, gender: value }
      dispatch(register(formData)).then((res) => {
        if(res.hasOwnProperty('error')){
          toast({
            title: res.payload.message,
            description: 'Error on creating user...',
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
      } else {
        toast({
          title: 'Successfull',
          description: 'User created successfully!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setTimeout(() => {
          navigate('/auth/login', {replace: true})
        }, 2500)
      }
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
              <FormControl isRequired>
                <FormLabel htmlFor='address'>Address</FormLabel>
                <Input id='address' type='address' value={info.address} onChange={changeHandler}/>
                <FormHelperText>must not be empty</FormHelperText>
              </FormControl>
              <Spacer />
              <FormControl as='fieldset'>
              <FormLabel as='legend'>Gender</FormLabel>
                <RadioGroup id='gender' defaultValue='notConfirmed' {...getRootProps()}  {...getRadioProps({ value: info.gender })}>
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
          h='100%'
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex'}}
          w={{base: '100%', sm: '100%', md: '50%', lg:'45%'}}
        >
          <Image src={loginImage} alt='login in dental-world' w='100%' h='100%'/>
        </Box>
      </Flex>
    </Box>
  );
}

export default Signup;
