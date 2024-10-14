import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';
import axios from "axios";

function Rooms() {
  return (
    <div className='App'>
        <AdminLayout>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <div className="mt-5">
                                    <h4 className="card-title float-left mt-2">All Rooms</h4> <a href="add-room.html" className="btn btn-primary float-right veiwbutton">Add Room</a> </div>
                            </div>
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
                                                    <th>Booking ID</th>
                                                    <th>Name</th>
                                                    <th>Room Type</th>
                                                    <th>Total Numbers</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                    <th>Arrival Date</th>
                                                    <th>Depature Date</th>
                                                    <th>Email ID</th>
                                                    <th>Ph.Number</th>
                                                    <th>Status</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>BKG-0001</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                        <a href="profile.html">Tommy Bernal <span>#0001</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>Double</td>
                                                    <td>10</td>
                                                    <td>21-03-2020</td>
                                                    <td>11.00 AM</td>
                                                    <td>22-03-2020</td>
                                                    <td>23-03-2020</td>
                                                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c0b4afadadb9a2a5b2aea1ac80a5b8a1adb0aca5eea3afad">[email&#160;protected]</a></td>
                                                    <td>631-254-6480</td>
                                                    <td>
                                                        <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-room.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>BKG-0002</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                        <a href="profile.html">Richard Brobst <span>#0002</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>Single</td>
                                                    <td>8</td>
                                                    <td>21-03-2020</td>
                                                    <td>09.00 AM</td>
                                                    <td>22-03-2020</td>
                                                    <td>23-03-2020</td>
                                                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="03716a606b62716761716c61707743667b626e736f662d606c6e">[email&#160;protected]</a></td>
                                                    <td>830-468-1042</td>
                                                    <td>
                                                        <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Inactive</a> </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-room.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>BKG-0003</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                        <a href="profile.html">Ellen Thill <span>#0003</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>Double</td>
                                                    <td>10</td>
                                                    <td>21-03-2020</td>
                                                    <td>08.00 AM</td>
                                                    <td>22-03-2020</td>
                                                    <td>23-03-2020</td>
                                                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8ce9e0e0e9e2f8e4e5e0e0cce9f4ede1fce0e9a2efe3e1">[email&#160;protected]</a></td>
                                                    <td>508-335-5531</td>
                                                    <td>
                                                        <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-room.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>BKG-0004</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                        <a href="profile.html">Corina Kelsey <span>#0004</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>Single</td>
                                                    <td>15</td>
                                                    <td>21-03-2020</td>
                                                    <td>12.00 AM</td>
                                                    <td>22-03-2020</td>
                                                    <td>23-03-2020</td>
                                                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="462529342f28272d232a35233f06233e272b362a236825292b">[email&#160;protected]</a></td>
                                                    <td>262-260-1170</td>
                                                    <td>
                                                        <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-room.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>BKG-0005</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                        <a href="profile.html">Carolyn Lane <span>#0005</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>Double</td>
                                                    <td>12</td>
                                                    <td>21-03-2020</td>
                                                    <td>06.00 AM</td>
                                                    <td>22-03-2020</td>
                                                    <td>23-03-2020</td>
                                                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="452624372a293c2b29242b2005203d24283529206b262a28">[email&#160;protected]</a></td>
                                                    <td>570-458-0070</td>
                                                    <td>
                                                        <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Active</a> </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-room.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>BKG-0006</td>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                        <a href="profile.html">David Alvarez <span>#0006</span></a>
                                                        </h2>
                                                    </td>
                                                    <td>Single</td>
                                                    <td>7</td>
                                                    <td>21-03-2020</td>
                                                    <td>10.00 AM</td>
                                                    <td>22-03-2020</td>
                                                    <td>23-03-2020</td>
                                                    <td><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cfabaeb9a6abaea3b9aebdaab58faab7aea2bfa3aae1aca0a2">[email&#160;protected]</a></td>
                                                    <td>212-414-9510</td>
                                                    <td>
                                                        <div className="actions"> <a href="#" className="btn btn-sm bg-success-light mr-2">Inactive</a> </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="dropdown dropdown-action"> <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v ellipse_color"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right"> <a className="dropdown-item" href="edit-room.html"><i className="fas fa-pencil-alt m-r-5"></i> Edit</a> <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_asset"><i className="fas fa-trash-alt m-r-5"></i> Delete</a> </div>
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
                <div id="delete_asset" className="modal fade delete-modal" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center"> <img src="assets/img/sent.png" alt="" width="50" height="46"/>
                                <h3 className="delete_class">Are you sure want to delete this Asset?</h3>
                                <div className="m-t-20"> <a href="#" className="btn btn-white" data-dismiss="modal">Close</a>
                                    <button type="submit" className="btn btn-danger">Delete</button>
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

export default Rooms