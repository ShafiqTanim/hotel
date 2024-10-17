import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';

import Booking from './Pages/Booking';
import AddBooking from './Pages/Booking/Add Booking';
import Dashboard from './Pages/Dashboard';
import Customer from './Pages/Customer';
import AddCustomer from './Pages/Customer/Add Customer';
import Rooms from './Pages/Rooms';
import AddRooms from './Pages/Rooms/Add Rooms';
import Staff from './Pages/Staff';
import AddStaff from './Pages/Staff/Add Staff';
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
          <Route path="/booking/add" element={<AddBooking />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/add" element={<AddCustomer />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/add" element={<AddRooms />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/staff/add" element={<AddStaff />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
