import {RootStateType} from "./Redux/store";


export const selectDisplayMode = (state: RootStateType) => state.counter.displayMode
export const selectCounterValue = (state: RootStateType) => state.counter.counterValue
export const selectMaxValue = (state: RootStateType) => state.counter.maxValue
export const selectMinValue = (state: RootStateType) => state.counter.minValue