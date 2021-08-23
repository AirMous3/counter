type CounterType = {
    state: number
    error: string
    minValue: number
    maxValue: number
}

export const DisplayCounter = (props: CounterType) => {
    const className = props.state === props.maxValue ? "display-error" : "display"
    return (
        <div  className={className} >{props.state}</div>
    )
}