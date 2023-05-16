import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getHomeStayData } from '../../Redux/HomeStaysReducer/action'
import HomeStayCard from './HomeStayCard'
import ScrollButton from '../HotelCompo/AutoScrollTop'

const HomeStayList = () => {
    const [searchParems] = useSearchParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const {homeStays} = useSelector((store)=>store.homeStaysReducer)
    //console.log(homeStays)
    let paramObj = {
        params:{
            locationForSort: searchParems.getAll("locationForSort"),
            _sort: searchParems.get("order") && "price",
            _order: searchParems.get("order")
        }
    }
    useEffect(()=>{
        dispatch(getHomeStayData(paramObj))
    },[location.search])
  return (
    <div>
        <ScrollButton/>
        {
            homeStays.length > 0 && homeStays.map((el)=>{
                return <HomeStayCard key={el.id} {...el}/>
            })
        }
    </div>
  )
}

export default HomeStayList