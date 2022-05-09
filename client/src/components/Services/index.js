import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Section from '../Layouts/SectionLayout';
import ServiceCard from '../ServiceCard';


function Services() {

    const services = [
        {
            id: 0,
            title:'Endodontics',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
            image: '/images/hero_image.png'
        },
        {
            id: 1,
            title:'Oral Pathology',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
            image: '/images/hero_image.png'
        },
        {
            id: 2,
            title:'Peridontics',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
            image: '/images/hero_image.png'
        },
    ]

  return (
      <Section id='services'>
          <Heading as='h1' color='primary' textAlign={'center'} lineHeight={'90%'} mb='4rem' mt='-2rem' fontSize={{ base: '2.8rem', sm: '3.8rem', md: '4.5rem', lg: '4rem'}}>Our Services</Heading>
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
  );
}

export default Services;
