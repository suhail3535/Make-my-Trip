import logo from "./logo.svg";
import "./App.css";
import { MainRoutes } from "./pages/MainRoutes";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import NavbarHotel from "./components/Navbar/NavbarHotel";
import ConstNav from "./components/Navbar/ConstNav";
import Home from "./pages/Home";
import NavbarHomeStay from "./components/Navbar/NavbarHomeStay";
import Footer from "./components/Footer/Footer";
function App() {
    const { pathname } = useLocation();
    return (
        <div className="App">
            {pathname === "/" ? <Header /> : null}
            {pathname === "/hotels_home" ? <Header /> : ""}
            {pathname === "/home_stay_home" ? <Header /> : ""}
            {pathname === "/" ? <Navbar /> : ""}
            {pathname === "/hotels_home" ? <NavbarHotel /> : ""}
            {pathname === "/home_stay_home" ? <NavbarHomeStay /> : ""}
            {pathname === "/flight" ? <ConstNav /> : ""}
            {pathname === "/hotel" ? <ConstNav /> : ""}
            {pathname === "/home_stay" ? <ConstNav /> : ""}
            {pathname === "/ticket" ? <ConstNav /> : ""}
            {pathname === "/review_ticket" ? <ConstNav /> : ""}
            {pathname === "/login" ? <ConstNav /> : ""}
            {pathname === "/admin" ? <ConstNav /> : ""}
            <MainRoutes />

            {pathname === "/ticket" ? <Footer /> : ""}
            {pathname === "/review_ticket" ? <Footer /> : ""}
            {pathname === "/login" ? <Footer /> : ""}
            {pathname === "/admin" ? <Footer /> : ""}
            {pathname === "/flight" ? <Footer /> : ""}
            {pathname === "/hotel" ? <Footer /> : ""}
            {pathname === "/home_stay" ? <Footer /> : ""}
            {pathname === "/" ? <Home /> : ""}
            {pathname === "/hotels_home" ? <Home /> : ""}
            {pathname === "/home_stay_home" ? <Home /> : ""}
        </div>
    );
}

export default App;
