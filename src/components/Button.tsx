import s from "./Button.module.css"


type ButtonPropsType = {
    title: string
    onClick: () => void
    state: number
    maxValue: number
    minValue?: number
    minSetValue?: number
    maxSetValue?: number

}

export const Button = (props: ButtonPropsType) => {

    const disabled = props.title === "Inc" && props.state < props.maxValue && (props.minValue || 0) >= 0 && props.maxValue === props.maxSetValue && props.minValue === props.minSetValue
        ? false
        : props.title === "Reset"
            ? false
            : props.title === "Set" && (props.minSetValue || 0) >= 0 && (props.maxSetValue || 0) > 0  && (props.minSetValue || 0) < (props.maxSetValue || 0)
                ? false
                : true

    const className = disabled ? s.disabled : s.button

    return (
        <button disabled={disabled} onClick={props.onClick} className={className}>{props.title}</button>
    )
}