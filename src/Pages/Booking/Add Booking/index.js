import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import axios from '../../../components/axios';

function AddBooking() {
    const [inputs, setInputs] = useState({id:'',customer_id:'',room_list_id:'',contact_no:'',check_in_date:'',check_out_date:'',number_of_guest_adult:'',number_of_guest_child:'',total_amount:'',discount:'',vat:'',status:'',status:''});
    const [customerid, setCustomerid] = useState([]);
    const [roomlistid, setRoomlistid] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        axios.get(`${process.env.REACT_APP_API_URL}/booking/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/customer/index`);
            setCustomerid(response.data.data);
        } 
        catch (error) {
            console.error("Error fetching room categories:", error);
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/roomlist/index`);
            setRoomlistid(response.data.data);
        } 
        catch (error) {
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
                apiurl=`/booking/edit/${inputs.id}`;
            }else{
                apiurl=`/booking/create`;
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/booking')
        } 
        catch(e){
            console.log(e);
        }
    }

    const mapStatusToText = (status) => {
        switch (status) {
            case 0:
                return 'Available';
            case 1:
                return 'Booked';
            case 2:
                return 'Maintenance';
            default:
                return 'Unknown';
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
                                    <h3 className="page-title mt-5">Add Booking</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form action="#" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Customer</label>
                                        <div className="col-lg-9">
                                            {customerid.length > 0 && 
                                                <select className="form-control" name='customer_id' defaultValue={inputs.customer_id} onChange={handleChange}>
                                                    <option value="">Select Customer</option>
                                                    {customerid.map((d, key) =>
                                                        <option value={d.id}>{d.name}</option>
                                                    )}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Room Nunber</label>
                                        <div className="col-lg-9">
                                            {roomlistid.length > 0 && (
                                                <select className="form-control" name='room_list_id' defaultValue={inputs.room_list_id} onChange={handleChange}>
                                                    <option value="">Select Room</option>
                                                    {roomlistid.map((room, key) => {
                                                        const roomStatusText = mapStatusToText(room.status);
                                                        const isDisabled = room.status === 1 || room.status === 2;  // Booked or Maintenance
                                                        return (
                                                            <option 
                                                                key={key} 
                                                                value={room.id} 
                                                                disabled={isDisabled}
                                                                style={{
                                                                    cursor: isDisabled ? 'not-allowed' : 'pointer',  // Change cursor style when disabled
                                                                    color: isDisabled ? 'red' : 'black'  // Optional: Change text color to gray for disabled rooms
                                                                }}
                                                            >
                                                                {room.room_number} - {roomStatusText}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Contact No</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="contact_no" defaultValue={inputs.contact_no} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Check In</label>
                                        <div className="col-lg-9">
                                            <input type="date" name="check_in_date" defaultValue={inputs.check_in_date} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Check Out</label>
                                        <div className="col-lg-9">
                                            <input type="date" name="check_out_date" defaultValue={inputs.check_out_date} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Guest Adult</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="number_of_guest_adult" defaultValue={inputs.number_of_guest_adult} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Guest Child</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="number_of_guest_child" defaultValue={inputs.number_of_guest_child} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Total Amount</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="total_amount" defaultValue={inputs.total_amount} onChange={handleChange} className="form-control"/>
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
                                        <label className="col-lg-3 col-form-label">status</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="status" defaultValue={inputs.status} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Cancel Reason</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="cancel_reason" defaultValue={inputs.cancel_reason} onChange={handleChange} className="form-control"/>
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

export default AddBooking