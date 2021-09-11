import s from "./Settings.module.css"
import React, {ChangeEvent} from "react";


type SettingsPropsType = {
    minValue: number
    maxValue: number
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    isError: boolean
}


export const Settings = ({isError,maxValue,onChangeMax,onChangeMin,minValue}:SettingsPropsType) => {

    console.log("settings rendered")

    const classErrorInput = isError? s.inputError : s.input
    const classTextError = isError? s.textError : s.text
    const errorMaxValueText = isError? "incorrect max number"  : "max value"
    const errorMinValueText = isError? "incorrect min number"  : "min value"



    return <div className={s.content}>
        <div className={classTextError}>
            {errorMaxValueText}
        </div>
        <input value={maxValue} onChange={onChangeMax} className={classErrorInput}
               type="number"/>
        <div className={classTextError}>
            {errorMinValueText}
        </div>
        <input value={minValue} onChange={onChangeMin} className={classErrorInput}
               type="number"/>

    </div>
}