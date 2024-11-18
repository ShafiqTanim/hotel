import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AddServiceBill() {
    const [inputs, setInputs] = useState({id:'',booking_id:'',service_list_id:'',quantity:'',discount:'',vat:'',total_price:''});
    const [servicelistid, setServicelistid] = useState([]);
    const [booking, setBookingid] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/servicebill/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/servicelist/index`);
            setServicelistid(response.data.data);
        } 
        catch (error) {
            console.error("Error fetching room categories:", error);
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/booking/index`);
            setBookingid(response.data.data);
        } 
        catch (error) {
            console.error("Error fetching room categories:", error);
        }
    }

    useEffect(() => {
        if(id){
            getDatas();
        }getRelational()
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
        
        try{
            let apiurl='';
            if(inputs.id!=''){
                apiurl=`/servicebill/edit/${inputs.id}`;
            }else{
                apiurl=`/servicebill/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/servicebill')
        } 
        catch(e){
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
                                                <select className="form-control" name='booking_id' defaultValue={inputs.booking_id} onChange={handleChange}>
                                                    <option value="">Select Name</option>
                                                    {booking.map((d, key) =>
                                                        <option value={d.id}>{d.customerid.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">service list</label>
                                        <div className="col-lg-9">
                                            {servicelistid.length > 0 && 
                                                <select className="form-control" name='service_list_id' defaultValue={inputs.service_list_id} onChange={handleChange}>
                                                    <option value="">Select service list</option>
                                                    {servicelistid.map((d, key) =>
                                                        <option value={d.id}>{d.service_name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Discount</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="discount" defaultValue={inputs.discount} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Vat</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="vat" defaultValue={inputs.vat} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Total Amount</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="total_amount" defaultValue={inputs.total_amount} onChange={handleChange} className="form-control"/>
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

export default AddServiceBill