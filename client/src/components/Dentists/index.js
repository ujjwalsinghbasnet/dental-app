import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import DentistCards from '../DentistCards';
import Section from '../Layouts/SectionLayout';

function Dentists() {

  const dentists = [
    {
        id: 0,
        name: 'Dr. Marie Cooper',
        designation: 'Dental Surgeon',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
        image: '/images/hero_image.png'
    },
    {
        id: 1,
        name: 'Dr. Marie Cooper',
        designation: 'Dental Surgeon',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
        image: '/images/hero_image.png'
    },
    {
        id: 2,
        name: 'Dr. Marie Cooper',
        designation: 'Dental Surgeon',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!',
        image: '/images/hero_image.png'
    },
  ] 

  return (
    <Section>
        <Box mt='-5rem'>
            <Heading as='h1' fontSize={'4rem'} color='primary' textAlign={'center'} lineHeight={'90%'} mb='4rem'>Dentists</Heading>
            <Flex
              justify='space-between'
              width='100%'
              position='relative'
              flexWrap={'wrap'}
            >
              {
                dentists.map((dentist) => <DentistCards key={dentist.id} image={dentist.image} name={dentist.name} text={dentist.text} designation={dentist.designation} />)
            }
            </Flex>
        </Box>
    </Section>
  );
}

export default Dentists;
