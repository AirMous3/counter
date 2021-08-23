import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {DisplayCounter} from "./components/Display";
import {Settings} from "./components/Settings";

function App() {

    let [state, setState] = useState(0)  // state of main number
    let [error, setError] = useState("Number are incorrect") // state of error
    let [minValue, setMinValue] = useState(0) // minValue state
    let [maxValue, setMaxValue] = useState(0) // maxValue state
    let [minValueSettings, setMinValueSettings] = useState(0)
    let [maxValueSettings, setMaxValueSettings] = useState(0)

    const incButton = () => {
        setState(state + 1) // callback function to increment number
    }
    const resetState = () => {
        setState(minValue)   // callback function reset main number to minValue
    }


    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")  // get Main Value as String to variable
        let valueAsNumber = JSON.parse(valueAsString ? valueAsString : "") // parse String to Number
        let valueAsStringMax = localStorage.getItem("counterMaxValue") // get Max Value as String to variable
        let valueAsNumberMax = JSON.parse(valueAsStringMax ? valueAsStringMax : "") // parse String to Number
        let valueAsStringMin = localStorage.getItem("counterMinValue")
        let valueAsNumberMin = JSON.parse(valueAsStringMin ? valueAsStringMin : "")
        let valueAsStringSetMax = localStorage.getItem("counterMaxValueSettings")
        let valueAsNumberSetMax = JSON.parse(valueAsStringSetMax ? valueAsStringSetMax : "")
        let valueAsStringSetMin = localStorage.getItem("counterMinValueSettings")
        let valueAsNumberSetMin = JSON.parse(valueAsStringSetMin ? valueAsStringSetMin : "")
        setState(valueAsNumber)
        setMaxValue(valueAsNumberMax)
        setMinValue(valueAsNumberMin)
        setMaxValueSettings(valueAsNumberSetMax)
        setMinValueSettings(valueAsNumberSetMin)
    }, [])


    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(state))  // get Main Value as String
        localStorage.setItem("counterMinValue", JSON.stringify(minValue)) // get Min Value as String
        localStorage.setItem("counterMaxValue", JSON.stringify(maxValue)) // get Max Value as String
        localStorage.setItem("counterMaxValueSettings", JSON.stringify(maxValueSettings))
        localStorage.setItem("counterMinValueSettings", JSON.stringify(minValueSettings))
    }, [state, minValue, maxValue, maxValueSettings, minValueSettings ])


    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let result = Number(e.currentTarget.value)
        setMinValueSettings(result)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let result = Number(e.currentTarget.value)
        setMaxValueSettings(result)
    }

    const setConfig = () => {
        setMinValue(minValueSettings)
        setMaxValue(maxValueSettings)
        setState(minValueSettings)


    }


    return (<div className={"main"}>

            <div className={"settings"}>
                <Settings minValue={minValueSettings} onChangeMin={onChangeMinHandler} maxValue={maxValueSettings}
                          onChangeMax={onChangeMaxHandler}
                />
                <div>
                    <Button title={"Set"} onClick={setConfig} state={state} maxValue={maxValue} minValue={minValue} minSetValue={minValueSettings} maxSetValue={maxValueSettings}/>
                </div>

            </div>
            <div className="container">
                <div>
                    <DisplayCounter state={state} error={error} minValue={minValueSettings} maxValue={maxValueSettings}/>
                </div>
                <div className={"bottom"}>
                    <Button onClick={incButton} state={state} title={"Inc"} maxValue={maxValue} minValue={minValue} minSetValue={minValueSettings} maxSetValue={maxValueSettings}/>
                    <Button onClick={resetState} state={state} title={"Reset"} maxValue={maxValue}/>
                </div>

            </div>
        </div>

    );
}

export default App;
