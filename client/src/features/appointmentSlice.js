import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "./services";

const initialState = {
    appointment: [],
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const getUserAppointments = createAsyncThunk('appointment/getapp', async () => {

})

export const scheduleUserAppointment = createAsyncThunk('appointment/schedule', async (data,thunkData) => {
    try{
        const appointment = await fetchServices.scheduleAppointment(data)
        return appointment
    } catch(err){
        return thunkData.rejectWithValue({message: 'error occurred'})
    }
})

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(scheduleUserAppointment.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(scheduleUserAppointment.fulfilled, (state,action) => {
                console.log(action.payload)
            })
            .addCase(scheduleUserAppointment.rejected, (state,action) => {

            })
    }
})

export default appointmentSlice.reducer