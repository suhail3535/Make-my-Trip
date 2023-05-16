import React from 'react'
import styled from 'styled-components'
import HotelsData from './HotelsData'
import HotelSideBar from './HotelSideBar'

const Hotel = () => {
  return (
    <DIV>
        <div className="side">

        <HotelSideBar/>
        </div>
        <div className="data1">

        <HotelsData/>
        </div>
    </DIV>
  )
}


const DIV=styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: center;
    .side{
        width: 25%;
        /* text-align: right; */
        /* border-right: 2px solid black; */
        margin-top:23px
    }
    .data1{
        width: 85%;
        /* border: 1px solid green; */
       
    }
`
export default Hotel