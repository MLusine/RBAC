import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import CreateUser from "./pages/CreateUser/CreateUser";
import EditUser from "./pages/EditUser/EditUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/register/:token" element={<Register />} />
        <Route path="/edit/:id" element={<EditUser />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
