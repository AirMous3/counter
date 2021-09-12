import React from "react";
import s from "../App.module.css"


type CounterType = {
    counterValue: number
    maxValue: number
}

export const DisplayCounter = ({counterValue,maxValue}:CounterType) => {



    const className = counterValue === maxValue ? s.displayError : s.display
    return (
        <div  className={className} >{counterValue}</div>
    )
}