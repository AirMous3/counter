import React from "react";
import "./Toggle.css"


type PropsType = {
    onClick: () => void
}
export const Toggle = ({onClick}: PropsType) => {

    console.log("toggle rendered")
    return <div className={"main"}>
        <label className="switch">
            <input type="checkbox" onClick={onClick} id="checkBox"/>
            <span className="slider"/>
        </label>
    </div>
}

export const ToggleMode = React.memo(Toggle)