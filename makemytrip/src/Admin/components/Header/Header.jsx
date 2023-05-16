import React from "react";
import "./Header.css";
import { FlagIcon } from "react-flag-kit";
import logo from "../Essential/logo.png";
import { Link } from "@chakra-ui/react";
function Header() {
    const mybiz =
        "//imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png";
    const travel =
        "https://companieslogo.com/img/orig/MMYT-ca98a9f1.png?t=1602681214";
    const flag = <FlagIcon code="IN" size={38} />;

    return (
        <div>
            <div className="header-main">
                <div className="header_child">
                    <img src={logo} alt="yourpic" />
                </div>
                <div className="header_child">
                    <div className="header_sub">
                        <div width="2px">
                            <img src={mybiz} alt="My bix" width="60" />
                        </div>
                        <div>
                            <h4>Introducing my Biz</h4>
                            <p>Business Travel Solution</p>
                        </div>
                    </div>
                    <div className="header_sub">
                        <div>
                            <img src={travel} alt="My bix" width="25" />
                        </div>
                        <div>
                            <h4>My Trips</h4>
                            <p>Manage Your bookings</p>
                        </div>
                    </div>
                    <div
                        className="header_sub"
                        style={{ backgroundColor: "#1E88E5" }}>
                        <div>
                            <img src={travel} alt="My bix" width="25" />
                        </div>
                        <Link href="/login">
                            <div>
                                <p>Login or Create Account</p>
                            </div>
                        </Link>
                    </div>
                    <Link href="/admin">
                        <div
                            className="header_sub"
                            style={{ backgroundColor: "#1E88E5" }}>
                            <div>
                                <img src={travel} alt="My bix" width="25" />
                            </div>
                            <div>
                                <p>Admin</p>
                            </div>
                        </div>
                    </Link>
                    <div className="header_sub">
                        <div>{flag}</div>
                        <div>
                            <p>IN | ENG | INR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
