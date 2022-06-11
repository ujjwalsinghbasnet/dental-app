<<<<<<< HEAD
import React, { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../admin/Layout";
import UserAppSlot from "../UserAppSlot";
import { getUserAppointments } from "../../../features/appointmentSlice";

function UserAppointment() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointment.appointments);
  const user = JSON.parse(localStorage.getItem("dental_user"));

  useEffect(() => {
    dispatch(getUserAppointments(user?.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="Appointment">
      <Grid
        w="100%"
        mt="10rem"
        gridTemplateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
        gridGap="1rem"
      >
        {appointments &&
          appointments[0]?.results.map((appointment) => (
            <UserAppSlot key={appointment._id} appointment={appointment} />
          ))}
      </Grid>
    </Layout>
  );
}

export default UserAppointment;
=======
import React, { useEffect } from 'react'
import { Grid } from '@chakra-ui/react'
import { useDispatch,useSelector } from 'react-redux'

import Layout from '../../admin/Layout'
import UserAppSlot from '../UserAppSlot'
import { getUserAppointments } from '../../../features/appointmentSlice'

function UserAppointment() {
  const dispatch = useDispatch()
  const appointments = useSelector(state => state.appointment.appointments)
  const user = JSON.parse(localStorage.getItem('dental_user'))

  useEffect(() => {
    dispatch(getUserAppointments(user?.token))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Layout title='Appointment'>
        <Grid
            w='100%'
            mt='10rem'
            gridTemplateColumns='repeat(auto-fill, minmax(20rem, 1fr))'
            gridGap='1rem'
        >
            {
              appointments && appointments[0]?.results.map(appointment => <UserAppSlot key={appointment._id} appointment={appointment}/>)
            }
        </Grid>
    </Layout>
  )
}

export default UserAppointment
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
