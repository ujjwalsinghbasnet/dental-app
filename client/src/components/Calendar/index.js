import React from "react";
import { Box } from "@chakra-ui/react";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "./index.css";

function Calendar({ date, handleChange }) {
  return (
    <Box width="20rem" height="20rem" zIndex={"5"}>
      <DatePicker
        value={date}
        isOpen={true}
        minDate={new Date()}
        selected={date}
        onChange={(date) => handleChange(date)}
      />
    </Box>
  );
}

export default Calendar;
