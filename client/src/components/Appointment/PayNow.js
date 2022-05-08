import { Box, Button, Flex, Heading, useToast } from '@chakra-ui/react'
import React from 'react'
import KhaltiCheckout from 'khalti-checkout-web'
import fetchServices from '../../features/services';
import { useNavigate } from 'react-router-dom';

const PayNow = ({ closeModal, appointment }) => {

    const toast = useToast()
    const navigate = useNavigate()

    const config = {
        publicKey: 'test_public_key_4ba198b2d93d4a22821917babd948520',
        productIdentity: `${appointment._id}`,
        productName: 'appointment',
        productUrl: 'http://localhost:3000/appointment',
        eventHandler: {
            onSuccess(payload){
                //initiate verification
                console.log(payload)
                fetchServices.verifyPayment(payload).then(data => {
                    console.log(data)
                    if(data.status === 200){
                        toast({
                            title: 'Payment Success!',
                            description: `Paid ${data.data.amount/100} to ${data.data.merchant.name}`,
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                          })
                        setTimeout(() => {
                            navigate('/user/appointments', { replace: true })
                        }, 2500)
                    }
                })
            },
            onError(error){
                //handle error
                console.log(error)
            },
            onClose(){
                //closed payment widget
            }
        },
        "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"]
    };
    
    const checkout = new KhaltiCheckout(config)

    const handlePay = () => {
        checkout.show({amount: (appointment.price * 100)})
    }

    const handleCancel = () => { closeModal() }

  return (
    <Box
        w='100%'
        h='100%'
        background='rgb(225,209,209,0.6)'
        backdropFilter='blur(5px)'
        display='grid'
        placeItems='center'
        zIndex='10'
        position='absolute'
        top='0'
        left='0'
    >
        <Box
            w={{base:'90%', sm:'90%', md:'80%', lg:'60%'}}
            direction={{base: 'column', sm:'column', md:'row', lg:'row'}}
            background='white'
            p='2rem'
        >
            <Heading 
                as='h1' 
                fontSize={{ base: '1rem', sm: '1rem', md: '1.3rem', lg: '1.5rem' }}
                textAlign='center'
            >
                Do you want to pay now?
            </Heading>
            <Flex
                m='auto'
                mb='2.5rem'
                justify='space-between'
                align='center'
                mt='2rem'
                w='50%'
            >
                <Button variant='primary-btn' onClick={handlePay} w='50%' mr='1rem'>Pay Now</Button>
                <Button variant='secondary-btn' onClick={handleCancel} w='50%'>close</Button>
            </Flex>
        </Box>
    </Box>
  )
}

export default PayNow