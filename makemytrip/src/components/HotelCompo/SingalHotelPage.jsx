import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "./ImageSlider";
import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";
import ConstNav from "../Navbar/ConstNav";
import Footer from "../Footer/Footer";
import { Heading } from "@chakra-ui/react";
const SingalHotelPage = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    console.log(hotel);
    console.log(id);
    const { image, price, star, HotelName, desc } = hotel;
    const starts = [];
    for (let i = 0; i < star; i++) {
        starts.push("⭐");
    }
    useEffect(() => {
        axios
            .get(`https://makethejourneyhard.cyclic.app/hotels/${id}`)
            .then((res) => {
                setHotel(res.data);
            });
    }, []);
    return (
        <>
            <br />
            <Heading>Hotel details page</Heading>
            <DIV>
                <div className="main">
                    <Carousel />
                    <div className="youtube">
                        <iframe
                            width="350px"
                            borderRadius="8px"
                            height="192"
                            src="https://www.youtube.com/embed/m2CxSIJB6kk"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  "
                            allowfullscreen></iframe>
                        <img src={image} alt={star} />
                    </div>
                    <div className="side">
                        <h2>Standard Room, 2 Twin Bed</h2>
                        <p>
                            <BsFillPeopleFill fontSize={"29px"} />
                            <span color="#515050">
                                2 Adluts / per night
                            </span>{" "}
                        </p>
                        <span className="non">X Non-Refundable</span>
                        <br />
                        <span>Room only | non refundable</span>
                        <p className="pri">₹-{price}</p>
                        <hr />
                        <Link to="/payment">
                            <button className="book">Book Now</button>
                        </Link>
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.MC7jVw4gvr2aX1wr-6xccgHaDp&pid=Api&rs=1&c=1&qlt=95&w=186&h=91"
                            alt="promo"
                        />
                    </div>
                </div>
                <div className="head">
                    <h1>
                        {HotelName} {starts.join("")}
                    </h1>
                    <h2>{desc}</h2>
                    <p>
                        Located in Batignolles district, this property offers
                        great business and family stays with warm service,
                        lively and fun-filled recreation, easy connectivity
                        enjoy.
                    </p>
                </div>
            </DIV>
            <Footer />
        </>
    );
};

const DIV = styled.div`
    width: 80%;
    border: 0px solid red;

    margin: 50px auto;
    .main {
        border: 0px solid blue;
        width: 100%;
        margin: auto;
        padding: 10px;
        display: flex;
    }
    .head {
        margin-top: 10px;
        padding: 10px;
        border: 0px solid yellow;
    }
    .head h1 {
        font-size: 30px;
        text-align: center;
        font-weight: 700;
    }
    .head span {
        font-weight: 500;
    }
    .head h2 {
        margin-left: 40px;
    }
    .head p ul {
        line-height: 30px;
        padding-left: 20px;
    }
    .head p {
        line-height: 30px;
    }
    img {
        display: block;
        width: 350px;
        height: 158px;
        margin-top: 10px;
    }
    .pri {
        text-align: right;
    }
    .side hr {
        width: 100%;
    }
    .book {
        color: #fff;
        display: block;
        margin: auto;
        margin-top: 9px;
        height: 30px;
        width: 250px;
        border-radius: 50px;
        background-color: #0084ff;
    }
    .non {
        color: red;
    }
    .youtube {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
    .side {
        border: 1px solid #333;
        padding: 15px 10px 0px 15px;
        border-radius: 7px;
        width: 300px;
        margin-left: 20px;
        height: auto;
    }
    .side h2 {
        margin-left: -1px;
        font-size: 20px;
        font-weight: 600;
    }
    .side p {
        display: flex;
        font-size: 19px;
    }
`;
export default SingalHotelPage;
