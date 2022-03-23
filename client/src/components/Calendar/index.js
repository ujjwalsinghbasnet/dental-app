import React, { useState } from 'react'
import {
    Box
} from '@chakra-ui/react'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import './index.css'

function Calendar() {
    const [date, onChange] = useState(new Date())

  return (
    <Box
        width='20rem'
        height='20rem'
        zIndex={'5'}
        position='absolute'
    >
        <DatePicker 
            value={date} 
            onChange={onChange} 
            isOpen={true}
            minDate={new Date()}
        />
    </Box>
  )
}

export default Calendar