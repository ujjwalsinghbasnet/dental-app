import './App.css';
import { Route, Routes } from 'react-router'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './pages/Home';
import Appointment from './pages/appointment';

function App() {
  return (
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Signup />}/>
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/' element={<Home />} />
      </Routes>
  );
}

export default App;
