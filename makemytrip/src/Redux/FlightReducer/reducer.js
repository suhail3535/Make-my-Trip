import { GET_REQ_SUCCESS, REQUEST, REQ_FAILD } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    airports: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUEST: {
            return { ...state, isLoading: true };
        }
        case GET_REQ_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                airports: payload,
            };
        }
        case REQ_FAILD: {
            return { ...state, isLoading: false, isError: true };
        }

        default:
            return state;
    }
};
