import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box
} from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useLocation } from 'react-router-dom'

const adminNav = [
    {
        link: '/admin',
        text: 'Dashboard'
    },
    {
        link: '/admin/patients',
        text: 'Patients'
    },
    {
        link: '/admin/doctors',
        text: 'Doctors'
    },
    {
        link: '/admin/schedules',
        text: 'Schedules'
    },
]

const userNav = [
    {
        link: '/user/profile',
        text: 'Profile'
    },
    {
        link: '/user/appointments',
        text: 'Appointments'
    },
]

function Layout({ children, title }) {

    const [toggle,setToggle] = useState(true)
    const [nav,setNav] = useState(null)
    const location = useLocation()

    useEffect(() => {
        if(location.pathname.startsWith('/admin')){
            setNav(adminNav)
        } else {
            setNav(userNav)
        }
    },[location.pathname])

    const closeSidebar = () => { setToggle(state => !state) }
  return (
    <Flex
        w='100%'
        h='100%'
        m='auto'
        minH='100vh'
        position='relative'
    >
        <Sidebar isOpen={toggle} closeSidebar={closeSidebar} menu={nav}/>
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