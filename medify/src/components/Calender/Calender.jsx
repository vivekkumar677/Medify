import React from 'react'
import DaySelector from "./DaySelector/DaySelector";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSlotSelector/TimeSlotSelector";

const Calender = ({ availableSlots, details, handleBooking }) => {
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const totalSlots =
      availableSlots.morning.length +
      availableSlots.afternoon.length +
      availableSlots.evening.length;
  
    return (
      <Box>
        <DaySelector
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          totalSlots={totalSlots}
        />
        <TimeSlotPicker
          availableSlots={availableSlots}
          selectedDate={selectedDate}
          details={details}
          handleBooking={handleBooking}
        />
      </Box>
    );
}

export default Calender;