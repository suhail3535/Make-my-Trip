import React from "react";
import "./OfferSlider.css";
import appsprite from "./Assets/app-sprite1.jpg";
import appstore from "./Assets/appstore.jpg";
import googleplay from "./Assets/googlePlay.jpg";

const Download = () => {
  console.log(appsprite)
  return (
    <div className="DownloadPage">
      <div className="downloadDesc">
        <div className="downloadDescTitle">
          <img src={appsprite} alt="1"/>
          <div className="next">
            <h2 className="doTx">Download App Now!</h2>
            <p className="loTx">
              Use code WELCOMEMMT and get FLAT 12% OFF* on your first domestic
              flight booking
            </p>
          </div>
        </div>
        <div className="downPlace">
          <input type="number" placeholder=" Enter Mobile Number"></input>
          <div className="app">GET APP LINK</div>
        </div>
      </div>
      <div className="DownloadRight">
        <div className="mid">
          <img src={googleplay} alt="2"/>
          <img src={appstore} alt="3"/>
        </div>
        <div className="rightScan">
          <img src="https://promos.makemytrip.com/notification/xhdpi/QRCodeDT_QR-code.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Download;
