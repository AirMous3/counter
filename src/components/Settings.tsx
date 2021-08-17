import s from "./Settings.module.css"
import {ChangeEvent} from "react";


type SettingsPropsType = {
    minValue: number
    maxValue: number
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Settings = (props: SettingsPropsType) => {
    return <div>
        <div className={s.text}>
            max value
        </div>
        <input onChange={props.onChangeMax} className={s.input} type="number"/>
        <div className={s.text}>
            min value
        </div>
        <input onChange={props.onChangeMin} className={s.input} type="number"/>

    </div>
}