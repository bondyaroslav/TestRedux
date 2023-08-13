import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReducer.js";
import {addCustomerAction, removeCustomerAction} from "./store/customersReducers.js";

const App = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (payload ) => {
        dispatch(addCashAction(payload))
    }

    const getCash = (payload ) => {
        dispatch(getCashAction(payload))
    }

    const addCustomer = (name = "adsa") => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customers) => {
        dispatch(removeCustomerAction(customers.id))
    }

    return (
        <div className={"App"}>
            <button className={"button"} onClick={addCash}>add cash</button>
            <button className={"button"} onClick={getCash}>get cash</button>
            <button className={"button"} onClick={addCustomer()}>add customer</button>
            <button className={"button"} onClick={removeCustomer}>remove customer</button>
            <div className={"cash-container"}>
                <div className={"cash"}>{cash}</div>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div key={customer.id}>{customer.name}</div>
                    )}
                </div>
                :
                <div>
                    customers not found
                </div>
            }
        </div>
    );
}

export default App;