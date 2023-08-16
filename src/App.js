import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReducer.js";
import {addCustomerAction, removeCustomerAction} from "./store/customersReducers.js";
import {fetchCustomers} from "./asyncActions/customers";

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

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
        console.log(customers)
        console.log(Date.now())
    }

    const removeCustomer = (customers) => {
        dispatch(removeCustomerAction(customers.id))
    }

    return (
        <div className={"App"}>
            <button className={"button"} onClick={ () => addCash() }>add cash</button>
            <button className={"button"} onClick={ () => getCash() }>get cash</button>

            <button className={"button"} onClick={ () => addCustomer(prompt()) }>add customer</button>
            <button className={"button"} onClick={ () => removeCustomer() }>remove customer</button>

            <button className={"button"} onClick={ () => dispatch(fetchCustomers()) }>show all customers</button>

            <div className={"cash-container"}>
                <div className={"cash"}>{cash}</div>
            </div>

            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div key={customer.id} onClick={ () => removeCustomer()}>{customer.name}</div>
                    )}
                </div>
                :
                <div>
                    customers not found
                </div>}
        </div>
    );
}

export default App;