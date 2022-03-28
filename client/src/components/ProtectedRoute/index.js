import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute({ children }) {
    const location = useLocation()
    const user = useSelector(state => state.auth.user)
    const storageUser = JSON.parse(localStorage.getItem('dental_user'))
    if(!user && !storageUser){
        return <Navigate to='/auth/login' state={{from: location}}/>
    }
  return children
}

export default ProtectedRoute