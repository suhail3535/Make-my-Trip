import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminHotel from "./AdminHotel";
import AdminHomeStay from "./AdminHomeStay";
import Trip_Mate from "../components/Essential/Trip_Mate.png";
import "../Admin/adminNav.css";
const AdminNav = () => {
    const [hotel, setHotel] = useState(false);
    const [homeStay, setHomeStay] = useState(false);
    const handlehotel = () => {
        setHotel(true);
        setHomeStay(false);
    };
    const handleHomStay = () => {
        setHotel(false);
        setHomeStay(true);
    };
    return (
        <div>
            <div
                className="Navbar"
                style={{ background: "linear-gradient(#061526, #144073)" }}>
                <div className="logoImg">
                    <img
                        style={{ height: "115px", width: "90%" }}
                        src={Trip_Mate}
                        alt="logo"
                    />
                </div>
                <div className="navItem">
                    <div onClick={handlehotel}>Hotel DataBase</div>
                    <div onClick={handleHomStay}>HomeStay DataBase</div>
                    <div>Flight DataBase</div>
                </div>
            </div>
            {hotel ? (
                <AdminHotel />
            ) : homeStay ? (
                <AdminHomeStay />
            ) : (
                <img
                    style={{ width: "60%", margin: "auto" }}
                    src="https://img.freepik.com/premium-vector/woman-with-dashboard_118813-8364.jpg?w=996"
                    alt="logo"
                />
            )}
        </div>
    );
};

export default AdminNav;
