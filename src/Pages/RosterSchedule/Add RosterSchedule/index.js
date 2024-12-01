// import React, { useState, useEffect } from "react";
// import AdminLayout from "../../../layouts/AdminLayout";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function AddRosterSchedule() {
//   const navigate = useNavigate();
//   const [employees, setEmployees] = useState([]);
//   const [shifts, setShifts] = useState([]);
//   const [days, setDays] = useState([]);
//   const [inputs, setInputs] = useState({
//     employee_id: "",
//     shift_id: "",
//     day_id: "",
//     status: "Active"
//   });

//   useEffect(() => {
//     getInitialData();
//   }, []);

//   const getInitialData = () => {
//     // Fetch employees, shifts, and days from the API
//     axios.get(`${process.env.REACT_APP_API_URL}/employee/index`)
//       .then(response => {
//         setEmployees(response.data.data);
//       });
//     axios.get(`${process.env.REACT_APP_API_URL}/shift/index`)
//       .then(response => {
//         setShifts(response.data.data);
//       });
//     axios.get(`${process.env.REACT_APP_API_URL}/day/index`)
//       .then(response => {
//         setDays(response.data.data);
//       });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post(`${process.env.REACT_APP_API_URL}/rosterschedule/create`, inputs)
//       .then(response => {
//         // Redirect to roster schedule list after successful submit
//         navigate("/rosterschedule");
//       })
//       .catch(error => {
//         console.error("There was an error creating the roster schedule!", error);
//       });
//   };

//   return (
//     <div className="App">
//       <AdminLayout>
//         <div className="page-wrapper">
//           <div className="content container-fluid">
//             <div className="page-header">
//               <div className="row align-items-center">
//                 <div className="col">
//                   <h3 className="page-title mt-5">Add Roster Schedule</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <form onSubmit={handleSubmit}>
//                   {/* Employee Selection */}
//                   <div className="form-group row">
//                     <label className="col-lg-3 col-form-label">Employee</label>
//                     <div className="col-lg-9">
//                       {employees.length > 0 && (
//                         <select className="form-control" name="employee_id" value={inputs.employee_id} onChange={handleChange}>
//                           <option value="">Select Employee</option>
//                           {employees.map((d, key) => (
//                             <option key={key} value={d.id}>
//                               {d.name}
//                             </option>
//                           ))}
//                         </select>
//                       )}
//                     </div>
//                   </div>

//                   {/* Shift Selection */}
//                   <div className="form-group row">
//                     <label className="col-lg-3 col-form-label">Shift</label>
//                     <div className="col-lg-9">
//                       {shifts.length > 0 && (
//                         <select className="form-control" name="shift_id" value={inputs.shift_id} onChange={handleChange} >
//                           <option value="">Select Shift</option>
//                           {shifts.map((d, key) => (
//                             <option key={key} value={d.id}>
//                               {d.name}
//                             </option>
//                           ))}
//                         </select>
//                       )}
//                     </div>
//                   </div>

//                   {/* Day Selection */}
//                   <div className="form-group row">
//                     <label className="col-lg-3 col-form-label">Day</label>
//                     <div className="col-lg-9">
//                       {days.length > 0 && (
//                         <select className="form-control" name="day_id" value={inputs.day_id} onChange={handleChange} >
//                           <option value="">Select Day</option>
//                           {days.map((d, key) => (
//                             <option key={key} value={d.id}>
//                               {d.name}
//                             </option>
//                           ))}
//                         </select>
//                       )}
//                     </div>
//                   </div>

//                   {/* Status */}
//                   <div className="form-group row">
//                     <label className="col-lg-3 col-form-label">Status</label>
//                     <div className="col-lg-9">
//                       <select className="form-control" name="status" value={inputs.status} onChange={handleChange} >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="text-right">
//                     <button type="submit" className="btn btn-primary">
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </AdminLayout>
//     </div>
//   );
// }

// export default AddRosterSchedule;


import React, { useState, useEffect } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddRosterSchedule() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [inputs, setInputs] = useState({
    employee_id: "",
    schedule: [], // This will hold the shift and status for each day of the week
  });

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    // Fetch employees and shifts from the API
    axios.get(`${process.env.REACT_APP_API_URL}/employee/index`)
      .then(response => {
        setEmployees(response.data.data);
      });

    axios.get(`${process.env.REACT_APP_API_URL}/shift/index`)
      .then(response => {
        setShifts(response.data.data);
      });
  };

  const handleChange = (e, dayIndex) => {
    const { name, value } = e.target;
    const updatedSchedule = [...inputs.schedule];
    updatedSchedule[dayIndex] = {
      ...updatedSchedule[dayIndex],
      [name]: value,
    };
    setInputs({
      ...inputs,
      schedule: updatedSchedule,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/rosterschedule/create`, inputs)
      .then(response => {
        // Redirect to roster schedule list after successful submit
        navigate("/rosterschedule");
      })
      .catch(error => {
        console.error("There was an error creating the roster schedule!", error);
      });
  };

  // Days of the week
  const daysOfWeek = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ];

  return (
    <div className="App">
      <AdminLayout>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title mt-5">Add Roster Schedule</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                  {/* Employee Selection */}
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">Employee</label>
                    <div className="col-lg-9">
                      {employees.length > 0 && (
                        <select
                          className="form-control"
                          name="employee_id"
                          value={inputs.employee_id}
                          onChange={(e) => setInputs({ ...inputs, employee_id: e.target.value })}
                        >
                          <option value="">Select Employee</option>
                          {employees.map((d, key) => (
                            <option key={key} value={d.id}>
                              {d.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  {/* Schedule for Each Day of the Week */}
                  {daysOfWeek.map((day, index) => (
                    <div key={index} className="form-group row">
                      <label className="col-lg-3 col-form-label">{day}</label>
                      <div className="col-lg-9">
                        <div className="row">
                          {/* Shift Selection */}
                          <div className="col-md-5">
                            {shifts.length > 0 && (
                              <select
                                className="form-control"
                                name="shift_id"
                                value={inputs.schedule[index]?.shift_id || ""}
                                onChange={(e) => handleChange(e, index)}
                              >
                                <option value="">Select Shift</option>
                                {shifts.map((shift, key) => (
                                  <option key={key} value={shift.id}>
                                    {shift.name}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>

                          {/* Status */}
                          <div className="col-md-5">
                            <select
                              className="form-control"
                              name="status"
                              value={inputs.schedule[index]?.status || "Active"}
                              onChange={(e) => handleChange(e, index)}
                            >
                              <option value="Active">Active</option>
                              <option value="Inactive">Inactive</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Submit Button */}
                  <div className="text-right">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}

export default AddRosterSchedule;
