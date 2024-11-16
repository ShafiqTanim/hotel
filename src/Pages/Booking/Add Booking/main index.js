// import React from 'react';
// import { useEffect, useState } from "react";
// import AdminLayout from '../../../layouts/AdminLayout';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// // import axios from '../../../components/axios';

// function AddBooking() {
//     const [inputs, setInputs] = useState({id:'',customer_id:'',room_list_id:'',contact_no:'',check_in_date:'',check_out_date:'',number_of_guest_adult:'',number_of_guest_child:'',total_amount:'',discount:'',vat:'',status:'',status:''});
//     const [customerid, setCustomerid] = useState([]);
//     const [roomlistid, setRoomlistid] = useState([]);
//     const navigate=useNavigate();
//     const {id} = useParams();
    
//     function getDatas(){
//         axios.get(`${process.env.REACT_APP_API_URL}/booking/${id}`).then(function(response) {
//             setInputs(response.data.data);
//         });
//     }

//     const getRelational = async () => {
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API_URL}/customer/index`);
//             setCustomerid(response.data.data);
//         } 
//         catch (error) {
//             console.error("Error fetching room categories:", error);
//         }
//         try {
//             const response = await axios.get(`${process.env.REACT_APP_API_URL}/roomlist/index`);
//             setRoomlistid(response.data.data);
//         } 
//         catch (error) {
//             console.error("Error fetching room categories:", error);
//         }
//     }

//     // const getRelational = async (e) => {
//     //     let roles = await axios.get(`/roomcategory/index`)
//     //     setRoomCategory(roles.data.data);
//     // }

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

//     // const handleSubmit = async(e) => {
//     //     e.preventDefault();
//     //     console.log(inputs)
        
//     //     try{
//     //         let apiurl='';
//     //         if(inputs.id!=''){
//     //             apiurl=`/booking/edit/${inputs.id}`;
//     //         }else{
//     //             apiurl=`/booking/create`;
//     //         }
            
//     //         // let response= await axios({
//     //         //     method: 'post',
//     //         //     responsiveTYpe: 'json',
//     //         //     url: `${process.env.REACT_APP_API_URL}${apiurl}`,
//     //         //     data: inputs
//     //         // });

//     //             // Create the booking
//     //         let response = await axios({
//     //             method: 'post',
//     //             responseType: 'json',
//     //             url: `${process.env.REACT_APP_API_URL}${apiurl}`,
//     //             data: inputs
//     //         });

//     //         // After creating booking, update the room status to "Booked"
//     //         const roomId = inputs.room_list_id; // Get the room ID
//     //         const updateRoomStatusResponse = await axios({
//     //             method: 'put',
//     //             url: `${process.env.REACT_APP_API_URL}/roomlist/${roomId}`,
//     //             data: { status: 1 } // 1 stands for 'Booked' status
//     //         });

//     //         navigate('/booking')
//     //     } 
//     //     catch(e){
//     //         console.log(e);
//     //     }
//     // }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(inputs);
    
//         try {
//             let apiurl = '';
//             if (inputs.id !== '') {
//                 apiurl = `/booking/edit/${inputs.id}`;
//             } else {
//                 apiurl = `/booking/create`;
//             }
    
//             // First, create the booking by sending a POST request
//             let response = await axios({
//                 method: 'post',
//                 responseType: 'json',
//                 url: `${process.env.REACT_APP_API_URL}${apiurl}`,
//                 data: inputs,
//             });
    
//             // After creating the booking, update the room's status to "Booked"
//             const roomId = inputs.room_list_id; // Get the room ID from the form
//             const updateRoomStatusResponse = await axios({
//                 method: 'put',  // Use PUT here since we updated the backend
//                 url: `${process.env.REACT_APP_API_URL}/roomlist/edit/${roomId}`,
//                 data: { status: 1 } // 1 stands for 'Booked' status
//             });
    
//             // If the room status was successfully updated, navigate to the booking page
//             if (updateRoomStatusResponse.data.success) {
//                 navigate('/booking');
//             } else {
//                 console.error("Failed to update room status.");
//             }
//         } catch (e) {
//             console.error("Error while booking the room:", e);
//         }
//     };
    

//     const mapStatusToText = (status) => {
//         switch (status) {
//             case 0:
//                 return 'Available';
//             case 1:
//                 return 'Booked';
//             case 2:
//                 return 'Maintenance';
//             default:
//                 return 'Unknown';
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
//                                     <h3 className="page-title mt-5">Add Booking</h3>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <form action="#" onSubmit={handleSubmit}>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Customer</label>
//                                         <div className="col-lg-9">
//                                             {customerid.length > 0 && 
//                                                 <select className="form-control" name='customer_id' defaultValue={inputs.customer_id} onChange={handleChange}>
//                                                     <option value="">Select Customer</option>
//                                                     {customerid.map((d, key) =>
//                                                         <option value={d.id}>{d.name}</option>
//                                                     )}
//                                                 </select>
//                                             }
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Room Nunber</label>
//                                         <div className="col-lg-9">
//                                             {roomlistid.length > 0 && (
//                                                 <select className="form-control" name='room_list_id' defaultValue={inputs.room_list_id} onChange={handleChange}>
//                                                     <option value="">Select Room</option>
//                                                     {roomlistid.map((room, key) => {
//                                                         const roomStatusText = mapStatusToText(room.status);
//                                                         const isDisabled = room.status === 1 || room.status === 2;  // Booked or Maintenance
//                                                         return (
//                                                             <option 
//                                                                 key={key} 
//                                                                 value={room.id} 
//                                                                 disabled={isDisabled}
//                                                                 style={{
//                                                                     cursor: isDisabled ? 'not-allowed' : 'pointer',  // Change cursor style when disabled
//                                                                     color: isDisabled ? 'red' : 'black'  // Optional: Change text color to gray for disabled rooms
//                                                                 }}
//                                                             >
//                                                                 {room.room_number} - {roomStatusText}
//                                                             </option>
//                                                         );
//                                                     })}
//                                                 </select>
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Contact No</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="contact_no" defaultValue={inputs.contact_no} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Check In</label>
//                                         <div className="col-lg-9">
//                                             <input type="date" name="check_in_date" defaultValue={inputs.check_in_date} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Check Out</label>
//                                         <div className="col-lg-9">
//                                             <input type="date" name="check_out_date" defaultValue={inputs.check_out_date} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Guest Adult</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="number_of_guest_adult" defaultValue={inputs.number_of_guest_adult} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Guest Child</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="number_of_guest_child" defaultValue={inputs.number_of_guest_child} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Total Amount</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="total_amount" defaultValue={inputs.total_amount} onChange={handleChange} className="form-control"/>
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
//                                         <label className="col-lg-3 col-form-label">status</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="status" defaultValue={inputs.status} onChange={handleChange} className="form-control"/>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row">
//                                         <label className="col-lg-3 col-form-label">Cancel Reason</label>
//                                         <div className="col-lg-9">
//                                             <input type="text" name="cancel_reason" defaultValue={inputs.cancel_reason} onChange={handleChange} className="form-control"/>
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

// export default AddBooking


import React, { useEffect, useState } from "react";
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AddBooking() {
    const [inputs, setInputs] = useState({
        id: '',
        customer_id: '',
        room_list_id: '',
        contact_no: '',
        check_in_date: '',
        check_out_date: '',
        number_of_guest_adult: '',
        number_of_guest_child: '',
        total_amount: '',  // Will be dynamically calculated
        discount: '',
        vat: '',
        status: '',
        cancel_reason: ''
    });
    const [customerid, setCustomerid] = useState([]);
    const [roomlistid, setRoomlistid] = useState([]);
    const [roomPrice, setRoomPrice] = useState(0);  // Store room price separately
    const navigate = useNavigate();
    const { id } = useParams();

    // const getDatas = () => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/booking/${id}`).then((response) => {
    //         const bookingData = response.data.data;
    //         setInputs(bookingData);
    
    //         // Ensure roomlistid is available
    //         if (roomlistid.length > 0) {
    //             const selectedRoom = roomlistid.find(room => room.id === bookingData.room_list_id);
    //             if (selectedRoom) {
    //                 setRoomPrice(parseFloat(selectedRoom.roomcategory.price));  // Convert price to number
    //                 console.log("Room price from category:", selectedRoom.roomcategory.price);
    //             }
    //         }
    //     });
    // };

    const getDatas = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/booking/${id}`).then((response) => {
            const bookingData = response.data.data;
            setInputs(bookingData);
    
            console.log("Room List:", roomlistid); // Log room list
            console.log("Booking Room ID:", bookingData.room_list_id); // Log the room ID in the booking
    
            // Ensure roomlistid is available
            const selectedRoom = roomlistid.find(room => room.id === bookingData.room_list_id);
            if (selectedRoom) {
                setRoomPrice(parseFloat(selectedRoom.roomcategory.price)); // Correct price assignment
            } else {
                console.error("Selected room not found in the room list.");
                setRoomPrice(0);
            }
        });
    };
    

    const getRelational = async () => {
        try {
            const responseCustomer = await axios.get(`${process.env.REACT_APP_API_URL}/customer/index`);
            setCustomerid(responseCustomer.data.data);

            const responseRoom = await axios.get(`${process.env.REACT_APP_API_URL}/roomlist/index`);
            setRoomlistid(responseRoom.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (id) {
            getDatas();
        }
        getRelational();
    }, [id]);

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setInputs((prev) => {
    //         const updatedInputs = { ...prev, [name]: value };
    //         calculateTotal(updatedInputs);  // Recalculate total on input change
    //         return updatedInputs;
    //     });
    // };

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        // If the 'check_out_date' is being changed, update room status
        if (name === "check_out_date" && value) {
            // Update room status to Available when checkout date is provided
            updateRoomStatusToAvailable(inputs.room_list_id);
        }
    
        setInputs((prev) => {
            const updatedInputs = { ...prev, [name]: value };
            calculateTotal(updatedInputs);  // Recalculate total on input change
            return updatedInputs;
        });
    };


    // Function to update room status to Available
    const updateRoomStatusToAvailable = async (roomId) => {
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}/roomlist/edit/${roomId}`,
                { status: 0 }  // Set status to 0, which means "Available"
            );

            if (response.data.success) {
                console.log("Room status updated to Available.");
            } else {
                console.error("Failed to update room status.");
            }
        } catch (error) {
            console.error("Error updating room status:", error);
        }
    };

    // handleRoomChange
    // const handleRoomChange = (event) => {
    //     const selectedRoomId = event.target.value;
    //     console.log("Room List:", roomlistid); // Log the entire room list
    //     console.log("Selected Room ID:", selectedRoomId); // Log the selected room ID
    
    //     const selectedRoom = roomlistid.find((room) => room.id === parseInt(selectedRoomId));
        
        
    //     console.log("Selected Room:", selectedRoom); // Log the selected room object
    
    //     if (selectedRoom) {
    //         setRoomPrice(parseFloat(selectedRoom.roomcategory.price)); // Update price
    //     } else {
    //         setRoomPrice(0); // Fallback if room is not found
    //     }
    
    //     setInputs((prev) => {
    //         const updatedInputs = { ...prev, room_list_id: selectedRoomId };
    //         calculateTotal(updatedInputs);  // Recalculate total when room changes
    //         return updatedInputs;
    //     });
    // };

    const handleRoomChange = (event) => {
        const selectedRoomId = event.target.value;
        
        if (roomlistid.length === 0) {
            console.error("Room list is empty or not yet populated");
            return; // Exit if the room list is empty
        }
    
        const selectedRoom = roomlistid.find((room) => room.id === parseInt(selectedRoomId));
        
        if (selectedRoom) {
            console.log("Selected Room:", selectedRoom);
            setRoomPrice(parseFloat(selectedRoom.roomcategory.price));
        } else {
            console.error("Room not found!");
            setRoomPrice(0); // Fallback to 0 if the room is not found
        }
    
        setInputs((prev) => {
            const updatedInputs = { ...prev, room_list_id: selectedRoomId };
            calculateTotal(updatedInputs);  // Recalculate total when room changes
            return updatedInputs;
        });
    };
    
    

    // Function to calculate total amount based on room price, number of guests, discount, and VAT
    // const calculateTotal = (updatedInputs) => {
    //     const { number_of_guest_adult, number_of_guest_child, discount, vat } = updatedInputs;
    //     const totalGuests = Number(number_of_guest_adult) + Number(number_of_guest_child);
    //     const subtotal = roomPrice * totalGuests;  // Calculate subtotal

    //     let discountAmount = 0;
    //     if (discount > 0) {
    //         // Apply discount: percentage or flat amount
    //         if (discount <= 100) {
    //             discountAmount = (subtotal * discount) / 100;  // Percentage discount
    //         } else {
    //             discountAmount = discount;  // Flat amount discount
    //         }
    //     }

    //     const discountedPrice = subtotal - discountAmount;  // Apply discount

    //     let vatAmount = 0;
    //     if (vat > 0) {
    //         vatAmount = (discountedPrice * vat) / 100;  // VAT on discounted price
    //     }

    //     const totalAmount = discountedPrice + vatAmount;  // Total amount after VAT
    //     setInputs((prev) => ({ ...prev, total_amount: totalAmount.toFixed(2) }));
    // };

    const calculateTotal = (updatedInputs) => {
        const {
            number_of_guest_adult,
            number_of_guest_child,
            discount,
            vat,
            check_in_date,
            check_out_date,
        } = updatedInputs;
    
        // Calculate the number of days between check-in and check-out
        const checkInDate = new Date(check_in_date);
        const checkOutDate = new Date(check_out_date);
        const timeDifference = checkOutDate - checkInDate;
        const numberOfDays = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
    
        if (numberOfDays <= 0) {
            // If the check-out date is the same or before the check-in date, return 0
            setInputs((prev) => ({ ...prev, total_amount: "0.00" }));
            return;
        }
    
        // Calculate total guests
        const totalGuests = Number(number_of_guest_adult) + Number(number_of_guest_child);
        
        // Calculate the subtotal based on room price per day and the number of days
        const subtotal = roomPrice * numberOfDays * totalGuests;
    
        let discountAmount = 0;
        if (discount > 0) {
            // Apply discount: percentage or flat amount
            if (discount <= 100) {
                discountAmount = (subtotal * discount) / 100;  // Percentage discount
            } else {
                discountAmount = discount;  // Flat amount discount
            }
        }
    
        const discountedPrice = subtotal - discountAmount;  // Apply discount
    
        let vatAmount = 0;
        if (vat > 0) {
            vatAmount = (discountedPrice * vat) / 100;  // VAT on discounted price
        }
    
        // Calculate the total amount after VAT
        const totalAmount = discountedPrice + vatAmount;  // Total amount after VAT
    
        // Update the state with the calculated total amount
        setInputs((prev) => ({ ...prev, total_amount: totalAmount.toFixed(2) }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let apiurl = '';
            if (inputs.id !== '') {
                apiurl = `/booking/edit/${inputs.id}`;
            } else {
                apiurl = `/booking/create`;
            }

            // Create booking
            const response = await axios({
                method: 'post',
                responseType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs,
            });

            // After booking, update room status to "Booked"
            const roomId = inputs.room_list_id;
            const updateRoomStatusResponse = await axios({
                method: 'put',
                url: `${process.env.REACT_APP_API_URL}/roomlist/edit/${roomId}`,
                data: { status: 1 },  // Booked
            });

            if (updateRoomStatusResponse.data.success) {
                navigate('/booking');
            } else {
                console.error("Failed to update room status.");
            }
        } catch (error) {
            console.error("Error while submitting the form:", error);
        }
    };

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
    };

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
                                    {/* Customer Selection */}
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Customer</label>
                                        <div className="col-lg-9">
                                            {customerid.length > 0 && (
                                                <select className="form-control" name="customer_id" value={inputs.customer_id} onChange={handleChange}>
                                                    <option value="">Select Customer</option>
                                                    {customerid.map((d, key) => (
                                                        <option key={key} value={d.id}>
                                                            {d.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                        </div>
                                    </div>

                                    {/* Room Selection */}
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Room Number</label>
                                        <div className="col-lg-9">
                                            {roomlistid.length > 0 && (
                                                <select className="form-control" name="room_list_id" value={inputs.room_list_id} onChange={handleRoomChange}>
                                                    <option value="">Select Room</option>
                                                    {roomlistid.map((room, key) => {
                                                        const roomStatusText = mapStatusToText(room.status);
                                                        const isDisabled = room.status === 1 || room.status === 2;
                                                        return (
                                                            <option key={key} value={room.id} disabled={isDisabled}
                                                                style={{
                                                                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                                                                    color: isDisabled ? 'red' : 'black',
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

                                    {/* Other Inputs */}
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Contact No</label>
                                        <div className="col-lg-9">
                                            <input type="text" name="contact_no" value={inputs.contact_no} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>

                                    {/* Date Inputs */}
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Check In</label>
                                        <div className="col-lg-9">
                                            <input type="date" name="check_in_date" value={inputs.check_in_date} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Check Out</label>
                                        <div className="col-lg-9">
                                            <input type="date" name="check_out_date" value={inputs.check_out_date} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>

                                    {/* Guests Inputs */}
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Guest Adult</label>
                                        <div className="col-lg-9">
                                            <input type="number" name="number_of_guest_adult" value={inputs.number_of_guest_adult} onChange={handleChange} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Guest Child</label>
                                        <div className="col-lg-9">
                                            <input type="number" name="number_of_guest_child" value={inputs.number_of_guest_child} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>

                                    {/* Discount */}
                                    <div className="form-group row">
                                        <div className="col-lg-6">
                                        </div>
                                        <label className="col-lg-1 col-form-label">Discount % </label>
                                        <div className="col-lg-5">
                                            <input type="text" name="discount" value={inputs.discount} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>

                                    {/* VAT */}
                                    <div className="form-group row">
                                        <div className="col-lg-6">
                                        </div>
                                        <label className="col-lg-1 col-form-label">VAT %</label>
                                        <div className="col-lg-5">
                                            <input type="text" name="vat" value={inputs.vat} onChange={handleChange} className="form-control"/>
                                        </div>
                                    </div>

                                    {/* Total Amount */}
                                    <div className="form-group row">
                                        <div className="col-lg-6">
                                        </div>
                                        <label className="col-lg-1 col-form-label">Total Amount</label>
                                        <div className="col-lg-5">
                                            <input type="text" name="total_amount" value={inputs.total_amount} onChange={handleChange} className="form-control" readOnly/>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </div>
    );
}

export default AddBooking;
