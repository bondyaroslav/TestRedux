import React from "react";
import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector( state => state.cash.cash )

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 5})
    }
    const getCash = () => {
        if (cash <= 0) {
            return 0
        } else {
            dispatch({type: "GET_CASH", payload: 5})
        }
    }

    console.log(cash)

    return (
        <div className={"App"}>
            <button className={"button"} onClick={addCash}>add cash</button>
            <button className={"button"} onClick={getCash}>get cash</button>
            <div>{cash}</div>
        </div>
    );
}

export default App;
