import React from "react";
import "./Navbar.css";
import NavbarSearchItems from "../NavbarSearchItems/NavbarSearchItems";
import HomeStaySearch from "../HomeStaySearch/HomeStaySearch";
function NavbarHomeStay() {
  return (
    <div>
      <div className="wrapper">
        <div className="first-box">
          <NavbarSearchItems />
        </div>
        <div className="second-box">
          <div style={{ height: "20px" }}>
            <HomeStaySearch/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarHomeStay;
