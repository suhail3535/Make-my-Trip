import React, { useState } from 'react';
import './HotelSearch.css';
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineUserDelete } from "react-icons/ai"
import  DataCalender  from '../Aeroplane/DateCalender';
import {Link} from '@chakra-ui/react';
const HotelSearch = () => {
    const [customer, seCustomer] = useState(1)
    const [val,setVal]=useState("")

    const handleSearch=()=>[
         localStorage.setItem("city",JSON.stringify(val))
        // setCity(val)
    ]

    return (
        <div className='outer_div_hotel'>
            <div className='first_div_hotel'>
                <div className='way_options_hotel'>
                    <span className='way_type_hotel'>
                        <input type="radio" />
                        <label>UPTO 5 ROOMS</label>
                    </span>
                    <span className='way_type_hotel'>
                        <input type="radio" />
                        <label>GROUP DETAILS</label>
                    </span>
                </div>
            </div>
            <div className='location_select_hotel'>
                <div className='location_opt_hotel'>
                    <p>CITY OR LOCATION</p>
                    <select className='first_bold'
                        type="text"
                        name="from"
                        placeholder=""
                        value={val}
                        onChange={(e)=>setVal(e.target.value)}
                    >
                        <option>select</option>
                        <option value='goa'>Goa</option>
                        <option value='banglore'>Banglore</option>
                        <option value='mumbai'>Mumbai</option>
                        <option value='jaipur'>jaipur</option>
                        <option value='delhi'>Delhi</option>
                        <option value='manali'>Manali</option>
                        <option value='shimla'>Shimla</option>
                        <option value='ooty'>Ooty</option>
                    </select>
                </div>

                <div className='location_opt_hotel'>
                    <p>CHECK-IN</p>
                    <div className='second_bold_hotel' style={{ paddingTop: "25px" }}><DataCalender /></div>
                </div>
                <div className='location_opt_hotel'>
                    <p>CHECK-OUT </p>
                    <div className='second_bold_hotel' style={{ paddingTop: "25px" }}><DataCalender  /></div>
                </div>
                <div className='location_opt_hotel'>
                    <p> </p>ROOMS & GUESTS
                    <div>

                    <span className='first_bold_hotel'>{customer}</span><span className='second_bold'>Adults</span><span>&nbsp;&nbsp;</span><span>
                        <button onClick={() => seCustomer(customer + 1)}><AiOutlineUserAdd /></button>
                        /<button onClick={() => seCustomer(customer - 1)} disabled={customer == 1}><AiOutlineUserDelete /></button>
                    </span>
                    </div>
                    <p>Economy/Premium Economy</p>
                    <p style={{ color: "red" }}>Group Bookings Available!</p>
                </div>
                <div className='location_opt_hotel'>
                    <p>PRICE PER NIGHT </p>
                    <div className='second_bold_hotel'>₹0-₹1500,₹1500-₹2500,...</div>
                </div>
            </div>
            <div className='last_opts_hotel'>
                <div className='first_div_last_hotel'>
                    <span style={{paddingTop:"4px"}}>Select A Fare Type:</span>
                    <span className='back_shadow_hotel'>
                        <input type="radio" />
                        <label>Regular Fares</label>
                    </span>              
                </div>
            </div>
           <Link href='/hotel'>
           <button className='src_btn_hotel' onClick={handleSearch}>SEARCH</button>
           </Link>
        </div>
    );
}

export default HotelSearch;
