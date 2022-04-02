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

const logout = () => {
    localStorage.removeItem('dental_user')
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


const fetchServices = {
    register,
    login,
    logout,
    retrieveUserAppointments,
    scheduleAppointment
}

export default fetchServices