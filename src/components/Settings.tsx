import s from "./Settings.module.css"
import {ChangeEvent} from "react";


type SettingsPropsType = {
    minValueSettings: number
    maxValueSettings: number
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
}

export const Settings = (props: SettingsPropsType) => {

    const classErrorInput = props.maxValueSettings < props.minValueSettings
        ? s.inputError
        : props.maxValueSettings <= 0
            ? s.inputError
            : props.minValueSettings === props.maxValueSettings
                ? s.inputError
                : props.minValueSettings < 0
                    ? s.inputError
                    : s.input

    const classTextError = props.maxValueSettings < props.minValueSettings
        ? s.textError
        : props.maxValueSettings <= 0
            ? s.textError
            : props.minValueSettings === props.maxValueSettings
                ? s.textError
                : props.minValueSettings < 0
                    ? s.textError
                    : s.text


    const divMaxText = props.maxValueSettings < props.minValueSettings
        ? "incorrect max value"
        : props.maxValueSettings <= 0
            ? "incorrect max value"
            : props.minValueSettings === props.maxValueSettings
                ? "incorrect max value"
                : props.minValueSettings < 0
                    ? "incorrect max value"
                    : "max value"

    const divMinText = props.maxValueSettings < props.minValueSettings
        ? "incorrect min value"
        : props.maxValueSettings <= 0
            ? "incorrect min value"
            : props.minValueSettings === props.maxValueSettings
                ? "incorrect min value"
                : props.minValueSettings < 0
                    ? "incorrect min value"
                    : "min value"

    return <div>
        <div className={classTextError}>
            {divMaxText}
        </div>
        <input value={props.maxValueSettings} onChange={props.onChangeMax} className={classErrorInput}
               type="number"/>
        <div className={classTextError}>
            {divMinText}
        </div>
        <input value={props.minValueSettings} onChange={props.onChangeMin} className={classErrorInput}
               type="number"/>

    </div>
}