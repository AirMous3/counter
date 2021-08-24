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
