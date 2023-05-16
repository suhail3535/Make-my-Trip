import React from 'react'
import { Link } from 'react-router-dom'

const HomeStayCard = ({id,image,rating,review,name,location,descLocation,description,subDescription,desc, cancelPrice,price,deal}) => {
  return (
    <Link to={`/homestays/${id}`}>
    <div style={{margin:"30px 0px 30px 0px" , boxShadow:"rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"}}>
        <div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "space-between",
              height: "300px",

            }}>
            <div>
              <img style={{height:"240px",width:"230px", borderRadius:"10px", margin:"15px 0px 0px 0px"}} src={image}  alt="img"/>
            </div>

            <div style={{ padding: "10px", width:"55%" }}>
              <div style={{ margin: "10px 0px 10px 0px" }}>
                <span
                  style={{
                    backgroundColor: "#0b58b4",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                  }}>
                  {rating}
                </span>
                <span
                  style={{
                    color: "#0b58b4",
                    fontWeight: "bold",
                    margin: "10px",
                  }}>
                  {review}
                </span>
              
              </div>
              <div
                style={{
                  fontSize: "23px",
                  fontWeight: "bold",
                  margin: "10px 0px 10px 0px",
                }}>
                {name}
              </div>
              <div style={{ margin: "10px 0px 10px 0px" }}>
                <span style={{ colo: "#2796ff" }}>{location}</span>
                <span style={{ color: "#C5C5C5" }}>
                  {descLocation}
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "#e5f3ff",
                  padding: "2px",
                  margin: "10px 0px 10px 0px",
                  borderRadius: "10px",
                  width: "140px",
                }}>
                <div style={{ color: "#0061aa" }}>{description}</div>
                <div style={{ color: "#7e8387" }}>
                  {subDescription}
                </div>
              </div>
              <div style={{backgroundColor:"#ebebeb", color:"#6c6c6c",width:"135px",padding:"5px",   margin: "10px 0px 10px 0px"}}>
                <p>Couple Friendly</p>
              </div>
              <div style={{ color: "#b08d6f", margin: "10px 0px 10px 0px" }}>
                {desc}
              </div>
            </div>
            <div
              style={{

                width: "18%",
                backgroundColor: "#F5F5F5",
                textAlign: "right",
                paddingRight:"5px"
              }}>
              <p style={{ marginTop: "100px", color: "#9B9B9B", textDecoration: "line-through" }}>₹ {cancelPrice}</p>
              <p style={{ fontSize: "22px", fontWeight: "bold" }}>₹ {price}</p>
              <div>
                <p>+ ₹ 120 taxes & fees</p>
                <p style={{color: "#9B9B9B"}}>Per Night</p>
            </div>
            </div>

          </div>
          <div>
            <h4
              style={{
                backgroundColor: "#C4EBE3",
                border: "1px solid #036350",
                color: "#1f7d74",
                padding: "6px",
              }}>
              {deal}
            </h4>
          </div>
        </div>
      </div>
      </Link>
  )
}

export default HomeStayCard