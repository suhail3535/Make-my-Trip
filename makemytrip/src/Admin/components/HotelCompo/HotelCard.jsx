import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import './HotelCard.css'
const HotelCard = ({id,HotelName,desc,price,star,rating,image}) => {
//    console.log(image)
  // const [star,setStar]=useState([]);
  console.log(id)
  const starts=[];
  for(let j=0;j<star;j++){
    starts.push("⭐")
  }

console.log(starts)

  return (
    <Link to={`/hotel/${id}`}>
    <div className='card'>
        <img src={image.toString()} alt={id}/>
       {/* <h2>{HotelName}</h2> */}
    <div className="name">
        <p className='rating'><i class="fa-sharp fa-solid fa-eye fa-2xm"></i> {rating}/5 (6077 RATINGS)</p>
        <h2 style={{}}>{HotelName}</h2>
        <p>{starts.join("")}</p>
        <p><span>15th arrondissement</span><br/> {desc}</p>
        <p>Free Cancellation available at extra charges</p>
    </div>
    <div className="price">
      <img src='https://tse1.mm.bing.net/th?id=OIP.kv92UGUM5ytZCcWarJzgrwHaE8&pid=Api&P=0' alt="discount"/>
        <h2>₹{price}</h2>
        <span>+₹{price}taxes & fees</span><br/>
        <span>No Cost EMI</span><br/>
        <span>See Hotel For Best deals</span><br/>
        <button>View</button>
    </div>
    </div>
    </Link>
  )
}

export default HotelCard