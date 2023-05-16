import React, { useState } from 'react'
import { Box, Button, Input, Select, Text } from '@chakra-ui/react'
import { postHomeStayData } from '../Redux/HomeStaysReducer/action'
const HomeStayForm = ({ setAdd,setEdit }) => {
    const [homeStay, setHomeStay] = useState({
        "image": "",
        // "rating": "",
        // "review":"",
        "name":"",
        "location":"",
        "description":"",
        "subDescription":"",
        "desc":"",
        "price":" ",
        "cancelPrice":"",
        "deal":"",
        "detail":"",
        "saving":"",
        "locationForSort":""

    })
    console.log(homeStay)
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setHomeStay((prev)=>{
            return {...prev,[name]:value}
        })

    }
    const handleClick = () => {
        postHomeStayData(homeStay)
        setEdit((prev)=>!prev)
        setAdd(false)
    }

    return (
        <Box >

          <Text fontSize={"25px"} textAlign={"center"} fontWeight={"bold"} padding={"10px"}>HomeStay Database</Text>
            <label>Image</label>
            <Input value={homeStay.image} name='image' type='url' onChange={handleChange} />
            {/* <label >Rating</label>
            <Input value={homeStay.rating} name='rating' type='text' onChange={handleChange} />
            <label >Review</label>
            <Input value={homeStay.review} name='review' type='text' onChange={handleChange} /> */}
            <label >Name</label>
            <Input value={homeStay.name} name='name' type='text' onChange={handleChange} />
            <label >Location</label>
            <Input value={homeStay.location} name='location' type='text' onChange={handleChange} />
            <label >Description</label>
            <Input value={homeStay.description} name='description' type='text' onChange={handleChange} />
            <label >SubDescription</label>
            <Input value={homeStay.subDescription} name='subDescription' type='text' onChange={handleChange} />
            <label >Desc</label>
            <Input value={homeStay.desc} name='desc' type='text' onChange={handleChange} />
            <label >Price</label>
            <Input value={homeStay.price} name='price' type="number" onChange={handleChange} />
            <label >Cancel Price</label>
            <Input value={homeStay.cancelPrice} name='cancelPrice' type='text' onChange={handleChange} />
            <label >Deal</label>
            <Input value={homeStay.deal} name='deal' type='text' onChange={handleChange} />
            <label >Detail</label>
            <Input value={homeStay.detail} name='detail' type='text' onChange={handleChange} />
            <label >Saving</label>
            <Input value={homeStay.saving} name='saving' type='text' onChange={handleChange} />
            <label>Main Location</label>
            <Select  value={homeStay.locationForSort} name='locationForSort' onChange={handleChange}>
                <option value="">Select HomeStays</option>
                <option value="SouthGoa">South Goa</option>
                <option value="NorthGoa">North Goa</option>
                <option value="BeachProperty">Beach Property</option>
                <option value="Villa">Villa</option>
            </Select>
            
            <Button style={{background:"linear-gradient(#061526, #144073)",marginTop:"2rem", color:"white"}}  onClick={handleClick} >Add Homestay</Button>
        </Box>
    )
}

export default HomeStayForm