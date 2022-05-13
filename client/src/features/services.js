import axios from 'axios'

const API_URL = 'https://dental-world-app.herokuapp.com/'

//user related information retrieved
const register = async (formData) => {
    console.log(formData)
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

const getScheduledAppointments = async(date) => {
    const appointment = await axios.get(API_URL + `appointments/?date=${date}`)

    return appointment.data
}

const markVisited = async (data) => {
    const appointment = await axios.put(API_URL + `appointments/${data.id}`, {
        headers: {
            'auth':`Bearer ${data.token}`
        }
    })
}

//appointment related information

//available-appointments

const retrieveAvailableAppointment = async (date) => {
    const appointments = await axios.get(API_URL + `available-appointments/?date=${date}`)
    return appointments.data
}

const addAvailableAppointment = async (data) => {
    const addedApp = await axios.post(API_URL + 'available-appointments', data.appointment, {
        headers: {
            'auth': `Bearer ${data.token}`
        }
    } )
    return addedApp.data
}

const getSingleAvailableAppointment = async (id) => {
    const appointment = await axios.get(API_URL + `available-appointments/${id}`)
    return appointment.data
}

const updateAvailableAppointment = async (data) => {
    const appointment = await axios.put(API_URL + `available-appointments/${data.id}`, data.body)
    return appointment.data
}

const deleteAvailableAppointment = async (id) => {
    const appointment = await axios.delete(API_URL + `available-appointments/${id}`)
    return appointment
}


//PAYMENT SERVICES

const verifyPayment = async (data) => {
    const payment = await axios.post(API_URL + `payment`, data)
    return payment
}

const fetchServices = {
    register,
    login,
    changePassword,
    changeDetails,
    retrieveUserAppointments,
    scheduleAppointment,
    markVisited,
    retrieveAvailableAppointment,
    getScheduledAppointments,
    addAvailableAppointment,
    getSingleAvailableAppointment,
    updateAvailableAppointment,
    deleteAvailableAppointment,
    verifyPayment
}

export default fetchServices