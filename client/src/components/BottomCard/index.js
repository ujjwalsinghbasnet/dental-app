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
        pos='absolute'
        bottom='-3rem'
        color='white'
        px='6rem'
      >
          {
              bottomData.map(data => <Flex p={5} w='28%' justify='space-between' bg='transparentPrimary' align='center' backdropFilter='blur(5px)'>
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
