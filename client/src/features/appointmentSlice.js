<<<<<<< HEAD
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "./services";

const initialState = {
  appointments: [],
  availableAppointment: [],
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getUserAppointments = createAsyncThunk(
  "appointment/getapp",
  async (token, thunkData) => {
    try {
      const appointment = await fetchServices.retrieveUserAppointments(token);
      return appointment;
    } catch (err) {
      return thunkData.rejectWithValue(err?.message || "error occurred");
    }
  }
);

export const scheduleUserAppointment = createAsyncThunk(
  "appointment/schedule",
  async (data, thunkData) => {
    try {
      const appointment = await fetchServices.scheduleAppointment(data);
      return appointment;
    } catch (err) {
      return thunkData.rejectWithValue({ message: "error occurred" });
    }
  }
);
export const addAppointment = createAsyncThunk(
  "appointment/addAppointment",
  async (data, thunkData) => {
    try {
      const addedApp = await fetchServices.addAvailableAppointment(data);
      return addedApp;
    } catch (error) {
      return thunkData.rejectWithValue({
        message: error.message || "errror on adding slot",
      });
    }
  }
);
export const getAvailableAppointment = createAsyncThunk(
  "appointment/getAvailableApp",
  async (date, thunkData) => {
    try {
      const appointments = await fetchServices.retrieveAvailableAppointment(
        date
      );
      return appointments;
    } catch (error) {
      return thunkData.rejectWithValue({
        message: error?.message || "error occurred",
      });
    }
  }
);

export const getBookedAppointments = createAsyncThunk(
  "appointment/getScheduledApp",
  async (date, thunkData) => {
    try {
      const appointment = await fetchServices.getScheduledAppointments(date);
      return appointment;
    } catch (error) {
      return thunkData.rejectWithValue({
        message: error?.message || "error occurred in fetching",
      });
    }
  }
);

export const editAvailableAppointment = createAsyncThunk(
  "appointment/updateAvaiApp",
  async (data, thunkData) => {
    try {
      const appointment = await fetchServices.updateAvailableAppointment(data);
      return appointment;
    } catch (error) {
      return thunkData.rejectWithValue({
        message: error?.message || "error occured in updating",
      });
    }
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    markvisited: (state, action) => {
      const selectedApp = state.appointments.results.filter(
        (app) => app._id === action.payload
      )[0];
      selectedApp.visited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(scheduleUserAppointment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(scheduleUserAppointment.fulfilled, (state, action) => {
        // state.appointment.concat(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(scheduleUserAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getUserAppointments.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserAppointments.fulfilled, (state, action) => {
        state.appointments = state.appointments.concat(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getUserAppointments.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
      })
      .addCase(getAvailableAppointment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAvailableAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.availableAppointment = action.payload;
      })
      .addCase(getAvailableAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getBookedAppointments.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getBookedAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointments = action.payload;
        state.isSuccess = true;
      })
      .addCase(getBookedAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(addAppointment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Successfully Added";
      })
      .addCase(addAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(editAvailableAppointment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editAvailableAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "successfully edited!";
      })
      .addCase(editAvailableAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { markvisited } = appointmentSlice.actions;

export default appointmentSlice.reducer;
=======
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import fetchServices from "./services";

const initialState = {
    appointments: [],
    availableAppointment: [],
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
export const addAppointment = createAsyncThunk('appointment/addAppointment', async (data,thunkData) => {
    try{
        const addedApp = await fetchServices.addAvailableAppointment(data)
        return addedApp
    } catch(error){
        return thunkData.rejectWithValue({ message: error.message || 'errror on adding slot'})
    }
})
export const getAvailableAppointment = createAsyncThunk('appointment/getAvailableApp', async (date,thunkData) => {
    try{
        const appointments = await fetchServices.retrieveAvailableAppointment(date)
        return appointments
    } catch(error){
        return thunkData.rejectWithValue({message: error?.message || 'error occurred'})
    }
})

export const getBookedAppointments = createAsyncThunk('appointment/getScheduledApp', async (date,thunkData) => {
    try{
        const appointment = await fetchServices.getScheduledAppointments(date)
        return appointment
    } catch(error){
        return thunkData.rejectWithValue({message: error?.message || 'error occurred in fetching'})
    }
})

export const editAvailableAppointment = createAsyncThunk('appointment/updateAvaiApp', async (data, thunkData) => {
    try {
        const appointment = await fetchServices.updateAvailableAppointment(data)
        return appointment
    } catch(error){
        return thunkData.rejectWithValue({message: error?.message || 'error occured in updating'})
    }
})

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        markvisited: (state,action) => {
            const selectedApp = state.appointments.results.filter(app => app._id === action.payload)[0]
            selectedApp.visited = true
        }
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
                state.appointments = state.appointments.concat(action.payload)
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(getUserAppointments.rejected, (state,action) => {
                state.isSuccess = false
                state.isLoading = false
            })
            .addCase(getAvailableAppointment.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(getAvailableAppointment.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.availableAppointment = action.payload
            })
            .addCase(getAvailableAppointment.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess = false
            })
            .addCase(getBookedAppointments.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(getBookedAppointments.fulfilled, (state,action) => {
                state.isLoading = false
                state.appointments = action.payload
                state.isSuccess = true
            })
            .addCase(getBookedAppointments.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess = false
            })
            .addCase(addAppointment.pending, (state,action) => {
                state.isLoading = true;
            })
            .addCase(addAppointment.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = 'Successfully Added'
            })
            .addCase(addAppointment.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(editAvailableAppointment.pending, (state,action) => {
                state.isLoading = true
            })
            .addCase(editAvailableAppointment.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = 'successfully edited!'
            })
            .addCase(editAvailableAppointment.rejected, (state,action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
    }
})

export const { markvisited } = appointmentSlice.actions

export default appointmentSlice.reducer
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
