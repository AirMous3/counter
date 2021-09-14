import React from "react";
import "./Toggle.css"


type PropsType = {
    onClick: () => void
    isDark: boolean
}
export const Toggle = ({onClick, isDark}: PropsType) => {

    return <div className={"main"} id={"main"}>
        <label className="switch">
            <input type="checkbox" checked={isDark} onClick={onClick} id="checkBox"/>
            <span className="slider"/>
        </label>
    </div>
}

export const ToggleMode = React.memo(Toggle)