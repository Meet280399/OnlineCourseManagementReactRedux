
import {
    FETCH_FEEDBACKS_REQUEST,
    FETCH_FEEDBACKS_SUCCESS,
    FETCH_FEEDBACKS_FAILURE,
    DELETE_FEEDBACK_REQUEST,
    UPDATE_FEEDBACK_REQUEST,
    ADD_FEEDBACK_REQUEST,
    SEARCH_FEEDBACKS_REQUEST
} from "./feedbackType.js";

const initialState = {
    loading: false,
    feedbacks: [],
    feedback: {},
    error: "",
};
/*
 Reducers are the only way to change states in Redux.
  It is the only place where you can write logic and calculations. 
Reducer function will accept the previous state of app and 
action being dispatched, calculate the next state and returns the new object.*/

const reducer = (state = initialState, action) => {//state transition n home comp updated
    switch (action.type) {
        case ADD_FEEDBACK_REQUEST:
            return {
                ...state,
                feedbacks: [...state.feedbacks, action.payload],//feed data
            }
        case FETCH_FEEDBACKS_REQUEST:
            return {
                ...state,
                feedbacks: [...state.feedbacks, action.payload],
                loading: true,
            };
        case FETCH_FEEDBACKS_SUCCESS:
            return {
                ...state,
                feedbacks: action.payload,//feed data
                loading: false
            };
        case FETCH_FEEDBACKS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case DELETE_FEEDBACK_REQUEST:
            return {
                ...state,
                feedbacks: state.feedbacks.filter(e => e.feedbackId !== action.payload)
            };
        case UPDATE_FEEDBACK_REQUEST:
            let items = state.feedbacks.filter(e => e.feedbackId !== action.payload.feedbackId)
            return {
                ...state,
                feedbacks:[...items, action.payload]
            };
        case SEARCH_FEEDBACKS_REQUEST:
            let item = state.feedbacks.find(e => e.feedbackId === action.payload)
            return {
                ...state,
                feedback: item,
            };
        default:
            return state;
    }
};

export default reducer;
