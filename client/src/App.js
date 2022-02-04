import './App.css';
import { Route, Routes } from 'react-router'
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home'

function App() {
  return (
      <Routes>
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Signup />}/>
        <Route path='/' element={<Home />} />
      </Routes>
  );
}

export default App;
