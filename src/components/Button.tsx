import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
    onClick: () => void

}

export const Button = (props: ButtonPropsType ) => {
    return (
        <button onClick={props.onClick} className={s.button}>{props.title}</button>
    )
}