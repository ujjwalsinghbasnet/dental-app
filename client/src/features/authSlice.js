import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./services";

const user = JSON.parse(localStorage.getItem('dental_user'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const register = createAsyncThunk('auth/register', async (userData, thunkData) => {
    try{
        const user = await authService.register(userData)
        console.log(user)
        return user;
    } catch (err) {
        return thunkData.rejectWithValue({ message: 'error' })
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state,action) => {
                state.isLoading = false
                state.message = action.payload
            })
    }
})

export default authSlice.reducer