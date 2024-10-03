import React from "react";
import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import axios from "axios";
import { Link } from 'react-router-dom';

function Customer(){
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/customer/index`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/customer/${id}`).then(function(response){
            getDatas();
        });
    }
    return(
        <div className="App">
            <AdminLayout>
            <div class="page-wrapper">
			<div class="content container-fluid">
				<div class="page-header">
					<div class="row align-items-center">
						<div class="col">
							<div class="mt-5">
								<h4 class="card-title float-left mt-2">Customers</h4> <a href="add-customer.html" class="btn btn-primary float-right veiwbutton">Add Customers</a> </div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<div class="card card-table">
							<div class="card-body booking_card">
								<div class="table-responsive">
									<table class="datatable table table-stripped table table-hover table-center mb-0">
										<thead>
											<tr>
												<th>Customer ID</th>
												<th>First Name</th>
												<th>Last Name</th>
												<th>Email</th>
												<th>Phone Numbers</th>
												<th>Address</th>
												<th class="text-right">Actions</th>
											</tr>
										</thead>
										<tbody>
                                            {data && data.map((d, key) =>
                                                <tr key={d.id}>
                                                    <td >{d.id}</td>
                                                    <td >{d.first_name}</td>
                                                    <td >{d.last_name}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.phone_number}</td>
                                                    <td>{d.address}</td>
                                                    <td>
                                                        <Link to={`/customer/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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
			<div id="delete_asset" class="modal fade delete-modal" role="dialog">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body text-center"> <img src="assets/img/sent.png" alt="" width="50" height="46"/>
							<h3 class="delete_class">Are you sure want to delete this Asset?</h3>
							<div class="m-t-20"> <a href="#" class="btn btn-white" data-dismiss="modal">Close</a>
								<button type="submit" class="btn btn-danger">Delete</button>
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
export default Customer;