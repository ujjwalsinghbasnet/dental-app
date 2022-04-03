import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box
} from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useLocation } from 'react-router-dom'
import useWidthSidebar from '../../hooks/useWidthSidebar'

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
    const pos = useWidthSidebar() //custom hook

    useEffect(() => {
        if(location.pathname.startsWith('/admin')){
            setNav(adminNav)
        } else {
            setNav(userNav)
        }
    },[location.pathname])

    const closeSidebar = () => { setToggle(state => !state) }
    const {md,lg} = {
        md: !pos && toggle ? '30rem' : '0',
        lg: !pos && toggle ? '20%' : '0',
    }

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
            ml={{md: md, lg: lg}} //base: '0rem', sm: '0rem',
        >
            <Topbar title={title} closeSidebar={closeSidebar} />
            {children}
        </Box>
    </Flex>
  )
}

export default Layout