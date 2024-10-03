import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';
import axios from "axios";


function Booking() {
	const [Booking, setBooking] = useState([]);
	useEffect(() => {
		getDatas();
	}, []);
	function getDatas(){
		axios.get('http://localhost/hotel/booking/index_booking.php').then(function(response){
			setBooking(response.data.data);
			console.log(response.data.data)
		});
	}
    return (
        <div className="App">
          <AdminLayout>
			<div className="page-wrapper">
				<div className="content container-fluid">
					{/* <div className="page-header">
						<div className="row">
							<div className="col-sm-12 mt-5">
								<h3 className="page-title mt-3">Good Morning Soeng Souy!</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item active">Booking</li>
								</ul>
							</div>
						</div>
					</div> */}
					<div className="row">
						{/* <div className="col-xl-3 col-sm-6 col-12">
							<div className="card board1 fill">
								<div className="card-body">
									<div className="dash-widget-header">
										<div>
											<h3 className="card_widget_header">236</h3>
											<h6 className="text-muted">Total Booking</h6> </div>
										<div className="ml-auto mt-md-3 mt-lg-0"> <span className="opacity-7 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus">
										<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
										<circle cx="8.5" cy="7" r="4"></circle>
										<line x1="20" y1="8" x2="20" y2="14"></line>
										<line x1="23" y1="11" x2="17" y2="11"></line>
										</svg></span> </div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card board1 fill">
								<div className="card-body">
									<div className="dash-widget-header">
										<div>
											<h3 className="card_widget_header">180</h3>
											<h6 className="text-muted">Available Rooms</h6> </div>
										<div className="ml-auto mt-md-3 mt-lg-0"> <span className="opacity-7 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign">
										<line x1="12" y1="1" x2="12" y2="23"></line>
										<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
										</svg></span> </div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card board1 fill">
								<div className="card-body">
									<div className="dash-widget-header">
										<div>
											<h3 className="card_widget_header">1538</h3>
											<h6 className="text-muted">Enquiry</h6> </div>
										<div className="ml-auto mt-md-3 mt-lg-0"> <span className="opacity-7 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z">
										</path>
										<polyline points="14 2 14 8 20 8"></polyline>
										<line x1="12" y1="18" x2="12" y2="12"></line>
										<line x1="9" y1="15" x2="15" y2="15"></line>
										</svg></span> </div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card board1 fill">
								<div className="card-body">
									<div className="dash-widget-header">
										<div>
											<h3 className="card_widget_header">364</h3>
											<h6 className="text-muted">Collections</h6> </div>
										<div className="ml-auto mt-md-3 mt-lg-0"> <span className="opacity-7 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
										<circle cx="12" cy="12" r="10"></circle>
										<line x1="2" y1="12" x2="22" y2="12"></line>
										<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
										</path>
										</svg></span> </div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
					<div className="row">
						<div className="col-md-12 col-lg-6">
							<div className="card card-chart">
								<div className="card-header">
									<h4 className="card-title">VISITORS</h4> </div>
								<div className="card-body">
									<div id="line-chart"></div>
								</div>
							</div>
						</div>
						<div className="col-md-12 col-lg-6">
							<div className="card card-chart">
								<div className="card-header">
									<h4 className="card-title">ROOMS BOOKED</h4> </div>
								<div className="card-body">
									<div id="donut-chart"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 d-flex">
							<div className="card card-table flex-fill">
								<div className="card-header">
									<h4 className="card-title float-left mt-2">Booking</h4>
									<button type="button" className="btn btn-primary float-right veiwbutton">Veiw All</button>
								</div>
								<div className="card-body">
									<div className="table-responsive">
										<table className="table table-hover table-center">
											<thead>
												<tr>
													<th>SL#</th>
													<th>Name</th>
													<th>Registration no</th>
													<th>Vehicle Type</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												{Booking.map((d) =>
													<tr key = {d.id}>
														<td>{d.id}</td>
														<td>{d.name}</td>
														<td>{d.registration_no}</td>
														<td>{d.vehicle_type}</td>
														<td>{d.created_by}</td>
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