import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {DisplayCounter} from "./components/Display";
import {Settings} from "./components/Settings";

function App() {

    let [state, setState] = useState(0)  // state of main number
    let [error, setError] = useState("") // state of error

    const incButton = () => {
        setState(state + 1) // callback function to increment number
    }
    const resetState = () => {
        setState(minValue)   // callback function reset main number to minValue
    }

    let [minValue, setMinValue] = useState(0) // minValue state
    let [maxValue, setMaxValue] = useState(0) // maxValue state

    useEffect( () => {
        let valueAsString = localStorage.getItem("counterValue")  // get Main Value as String to variable
        let valueAsNumber = JSON.parse(valueAsString? valueAsString : "") // parse String to Number
        let valueAsStringMax = localStorage.getItem("counterMaxValue") // get Max Value as String to variable
        let valueAsNumberMax = JSON.parse(valueAsStringMax? valueAsStringMax : "") // parse String to Number
        let valueAsStringMin = localStorage.getItem("counterMinValue")
        let valueAsNumberMin = JSON.parse(valueAsStringMin? valueAsStringMin : "")
        setState(valueAsNumber)
        setMaxValue(valueAsNumberMax)
        setMinValue(valueAsNumberMin)
    } , [] )


    useEffect( () => {
    localStorage.setItem("counterValue", JSON.stringify(state))  // get Main Value as String
    localStorage.setItem("counterMinValue", JSON.stringify(minValue)) // get Min Value as String
    localStorage.setItem("counterMaxValue", JSON.stringify(maxValue)) // get Max Value as String
    } , [state, minValue, maxValue] )


    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let result = Number(e.currentTarget.value)
        setMinValue(result)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let result = Number(e.currentTarget.value)
        setMaxValue(result)
    }

    const setConfig = () => {
        maxValue < minValue ? setError("Number are incorrect") : minValue >= 0 ? setState(minValue) : setError("Number are incorrect")


    }


    return (<div className={"main"}>

            <div className={"settings"}>
                <Settings minValue={minValue} onChangeMin={onChangeMinHandler} maxValue={maxValue}
                          onChangeMax={onChangeMaxHandler}
                />
                <div>
                    <Button title={"Set"} onClick={setConfig} state={state} maxValue={maxValue}/>
                </div>

            </div>
            <div className="container">
                <div>
                    <DisplayCounter state={state} error={error} minValue={minValue} maxValue={maxValue}/>
                </div>
                <div className={"bottom"}>
                    <Button onClick={incButton} state={state} title={"Inc"} maxValue={maxValue}/>
                    <Button onClick={resetState} state={state} title={"Reset"} maxValue={maxValue}/>
                </div>

            </div>
        </div>

    );
}

export default App;
