import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Section from '../Layouts/SectionLayout';

const Footer = () => {
  return (
    <Box
            width='100%'
            height='20rem'
            backgroundColor='primary'
        >
            <Section>
                <Heading as='h2' color='secondary' fontSize={{ base: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2rem'}}>Dental World</Heading>
                
            </Section>
    </Box>
  )
}

export default Footer