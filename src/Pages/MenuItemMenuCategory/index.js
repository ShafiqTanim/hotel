import React from "react";
import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import axios from "axios";
import { Link } from 'react-router-dom';

function MenuItemMenuCategory(){
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/menuitemmenucategory/index`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/menuitemmenucategory/${id}`).then(function(response){
            getDatas();
        });
    }
    return(
        <div className="App">
            <AdminLayout>
				<div className="page-wrapper">
					<div className="content container-fluid">
						<div className="page-header">
							<div className="row align-items-center">
								<div className="col">
									<div className="mt-5">
										<h4 className="card-title float-left mt-2">Menu Item List</h4> <Link to={"/menuitemmenucategory/add"} className="btn btn-primary float-right veiwbutton">Add Menu Item List</Link> </div>
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
														<th>ID</th>
														<th>Menu Category</th>
														<th>Menu Item</th>
														<th className="text-left">Actions</th>
													</tr>
												</thead>
												<tbody>
													{data && data.map((d, key) =>
														<tr key={d.id}>
															<td >{d.id}</td>
															<td>{d.menucategory?.name}</td>
															<td>{d.menuitem?.name}</td>
															<td>
																<Link to={`/menuitemmenucategory/${d.id}`} className='btn btn-info' >Edit</Link>
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
    );
}
export default MenuItemMenuCategory;