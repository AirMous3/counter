import s from "./Button.module.css"


type ButtonPropsType = {
    title: string
    onClick: () => void
    counterValue: number
    maxValue: number
    minValue: number
    buttonDisable?: boolean

}

export const Button = (props: ButtonPropsType) => {

    const disabled = props.buttonDisable

    const className = disabled ? s.disabled : s.button

    return (
        <button disabled={disabled} onClick={props.onClick} className={className}>{props.title}</button>
    )
}