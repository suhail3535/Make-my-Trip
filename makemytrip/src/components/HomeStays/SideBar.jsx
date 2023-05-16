import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import "../HomeStays/homeStaySidebar.css"
export const Sidebar = () => {
  const [searchParems, setSearchParem] = useSearchParams();
  // const dispatch = useDispatch();
  // const location = useLocation();
  const initiallocationForSort = searchParems.getAll("locationForSort");
  const [locationForSort, setLocationForSort] = useState(
    initiallocationForSort || []
  );
  const initialOrder = searchParems.get("order");
  const [order, setOrder] = useState(initialOrder || "");
  const handleChange = (e) => {
    let newlocationForSort = [...locationForSort];
    const value = e.target.value;
    if (newlocationForSort.includes(value)) {
      newlocationForSort = newlocationForSort.filter((el) => el !== value);
    } else {
      newlocationForSort.push(value);
    }
    setLocationForSort(newlocationForSort);
  };
  const handleSort = (e) => {
    setOrder(e.target.value);
    //console.log(e.target.value)
  };
  useEffect(() => {
    let params = {
      locationForSort,
    };
    order && (params.order = order);
    setSearchParem(params);
  }, [locationForSort, order]);
  // const {homeStays} = useSelector((store)=>store.homeStaysReducer)

  return (
    <div id="mainSideBar" >
      <h1 id="heading">
        Select Filters
      </h1>

      <div>
        <h2 id="heading">
          Suggested For You
        </h2>
        <div style={{ padding: "7px" }}>
          <input
          className="inp"
            type="checkbox"
            value="NorthGoa"
            onChange={handleChange}
            checked={locationForSort.includes("NorthGoa")}
          />
          <label className="inpLabel">North Goa</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input
          className="inp"
            type="checkbox"
            value="SouthGoa"
            onChange={handleChange}
            checked={locationForSort.includes("SouthGoa")}
          />
          <label className="inpLabel">South Goa</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input
          className="inp"
            type="checkbox"
            value="Villa"
            onChange={handleChange}
            checked={locationForSort.includes("Villa")}
          />
          <label className="inpLabel">Villa (433)</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input
          className="inp"
            type="checkbox"
            value="BeachProperty"
            onChange={handleChange}
            checked={locationForSort.includes("BeachProperty")}
          />
          <label className="inpLabel">Beach Property (33)</label>
        </div>
      </div>
      <div>
        <h1
          id="heading">
          Sort By Price
        </h1>
        <div onChange={handleSort}>
          <div style={{ padding: "7px" }}>
            <input
              type="radio"
              name="order"
              value="asc"
              className="inp"
              defaultChecked={order === "asc"}
            />
            <label className="inpLabel">Low to High</label>
          </div>
          <div style={{ padding: "7px" }}>
            <input
              type="radio"
              name="order"
              value="desc"
              className="inp"
              defaultChecked={order === "desc"}
            />
            <label className="inpLabel">High to Low</label>
          </div>
        </div>
      </div>
      <div>
        <h1 id="heading"
         >
          Price per night
        </h1>
        <div style={{ padding: "7px" }}>
          <input className="inp" type="checkbox" value="" />
          <label className="inpLabel">₹ 0 - ₹ 2000</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input className="inp" type="checkbox" value="" />
          <label className="inpLabel">₹ 2000 - ₹ 5000</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input className="inp" type="checkbox" value="" />
          <label className="inpLabel">₹ 5000 - ₹ 7500</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input className="inp" type="checkbox" value="" />
          <label className="inpLabel">₹ 7500 - ₹ 10000</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input className="inp" type="checkbox" value="" />
          <label className="inpLabel">₹ 7500 - ₹ 10000</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input className="inp" type="checkbox" value="" />
          <label className="inpLabel">₹ 15000 - ₹ 30000</label>
        </div>
        <div style={{ padding: "7px" }}>
          <input className="inp" type="checkbox" value="" />
          <label className="inpLabel"> ₹ 30000+</label>
        </div>
      </div>
    </div>
  );
};
