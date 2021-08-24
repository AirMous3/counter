import {
    changeDisplayModeAc, changeIsError,
    changeMaxValueAc, changeMinValueAc,
    incrementCounterValueAc,
    resetStateAc, setConfigAc,
} from "./Main-Reducer";

export type ActionsType =
    ReturnType<typeof incrementCounterValueAc>
    | ReturnType<typeof resetStateAc>
    | ReturnType<typeof changeDisplayModeAc>
    | ReturnType<typeof changeMaxValueAc>
    | ReturnType<typeof changeMinValueAc>
    | ReturnType<typeof setConfigAc>
    | ReturnType<typeof changeIsError>