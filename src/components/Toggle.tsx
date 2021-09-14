import React from "react";
import s from "./Toggle.module.css"


type PropsType = {
    onClick: () => void
    isDark: boolean
}
export const Toggle = ({onClick, isDark}: PropsType) => {
    console.log("toggle rendered")

    return <div className={s.main} >
        <label className={s.switch}>
            <input type="checkbox" defaultChecked={isDark} onClick={onClick} />
            <span className={s.slider}/>
        </label>
    </div>
}

export const ToggleMode = React.memo(Toggle)