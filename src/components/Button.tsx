import s from "./Button.module.css"


type ButtonPropsType = {
    title: string
    onClick: () => void
    state: number
    maxValue: number

}

export const Button = (props: ButtonPropsType) => {

    const disabled = props.title === "Inc" && props.state < props.maxValue
        ? false
        : props.title === "Reset"
            ? false
            : props.title === "Set"
                ? false
                : true

    const className = disabled ? s.disabled : s.button

    return (
        <button disabled={disabled} onClick={props.onClick} className={className}>{props.title}</button>
    )
}