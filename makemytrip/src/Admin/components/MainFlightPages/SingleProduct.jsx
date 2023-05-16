import booking from "./Image/booking.png";
import booking2 from "./Image/booking2.png";
import { SingleProHeader } from "./SingleProHeader";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from '@chakra-ui/react'
import ConstNav from "../Navbar/ConstNav";
import Footer from "../Footer/Footer";
// import { BookingFlightDetails } from "./BookingFlightDetails"
export function SingleProduct() {
  const lsData=JSON.parse(localStorage.getItem("singleData"))
  const calenderData=JSON.parse(localStorage.getItem("calendar"))
  const [data, setData] = useState({})
    const dispatch = useDispatch()
    const { id } = useParams()
    const { airports } = useSelector(store => store.FlightReducer)
    console.log(airports)
    useEffect(() => {
    //    const data= dispatch(getData())
        // const data = airports.find(el => el.id == +id)
        // setData(data)
        axios.get(`https://makethejourneyhard.cyclic.app/airports/${id}`).then(res=>setData(res.data))
    }, [])
  return (
    <>
    <ConstNav/>
      <SingleProHeader />

      <div
        style={{
          width: "80%",
          height: "auto",
          border: "1px solid blue",
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "space-between",
          marginTop: "20px",
        }}>
        {/* Left */}
        <div
          style={{
            width: "75%",
            height: "680px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}>
          {/* first_Left */}
          <div
            style={{
              width: "95%",

              margin: "auto",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              height: "230px",
              display: "flex",
              flexDirection: "column",
            }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                //   border: "2px solid red",
                justifyContent: "space-between",
                marginTop: "10px",
              }}>
              <div
                style={
                  {
                    // border: "2px solid pink",
                  }
                }>
                <h2 style={{ padding: "5px",margin:"4px" }}>
                  <span>{lsData.city1}</span>
                  <span>----</span>
                  <span>{lsData.city2}</span>
                </h2>
                <p style={{ padding: "5px" }}>
                  <span style={{ backgroundColor: "#ffedd1", padding: "3px" }}>
                    {calenderData}
                  </span>
                  <span>{lsData.type} : {lsData.duration}</span>
                </p>
                <p style={{ padding: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>{lsData.air_line} </span>
                  <span>G8 119</span>
                </p>
              </div>
              <div
                style={{
                  // border: "2px solid pink",
                  justifyContent: "space-between",
                }}>
                <p
                  style={{
                    backgroundColor: "#24a091",
                    marginLeft: "5px",
                    padding: "2px",
                    fontSize: "small",
                  }}>
                  CANCELLATION FEES:{lsData.cancellation}
                </p>
                <p
                  style={{
                    backgroundColor: "#24a091",
                    marginLeft: "5px",
                    padding: "2px",
                    fontSize: "small",
                  }}>
                  DATE CHANGE FEES:{lsData.date_change}
                </p>
                <p style={{ padding: "5px", color: "blue" }}>View Fare Rules</p>
                <p style={{ padding: "5px" }}>
                  <span>Economy</span>
                  <span style={{ color: "#24a091" }}> {lsData.air_line}</span>
                </p>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                //   border: "1px solid yellow",
                backgroundColor: "#f4f4f4",
                margin: "10px 0px 10px 0px",
              }}>
              <div
                style={{
                  width: "57%",
                  display: "flex",
                  justifyContent: "space-between",
                  // border: "1px solid yellow",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "3px",
                  }}>
                  <h3>{lsData.departure}</h3>
                  <h3>{lsData.arrival}</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "3px",
                  }}>
                  <div
                    style={{
                      height: "12px",
                      width: " 12px",
                      border: "1px solid grey",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}></div>
                  <div
                    style={{
                      height: "38px",
                      width: "0px",
                      border: "1px dashed grey",
                      marginLeft: "5px",
                    }}></div>
                  <div
                    style={{
                      height: "10px",
                      width: " 12px",
                      border: "1px solid grey",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "3px",
                  }}>
                  <p>
                    <span>{lsData.city1}</span>
                    <span>{lsData.airport1}</span>
                  </p>
                  <p>{lsData.duration}</p>
                  <p>
                    <span>{lsData.city2} .</span>
                    <span>{lsData.airport2}</span>
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "space-between",
                  // border: "1px solid yellow",
                  backgroundColor: "#f4f4f4",
                  alignItems: "center",
                }}>
                <div style={{ width: "30%" }}>
                  <p style={{ fontWeight: "bold" }}>Baggage</p>
                  <p>ADULT</p>
                </div>
                <div style={{ width: "30%" }}>
                  <p style={{ fontWeight: "bold" }}>Check-in</p>
                  <p>{lsData.checkin} (1 piece only)</p>
                </div>
                <div style={{ width: "30%" }}>
                  <p style={{ fontWeight: "bold" }}>Cadin</p>
                  <p>{lsData.cabin_bag} (1 piece only)</p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "95%",
              margin: "auto",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              height: "200px",
            }}>
            <img
              style={{
                width: "100%",

                height: "200px",
              }}
              src={booking}
            />
          </div>
          <div
            style={{
              width: "95%",
              margin: "auto",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              height: "200px",
            }}>
            <img
              style={{
                width: "100%",

                height: "200px",
              }}
              src={booking2}
            />
          </div>
        </div>
        {/* Right */}
        <div
          style={{
            width: "23%",
            height: "680px",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          }}>
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              width: "90%",
              margin: "auto",
              marginTop: "10px",
            }}>
            <h2 style={{ width: "90%", margin: "auto", marginBottom: "10px" }}>
              Fare Summary
            </h2>
            <div style={{ width: "90%", margin: "auto" }}>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px 10px 0px",
                  borderBottom: "1px solid grey",
                }}>
                <p style={{ fontWeight: "bold" }}>Base Fare</p>
                <p>₹ {lsData.rent}</p>
              </div>

              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px 10px 0px",
                  borderBottom: "1px solid grey",
                }}>
                <p style={{ fontWeight: "bold" }}>Taxes and Suecharges</p>
                <p>₹ 843</p>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px 10px 0px",
                  borderBottom: "1px solid black",
                }}>
                <p style={{ fontWeight: "bold" }}>Other Services</p>
                <p>₹ 10</p>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0px 10px 0px",
                }}>
                <h3>Total Amount</h3>
                <h3>₹ {lsData.rent+853}</h3>
              </div>
            </div>
          </div>
          <div style={{ width: "90%", margin: "auto", paddingTop: "10px" }}>
            <img
              style={{ width: "100%", margin: "auto" }}
              src="https://promos.makemytrip.com/notification/xhdpi//Air-India-116x116-29032023.jpg?im=Resize=(134,134)"
            />
            <Link href="/ticket"><button style={{
               height:" 40px",
               width: "150px",
               backgroundColor:"#26a0ff",
               borderRadius: "20px",
               color: "white",
               lineHeight: "35px",
              textAlign:"center",
              marginTop:"2rem",
              marginLeft:"3.5rem",
            }}>Continue</button></Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
