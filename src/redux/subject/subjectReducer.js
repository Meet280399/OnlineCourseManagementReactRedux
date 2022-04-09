import {
    FETCH_SUBJECTS_REQUEST,
    FETCH_SUBJECTS_SUCCESS,
    FETCH_SUBJECTS_FAILURE,
    DELETE_SUBJECT_REQUEST,
    UPDATE_SUBJECT_REQUEST,
    ADD_SUBJECT_REQUEST,
    SEARCH_SUBJECTS_REQUEST
} from "./subjectTypes";

const initialState = {
    loading: false,
    subjects: [],
    subject: {},
    error: "",
};

/*
 Reducers are the only way to change states in Redux.
  It is the only place where you can write logic and calculations. 
Reducer function will accept the previous state of app and 
action being dispatched, calculate the next state and returns the new object.*/

const reducer = (state = initialState, action) => {//state transition n home comp updated
    switch (action.type) {
        case ADD_SUBJECT_REQUEST:
            return {
                ...state,
                subjects: [...state.subjects, action.payload],//sub data
            }
        case FETCH_SUBJECTS_REQUEST:
            return {
                ...state,
                subjects: [...state.subjects, action.payload],
                loading: true,
            };
        case FETCH_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: action.payload,//sub data
                loading: false
            };
        case FETCH_SUBJECTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case DELETE_SUBJECT_REQUEST:
            return {
                ...state,
                subjects: state.subjects.filter(e => e.subjectId !== action.payload)
            };
        case UPDATE_SUBJECT_REQUEST:
            let items = state.subjects.filter(e => e.subjectId !== action.payload.subjectId)
            return {
                ...state,
                subjects:[...items, action.payload]
            };
        case SEARCH_SUBJECTS_REQUEST:
            let item = state.subjects.find(e => e.subjectId === action.payload)
            return {
                ...state,
                subject: item,
            };
        default:
            return state;
    }
};

export default reducer;