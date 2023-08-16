import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer.js";
import {customersReducer} from "./customersReducers.js";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

console.log(store)
