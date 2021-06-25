import { combineReducers } from "redux";
import { reducer } from './reducers/reducer'

const rootReducer = combineReducers({
    user: reducer
})

export default rootReducer;