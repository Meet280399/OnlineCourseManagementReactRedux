import {
    FETCH_INSTRUCTORS_REQUEST,
    FETCH_INSTRUCTORS_SUCCESS,
    FETCH_INSTRUCTORS_FAILURE,
    DELETE_INSTRUCTOR_REQUEST,
    UPDATE_INSTRUCTOR_REQUEST,
    ADD_INSTRUCTOR_REQUEST,
    SEARCH_INSTRUCTORS_REQUEST
} from "./instructorTypes";

const initialState = {
    loading: true,
    instructors: [],
    instructor: {},
    error: "",
};
/*
 Reducers are the only way to change states in Redux.
  It is the only place where you can write logic and calculations. 
Reducer function will accept the previous state of app and 
action being dispatched, calculate the next state and returns the new object.*/

const reducer = (state = initialState, action) => {//state transition n home comp updated
    switch (action.type) {
        case ADD_INSTRUCTOR_REQUEST:
            return {
                ...state,
                instructors: [...state.instructors, action.payload],//inst data
            }
        case FETCH_INSTRUCTORS_REQUEST:
            return {
                ...state,
                instructors: [...state.instructors, action.payload],
                loading: true,
            };
        case FETCH_INSTRUCTORS_SUCCESS:
            return {
                ...state,
                instructors: action.payload,//inst data
                loading: false
            };
        case FETCH_INSTRUCTORS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case DELETE_INSTRUCTOR_REQUEST:
            return {
                ...state,
                instructors: state.instructors.filter(e => e.instructorId !== action.payload)
            };
        case UPDATE_INSTRUCTOR_REQUEST:
            let items = state.instructors.filter(e => e.instructorId !== action.payload.instructorId)
            return {
                ...state,
                instructors:[...items, action.payload]
            };
        case SEARCH_INSTRUCTORS_REQUEST:
            let item = state.instructors.find(e => e.instructorId === action.payload)
            return {
                ...state,
                instructor: item,
            };
        default:
            return state;
    }
};

export default reducer;
