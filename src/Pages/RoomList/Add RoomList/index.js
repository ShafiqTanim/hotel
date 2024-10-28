import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../components/axios';


function AddRoomList() {
    const [inputs, setInputs] = useState({id:'',room_number:'',room_category_id:'',description:'',status:''});
    const [roomcategory, setRoomCategory] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/roomlist/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    // const getRelational = async () => {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/roomcategory/index`);
    //         setRoomCategory(response.data.data);
    //     } catch (error) {
    //         console.error("Error fetching room categories:", error);
    //     }
    // }

    const getRelational = async (e) => {
        let roles = await axios.get(`/roomcategory/index`)
        setRoomCategory(roles.data.data);
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
                apiurl=`/roomlist/edit/${inputs.id}`;
            }else{
                apiurl=`/roomlist/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/roomlist')
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
                                    <h3 className="page-title mt-5">Add Room List</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form action="#" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Room Number</label>
                                        <div className="col-lg-9">
                                        <input type="text" defaultValue={inputs.room_number} name="room_number" onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Room Category</label>
                                        <div className="col-lg-9">
                                        {roomcategory.length > 0 && 
                                            <select className="form-control" id="room_category_id" name='room_category_id' defaultValue={inputs.room_category_id} onChange={handleChange}>
                                                <option value="">Select Catagory</option>
                                                {roomcategory.map((d, key) =>
                                                    <option value={d.id}>{d.category_name}</option>
                                                )}
                                            </select>
                                        }
                                        {/* <input type="text" name="room_category_id" defaultValue={inputs.room_category_id} onChange={handleChange} className="form-control"/> */}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">description</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="description" defaultValue={inputs.description} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">status</label>
                                        <div className="col-lg-9">
                                        <input type="text" name="status" defaultValue={inputs.status} onChange={handleChange} className="form-control"/>
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

export default AddRoomList