import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';
import axios from "axios";

function Staff() {
    return (
        <div className='App'>
            <AdminLayout>
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="mt-5">
                                        <h4 className="card-title float-left mt-2">All Staff</h4> <a href="add-staff.html" className="btn btn-primary float-right veiwbutton">Add Staff</a> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form>
                                    <div className="row formtype">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Staff ID</label>
                                                <input className="form-control" type="text" value="BKG-0001"/> </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Staff Name</label>
                                                <input className="form-control" type="text" value="BKG-0001"/> </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Role</label>
                                                <select className="form-control" id="sel1" name="sellist1">
                                                    <option>Select</option>
                                                    <option>Staff</option>
                                                    <option>Manager</option>
                                                    <option>Receptionalist</option>
                                                    <option>Accountant</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Search</label> <a href="#" className="btn btn-success btn-block mt-0 search_button"> Search </a> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card card-table">
                                    <div className="card-body booking_card">
                                        <div className="table-responsive">
                                            <table className="datatable table table-stripped table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Staff ID</th>
                                                        <th>Email</th>
                                                        <th>Ph.Number</th>
                                                        <th>Join Date</th>
                                                        <th>Leaving Time</th>
                                                        <th>On Duty</th>
                                                        <th>Role</th>
                                                        <th>Status</th>
                                                        <th className="text-right">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                            <a href="profile.html">Tommy Bernal <span>#0001</span></a>
                                                            </h2>
                                                        </td>
                                                        <td>ST-001</td>
                                                        <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ea9e85878793888f98848b86aa8d878b8386c4898587">[email&#160;protected]</a></td>
                                                        <td>631-254-6480</td>
                                                        <td>21-04-2020</td>
                                                        <td>06.00 PM</td>
                                                        <td>Yes</td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Staff</a> </div>
                                                        </td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Edit</a> </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-staff.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                            <a href="profile.html">Richard Brobst <span>#0001</span></a>
                                                            </h2>
                                                        </td>
                                                        <td>ST-002</td>
                                                        <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="42302b212a23302620302d20313602252f232b2e6c212d2f">[email&#160;protected]</a></td>
                                                        <td>830-468-1042</td>
                                                        <td>22-04-2020</td>
                                                        <td>07.00 PM</td>
                                                        <td>Yes</td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Staff</a> </div>
                                                        </td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-staff.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                            <a href="profile.html">Ellen Thill <span>#0001</span></a>
                                                            </h2>
                                                        </td>
                                                        <td>ST-003</td>
                                                        <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="04616868616a706c6d6868446369656d682a676b69">[email&#160;protected]</a></td>
                                                        <td>508-335-5531</td>
                                                        <td>23-04-2020</td>
                                                        <td>06.00 PM</td>
                                                        <td>Yes</td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Staff</a> </div>
                                                        </td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-staff.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                            <a href="profile.html">Corina Kelsey <span>#0001</span></a>
                                                            </h2>
                                                        </td>
                                                        <td>ST-004</td>
                                                        <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c9aaa6bba0a7a8a2aca5baacb089aea4a8a0a5e7aaa6a4">[email&#160;protected]</a></td>
                                                        <td>262-260-1170</td>
                                                        <td>21-04-2020</td>
                                                        <td>06.00 PM</td>
                                                        <td>Yes</td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Staff</a> </div>
                                                        </td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-staff.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                            <a href="profile.html">Carolyn Lane <span>#0001</span></a>
                                                            </h2>
                                                        </td>
                                                        <td>ST-005</td>
                                                        <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="95f6f4e7faf9ecfbf9f4fbf0d5f2f8f4fcf9bbf6faf8">[email&#160;protected]</a></td>
                                                        <td>570-458-0070</td>
                                                        <td>21-04-2020</td>
                                                        <td>08.00 PM</td>
                                                        <td>Yes</td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Staff</a> </div>
                                                        </td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-staff.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                            <a href="profile.html">David Alvarez <span>#0001</span></a>
                                                            </h2>
                                                        </td>
                                                        <td>ST-006</td>
                                                        <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="badedbccd3dedbd6ccdbc8dfc0faddd7dbd3d694d9d5d7">[email&#160;protected]</a></td>
                                                        <td>212-414-9510</td>
                                                        <td>22-04-2020</td>
                                                        <td>07.00 PM</td>
                                                        <td>Yes</td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Staff</a> </div>
                                                        </td>
                                                        <td>
                                                            <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-staff.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                            </div>
                                                        </td>
                                                    </tr>
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
    )
}

export default Staff