import React, {ChangeEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {DisplayCounter} from "./components/Display";
import {Settings} from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./Redux/store";
import {
    changeDisplayModeAc, changeIsError,
    changeMaxValueAc, changeMinValueAc,
    incrementCounterValueAc,
    resetStateAc, setConfigAc
} from "./Redux/Reducers/Main-Reducer";


function App() {

    const dispatch = useDispatch()
    const displayMode = useSelector<RootStateType,boolean>(state => state.counter.displayMode)
    const error = useSelector<RootStateType,string>(state => state.counter.error)
    const isError = useSelector<RootStateType, boolean>( state=> state.counter.isError )
    const counterValue = useSelector<RootStateType,number>(state => state.counter.counterValue)
    const maxValue = useSelector<RootStateType,number>(state => state.counter.maxValue)
    const minValue = useSelector<RootStateType,number>(state => state.counter.minValue)
    const incButton = () => dispatch(incrementCounterValueAc())
    const resetState = () => dispatch(resetStateAc())
    const changeDisplayMode = () => dispatch(changeDisplayModeAc(false))
    const setConfig = () => dispatch(setConfigAc(true))
    const onChaneMaxValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValueAc(Number(e.currentTarget.value)))
    const onChaneMinValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValueAc(Number(e.currentTarget.value)))

    if (maxValue <= minValue || maxValue <= 0 ||  minValue < 0 ) {  // check value on error
         dispatch(changeIsError(true))
    } else dispatch(changeIsError(false))




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
                    <Settings minValue={minValue} maxValue={maxValue}
                              error={error} onChangeMax={onChaneMaxValue}
                              onChangeMin={onChaneMinValue} isError={isError}/>
                    <div>
                        <Button title={"Set"} onClick={setConfig} counterValue={counterValue}
                                maxValue={maxValue} minValue={minValue}/>
                    </div>
                </div>

            }
        </div>

    );
}

export default App;
