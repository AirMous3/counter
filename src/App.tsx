import React, {ChangeEvent, useCallback} from 'react';
import './App.css';
import {ButtonMemo} from "./components/Button";
import {DisplayCounter} from "./components/Display";
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {
    changeDisplayModeAc,
    changeMaxValueAc,
    changeMinValueAc,
    incrementCounterValueAc,
    resetStateAc,
    setConfigAc
} from "./Redux/Reducers/Main-Reducer";
import {selectCounterValue, selectDisplayMode, selectMaxValue, selectMinValue} from "./selectors";


function App() {

    const dispatch = useDispatch()
    // const displayMode = useSelector<RootStateType, boolean>(state => state.counter.displayMode)
    const displayMode = useSelector(selectDisplayMode)
    // const counterValue = useSelector<RootStateType, number>(state => state.counter.counterValue)
    const counterValue = useSelector(selectCounterValue)
    // const maxValue = useSelector<RootStateType, number>(state => state.counter.maxValue)
    const maxValue = useSelector(selectMaxValue)
    // const minValue = useSelector<RootStateType, number>(state => state.counter.minValue)
    const minValue = useSelector(selectMinValue)
    const incButton = useCallback(() => dispatch(incrementCounterValueAc()), [dispatch])
    const resetState = useCallback(() => dispatch(resetStateAc()), [dispatch])
    const changeDisplayMode = useCallback(() => dispatch(changeDisplayModeAc(false)), [dispatch])
    const setConfig = useCallback(() => dispatch(setConfigAc(true)), [dispatch])
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
                        <ButtonMemo onClick={incButton} title={"inc"} buttonDisable={buttonDisableInc}/>

                        <ButtonMemo onClick={resetState} title={"reset"}/>

                        <ButtonMemo onClick={changeDisplayMode} title={"set"}/>
                    </div>

                </div>
                : <div className={"settings"}>
                    <Settings minValue={minValue} maxValue={maxValue} onChangeMax={onChaneMaxValue}
                              onChangeMin={onChaneMinValue} isError={error}/>
                    <div>
                        <ButtonMemo title={"set"} onClick={setConfig} buttonDisable={error}/>
                    </div>
                </div>

            }
        </div>

    );
}

export default App;
