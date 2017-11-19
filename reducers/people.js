import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from '../constants'


const initialState = {
    people: [],
    isFetching: false,
    error: false
}

export default function peopleReducer(state= initialState, action){
    switch(action.type){
        case FETCHING_PEOPLE:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_PEOPLE_SUCCESS:
        return {
            ...state,
            people: action.data,
            isFetching: false
        }
        case FETCHING_PEOPLE_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true
        }
    }
}