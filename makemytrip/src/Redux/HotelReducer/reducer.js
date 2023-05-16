import {
    GET_HOTEL_FAILURE,
    GET_HOTEL_SUCCESS,
    GET_HOTEL_REQUEST,
} from "./actionTypes";
const initialState = {
    isLoading: false,
    isError: false,
    hotels: [],
};

export const HotelReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_HOTEL_REQUEST: {
            return { ...state, isLoading: true };
        }
        case GET_HOTEL_SUCCESS: {
            return { ...state, isLoading: false, hotels: payload };
        }
        case GET_HOTEL_FAILURE: {
            return { ...state, isError: true, isLoading: false };
        }
        default: {
            return state;
        }
    }
};
