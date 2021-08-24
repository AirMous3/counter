import React, {ChangeEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {DisplayCounter} from "./components/Display";
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./Redux/store";
import {
    changeDisplayModeAc,
    changeMaxValueAc, changeMinValueAc,
    incrementCounterValueAc,
    resetStateAc, setConfigAc
} from "./Redux/Reducers/Main-Reducer";


function App() {
    const dispatch = useDispatch()
    const displayMode = useSelector((state: RootStateType) => state.counter.displayMode)
    const error = useSelector((state: RootStateType) => state.counter.error)
    const counterValue = useSelector((state: RootStateType) => state.counter.counterValue)
    const maxValue = useSelector((state: RootStateType) => state.counter.maxValue)
    const minValue = useSelector((state: RootStateType) => state.counter.minValue)
    const incButton = () => dispatch(incrementCounterValueAc())
    const resetState = () => dispatch(resetStateAc())
    const changeDisplayMode = () => dispatch(changeDisplayModeAc(false))
    const setConfig = () => dispatch(setConfigAc(true))
    const onChaneMaxValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAc(Number(e.currentTarget.value)))
    const onChaneMinValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValueAc(Number(e.currentTarget.value)))

    // let [state, setState] = useState(0)  // state of main number

    // let [minValue, setMinValue] = useState(0) // minValue state
    // let [maxValue, setMaxValue] = useState(0) // maxValue state
    // let [minValueSettings, setMinValueSettings] = useState(0)
    // let [maxValueSettings, setMaxValueSettings] = useState(0)
    // let [displayMode, setDisplayMode] = useState(false)

    // const incButton = () => {
    //     setState(state + 1) // callback function to increment number
    // }
    // const resetState = () => {
    //     setState(minValue)   // callback function reset main number to minValue
    // }


    // useEffect(() => {
    //     let valueAsString = localStorage.getItem("counterValue")  // get Main Value as String to variable
    //     let valueAsNumber = JSON.parse(valueAsString ? valueAsString : "") // parse String to Number
    //     let valueAsStringMax = localStorage.getItem("counterMaxValue") // get Max Value as String to variable
    //     let valueAsNumberMax = JSON.parse(valueAsStringMax ? valueAsStringMax : "") // parse String to Number
    //     let valueAsStringMin = localStorage.getItem("counterMinValue")
    //     let valueAsNumberMin = JSON.parse(valueAsStringMin ? valueAsStringMin : "")
    //     let valueAsStringSetMax = localStorage.getItem("counterMaxValueSettings")
    //     let valueAsNumberSetMax = JSON.parse(valueAsStringSetMax ? valueAsStringSetMax : "")
    //     let valueAsStringSetMin = localStorage.getItem("counterMinValueSettings")
    //     let valueAsNumberSetMin = JSON.parse(valueAsStringSetMin ? valueAsStringSetMin : "")
    //     setState(valueAsNumber)
    //     setMaxValue(valueAsNumberMax)
    //     setMinValue(valueAsNumberMin)
    //     setMaxValueSettings(valueAsNumberSetMax)
    //     setMinValueSettings(valueAsNumberSetMin)
    // }, [])


    // useEffect(() => {
    //     localStorage.setItem("counterValue", JSON.stringify(state))  // get Main Value as String
    //     localStorage.setItem("counterMinValue", JSON.stringify(minValue)) // get Min Value as String
    //     localStorage.setItem("counterMaxValue", JSON.stringify(maxValue)) // get Max Value as String
    //     localStorage.setItem("counterMaxValueSettings", JSON.stringify(maxValueSettings))
    //     localStorage.setItem("counterMinValueSettings", JSON.stringify(minValueSettings))
    // }, [state, minValue, maxValue, maxValueSettings, minValueSettings])


    // const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let result = Number(e.currentTarget.value)
    //     setMinValueSettings(result)
    // }

    // const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     let result = Number(e.currentTarget.value)
    //     setMaxValueSettings(result)
    // }

    // const setConfig = () => {
    //     setMinValue(minValueSettings)
    //     setMaxValue(maxValueSettings)
    //     setState(minValueSettings)
    //     setDisplayMode(true)
    // }
    // const changeDisplayMode = () => {
    //     setDisplayMode(false)
    // }

    return (<div className={"main"}>

            {displayMode
                ? <div className="container">
                    <div>
                        <DisplayCounter error={error} counterValue={counterValue} maxValue={maxValue}/>
                    </div>
                    <div>
                        <Button onClick={incButton} counterValue={counterValue} title={"Inc"} maxValue={maxValue}
                                minValue={minValue}/>

                        <Button onClick={resetState} counterValue={counterValue} title={"Reset"} maxValue={maxValue}
                                minValue={minValue}/>

                        <Button onClick={changeDisplayMode} title={"Set"} counterValue={counterValue}
                                maxValue={maxValue}
                                minValue={minValue}/>
                    </div>

                </div>
                : <div className={"settings"}>
                    <Settings minValue={minValue}
                              maxValue={maxValue}
                              error={error} onChangeMax={onChaneMaxValue} onChangeMin={onChaneMinValue}/>
                    <div>
                        <Button title={"Set"} onClick={setConfig} counterValue={counterValue} maxValue={maxValue}
                                minValue={minValue}/>
                    </div>
                </div>

            }
        </div>

    );
}

export default App;
