import axios from 'axios'

const API_URL = 'http://localhost:4000/api/'

//user related information retrieved
const register = async (formData) => {
    const user = await axios.post(API_URL+ 'users', formData)
    return user.data
}

const login = async (formData) => {
    const user = await axios.post(API_URL + 'users/login', formData)
    return user
}


const changePassword = async (data) => {
    const user = await axios.put(API_URL + `users/password/${data.id}`, data.passwords)
    console.log(user)
    return user.data
}

const changeDetails = async (data) => {
    const update = await axios.put(API_URL + `users/${data.id}`, data.info)
    const user = await axios.get(API_URL + `users/${data.id}`)
    return user.data.results
}
//user related information retrieved

//appointment related information
const retrieveUserAppointments = async (token) => {
    const appointment = await axios.get(API_URL + `appointments/user`, {
        headers: {
            'auth': `Bearer ${token}`
        }
    })
    return appointment.data
}

const scheduleAppointment = async (data) => {
    const appointment = await axios.post(API_URL + 'appointments', data.toBook, {
        headers: {
            'auth': `Bearer ${data.token}`
        }
    })
    return appointment.data
}
//appointment related information

//available-appointments

const retrieveAvailableAppointment = async (date) => {
    const appointments = await axios.get(API_URL + `available-appointments/?date=${date}`)
    return appointments.data
}

const fetchServices = {
    register,
    login,
    changePassword,
    changeDetails,
    retrieveUserAppointments,
    scheduleAppointment,
    retrieveAvailableAppointment
}

export default fetchServices