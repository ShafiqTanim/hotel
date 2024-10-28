import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

const AddRosterSchedule = () => {
    const [employees, setEmployees] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [days, setDays] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedShift, setSelectedShift] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeeResponse = await axios.get(`${process.env.REACT_APP_API_URL}/employees/index`);
                const shiftResponse = await axios.get(`${process.env.REACT_APP_API_URL}/shifts/index`);
                const dayResponse = await axios.get(`${process.env.REACT_APP_API_URL}/days/index`);

                setEmployees(employeeResponse.data);
                setShifts(shiftResponse.data);
                setDays(dayResponse.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scheduleData = {
            employeeId: selectedEmployee,
            shiftId: selectedShift,
            dayId: selectedDay
        };

        try {
            await axios.post('/api/schedules', scheduleData);
            // Reset form after submission or handle success
            setSelectedEmployee('');
            setSelectedShift('');
            setSelectedDay('');
            alert('Schedule added successfully!');
        } catch (error) {
            console.error("Error adding schedule", error);
            alert('Failed to add schedule.');
        }
    };

    return (
        <div className="App">
            <AdminLayout>
        <div className="page-wrapper">
        <div className="content container-fluid">
            <div className="page-header">
                <div className="row align-items-center">
                    <div className="col">
                        <h3 className="page-title mt-5">Add Schedule</h3>
                    </div>
                </div>
            </div>
            
            <div className="row">
                            <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="employee">Employee:</label>
                    <div className="col-lg-9">
                    {employees.length > 0 &&
                        <select 
                            id="employee" 
                            value={selectedEmployee} 
                            onChange={(e) => setSelectedEmployee(e.target.value)} 
                            required
                            >
                            <option value="">Select an employee</option>
                            {employees.map(emp => (
                                <option key={emp.id} value={emp.id}>{emp.name}</option>
                                // <option value={d.id}>{d.name}</option>
                            ))}
                        </select>
                    }
                    </div>
                    
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="shift">Shift:</label>
                    <div className="col-lg-9">
                        <select 
                        id="shift" 
                        value={selectedShift} 
                        onChange={(e) => setSelectedShift(e.target.value)} 
                        required
                    >
                        <option value="">Select a shift</option>
                        {shifts.map(shift => (
                            <option key={shift.id} value={shift.id}>{shift.name}</option>
                        ))}
                    </select>
                    </div>
                    
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label" htmlFor="day">Day:</label>
                    <div className="col-lg-9">
                        <select 
                        id="day" 
                        value={selectedDay} 
                        onChange={(e) => setSelectedDay(e.target.value)} 
                        required
                    >
                        <option value="">Select a day</option>
                        {days.map(day => (
                            <option key={day.id} value={day.id}>{day.name}</option>
                        ))}
                    </select>
                    </div>
                    
                </div>
                <button type="submit">Add Schedule</button>
            </form>
             </div>
        </div>
            
             </div>
        </div>
        </AdminLayout>
        </div>
    );
};

export default AddRosterSchedule;
