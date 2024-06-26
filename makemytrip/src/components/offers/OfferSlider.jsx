import React from "react";
import Slider from "react-slick";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { OfferCard } from "./OfferCard";
import { offerData } from "./offerData";
import "./OfferSlider.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function OfferSlider() {
    const slider = React.useRef(null);

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 2,

        centerMode: true,
        adaptiveHeight: true,
        arrrows: false,
    };

    return (
        <div className="SliderWidth">
            <Tabs>
                <div
                    className="flex tabFlex"
                    style={{ display: "flex", paddingRight: "20px" }}>
                    <div className="flex">
                        <TabList>
                            <Tab>All Offers</Tab>
                            <Tab>Bank Offers</Tab>
                        </TabList>
                    </div>
                    <div className="flex" style={{ marginTop: "20px" }}>
                        <button
                            style={{ fontSize: "30px", fontWeight: "bold" }}
                            onClick={() => slider?.current?.slickPrev()}>
                            <ChevronLeftIcon />
                        </button>
                        <button
                            style={{ fontSize: "30px", fontWeight: "bold" }}
                            onClick={() => slider?.current?.slickNext()}>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>

                <TabPanels>
                    <TabPanel>
                        <div>
                            <Slider ref={slider} {...settings}>
                                {offerData?.map((el) => (
                                    <div className="SliderItem">
                                        <OfferCard key={el.id} {...el} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </TabPanel>
                
                </TabPanels>
            </Tabs>
        </div>
    );
}
