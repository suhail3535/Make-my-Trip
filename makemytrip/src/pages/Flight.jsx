import React from "react";
import AvailFlights from "../components/MainFlightPages/AvailFlights";
import { FlightSearchBar } from "../components/MainFlightPages/FlightSearchBar";
import FlightSideBar from "../components/MainFlightPages/FlightSideBar";

const Flight = () => {
    return (
        <>
            <div style={{ width: "100px" }}></div>
            <div>
                <FlightSearchBar />
                <div
                    style={{
                        display: "flex",
                        padding: "2rem",
                        gap: "2rem",
                        backgroundColor: "#CFD8DC",
                    }}>
                    <FlightSideBar />
                    <AvailFlights />
                </div>
            </div>
        </>
    );
};

export default Flight;
