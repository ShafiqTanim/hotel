import * as React from 'react';
import Booking from './Pages/Booking';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
