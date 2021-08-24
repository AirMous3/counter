import s from "./Settings.module.css"
import {ChangeEvent} from "react";


type SettingsPropsType = {
    minValue: number
    maxValue: number
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
}

export const Settings = (props: SettingsPropsType) => {

    const classErrorInput = props.maxValue < props.minValue
        ? s.inputError
        : props.maxValue <= 0
            ? s.inputError
            : props.minValue === props.maxValue
                ? s.inputError
                : props.minValue < 0
                    ? s.inputError
                    : s.input

    const classTextError = props.maxValue < props.minValue
        ? s.textError
        : props.maxValue <= 0
            ? s.textError
            : props.minValue === props.maxValue
                ? s.textError
                : props.minValue < 0
                    ? s.textError
                    : s.text


    const divMaxText = props.maxValue < props.minValue
        ? "incorrect max value"
        : props.maxValue <= 0
            ? "incorrect max value"
            : props.minValue === props.maxValue
                ? "incorrect max value"
                : props.minValue < 0
                    ? "incorrect max value"
                    : "max value"

    const divMinText = props.maxValue < props.minValue
        ? "incorrect min value"
        : props.maxValue <= 0
            ? "incorrect min value"
            : props.minValue === props.maxValue
                ? "incorrect min value"
                : props.minValue < 0
                    ? "incorrect min value"
                    : "min value"

    return <div>
        <div className={classTextError}>
            {divMaxText}
        </div>
        <input value={props.maxValue} onChange={props.onChangeMax} className={classErrorInput}
               type="number"/>
        <div className={classTextError}>
            {divMinText}
        </div>
        <input value={props.minValue} onChange={props.onChangeMin} className={classErrorInput}
               type="number"/>

    </div>
}