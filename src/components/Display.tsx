type CounterType = {
    state: number
    error: string
    minValue: number
}

export const DisplayCounter = (props: CounterType) => {

    return (
        <div>{(props.minValue >= 0) ? props.state : props.error}</div>
    )
}