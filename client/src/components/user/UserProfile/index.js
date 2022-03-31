import { 
  Avatar, 
  Text, 
  Flex, 
  Heading, 
  Box,
  FormControl,
  FormLabel,
  Input, 
  Button
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../../admin/Layout'

function UserProfile() {

  const [info,setInfo] = useState({
    phone: '9876543210',
    address: 'Balaju, Kathmandu'
  })
  const [passwordDetails,setPasswordDetails] = useState({
    old_password: '',
    new_password: '',
    confirm_password: ''
  })

  const changeHandler = (e) => {
    setInfo({...info, [e.target.id]: e.target.value})
  }
  const passChangeHandler = (e) => {
    setPasswordDetails({...passwordDetails, [e.target.id]: e.target.value})
  }
  const submitChangeInfo = (e) => {
    e.preventDefault();
  }
  const submitChangePassword = (e) => {
    e.preventDefault();
  }

  return (
    <Layout title='Profile'>
        <Flex
            w='100%'
            mt='5rem'
            flexWrap={'wrap'}
            direction='column'
            align='center'
        >
            <Avatar size='2xl' name='Ujjwal Basnet' src='https://bit.ly/code-beast' />
            <Heading as='h2' fontSize={{base: '0.9rem', sm: '1rem', md: '1rem', lg: '1.5rem'}} mt='1rem'>Ujjwal Singh Basnet</Heading>
            <Text fontSize={{base: '0.9rem', sm: '0.9rem', md: '1rem', lg: '1rem'}} color='#b5b4b4'>myemail@gmail.com</Text>
            <Box
              w={{base: '100%', sm: '80%', md: '50%', lg: '50%'}}
              mt='2rem'
            >
              <FormControl>
                <FormLabel htmlFor='phone'>Phone</FormLabel>
                <Input id='phone' type='number' onChange={changeHandler} defaultValue={info.phone}/>
              </FormControl>
              <FormControl mt='1rem'>
                <FormLabel htmlFor='address'>Address</FormLabel>
                <Input id='address' type='text' onChange={changeHandler} defaultValue={info.address}/>
              </FormControl>
              <Button variant='primary-btn' mt='1rem' w='100%' onClick={submitChangeInfo}>Change Details</Button>
            </Box>
            <Box
              w={{base: '100%', sm: '80%', md: '50%', lg: '50%'}}
              mt='1rem'
            >
              <FormControl>
                <FormLabel htmlFor='old_password'>Old Password</FormLabel>
                <Input id='old_password' type='password' onChange={passChangeHandler} defaultValue={passwordDetails.old_password}/>
              </FormControl>
              <FormControl mt='1rem'>
                <FormLabel htmlFor='new_password'>New Password</FormLabel>
                <Input id='new_password' type='password' onChange={passChangeHandler} defaultValue={passwordDetails.new_password}/>
              </FormControl>
              <FormControl mt='1rem'>
                <FormLabel htmlFor='confirm_password'>Confirm New Password</FormLabel>
                <Input id='confirm_password' type='password' onChange={passChangeHandler} defaultValue={passwordDetails.confirm_password}/>
              </FormControl>
              <Button variant='primary-btn' mt='1rem' w='100%' onClick={submitChangePassword}>Change Password</Button>
            </Box>
        </Flex>
    </Layout>
  )
}

export default UserProfile