import * as React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
  
import {Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"

function App() {
  return (
   <>
   
    <Navbar />
    <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path = '/rooms/' element={<Rooms />} />
    {/* <Route  path = '/single-room' element={<SingleRoom />} /> */}
    <Route element={<Error />} />

    </Routes>
  
    
    </>
  );
}

export default App;
