import React from "react";

type CounterType = {
    counterValue: number
    maxValue: number
}

export const DisplayCounter = ({counterValue,maxValue}:CounterType) => {

    console.log("display rendered")

    const className = counterValue === maxValue ? "display-error" : "display"
    return (
        <div  className={className} >{counterValue}</div>
    )
}