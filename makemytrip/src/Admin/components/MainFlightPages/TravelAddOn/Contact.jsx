import React from "react";
import styles from "./Contact.module.css";
import { Link } from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

export const ContactForm = () => {
  const lsData=JSON.parse(localStorage.getItem("singleData"));
  const calenderData=JSON.parse(localStorage.getItem("calendar"))
  return (
    <div>
            <h2 style={{fontSize:"2rem", fontWeight:"bold"}}>Flight Summary</h2>
      <div className={styles.flightSummary} style={{ display: "flex", flexGrow: "3" }}>
        <div>
          <div className={styles.TripDiv}>
            <div>
              <h3>{lsData.city1}-{lsData.city2}</h3>
              <p style={{color: "black" }}>
                {calenderData}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" ,alignItems:"center" }}>
              <h3 style={{ marginLeft: "-5%", color: "blue" }}>
                Flight Details
              </h3>{" "}
              <i style={{ marginTop: "20%", marginLeft: "1%" }}>
                <FaAngleDown />
              </i>
            </div>
          </div>
          <br />
          <div className={styles.LoginDiv}>
            <p className={styles.LoginP}>
              <img
                src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/rt_t8.png"
                className={styles.LoginImg}
                alt="login_icon"
              />
              <span style={{ marginTop: "2%" }}>
                Log in to view your{" "}
                <b style={{ fontWeight: "bolder" }}>
                  saved traveller list, unlock amazing deals
                </b>{" "}
                &amp; much more!
              </span>
            </p>
            <p className={styles.LoginBtn}>
              Login Now{" "}
              <i>
                <AiOutlineArrowRight />
              </i>
            </p>
          </div>
        </div>
        <div style={{ flexGrow: "1" }}>
          <h2>Fare Summary</h2>
          <div>
            <div className={styles.FareSection} style={{ zIndex: "1" }}>
              <div className={styles.FareSummary}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    {" "}
                    <span>
                      <i>
                        {" "}
                        <AiFillPlusCircle/>
                      </i>
                    </span>
                    <span>Base Fare</span>
                  </p>
                  <span>₹ {lsData.rent+853}</span>
                </div>
              </div>
              <div className={styles.FareSummary}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    <span>
                      <i>
                        {" "}
                        <AiFillPlusCircle/>
                      </i>
                    </span>
                    <span>Fee &amp; Surcharges</span>
                  </p>
                  <span className="font16">₹ 783</span>
                </div>
              </div>
              <div className={styles.FareSummary}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    <span>
                      <i>
                        {" "}
                        <AiFillPlusCircle/>
                      </i>
                    </span>
                    <span>Other Services</span>
                  </p>
                  <span className="font16">₹ 10</span>
                </div>
              </div>
              <div style={{display:"flex", justifyContent:"space-between", height:"35px"}}>
               
                      <span style={{fontWeight:"bolder" , marginLeft:"3%"}}>Total Amount:</span>
                    
          
                  
                      <span style={{fontWeight:"bolder" , marginRight:"3%"}}>₹ {lsData.rent+853+793}</span>
                  
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
