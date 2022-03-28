import './App.css';
import { Route, Routes } from 'react-router'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './pages/Home';
import Appointment from './pages/appointment';
import Dashboard from './pages/admin/dashboard';
import Patients from './pages/admin/patients';
import Doctors from './pages/admin/doctors';
import Schedules from './pages/admin/schedules';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Signup />}/>
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/admin/' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
        <Route path='/admin/patients' element={
          <ProtectedRoute>
            <Patients />
          </ProtectedRoute>
        }/>
        <Route path='/admin/doctors' element={
          <ProtectedRoute>
            <Doctors />
          </ProtectedRoute>
        }/>
        <Route path='/admin/schedules' element={
          <ProtectedRoute>
            <Schedules />
          </ProtectedRoute>
        }/>
        <Route path='/' element={<Home />} />
      </Routes>
  );
}

export default App;
