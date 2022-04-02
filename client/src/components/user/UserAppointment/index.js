import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useDispatch,useSelector } from 'react-redux'

import Layout from '../../admin/Layout'
import UserAppSlot from '../UserAppSlot'
import { getUserAppointments } from '../../../features/appointmentSlice'

function UserAppointment() {
  const dispatch = useDispatch()
  const appointments = useSelector(state => state.appointment.appointment)
  const user = JSON.parse(localStorage.getItem('dental_user'))

  useEffect(() => {
    dispatch(getUserAppointments(user?.token))
  },[])

  return (
    <Layout title='Appointment'>
        <Flex
            w='100%'
            mt='10rem'
            justify='space-between'
            flexWrap={'wrap'}
        >
            {
              appointments && appointments[0]?.results.map(appointment => <UserAppSlot key={appointment._id} appointment={appointment}/>)
            }
        </Flex>
    </Layout>
  )
}

export default UserAppointment