import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
<<<<<<< HEAD
import Loader from "./components/Loader";
=======
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
import Home from "./pages/Home";

const Signup = React.lazy(() => import("./components/auth/Signup"));
const Login = React.lazy(() => import("./components/auth/Login"));
const Appointment = React.lazy(() => import("./pages/appointment"));
const Dashboard = React.lazy(() => import("./pages/admin/dashboard"));
const Patients = React.lazy(() => import("./pages/admin/patients"));
const Doctors = React.lazy(() => import("./pages/admin/doctors"));
const Schedules = React.lazy(() => import("./pages/admin/schedules"));
const ProtectedRoute = React.lazy(() => import("./components/ProtectedRoute"));
const UserProfile = React.lazy(() => import("./components/user/UserProfile"));
const UserAppointment = React.lazy(() =>
  import("./components/user/UserAppointment")
);
const Appointments = React.lazy(() => import("./pages/admin/appointments"));

function App() {
  return (
    <Routes>
      <Route
        path="/auth/login"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/auth/register"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/appointment"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/patients"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <Patients />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/doctors"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <Doctors />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/appointments"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/schedules"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <Schedules />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/user/profile"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/user/appointments"
        element={
<<<<<<< HEAD
          <Suspense fallback={<Loader />}>
=======
          <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 0faf25b5bb8c313b32bfdf49ea0cc24cfef72c1d
            <ProtectedRoute>
              <UserAppointment />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
