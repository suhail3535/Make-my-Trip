import React from "react";
import Footer from "../components/Footer/Footer";
import MapCarosel1 from "../components/HandpickedSlider/MapCarousel1";
import Download from "../components/offers/Download";
import OfferSlider from "../components/offers/OfferSlider";
import Promotion from "../components/offers/Promotion";
import MapCarosel2 from "../components/UnlockSlider/MapCarosel2";

const Home = () => {
    return (
        <div className="home">
            <OfferSlider />
            <Promotion />
            <Download />
            <MapCarosel1 />
            <MapCarosel2 />
            <Footer />
        </div>
    );
};

export default Home;
