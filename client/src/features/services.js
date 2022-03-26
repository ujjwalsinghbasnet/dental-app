import axios from 'axios'

const API_URL = 'http://localhost:4000/api/'

const register = async (formData) => {
    const user = await axios.post(API_URL+ 'users', formData)
    return user.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout
}

export default authService