<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "./services";

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getInitialLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    const user = JSON.parse(localStorage.getItem("dental_user"));
    return user;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkData) => {
    try {
      const user = await fetchServices.register(userData);
      console.log(user);
      return user;
    } catch (err) {
      return thunkData.rejectWithValue({ message: "error" });
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkData) => {
    try {
      const userResponse = await fetchServices.login(userData);
      const { token, user } = userResponse.data;
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      localStorage.setItem(
        "dental_user",
        JSON.stringify({ token, isAdmin, user })
      );
      return userResponse.data;
    } catch (err) {
      return thunkData.rejectWithValue({ message: "error" });
    }
  }
);
export const changeDetails = createAsyncThunk(
  "auth/change_details",
  async (data, thunkData) => {
    try {
      const user = await fetchServices.changeDetails(data);
      return user;
    } catch (err) {
      return thunkData.rejectWithValue({ message: err.message });
    }
  }
);
export const changePassword = createAsyncThunk(
  "auth/change_password",
  async (data, thunkData) => {
    try {
      const user = await fetchServices.changePassword(data);
      return user;
    } catch (err) {
      return thunkData.rejectWithValue({ message: err.message });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.user = null;
      localStorage.removeItem("dental_user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialLoggedInUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getInitialLoggedInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getInitialLoggedInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(changeDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changeDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(changeDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
=======
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "./services";



const initialState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const getInitialLoggedInUser = createAsyncThunk('auth/getLoggedInUser', async () => {
    const user = JSON.parse(localStorage.getItem('dental_user'))
    return user
})

export const register = createAsyncThunk('auth/register', async (userData, thunkData) => {
    try{
        const user = await fetchServices.register(userData)
        console.log(user)
        return user;
    } catch (err) {
        return thunkData.rejectWithValue({ message: 'error' })
    }
})
export const login = createAsyncThunk('auth/login', async (userData, thunkData) => {
    try{
        const userResponse = await fetchServices.login(userData)
        const { token, user} = userResponse.data
        let isAdmin = false
        if(user?.role === 'admin') { isAdmin = true }
        localStorage.setItem('dental_user',JSON.stringify({ token, isAdmin, user }))
        return userResponse.data;
    } catch (err) {
        return thunkData.rejectWithValue({ message: "error"})
    }
})
export const changeDetails = createAsyncThunk('auth/change_details', async (data,thunkData) => {
    try{
        const user = await fetchServices.changeDetails(data)
        return user
    } catch(err){
        return thunkData.rejectWithValue({message: err.message})
    }
})
export const changePassword = createAsyncThunk('auth/change_password', async (data,thunkData) => {
    try{
        const user = await fetchServices.changePassword(data)
        return user
    } catch(err){
        return thunkData.rejectWithValue({ message: err.message })
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
            localStorage.removeItem('dental_user')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInitialLoggedInUser.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(getInitialLoggedInUser.fulfilled, (state,action) => {
                state.isLoading=false
                state.isSuccess=true
                state.user = action.payload
            })
            .addCase(getInitialLoggedInUser.rejected, (state,action) => {
                state.isLoading=false
                state.isSuccess=false
                state.message = action.payload
            })
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
                state.message = action.payload
            })
            .addCase(changeDetails.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(changeDetails.fulfilled, (state,action) => {
                state.isLoading = false
                state.user.user = action.payload
                state.isSuccess = true
            })
            .addCase(changeDetails.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess=false
                state.message = action.payload
            })
            .addCase(changePassword.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(changePassword.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = null
            })
            .addCase(changePassword.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
    }
})
export const { reset } = authSlice.actions
export default authSlice.reducer
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
