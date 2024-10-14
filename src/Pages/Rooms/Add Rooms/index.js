import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import axios from "axios";

function AddRooms() {
  return (
    <div className='App'>
        <AdminLayout>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h3 className="page-title mt-5">Add Room</h3> </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form>
                                <div className="row formtype">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Room Number</label>
                                            <input className="form-control" type="text" value="BKG-0001"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Room Type</label>
                                            <select className="form-control" id="sel1" name="sellist1">
                                                <option>Select</option>
                                                <option>Single</option>
                                                <option>Double</option>
                                                <option>Quad</option>
                                                <option>King</option>
                                                <option>Suite</option>
                                                <option>Villa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>AC/NON-AC</label>
                                            <select className="form-control" id="sel2" name="sellist1">
                                                <option>Select</option>
                                                <option>AC</option>
                                                <option>NON-AC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Food</label>
                                            <select className="form-control" id="sel3" name="sellist1">
                                                <option>Select</option>
                                                <option>Free Breakfast</option>
                                                <option>Free Lunch</option>
                                                <option>Free Dinner</option>
                                                <option>Free Breakfast & Dinner</option>
                                                <option>Free Welcome Drink</option>
                                                <option>No Free Food</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Bed Count</label>
                                            <select className="form-control" id="sel" name="sellist1">
                                                <option>Select</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Charges For cancellation</label>
                                            <select className="form-control" id="sel4" name="sellist1">
                                                <option>Select</option>
                                                <option>Free</option>
                                                <option>5% Before 24Hours</option>
                                                <option>No Cancellation Allow</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Rent</label>
                                            <input type="text" className="form-control" id="usr"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" id="usr1"/> </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>File Upload</label>
                                            <div className="custom-file mb-3">
                                                <input type="file" className="custom-file-input" id="customFile" name="filename"/>
                                                <label className="custom-file-label" for="customFile">Choose file</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary buttonedit ml-2">Save</button>
                    <button type="button" className="btn btn-primary buttonedit">Cancel</button>
                </div>
            </div>
        </AdminLayout>
    </div>
  )
}

export default AddRooms