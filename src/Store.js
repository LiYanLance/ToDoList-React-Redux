import {createStore, combineReducers} from "redux"
import itemReducer from "./reducer/itemReducer"
import authenticationReducer from "./reducer/authenticationReducer";
import tagReducer from "./reducer/tagReducer";

const store = createStore(combineReducers({
    items: itemReducer,
    tags: tagReducer,
    isAuthenticated: authenticationReducer
}));

export default store;