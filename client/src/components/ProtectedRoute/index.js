<<<<<<< HEAD
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const location = useLocation();

  const storageUser = JSON.parse(localStorage.getItem("dental_user"));

  if (storageUser?.token) {
    //checks if the logged in user is admin
    if (!storageUser?.isAdmin && location.pathname.startsWith("/admin")) {
      //if not admin and tries to navigate to dashboard redirect to home page
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/auth/login" state={{ from: location }} />; //redirect non-logged in user
  }

  return children;
}

export default ProtectedRoute;
=======
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const location = useLocation()

    const storageUser = JSON.parse(localStorage.getItem('dental_user'))

    if(storageUser?.token){
      //checks if the logged in user is admin
      if((!storageUser?.isAdmin) && location.pathname.startsWith('/admin')){
        //if not admin and tries to navigate to dashboard redirect to home page
        return <Navigate to='/'/>
      }
    } else {
      return <Navigate to='/auth/login' state={{from: location}}/> //redirect non-logged in user
    }

  return children
}

export default ProtectedRoute
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
