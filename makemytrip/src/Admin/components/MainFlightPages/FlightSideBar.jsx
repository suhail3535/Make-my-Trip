import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
const FlightSideBar = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const initialCategory = searchParam.getAll("category")
  const initialOrder=searchParam.get("order")
  const [category, setCategory] = useState(initialCategory || [])
  const [order,setOrder]=useState(initialOrder || "")
  const [page, setPage] = useState(Number(searchParam.get("page")) || 1)
  const handleChange = (e) => {
    let newCategory = [...category]
    const value = e.target.value
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter(el => (el !== value))
    } else {
      newCategory.push(value)
    }
    setCategory(newCategory)
  }
  const handleSort=(e)=>{
    setOrder(e.target.value)
  }
  /////////////////type filtering
  const typeArr = searchParam.getAll("type")
  const [types, setTypes] = useState(typeArr || [])

  const handleType = (e) => {
    let newCategory = [...types]
    const value = e.target.value
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter(el => (el !== value))
    } else {
      newCategory.push(value)
    }
    setTypes(newCategory)

  }
  useEffect(() => {
    let params = {
      category: category,
      types: types,
      page:page
    }
    order && (params.order=order);
    setSearchParam(params)
  }, [category, types,order,page])
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", borderRadius: "5px", padding: "1rem", width: "20%",height:"700px" }}>
      <DIV>
        <h3>Popular Filters</h3>
        <div>
          <input type="checkbox" value="No stop" checked={category.includes("No stop")} onChange={handleChange} />
          <label>Non Stop</label>
        </div>
        <div>
          <input type="checkbox" value="Morning Departures" checked={category.includes("Morning Departures")} onChange={handleChange} />
          <label>Morning Departures</label>
        </div>
        <div>
          <input type="checkbox" value="IndiGo" checked={category.includes("IndiGo")} onChange={handleChange} />
          <label>IndiGo</label>
        </div>
        <div>
          <input type="checkbox" value="vistara" checked={category.includes("vistara")} onChange={handleChange} />
          <label>Vistara</label>
        </div>
        <hr />
      </DIV>
      <DIV onChange={handleSort}>
      <h3>Price</h3>
      <div>
        <input type="radio" value={"asc"} name="sort" defaultChecked={order==="asc"}/>
        <label>Low to High</label>
      </div>
      <div>
        <input type="radio" value={"desc"} name="sort" defaultChecked={order==="desc"}/>
        <label>High to Low</label>
      </div>
    </DIV>
      <DIV>
        <h3>Stop From New Delhi</h3>
        <div>
          <input type="checkbox" value="No stop" checked={types.includes("No stop")} onChange={handleType} />
          <label>Non Stop</label>
        </div>
        <div>
          <input type="checkbox" value="1 stop" checked={types.includes("1 stop")} onChange={handleType} />
          <label>1 Stop</label>
        </div>
        <div>
          <input type="checkbox" value="1+ stop" checked={types.includes("1+ stop")} onChange={handleType} />
          <label>1+ Stop</label>
        </div>
        <hr />
      </DIV>
      <DIV>
        <h3>Airlines</h3>
        <div>
          <input type="checkbox" value="Air India" checked={category.includes("Air India")} onChange={handleChange} />
          <label>Air India</label>
        </div>
        <div>
          <input type="checkbox" value="Air Asia" checked={category.includes("Air Asia")} onChange={handleChange} />
          <label>Air Asia</label>
        </div>
        <div>
          <input type="checkbox" value="Akasa Air" checked={category.includes("Akasa Air")} onChange={handleChange} />
          <label>Akasa Air</label>
        </div>
        <div>
          <input type="checkbox" value="Go First" checked={category.includes("Go First")} onChange={handleChange} />
          <label>Go First</label>
        </div>
        <div>
          <input type="checkbox" value="IndiGo" checked={category.includes("IndiGo")} onChange={handleChange} />
          <label>IndiGo</label>
        </div>
        <div>
          <input type="checkbox" value="Spice Jet" checked={category.includes("Spice Jet")} onChange={handleChange} />
          <label>SpiceJet</label>
        </div>
      </DIV>
      <PAGE style={{backgroundColor:"white",borderRadius:"10px",width:"100%", display:"flex",marginTop:"20px"}}>
        <button  onClick={() => setPage(page - 1)} disabled={page == 1} >Previous</button>
        <button>{page}</button>
        <button  onClick={() => setPage(page + 1)} disabled={page >= 10}>Next</button>
      </PAGE>
    </div>
  );
}
const DIV = styled.div`

display:flex;
flex-direction:column;
h3{
  font-size:1.5em;
  font-weight: bold;
}
`
const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
    border:1px solid gray;
  }
`
export default FlightSideBar;
