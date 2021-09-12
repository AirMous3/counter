import s from "./Button.module.css"
import React from "react";


type ButtonPropsType = {
    title: string
    onClick: () => void
    buttonDisable?: boolean

}

export const Button = ({title, buttonDisable, onClick}: ButtonPropsType) => {



    const className = `${s.button} ${buttonDisable? s.disabled : ""}`

    return (
        <button disabled={buttonDisable} onClick={onClick} className={className}>{title}</button>
    )
}
export const ButtonMemo = React.memo(Button)