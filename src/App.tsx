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
    const displayMode = useSelector<RootStateType, boolean>(state => state.counter.displayMode)
    const counterValue = useSelector<RootStateType, number>(state => state.counter.counterValue)
    const maxValue = useSelector<RootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<RootStateType, number>(state => state.counter.minValue)
    const incButton = () => dispatch(incrementCounterValueAc())
    const resetState = () => dispatch(resetStateAc())
    const changeDisplayMode = () => dispatch(changeDisplayModeAc(false))
    const setConfig = () => dispatch(setConfigAc(true))
    const onChaneMaxValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAc(Number(e.currentTarget.value)))
    const onChaneMinValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValueAc(Number(e.currentTarget.value)))


    const error = maxValue <= minValue || maxValue <= 0 || minValue < 0
    const buttonDisableInc = counterValue === maxValue


    return (<div className={"main"}>

            {displayMode
                ? <div className="container">
                    <div>
                        <DisplayCounter counterValue={counterValue} maxValue={maxValue}/>
                    </div>
                    <div>
                        <Button onClick={incButton} title={"inc"} buttonDisable={buttonDisableInc}/>

                        <Button onClick={resetState} title={"reset"}/>

                        <Button onClick={changeDisplayMode} title={"set"}/>
                    </div>

                </div>
                : <div className={"settings"}>
                    <Settings minValue={minValue} maxValue={maxValue} onChangeMax={onChaneMaxValue} onChangeMin={onChaneMinValue} isError={error}/>
                    <div>
                        <Button title={"set"} onClick={setConfig} buttonDisable={error}/>
                    </div>
                </div>

            }
        </div>

    );
}

export default App;
