import s from "./Button.module.css"


type ButtonPropsType = {
    title: string
    onClick: () => void
    state: number
    maxValue: number
    minValue?: number

}

export const Button = (props: ButtonPropsType) => {

    const disabled = props.title === "Inc" && props.state < props.maxValue && (props.minValue || 0 ) >= 0
        ? false
        : props.title === "Reset"
            ? false
            : props.title === "Set" && (props.minValue || 0) >= 0 && props.maxValue > 0 && (props.minValue || 0) < props.maxValue
                ? false
                : true

    const className = disabled ? s.disabled : s.button

    return (
        <button disabled={disabled} onClick={props.onClick} className={className}>{props.title}</button>
    )
}