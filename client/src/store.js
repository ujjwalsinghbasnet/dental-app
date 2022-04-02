import { configureStore } from '@reduxjs/toolkit'
import appointmentReducer from './features/appointmentSlice'
import authReducer from './features/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        appointment: appointmentReducer
    }
})