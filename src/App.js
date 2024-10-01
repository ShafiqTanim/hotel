import * as React from 'react';

import Register from './Pages/Register';
import Login from './Pages/Login';

import Booking from './Pages/Booking';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Protected from './components/protected';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
