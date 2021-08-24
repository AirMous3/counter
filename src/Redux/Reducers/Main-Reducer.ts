import {ActionsType} from "./ActionTypes";

let initialState = {
    counterValue: 0,
    maxValue: 0,
    minValue: 0,
    displayMode: false,
    error: "Number are incorrect"

}

type initialStateType = typeof initialState

export const MainReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INCREMENT-COUNTER-VALUE":
            return {...state, counterValue: state.counterValue + 1}
        case "RESET-VALUE":
            return {...state, counterValue: state.minValue}
        case "CHANGE-MAX-VALUE" :
            return {...state, maxValue: action.value}
        case "CHANGE-MIN-VALUE" :
            return {...state, minValue: action.value}
        case "CHANGE-DISPLAY-MODE":
            return {...state, displayMode: action.mode}
        case "SET-CONFIG":
            return {...state, counterValue: state.minValue , displayMode: action.mode}
        default:
            return state
    }
}


export const incrementCounterValueAc = () => ({type: "INCREMENT-COUNTER-VALUE"}) as const

export const changeMaxValueAc = (value: number) => ({type: "CHANGE-MAX-VALUE", value}) as const

export const changeMinValueAc = (value: number) => ({type: "CHANGE-MIN-VALUE", value}) as const

export const setConfigAc = (mode: boolean) => ({type: "SET-CONFIG" , mode}) as const

export const resetStateAc = () => ({type: "RESET-VALUE"}) as const

export const changeDisplayModeAc = (mode: boolean) => ({type: "CHANGE-DISPLAY-MODE" , mode }) as const