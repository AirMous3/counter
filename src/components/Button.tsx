import s from "./Button.module.css"


type ButtonPropsType = {
    title: string
    onClick: () => void
    counterValue: number
    maxValue: number
    minValue: number

}

export const Button = (props: ButtonPropsType) => {

    const disabled = props.title === "Inc" && props.counterValue < props.maxValue
        ? false
        : props.title === "Reset"
            ? false
            : props.title === "Set" && props.minValue  >= 0 && props.maxValue > 0 && props.minValue  < props.maxValue
                ? false
                : true


    const className = disabled ? s.disabled : s.button

    return (
        <button disabled={disabled} onClick={props.onClick} className={className}>{props.title}</button>
    )
}