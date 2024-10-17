import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import axios from "axios";

function AddStaff() {
  return (
    <div className='App'>
        <AdminLayout>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h3 className="page-title mt-5">Add Staff</h3> </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form>
                                <div className="row formtype">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>User Name</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Email ID</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Staff ID</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Joining Date</label>
                                            <div className="cal-icon">
                                                <input type="text" className="form-control datetimepicker"/> </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Role</label>
                                            <select className="form-control" id="sel1" name="sellist1">
                                                <option>Select</option>
                                                <option>Admin</option>
                                                <option>Manager</option>
                                                <option>Staff</option>
                                                <option>Room Cleaners</option>
                                                <option>Servants</option>
                                                <option>Accountant</option>
                                                <option>Receiptionalist</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary buttonedit ml-2">Add Staff</button>
                </div>
            </div>
        </AdminLayout>
    </div>
  )
}

export default AddStaff