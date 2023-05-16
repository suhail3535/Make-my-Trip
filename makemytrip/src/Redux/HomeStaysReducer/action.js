import {
    GET_HOMESTAY_FAILURE,
    GET_HOMESTAY_REQUEST,
    GET_HOMESTAY_SUCCESS,
} from "./actionTypes";

import axios from "axios";
export const getHomeStayData = (paramsObj) => (dispatch) => {
    dispatch({ type: GET_HOMESTAY_REQUEST });
    axios
        .get("https://busy-gray-moose-toga.cyclic.app/homestay", paramsObj)
        .then((res) => {
            dispatch({ type: GET_HOMESTAY_SUCCESS, payload: res.data });
        })
        .catch(() => {
            dispatch({ type: GET_HOMESTAY_FAILURE });
        });
};

export const deleteHomstayData = (id) => {
    return axios.delete(
        `https://busy-gray-moose-toga.cyclic.app/homestay/${id}`
    );
};
export const patchHomstayData = (id, obj) => {
    return axios.patch(
        `https://busy-gray-moose-toga.cyclic.app/homestay/${id}`,
        obj
    );
};
export const postHomeStayData = (obj) => {
    return axios.post(`https://busy-gray-moose-toga.cyclic.app/homestay`, obj);
};
