import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import "../HotelCompo/hotelSideBar.css";
const HotelSideBar = () => {
  const [searchParams, setSearchParmas] = useSearchParams();

  //////////filter basis on star
  const initialStar = searchParams.getAll("star");
  const [star, setStar] = useState(initialStar || []);
  // console.log(serachParams)
  const handleChange = (e) => {
    let added = [...star];
    const value = e.target.value;
    if (added.includes(value)) {
      added = added.filter((el) => el !== value);
    } else {
      added.push(value);
    }
    setStar(added);
  };

  /////////sorting logic
  const initialSort = searchParams.get("sort");
  console.log(initialSort);
  const [sort, setSort] = useState(initialSort || "");
  const handleSort = (e) => {
    let val = e.target.value;
    val == sort ? setSort(null) : setSort(val);
    // setSort(e.target.value)
  };
  const city=JSON.parse(localStorage.getItem("city"))
  // console.log(city)
  // const city=loc
  useEffect(() => {
    if (sort || star||city) {
      let params = {};
      star && (params.star = star);
      sort && (params.sort = sort);
      // search && (params.search=search)
      city && (params.city=city)
      setSearchParmas(params);
    }
  }, [sort, star]);
  return (
    <div id="mainSideBar">
      <h2 id="heading">Sort By Price</h2>
      <div style={{ padding: "7px" }}>
        <input
          className="inp"
          type="checkbox"
          checked={sort == "asc"}
          value={"asc"}
          onChange={handleSort}
        />
        <label className="inpLabel">Low to High</label>
      </div>

     
      
      <div style={{ padding: "7px" }}><input
        className="inp"
        type="checkbox"
        checked={sort == "desc"}
        value={"desc"}
        onChange={handleSort}
      />
      <label className="inpLabel">High to Low</label></div>
      <h2 id="heading">Star Category</h2>
      <div style={{ padding: "7px" }}><input
        className="inp"
        type="checkbox"
        onChange={handleChange}
        value={"5"}
        checked={star.includes("5")}
      />
      <label className="inpLabel">5 Star</label></div>
      <div style={{ padding: "7px" }}>
      <input
        className="inp"
        type="checkbox"
        onChange={handleChange}
        value={"4"}
        checked={star.includes("4")}
      />
      <label className="inpLabel">4 Star</label>
      </div>
      <div style={{ padding: "7px" }}><input
        className="inp"
        type="checkbox"
        onChange={handleChange}
        value={"3"}
        checked={star.includes("3")}
      />

      <label className="inpLabel">3 Star</label></div>
      <h2 id="heading">Guest Love</h2>
      <div style={{ padding: "7px" }}><input className="inp" type="checkbox" />
      <label className="inpLabel">Swimming Pool</label></div>
      <div style={{ padding: "7px" }}><input className="inp" type="checkbox" />
      <label className="inpLabel">Wi-Fi</label></div>
      <div style={{ padding: "7px" }}><input className="inp" type="checkbox" />
      <label className="inpLabel">Spa</label></div>
      
      
    </div>
  );
};
const DIV = styled.div``;
export default HotelSideBar;
