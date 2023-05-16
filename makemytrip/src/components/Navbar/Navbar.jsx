import React from "react";
import "./Navbar.css";
import NavbarSearchItems from "../NavbarSearchItems/NavbarSearchItems";
import AeroplaneSearch from "../Aeroplane/AeroplaneSearch";
function Navbar() {
  return (
    <div>
      <div className="wrapper">
        <div className="first-box">
          <NavbarSearchItems />
        </div>
        <div className="second-box">
          <div style={{ height: "20px" }}>
            <AeroplaneSearch/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
