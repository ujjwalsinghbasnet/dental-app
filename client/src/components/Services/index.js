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
      <Section>
          <Heading as='h1' fontSize={'4rem'} color='primary' textAlign={'center'} lineHeight={'90%'} mb='4rem' mt='-2rem'>Our Services</Heading>
          <Flex
            justify='space-between'
            width='100%'
            position='relative'
          >
            {
                services.map((item) => <ServiceCard key={item.id} image={item.image} title={item.title} text={item.text} />)
            }
          </Flex>
      </Section>
  );
}

export default Services;
