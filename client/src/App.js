import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Password from "./components/Auth/Password.js";
import Intrest from "./components/Auth/Intrest";

function App() {
  return (
    
   <>
    <Navbar/>
    <Home/>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/password" element={<Password/>} />
      <Route path="/intrest" element={<Intrest/>} />
    </Routes>
   </>
  );
}

export default App;
