import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "./services";

const initialState = {
    appointment: [],
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const getUserAppointments = createAsyncThunk('appointment/getapp', async (token,thunkData) => {
    try{
        const appointment = await fetchServices.retrieveUserAppointments(token)
        return appointment
    } catch(err) {
        return thunkData.rejectWithValue(err?.message || 'error occurred')
    }
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
                // state.appointment.concat(action.payload)
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(scheduleUserAppointment.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess = false
            })
            .addCase(getUserAppointments.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(getUserAppointments.fulfilled, (state,action) => {
                state.appointment = state.appointment.concat(action.payload)
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(getUserAppointments.rejected, (state,action) => {
                state.isSuccess = false
                state.isLoading = false
            })
    }
})

export default appointmentSlice.reducer