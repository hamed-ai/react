import axios from 'axios';
import  { FETCH_USER_REQUEST,
          FETCH_DATA_FAILUR, 
          FETCH_DATA_SUCCESS } from '../actions/actionTypes'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchِDataSuccess = users => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: users
    }
}
const fetchِDataFailure = error => {
    return {
        type: FETCH_DATA_FAILUR,
        payload: error
    }
}

//Asynch Action Creator
export const fetchData = () =>{
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=fdd9b27b-1182-4a85-8fbf-f9e4025c4c62&limit=5')
        .then(response => {
            //'response.data.result.records' is an array of Oil stations
            //This just returns rank property: const data = response.data.result.records.map(data => data.rank)
            const users = response.data.result.records
            dispatch(fetchِDataSuccess(users))
            //console.log(data)
        })
        .catch( error => {
            const errorMsg = error.message
            dispatch(fetchِDataFailure(error.message))
        }
        
        )
    }
}