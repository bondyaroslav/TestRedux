const initialState = {
    customers: [],
    isFetching: false
}

const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const SET_IS_FETCHING = "SET_IS_FETCHING"

export const customersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.id)}
        case SET_IS_FETCHING:
            return {...state, isFetching: state.isFetching = true}
        default:
            return state
    }
}

export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (id) => ({type: REMOVE_CUSTOMER, id})
export const setIsFetchingAction = () => ({type: SET_IS_FETCHING})