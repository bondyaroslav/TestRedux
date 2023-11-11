import {addManyCustomersAction} from "../store/reducers/customersReducer";

export const fetchCustomers = () => {

    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                json.map( customers => dispatch(addManyCustomersAction(customers)))
            })
    }
}