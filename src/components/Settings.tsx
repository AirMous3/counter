import s from "./Settings.module.css"
import {ChangeEvent} from "react";


type SettingsPropsType = {
    minValue: number
    maxValue: number
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    isError: boolean
}

export const Settings = (props: SettingsPropsType) => {



    const classErrorInput = props.isError? s.inputError : s.input
    const classTextError = props.isError? s.textError : s.text
    const errorMaxValueText = props.isError? "incorrect max number"  : "max value"
    const errorMinValueText = props.isError? "incorrect min number"  : "min value"



    return <div>
        <div className={classTextError}>
            {errorMaxValueText}
        </div>
        <input value={props.maxValue} onChange={props.onChangeMax} className={classErrorInput}
               type="number"/>
        <div className={classTextError}>
            {errorMinValueText}
        </div>
        <input value={props.minValue} onChange={props.onChangeMin} className={classErrorInput}
               type="number"/>

    </div>
}