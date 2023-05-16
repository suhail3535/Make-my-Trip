import {
    GET_HOTEL_FAILURE,
    GET_HOTEL_SUCCESS,
    GET_HOTEL_REQUEST,
} from "./actionTypes";

import axios from "axios";

export const getHotelData = (obj) => (dispatch) => {
    dispatch({ type: GET_HOTEL_REQUEST });
    axios
        .get("https://busy-gray-moose-toga.cyclic.app/hotels", obj)
        .then((res) => {
            dispatch({ type: GET_HOTEL_SUCCESS, payload: res.data });
        })
        .catch(() => {
            dispatch({ type: GET_HOTEL_FAILURE });
        });
};

export const postHotelData = (obj) => {
    const res = axios.post(
        "https://busy-gray-moose-toga.cyclic.app/hotels",
        obj
    );
    return res.data;
};

export const deleteHotelData = async (id) => {
    const res = await axios.delete(
        `https://busy-gray-moose-toga.cyclic.app/hotels/${id}`
    );
    return res.data;
};
export const patchHotelData = async (id, obj) => {
    console.log(obj);
    const res = await axios.patch(
        `https://busy-gray-moose-toga.cyclic.app/hotels/${id}`,
        obj
    );
    return res.data;
};
