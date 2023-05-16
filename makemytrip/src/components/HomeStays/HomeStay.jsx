// import logo from './logo.svg';

import HomeStayList from "./HomeStayList";
import { Sidebar } from "./SideBar";

function HomeStay() {
    return (
        <div
            style={{
                width: "80%",
                margin: "auto",
                height: "auto",
                display: "flex",
            }}>
            <div style={{ width: "25%", "margin-top": "23px" }}>
                <Sidebar />
            </div>
            <div style={{ width: "75%" }}>
                <HomeStayList />
            </div>
        </div>
    );
}

export default HomeStay;
