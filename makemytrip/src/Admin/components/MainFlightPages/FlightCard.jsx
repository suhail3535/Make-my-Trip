
import React from 'react';
import { Link } from '@chakra-ui/react'
const FlightCard = ({image,air_line,departure,city1,airport1,duration,type,arrival,city2,rent,id,airport2,src,cabin_bag,date_change,checkin,cancellation,meal}) => {
  const obj={
    "id": id,
"image": image,
"air_line": air_line,
"departure": departure,
"arrival": arrival,
"duration": duration,
"rent": rent,
"type": type,
"airport1": airport1,
"airport2": airport2,
"city1": city1,
"city2": city2,
"src": src,
"cabin_bag": cabin_bag,
"checkin": checkin,
"cancellation": cancellation,
"date_change": date_change,
"meal": meal
  }
  const handleClick=()=>{
    localStorage.setItem("singleData", JSON.stringify(obj));
  }
  return (
    <div style={{border:"1px solid gray",display:"grid",gridTemplateColumns:"repeat(7,1fr)",alignItems:"center"}}>
      <div style={{padding:"4px"}}>
      <img width="100%" src={image} alt="" />
      </div>
      <h1 style={{textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}}>{air_line}</h1>
      <div>
        <h1 style={{textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}}>{departure}</h1>
        <p style={{textAlign:"center"}}>{city1}</p>
      </div>
      <div style={{textAlign:"center"}}>
        <p style={{textAlign:"center"}}>{duration}</p>
        <hr style={{textAlign:"center"}} />
        <p style={{textAlign:"center",fontSize:"0.8rem"}}>{type}</p>
      </div>
      <div>
        <h1 style={{textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}}>{arrival}</h1>
        <p style={{textAlign:"center"}}>{city2}</p>
      </div>
      <h1 style={{textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}}>{`₹ ${rent}`}</h1>
      <Link href={`/flightbook/${id}`}><button onClick={handleClick} style={{backgroundColor:"#3F51B5",color:"white",borderRadius:"15px",margin:"1rem",padding:"0.5rem 0 0.5rem 0",padding:"10px"}}>Book Now</button></Link>
    </div>
  );
}

export default FlightCard;
