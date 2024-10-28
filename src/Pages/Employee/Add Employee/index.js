import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import axios from '../../../components/axios';


function AddEmployee() {
    const [inputs, setInputs] = useState({id:'',room_number:'',room_category_id:'',description:'',status:''});
    const [role, setRole] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/employee/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/role/index`);
            setRole(response.data.data);
        } catch (error) {
            console.error("Error fetching room categories:", error);
        }
    }

    // const getRelational = async (e) => {
    //     let roles = await axios.get(`/roomcategory/index`)
    //     setRoomCategory(roles.data.data);
    // }

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
                apiurl=`/employee/edit/${inputs.id}`;
            }else{
                apiurl=`/employee/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/employee')
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
                                    <h3 className="page-title mt-5">Add Employee</h3>
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
                                        <label className="col-lg-3 col-form-label">Role</label>
                                        <div className="col-lg-9">
                                        {role.length > 0 && 
                                            <select className="form-control" id="role_id" name='role_id' defaultValue={inputs.role_id} onChange={handleChange}>
                                                <option value="">Select Role</option>
                                                {role.map((d, key) =>
                                                    <option value={d.id}>{d.name}</option>
                                                )}
                                            </select>
                                        }
                                        {/* <input type="text" name="room_category_id" defaultValue={inputs.room_category_id} onChange={handleChange} className="form-control"/> */}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">contact</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="contact" defaultValue={inputs.contact} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">email</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="email" defaultValue={inputs.email} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">address</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="address" defaultValue={inputs.address} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">nationality</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="nationality" defaultValue={inputs.nationality} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">hire_date</label>
                                        <div className="col-lg-9">
                                        <input type="date" name="hire_date" defaultValue={inputs.hire_date} onChange={handleChange} className="form-control"/>
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

export default AddEmployee