import {combineReducers, createStore} from "redux";
import {MainReducer} from "./Reducers/Main-Reducer";


const rootReducer = combineReducers({counter: MainReducer})


export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>