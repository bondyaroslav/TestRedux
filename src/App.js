import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

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
        dispatch(addCustomerAction({type: "ADD_CUSTOMER", payload: customer}))
    }

    const removeCustomer = () => {
        dispatch(removeCustomerAction())
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
                        <div>{customer.name}</div>)
                    }
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