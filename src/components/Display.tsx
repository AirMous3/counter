type CounterType = {
    state: number
    error: string
    minValue: number
    maxValue: number
}

export const DisplayCounter = (props: CounterType) => {
    const className = props.minValue < 0
        ? "display-error"
        : props.maxValue <= 0
            ? "display-error"
            : props.state == props.maxValue
                ? "display-error"
                : props.minValue > props.maxValue
                    ? "display-error"
                    : "display"
    return (
        <div className={className} >{(props.minValue > props.maxValue)? props.error : (props.minValue >= 0 && props.maxValue > 0) ? props.state :  props.error}</div>
    )
}