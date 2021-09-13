import React from "react";
import s from "../App.module.css"


type CounterType = {
    isError: boolean
    counterValue: number
}

export const DisplayCounter = ({isError, counterValue}: CounterType) => {

    return (
        <div className={`${s.display} ${isError? s.displayError: ""}`}>{counterValue}</div>
    )
}