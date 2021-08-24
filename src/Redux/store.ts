import {combineReducers, createStore} from "redux";
import {MainReducer} from "./Reducers/Main-Reducer";


const rootReducer = combineReducers({counter: MainReducer})


let preloadedState
const stateToString = localStorage.getItem("state") // get the  state
preloadedState = stateToString ? JSON.parse(stateToString) : undefined  // check on null


export const store = createStore(rootReducer, preloadedState) // second parameter preloadedState

export type RootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState())) // callback function to set state in localStorage
})