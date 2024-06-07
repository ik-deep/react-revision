import { combineReducers, legacy_createStore as createStore } from "redux";
import Reducer from "./reducers/Counter";

const rootReducer = combineReducers({
     counter:Reducer
})

export const store = createStore(rootReducer);