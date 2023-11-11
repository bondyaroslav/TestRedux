import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "./store/reducers/cashReducer.js";
import {addCustomerAction, removeCustomerAction, setIsFetchingAction} from "./store/reducers/customersReducer.js";
import {fetchCustomers} from "./asyncActions/customers";

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const isFetching = useSelector(state => state.customers.isFetching)

    const addCash = (payload) => {
        dispatch(addCashAction(payload))
    }

    const getCash = (payload) => {
        dispatch(getCashAction(payload))
    }

    const addCustomer = (name) => {
        let customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))

    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    return (
        <div className={"App"}>
            <button className={"button"} onClick={ () => addCash() }>add cash</button>
            <button className={"button"} onClick={ () => getCash() }>get cash</button>
            <button className={"button"} onClick={ () => addCustomer("customer name") }>add customer</button>
            <button className={"button"} onClick={ () => {
                if (isFetching === false) return dispatch(fetchCustomers()) & dispatch(setIsFetchingAction())
                else return 0} }>
                show all customers
            </button>
            <div className={"cash-container"}>
                <div className={"cash"}>{cash}</div>
            </div>

            <div>
                {customers.length > 0 ?
                    <div>
                        {customers.map(customer =>
                            <div className={"customer"} key={customer.id} onClick={ () => {removeCustomer(customer.id)} }>
                                {customer.id}
                                {customer.username}
                                {customer.name}
                            </div>
                        )}
                    </div>
                    :
                    <div>
                        customers not found
                    </div>
                }
            </div>

        </div>
    )
}

export default App;