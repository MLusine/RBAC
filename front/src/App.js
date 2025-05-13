import { Routes, Route, useLocation } from 'react-router-dom'
import Login from "../src/pages/Login/Login";
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
      
    </div>
  );
}

export default App;
