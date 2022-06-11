import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/admin/Layout";
import Calendar from "../../components/Calendar";
import { getBookedAppointments } from "../../features/appointmentSlice";
import AdminAppointmentSlot from "../../components/Appointment/AdminAppointmentSlot";
import PopupOnClick from "../../components/Appointment/PopupOnClick";
import EmptyList from "../../components/Loader/EmptyList";

const Appointments = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const appointments = useSelector(
    (state) => state.appointment.appointments
  ) || { results: [] };
  const [date, setDate] = useState(new Date());
  const [activeAppointment, setActiveAppointment] = useState(null);
  const [popupStatus, setPopupStatus] = useState(false);

  useEffect(() => {
    dispatch(getBookedAppointments(date)).then((res) => {
      if (res.hasOwnProperty("error")) {
        toast({
          title: res.payload.message,
          description: "Error on fetching...",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const focusAppointment = (id) => {
    setActiveAppointment(id);
    setPopupStatus(true);
  };
  const handlePopupCancel = () => {
    setPopupStatus(false);
  };

  const handleDateChange = (date) => {
    setDate(date);
    dispatch(getBookedAppointments(date));
  };

  return (
    <Layout title="Appointments">
      <Flex mt="8rem">
        <Box w="fit-content" mr="2.5rem">
          <Calendar date={date} handleChange={handleDateChange} />
        </Box>
        <Flex direction="column" w="70%">
          <Heading
            as="h1"
            fontSize={{ base: "1rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" }}
          >
            Scheduled Appointment
          </Heading>
          <Flex mt="2rem" direction={"column"}>
            {appointments.results &&
              (appointments.results.length === 0 ? (
                <EmptyList />
              ) : (
                appointments.results.map((appointment) => (
                  <AdminAppointmentSlot
                    appointment={appointment}
                    handleClick={focusAppointment}
                    active={activeAppointment}
                    key={appointment._id}
                  />
                ))
              ))}
          </Flex>
        </Flex>
      </Flex>
      {popupStatus && (
        <PopupOnClick handleCancel={handlePopupCancel} id={activeAppointment} />
      )}
    </Layout>
  );
};

export default Appointments;
