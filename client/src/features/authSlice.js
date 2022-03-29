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
export const login = createAsyncThunk('auth/login', async (userData, thunkData) => {
    try{
        const userResponse = await authService.login(userData)
        const { token, user} = userResponse.data
        let isAdmin = false
        if(user?.role === 'admin') { isAdmin = true }
        localStorage.setItem('dental_user',JSON.stringify({ token, isAdmin }))
        return user.data;
    } catch (err) {
        return thunkData.rejectWithValue({ message: "error"})
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
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(login.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state,action) => {
                state.isLoading = false
                state.user = action.payload
                state.isSuccess = true
            })
            .addCase(login.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess = false
                state.user = action.payload
            })
    }
})
export const { reset } = authSlice.actions
export default authSlice.reducer