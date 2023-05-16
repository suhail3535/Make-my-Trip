

import { InputDIv,SearchBox } from "./FlightStyle";


export function FlightSearchBar(){
     const calenderData=JSON.parse(localStorage.getItem("calendar"))
     // const lsData=JSON.parse(localStorage.getItem("search"))
    return (
        <SearchBox>
           <InputDIv className="selection" style={{width:"100px"}}>
                <span>TRIP TYPE</span>
                <select style={{width:"100px"}} className="selectInput">
                     <option value="Round Trip">Round Trip</option>
                     <option value="One Way">One Way</option>
                     <option value="Multi Trip">Multi Trip</option>
                </select>
           </InputDIv> 
           
           <InputDIv >
                <span>From</span>
                <input className="searchInput" type="text" name="" placeholder="" />
           </InputDIv>
           <InputDIv>
                <span>To</span>
                <input className="searchInput" type="text" name="" placeholder=""/>
           </InputDIv>
           <InputDIv>
                <span>DEPART</span>
                <input className="searchInput" type="text" name="" placeholder={calenderData}/>
           </InputDIv>
           <InputDIv>
                <span>RETURN</span>
                <input className="searchInput" type="text" name="" placeholder=""/>
           </InputDIv>
           <InputDIv>
                <span>PASSENGERS & CLASS</span>
                <input className="searchInput" type="text" name="" placeholder="1 Adult,Economy"/>
           </InputDIv>
           <button>SEARCH</button>
        </SearchBox>
    )
}