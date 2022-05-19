import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
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
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/auth/register"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/appointment"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/patients"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Patients />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/doctors"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Doctors />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/appointments"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/schedules"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Schedules />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/user/profile"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/user/appointments"
        element={
          <Suspense fallback={<div>Loading...</div>}>
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
