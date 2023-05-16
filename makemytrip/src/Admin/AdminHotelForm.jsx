import React, { useState } from 'react'
import { Box, Button, Input, Select } from '@chakra-ui/react'
import { postHotelData } from '../Redux/HotelReducer/action'
import Swal from 'sweetalert2'
const AdminHotelForm = ({ setAdd ,setEdit}) => {
    const [hotel, setHotel] = useState({
        "HotelName": "",
        "desc": "",
        "city": "",
        "price": "",
        "star": "",
        "rating": "",
        "image": ""

    })
    console.log(hotel)
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setHotel((prev)=>{
            return {...prev,[name]:value}
        })

    }
    const handleClick = () => {
        postHotelData(hotel)
        Swal.fire({
            title: 'Hotel Data Added Successfully!',
            showConfirmButton:false,
            icon: 'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            timer:1500
            
          })
          setEdit((prev)=>!prev)
        setAdd(false)
    }

    return (
        <Box>
            <label>Hotel name</label>
            <Input value={hotel.HotelName} name='HotelName' type='text' onChange={handleChange} />
            <label >Address</label>
            <Input value={hotel.desc} name='desc' type='text' onChange={handleChange} />
            <label>City</label>
            <Select value={hotel.city} name='city' onChange={handleChange}>
                <option value="">Select Hotel City</option>
                <option value="goa">Goa</option>
                <option value="delhi">Delhi</option>
                <option value="banglore">Banglore</option>
                <option value="mumbai">Mumbai</option>
                <option value="jaipur">Jaipur</option>
                <option value="shimla">Shimla</option>
                <option value="ooty">Ooty</option>
            </Select>
            <label>Hotel Image</label>
            <Input value={hotel.image} name='image' type="text" onChange={handleChange}/>
            <label>Price /per night</label>
            <Input value={hotel.price } name='price' type='text' onChange={handleChange}/>
            <label >Hotel Star</label>
            <Input value={hotel.star} name='star' type="text" onChange={handleChange}/>
            <label>Hotel Rating</label>
            <Input value={hotel.rating} name='rating' type="number" onChange={handleChange} />
            <Button style={{background:"linear-gradient(#061526, #144073)",marginTop:"2rem", color:"white"}} onClick={handleClick} >Add Hotel</Button>
        </Box>
    )
}

export default AdminHotelForm