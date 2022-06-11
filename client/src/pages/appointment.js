import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import NavResponsive from "../components/NavResponsive";
import Calendar from "../components/Calendar";
import AppointmentSlot from "../components/Appointment/AppointmentSlot";
import {
  getAvailableAppointment,
  scheduleUserAppointment,
} from "../features/appointmentSlice";
import PayNow from "../components/Appointment/PayNow";
import { useNavigate } from "react-router-dom";
import LoadingAppointment from "../components/Loader/LoadingAppointment";
import EmptyList from "../components/Loader/EmptyList";

function Appointment() {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const appointments = useSelector(
    (state) => state.appointment.availableAppointment
  ) || { results: [] };
  const [activeAppointment, setActiveAppointment] = useState(null);
  const [loadingState, setLoadingState] = useState(false);
  const [date, setDate] = useState(new Date());
  const [paymentModal, setPaymentModal] = useState(false);
  const [bookedApp, setBookedApp] = useState("");
  const [userAppointment, setUserAppointment] = useState();
  const user = JSON.parse(localStorage.getItem("dental_user"));

  useEffect(() => {
    setLoadingState(true);
    dispatch(getAvailableAppointment(date)).then((res) => {
      setLoadingState(false);
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
  console.log(loadingState);

  const focusAppointment = (id) => {
    setActiveAppointment(id);
  };
  const handleDateChange = (date) => {
    setDate(date);
    setLoadingState(true);
    dispatch(getAvailableAppointment(date)).then(() => setLoadingState(false));
  };
  const handlePaymentModalClose = () => {
    setPaymentModal(false);
    navigate("/user/appointments", { replace: true });
  };

  const bookAppointment = () => {
    if (!activeAppointment) {
      toast({
        title: "No Appointment Selected!",
        description: "please select a slot.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const selectedAppointment =
        appointments.results &&
        appointments.results.filter(
          (appointment) => appointment._id === activeAppointment
        )[0];
      const toBook = {
        date,
        time: selectedAppointment.time,
        timeslot: selectedAppointment.timeslot,
        doctor: selectedAppointment.doctor,
        spaceID: activeAppointment,
      };
      setBookedApp(selectedAppointment);
      dispatch(scheduleUserAppointment({ toBook, token: user.token })).then(
        (data) => {
          setUserAppointment(data.payload.results);
          toast({
            title: "Done",
            description: "appointment booked successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setTimeout(() => {
            // navigate('/user/appointments', { replace: true })
            setPaymentModal(true);
          }, 3000);
        }
      );
    }
  };

  return (
    <Box
      width="100%"
      minH="100vh"
      bgColor="rgba(246,241,241,0.6)"
      position={"relative"}
    >
      <Box
        w="100%"
        h="100%"
        margin="0 auto"
        maxW="1600px"
        position={"relative"}
      >
        <NavResponsive />
        <Box
          pt="10rem"
          px={{ base: "2rem", sm: "3.5rem", md: "4rem", lg: "6rem" }}
          flex="1"
        >
          <Heading
            as="h1"
            color="primary"
            fontSize={{
              base: "1.5rem",
              sm: "1.7rem",
              md: "2.5rem",
              lg: "2.5rem",
            }}
          >
            Schedule your appointment...
          </Heading>
          <Flex
            w="100%"
            mt="3rem"
            position="relative"
            direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          >
            <Calendar date={date} handleChange={handleDateChange} />
            <Box ml="5%" w="100%">
              <Flex mb="1.5rem" w="100%" justify="space-between" align="center">
                <Heading
                  as="h1"
                  fontSize={{
                    base: "1rem",
                    sm: "1rem",
                    md: "1.3rem",
                    lg: "1.5rem",
                  }}
                >
                  Available
                </Heading>
                <Button variant="secondary-btn" onClick={bookAppointment}>
                  Book Appointment
                </Button>
              </Flex>
              {loadingState ? (
                <LoadingAppointment />
              ) : (
                appointments.results &&
                (appointments.results.length === 0 ? (
                  <EmptyList />
                ) : (
                  appointments.results.map((appointment) => (
                    <AppointmentSlot
                      appointment={appointment}
                      key={appointment._id}
                      handleClick={focusAppointment}
                      active={activeAppointment}
                    />
                  ))
                ))
              )}
            </Box>
          </Flex>
        </Box>
      </Box>
      {paymentModal ? (
        <PayNow
          closeModal={handlePaymentModalClose}
          appointment={bookedApp}
          booked={userAppointment}
        />
      ) : (
        ""
      )}
    </Box>
  );
}

export default Appointment;
