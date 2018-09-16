import {createStore, combineReducers} from "redux"
import itemReducer from "./reducer/itemReducer"
import authenticationReducer from "./reducer/authenticationReducer";

const store = createStore(combineReducers({
    items: itemReducer,
    isAuthenticated: authenticationReducer
}));

export default store;