import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react'
import { AiOutlineClockCircle } from 'react-icons/ai'

const bottomData = [
    {
        heading: 'Opening Time',
        text: 'We are here to help you 6 days in a week from 7am - 4pm',
        icon: <AiOutlineClockCircle fontSize='3rem'/>
    },
    {
        heading: 'Opening Time',
        text: 'We are here to help you 6 days in a week from 7am - 4pm',
        icon: <AiOutlineClockCircle fontSize='3rem' />
    },
    {
        heading: 'Opening Time',
        text: 'We are here to help you 6 days in a week from 7am - 4pm',
        icon: <AiOutlineClockCircle fontSize='3rem' />
    },
]

function BottomCard() {
  return (
      <Flex
        justify='space-between'
        w='100%'
        mt={{base: '-3rem', sm: '-7.6rem', md: '-5rem', lg: '-4rem'}}
        color='white'
        px={{base: '2rem', sm: '3.5rem', md: '4rem', lg: '6rem'}}
        display={{base:'none', sm:'flex', md: 'flex', lg: 'flex'}}
      >
          {
              bottomData.map((data,index) => <Flex p={5} w={{base: '33%', sm: '33%', md: '33%', lg: '28%'}} justify='space-between' bg='transparentPrimary' align='center' backdropFilter='blur(5px)' key={index}>
                  {data.icon}
                  <Flex w='90%' direction='column' pl={2}>
                      <Heading as='h3' fontWeight='medium' fontSize='2xl'>{data.heading}</Heading>
                      <Text>{data.text}</Text>
                  </Flex>
              </Flex>)
          }
      </Flex>
  )
}

export default BottomCard;
