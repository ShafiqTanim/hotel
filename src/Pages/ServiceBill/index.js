import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import axios from "axios";
import { Link } from 'react-router-dom';

function ServiceBill() {
    const [serviceBill, setServiceBill] = useState([]);
    const [booking, setBooking] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    
    // Fetch data for ServiceBill, Booking, and Service List
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/servicebill/index`).then(function(response) {
            setServiceBill(response.data.data);
        });

        axios.get(`${process.env.REACT_APP_API_URL}/booking/index`).then(function(response) {
            setBooking(response.data.data);
        });

        axios.get(`${process.env.REACT_APP_API_URL}/servicelist/index`).then(function(response) {
            setServiceList(response.data.data);
        });
    }

    // Find customer name by booking_id
    const getCustomerName = (bookingId) => {
        const bookingItem = booking.find(b => b.id === bookingId);
        return bookingItem ? bookingItem.customerid.name : "Unknown";
    }

    // Find service name by service_list_id
    const getServiceName = (serviceListId) => {
        const serviceItem = serviceList.find(s => s.id === serviceListId);
        return serviceItem ? serviceItem.service_name : "Unknown";
    }

    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/servicebill/${id}`).then(function(response) {
            getDatas();
        });
    }

    return (
        <div className="App">
            <AdminLayout>
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="mt-5">
                                        <h4 className="card-title float-left mt-2">ServiceBill</h4>
                                        <Link to={"/servicebill/add"} className="btn btn-primary float-right veiwbutton">Add ServiceBill</Link>
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
                                                        <th>Customer Name</th>
                                                        <th>Service List</th>
                                                        <th>Quantity</th>
                                                        <th>Discount %</th>
                                                        <th>VAT %</th>
                                                        <th>Total</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {serviceBill.map((d) =>
                                                        <tr key={d.id}>
                                                            <td>{d.id}</td>
                                                            <td>{getCustomerName(d.booking_id)}</td>
                                                            <td>{getServiceName(d.service_list_id)}</td>
                                                            <td>{d.quantity}</td>
                                                            <td>{d.discount}</td>
                                                            <td>{d.vat}</td>
                                                            <td>{d.total_price}</td>
                                                            <td>
                                                                <Link to={`/servicebill/${d.id}`} className='btn btn-info'>Edit</Link>
                                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                                            </td>
                                                        </tr>
                                                    )}
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

export default ServiceBill;
