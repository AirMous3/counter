
type CounterType = {
    error: string
    counterValue: number
    maxValue: number
}

export const DisplayCounter = (props: CounterType) => {



    const className = props.counterValue === props.maxValue ? "display-error" : "display"
    return (
        <div  className={className} >{props.counterValue}</div>
    )
}