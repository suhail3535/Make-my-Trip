import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getData } from "../../Redux/FlightReducer/action";
import { Spinner } from "@chakra-ui/react";
import FlightCard from "./FlightCard";
import { useState } from "react";
import FlightPagination from "./FlightPagination";
import FlightSorting from "./FlightSorting";
const AvailFlights = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const { search } = useLocation();

    const dispatch = useDispatch();

    const { airports, isLoading, isError } = useSelector(
        (store) => store.FlightReducer
    );

    const paramsObj = {
        params: {
            air_line: searchParam.getAll("category"),
            type: searchParam.getAll("types"),
            _limit: 5,
            _page: searchParam.get("page"),

            _sort: searchParam.get("order") && "rent",
            _order: searchParam.get("order"),
        },
    };
    useEffect(() => {
        dispatch(getData(paramsObj));
    }, [search]);

    if (isLoading) {
        return (
            <h1>
                <Spinner size="xl" />
            </h1>
        );
    }
    if (isError) {
        return <h1 style={{ fontSize: "30px" }}>Try again later</h1>;
    }
    return (
        <div style={{ width: "80%" }}>
            <div
                style={{
                    marginBottom: "1rem",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}>
                <H3> Available Flights </H3>
                <DIV
                    style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "1rem",
                        width: "100%",
                        height: "100%",
                    }}>
                    <FlightSorting />

                    {airports.length > 0 &&
                        airports.map((el) => (
                            <FlightCard key={el.id} {...el} />
                        ))}
                </DIV>
            </div>
        </div>
    );
};
const H3 = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
`;
const DIV = styled.div`
    gap: 10px;
`;

export default AvailFlights;
