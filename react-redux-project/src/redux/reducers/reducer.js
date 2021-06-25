import  { FETCH_USER_REQUEST, FETCH_DATA_FAILUR, FETCH_DATA_SUCCESS } from '../actions/actionTypes'

//Initials
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//Reducer
export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true

            }
        case FETCH_DATA_SUCCESS:
            return{
                loading:false,
                users: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILUR:
            return{
                loading:false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}