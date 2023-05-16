import React from 'react';

const FlightSorting = () => {
  return (
    <div>
       <div style={{ border: "1px solid gray", display: "grid", gridTemplateColumns: "repeat(7,1fr)", alignItems: "center" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}></h4>
            <p>&nbsp;</p>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>Depature</p>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>Duration</p>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>Arrival</p>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>Price</p>
            <p>&nbsp;</p>
          </div>
    </div>
  );
}

export default FlightSorting;
