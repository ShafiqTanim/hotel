import React from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';

function RosterSchedule() {
  return (
    <div className="App">
      <AdminLayout>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <div className="mt-5">
                    <h4 className="card-title float-left mt-2">Roster Schedule</h4>
                    <Link to={"/rostershedule/add"} className="btn btn-primary float-right veiwbutton">Add Roster</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card card-table">
                  <div className="card-body booking_card">
                    <div className="table-responsive">
                      <table className="datatable table table-stripped table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>SL#</th>
                            <th>Employee Name</th>
                            <th>Shift</th>
                            <th>Day</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>Morning</td>
                            <td>Monday</td>
                            <td>Active</td>
                            <td>
                              <Link to={`/roster/1`} className="btn btn-info">Edit</Link>
                              <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Jane Smith</td>
                            <td>Evening</td>
                            <td>Tuesday</td>
                            <td>Active</td>
                            <td>
                              <Link to={`/roster/2`} className="btn btn-info">Edit</Link>
                              <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Michael Johnson</td>
                            <td>Night</td>
                            <td>Wednesday</td>
                            <td>Inactive</td>
                            <td>
                              <Link to={`/roster/3`} className="btn btn-info">Edit</Link>
                              <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}

export default RosterSchedule;
