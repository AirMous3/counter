

type CounterType = {
    state: number
}
export const DisplayCounter = (props: CounterType) => {
    return(
        <div>{props.state}</div>
    )
}