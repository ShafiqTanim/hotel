import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";


function AddCustomer() {
    const [inputs, setInputs] = useState({id:'',name:'',email:'',contact:'',address:'',nid:'', nationality:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
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
                apiurl=`/customer/edit/${inputs.id}`;
            }else{
                apiurl=`/customer/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/customer')
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
                                    <h3 className="page-title mt-5">Add Customer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form action="#" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Name</label>
                                        <div className="col-lg-9">
                                        <input type="text" defaultValue={inputs.name} name="name" onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Email</label>
                                        <div className="col-lg-9">
                                        <input type="email" name="email" defaultValue={inputs.email} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Contact</label>
                                        <div className="col-lg-9">
                                        <input type="tel" name="contact" defaultValue={inputs.contact} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Address</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="address" defaultValue={inputs.address} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">NID Number</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="nid" defaultValue={inputs.nid} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Nationality</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="nationality" defaultValue={inputs.nationality} onChange={handleChange} className="form-control"/>
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

export default AddCustomer