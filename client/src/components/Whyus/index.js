import React from 'react';
import { Box, Flex, Image, Text, Heading, Button } from '@chakra-ui/react'
import Section from '../Layouts/SectionLayout';

function WhyUs() {
  return (
      <Section>
        <Flex mt='2rem'>
        <Box w='100%' h='100%'>
            <Heading as='h1' fontSize={'4rem'} color='primary' textAlign='start' lineHeight={'90%'} mb='2rem'>Why Us</Heading>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur nisi!
            </Text>
            <Flex
              direction={'row'}
              mt={'3rem'}
            >
            <Button variant='primary-btn'>
              Call to action
            </Button>
            <Button variant='secondary-btn' ml='1rem'>
              Secondary
            </Button>
          </Flex>
        </Box>
        <Box pos='relative' width={'55%'} h='100%' alignSelf={'center'} mt='-7%'>
            <Box>
                <Image objectFit={'cover'} src='/images/second-bg.png' alt='second bg' />
            </Box>
        </Box>
        </Flex>
      </Section>
  );
}

export default WhyUs;
