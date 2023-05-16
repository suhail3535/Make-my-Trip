import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as FlightReducer } from "./FlightReducer/reducer";

import { homeStaysReducer } from "./HomeStaysReducer/reducer";
import { HotelReducer } from "./HotelReducer/reducer";
const allReducer = combineReducers({
    homeStaysReducer,
    HotelReducer,
    FlightReducer,
});

export const store = legacy_createStore(allReducer, applyMiddleware(thunk));
