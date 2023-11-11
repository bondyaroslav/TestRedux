import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./reducers/cashReducer.js";
import {customersReducer} from "./reducers/customersReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))