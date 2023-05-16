import React from 'react'
import { useLocation,Navigate } from 'react-router-dom'

const PrivatRouting = ({children}) => {
    const isAuth=localStorage.getItem("isAuth")
const location =useLocation()
    if(!isAuth){
        return <Navigate to='/login' state={location.pathname} replace />
    }else{
        return children
    }

 
}

export default PrivatRouting