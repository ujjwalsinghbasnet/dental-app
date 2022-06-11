import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "./components/Loader";
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
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/auth/register"
        element={
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/appointment"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/patients"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Patients />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/doctors"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Doctors />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/appointments"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/admin/schedules"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <Schedules />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/user/profile"
        element={
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          </Suspense>
        }
      />
      <Route
        path="/user/appointments"
        element={
          <Suspense fallback={<Loader />}>
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
