// import React from 'react';
// import { useEffect, useState } from "react";
// import AdminLayout from '../../../layouts/AdminLayout';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// function AddServiceBill() {
//     const [inputs, setInputs] = useState({id:'',booking_id:'',service_list_id:'',quantity:'',discount:'',vat:'',total_price:''});
//     const [servicelistid, setServicelistid] = useState([]);
//     const [booking, setBookingid] = useState([]);
//     const navigate=useNavigate();
//     const {id} = useParams();
    
//     function getDatas(){
//         axios.get(`${process.env.REACT_APP_API_URL}/servicebill/${id}`).then(function(response) {
//             setInputs(response.data.data);
//         });
//     }

//     const getRelational = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API_URL}/servicelist/index`);
//             setServicelistid(response.data.data);
//         } 
//         catch (error) {
//             console.error("Error fetching room categories:", error);
//         }
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API_URL}/booking/index`);
//             setBookingid(response.data.data);
//         } 
//         catch (error) {
//             console.error("Error fetching room categories:", error);
//         }
//     }

//     useEffect(() => {
//         if(id){
//             getDatas();
//         }getRelational()
//     }, []);

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}));
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         console.log(inputs)
        
//         try{
//             let apiurl='';
//             if(inputs.id!=''){
//                 apiurl=`/servicebill/edit/${inputs.id}`;
//             }else{
//                 apiurl=`/servicebill/create`;
//             }
            
//             let response= await axios({
//                 method: 'post',
//                 responsiveTYpe: 'json',
//                 url: `${process.env.REACT_APP_API_URL}${apiurl}`,
//                 data: inputs
//             });
//             navigate('/servicebill')
//         } 
//         catch(e){
//             console.log(e);
//         }
//     }
    
//     return (
//         <div className="App">
//             <AdminLayout>
//                 <div className="page-wrapper">
//                     <div className="content container-fluid">
//                         <div className="page-header">
//                             <div className="row align-items-center">
//                                 <div className="col">
//                                     <h3 className="page-title mt-5">Add Service Bill</h3>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <form action="#" onSubmit={handleSubmit}>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Customer</label>
//                                         <div className="col-lg-9">
//                                             {booking.length > 0 && 
//                                                 <select className="form-control" name='booking_id' defaultValue={inputs.booking_id} onChange={handleChange}>
//                                                     <option value="">Select Name</option>
//                                                     {booking.map((d, key) =>
//                                                         <option value={d.id}>{d.customerid.name}</option>
//                                                     )}
//                                                 </select>
//                                             }
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">service list</label>
//                                         <div className="col-lg-9">
//                                             {servicelistid.length > 0 && 
//                                                 <select className="form-control" name='service_list_id' defaultValue={inputs.service_list_id} onChange={handleChange}>
//                                                     <option value="">Select service list</option>
//                                                     {servicelistid.map((d, key) =>
//                                                         <option value={d.id}>{d.service_name}</option>
//                                                     )}
//                                                 </select>
//                                             }
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Discount</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="discount" defaultValue={inputs.discount} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Vat</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="vat" defaultValue={inputs.vat} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Total Amount</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="total_amount" defaultValue={inputs.total_amount} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="text-right">
//                                         <button type="submit" className="btn btn-primary">Submit</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </AdminLayout>
//         </div>
//     )
// }

// export default AddServiceBill

import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AddServiceBill() {
    const [inputs, setInputs] = useState({id: '', booking_id: '', service_list_id: '', quantity: '', discount: '', vat: '', total_price: ''});
    const [servicelistid, setServicelistid] = useState([]);
    const [booking, setBookingid] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    // Function to fetch existing service bill data if editing
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/servicebill/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    // Function to fetch the service list and booking data
    const getRelational = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/servicelist/index`);
            setServicelistid(response.data.data);
        } catch (error) {
            console.error("Error fetching service list:", error);
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/booking/index`);
            setBookingid(response.data.data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    }

    useEffect(() => {
        if(id) {
            getDatas();
        }
        getRelational();
    }, []);

    // Handle form field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevState => {
            const updatedInputs = { ...prevState, [name]: value };
            
            // Automatically calculate total price when quantity, discount, or vat changes
            if (name === 'quantity' || name === 'discount' || name === 'vat' || name === 'service_list_id') {
                calculateTotal(updatedInputs);
            }
            
            return updatedInputs;
        });
    }

    // Calculate the total price based on quantity, service price, discount, and VAT
    const calculateTotal = (updatedInputs) => {
        const { quantity, discount, vat, service_list_id } = updatedInputs;

        // Find the service selected and get its price
        const service = servicelistid.find(service => service.id === parseInt(service_list_id)); // Convert to int for comparison
        const servicePrice = service ? parseFloat(service.price) : 0; // Default to 0 if no service is selected

        // If quantity is not entered, default to 1
        const quantityValue = quantity ? parseFloat(quantity) : 1;
        let totalAmount = servicePrice * quantityValue; // Calculate base total
        
        // Apply discount if any (percentage)
        if (discount) {
            totalAmount -= (totalAmount * (parseFloat(discount) / 100));
        }

        // Apply VAT if any (percentage)
        if (vat) {
            totalAmount += (totalAmount * (parseFloat(vat) / 100));
        }

        // Set the total price in the state
        setInputs(prevState => ({
            ...prevState,
            total_price: totalAmount.toFixed(2) // Round the total amount to 2 decimal places
        }));
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let apiurl = '';
            if (inputs.id !== '') {
                apiurl = `/servicebill/edit/${inputs.id}`;
            } else {
                apiurl = `/servicebill/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/servicebill'); // Redirect to service bills page after submission
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="App">
            <AdminLayout>
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title mt-5">Add Service Bill</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form action="#" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Customer</label>
                                        <div className="col-lg-9">
                                            {booking.length > 0 && 
                                                <select className="form-control" name='booking_id' value={inputs.booking_id} onChange={handleChange}>
                                                    <option value="">Select Name</option>
                                                    {booking.map((d, key) =>
                                                        <option value={d.id} key={key}>{d.customerid.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Service List</label>
                                        <div className="col-lg-9">
                                            {servicelistid.length > 0 && 
                                                <select className="form-control" name='service_list_id' value={inputs.service_list_id} onChange={handleChange}>
                                                    <option value="">Select Service</option>
                                                    {servicelistid.map((service, key) =>
                                                        <option value={service.id} key={key}>{service.service_name} - ${service.price}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Quantity</label>
                                        <div className="col-lg-9">
                                            <input type="number" name="quantity" value={inputs.quantity} onChange={handleChange} className="form-control" min="1"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Discount (%)</label>
                                        <div className="col-lg-9">
                                            <input type="number" name="discount" value={inputs.discount} onChange={handleChange} className="form-control" min="0"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">VAT (%)</label>
                                        <div className="col-lg-9">
                                            <input type="number" name="vat" value={inputs.vat} onChange={handleChange} className="form-control" min="0"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Total Amount</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="total_price" value={inputs.total_price} readOnly className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </div>
    )
}

export default AddServiceBill;

