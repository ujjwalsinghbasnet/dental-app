import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Section from '../Layouts/SectionLayout';
import ServiceCard from '../ServiceCard';
import hero from '../../images/hero_image.png'


function Services() {

    const services = [
        {
            id: 0,
            title:'Endodontics',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
            image: hero
        },
        {
            id: 1,
            title:'Oral Pathology',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
            image: hero
        },
        {
            id: 2,
            title:'Peridontics',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
            image: hero
        },
    ]

  return (
      <Box
        w='100%'
        py='1.5rem'
        bgColor='#1a202c'
      >
        <Section id='services'>
          <Heading as='h1' color='white' textAlign={'center'} lineHeight={'90%'} mb='4rem' mt='-2rem' fontSize={{ base: '2.8rem', sm: '3.8rem', md: '4.5rem', lg: '4rem'}}>Our Services</Heading>
          <Flex
            justify='space-between'
            position='relative'
            flexWrap='wrap'
          >
            {
                services.map((item) => <ServiceCard key={item.id} image={item.image} title={item.title} text={item.text} />)
            }
          </Flex>
        </Section>
      </Box>
  );
}

export default Services;
