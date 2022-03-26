import React, { useState } from 'react'
import {
    Flex,
    Box
} from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Layout({ children, title }) {

    const [toggle,setToggle] = useState(true)

    const closeSidebar = () => { setToggle(state => !state) }

  return (
    <Flex
        w='100%'
        h='100%'
        m='auto'
        minH='100vh'
        position='relative'
    >
        <Sidebar isOpen={toggle} closeSidebar={closeSidebar}/>
        <Box
            px='2rem'
            pt='1rem'
            w='100%'
        >
            <Topbar title={title} closeSidebar={closeSidebar} />
            {children}
        </Box>
    </Flex>
  )
}

export default Layout