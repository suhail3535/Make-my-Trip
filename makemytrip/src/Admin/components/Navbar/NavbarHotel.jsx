import React from "react";
import "./Navbar.css";
import NavbarSearchItems from "../NavbarSearchItems/NavbarSearchItems";
import HotelSearch from "../HotelSearch/HotelSearch";
function NavbarHotel() {
  return (
    <div>
      <div className="wrapper">
        <div className="first-box">
          <NavbarSearchItems />
        </div>
        <div className="second-box">
          <div style={{ height: "20px" }}>
            <HotelSearch/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarHotel;
