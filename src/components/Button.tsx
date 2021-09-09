import s from "./Button.module.css"
import React from "react";


type ButtonPropsType = {
    title: string
    onClick: () => void
    buttonDisable?: boolean

}

export const Button = ({title, buttonDisable, onClick}: ButtonPropsType) => {

    const disabled = buttonDisable

    const className = disabled ? s.disabled : s.button

    return (
        <button disabled={disabled} onClick={onClick} className={className}>{title}</button>
    )
}