import axios from 'axios'

const API_URL = 'http://localhost:4000/api/'

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

const authService = {
    register,
    login,
    logout
}

export default authService