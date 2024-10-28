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
// import Staff from './Pages/Staff';
// import AddStaff from './Pages/Staff/Add Staff';
import RoomCategory from './Pages/RoomCategory';
import AddRoomCategory from './Pages/RoomCategory/Add RoomCategory';
import ServiceList from './Pages/ServiceList';
import AddServiceList from './Pages/ServiceList/Add ServiceList';
import RoomList from './Pages/RoomList';
import AddRoomList from './Pages/RoomList/Add RoomList';
import Employee from './Pages/Employee';
import AddEmployee from './Pages/Employee/Add Employee';
import AddRosterSchedule from './Pages/RosterSchedule/Add RosterSchedule';
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
          <Route path="/customer/:id" element={<AddCustomer />} />
          <Route path="/roomcategory" element={<RoomCategory />} />
          <Route path="/roomcategory/add" element={<AddRoomCategory />} />
          <Route path="/roomcategory/:id" element={<AddRoomCategory />} />
          <Route path="/servicelist" element={<ServiceList />} />
          <Route path="/servicelist/add" element={<AddServiceList />} />
          <Route path="/servicelist/:id" element={<AddServiceList />} />
          <Route path="/roomlist" element={<RoomList />} />
          <Route path="/roomlist/add" element={<AddRoomList />} />
          <Route path="/roomlist/:id" element={<AddRoomList />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/add" element={<AddRooms />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path="/employee/:id" element={<AddEmployee />} />
          <Route path="/rosterschedule/add" element={<AddRosterSchedule />} />

          {/* <Route path="/staff" element={<Staff />} />
          <Route path="/staff/add" element={<AddStaff />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
