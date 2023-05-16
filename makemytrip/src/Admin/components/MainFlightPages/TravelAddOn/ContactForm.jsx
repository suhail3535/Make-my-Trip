import { useState } from "react";
import styles from "./ContactForm.module.css";
import { BookingDetails } from "./BookingDetails";
export const Form = () => {
  const [userData,setUserData]=useState({})
  const handleChange=(e)=>{
    const {name,value}=e.target
    setUserData(pre=>{return{...pre,[name]:value}})
  }
  const handleAdd=()=>{
    localStorage.setItem("userData", JSON.stringify(userData));
  }
  return (
    <>
    <div className={styles.FormDiv}>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto",
          textAlign: "left",
        }}
      >
        <h2 style={{ marginLeft: "-5%" }}>ADULT</h2>
        <p style={{ marginLeft: "75%", color: "aquamarine" }}>1/1 Selected</p>
      </div>
      <div>
        <div className={styles.shading}>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "10% 70% 20%",
              textAlign: "left",
            }}
          >
            <span><input type="checkbox"></input></span>
            <span
              style={{
                fontWeight: "900",
                fontSize: "larger",
                marginTop: "-1%",
                marginLeft: "-5%",
              }}
            >
              ADULT 1
            </span>
            <span className={styles.incomplete}>INCOMPLETE</span>
          </div>
          <p style={{ fontSize: "smaller", fontWeight: "bold" }}>
            IMPORTANT: Enter your name as it is mentioned on your passport or
            any governement approved ID
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <form style={{ display: "inline-block" }}>
              <input placeholder="First & Middle Name" name="firstName" onChange={handleChange}/>

              <input placeholder="Last Name" name="lastName" onChange={handleChange}/>
            </form>
            <div  onChange={handleChange}>
                <input type="radio" name="gender" value="MALE" />
              <label>
                MALE
              </label>
                <input type="radio" name="gender" value="FEMALE" />
              <label>
                FEMALE
              </label>
            </div>
          </div>
        </div>
        <button onClick={handleAdd} className={styles.addAdult}>
          +ADD ADULT
        </button>
      </div>
    </div>
    <BookingDetails data={userData}/>
    </>
  );
};
