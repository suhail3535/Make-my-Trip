import { GET_HOMESTAY_FAILURE, GET_HOMESTAY_REQUEST, GET_HOMESTAY_SUCCESS } from "./actionTypes"

const initialState = {
    loading: false,
    error: false,
    homeStays: []
}
export const homeStaysReducer =(state= initialState, {type, payload})=>{
    switch(type){
        case GET_HOMESTAY_REQUEST:
            return {...state, loading:true, error:false}
        case GET_HOMESTAY_SUCCESS:
            return {...state, loading:false, error:false, homeStays:payload}
        case GET_HOMESTAY_FAILURE:
            return {...state, loading:false, error:true}
        default:
            return state
    }
}