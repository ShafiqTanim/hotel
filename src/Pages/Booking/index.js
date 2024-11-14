import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';
import axios from "axios";
import { Link } from 'react-router-dom';


function Booking() {
	const [Booking, setBooking] = useState([]);
	const [RoomCategory, setRoomCategory] = useState([]);
	useEffect(() => {
		getDatas();
	}, []);
	function getDatas(){
		axios.get(`${process.env.REACT_APP_API_URL}/booking/index`).then(function(response){
			setBooking(response.data.data);
			console.log(response.data.data)
		});
		axios.get(`${process.env.REACT_APP_API_URL}/roomcategory/index`).then(function(response){
			setRoomCategory(response.data.data);
			console.log(response.data.data)
		});
	}
	const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/booking/${id}`).then(function(response){
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
									<h4 className="card-title float-left mt-2">Booking</h4><Link to={"/booking/add"} className="btn btn-primary float-right veiwbutton">Add Booking</Link>
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
													<th>Name</th>
													<th>Room List</th>
													<th>Contact No</th>
													<th>Check In</th>
													<th>Check Out</th>
													<th>Guest Adult</th>
													<th>Guest Child</th>
													<th>Total</th>
													<th>Discount</th>
													<th>VAT</th>
													<th>Status</th>
													<th>Cancel Reason</th>
												</tr>
											</thead>
											<tbody>
												{Booking.map((d) =>
													<tr key = {d.id}>
														<td>{d.id}</td>
														<td>{d.customerid?.name}</td>
														<td>{d.roomlistid?.room_number}</td>
														<td>{d.contact_no}</td>
														<td>{d.check_in_date}</td>
														<td>{d.check_out_date}</td>
														<td>{d.number_of_guest_adult}</td>
														<td>{d.number_of_guest_child}</td>
														<td>{d.total_amount}</td>
														<td>{d.discount}</td>
														<td>{d.vat}</td>
														<td>{d.status}</td>
														<td>{d.cancel_reason}</td>
														<td>
															<Link to={`/booking/${d.id}`} className='btn btn-info' >Edit</Link>
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
  
  export default Booking;