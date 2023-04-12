import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Password from "./components/Auth/Password.js";
import Intrest from "./components/Auth/Intrest";
import { useSelector, useDispatch } from "react-redux"

function App() {
  const { user } = useSelector(state => state.userReducer)
  return (
   <>
    <Navbar/>
    <Home/>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/password" element={user ? <Password/> : <Login/>} />
      <Route path="/intrest" element={user ? <Intrest/> : <Login/>} />
    </Routes>
   </>
  );
}

export default App;
