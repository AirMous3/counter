import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {DisplayCounter} from "./components/Display";
import {Settings} from "./components/Settings";

function App() {

    let [state, setState] = useState(0)
    let [error, setError] = useState("")

    const incButton = () => {
        setState(state + 1)
    }
    const resetState = () => {
        setState(minValue)
    }

    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)

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
