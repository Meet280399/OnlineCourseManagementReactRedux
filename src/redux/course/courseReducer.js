
import {
    FETCH_COURSES_REQUEST,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE,
    DELETE_COURSE_REQUEST,
    UPDATE_COURSE_REQUEST,
    ADD_COURSE_REQUEST,
    SEARCH_COURSES_REQUEST
} from "./courseTypes";

const initialState = {
    loading: false,
    courses: [],
    course: {},
    error: "",
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COURSE_REQUEST:
            return {
                ...state,
                courses: [...state.courses, action.payload],//course data
            }
        case FETCH_COURSES_REQUEST:
            return {
                ...state,
                courses: [...state.courses, action.payload],
                loading: true,
            };
        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.payload,//course data
                loading: false
            };
        case FETCH_COURSES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case DELETE_COURSE_REQUEST:
            return {
                ...state,
                courses: state.courses.filter(e => e.courseId !== action.payload)
            };
        case UPDATE_COURSE_REQUEST:
            let items = state.courses.filter(e => e.courseId !== action.payload.courseId)
            return {
                ...state,
                courses:[...items, action.payload]
            };
        case SEARCH_COURSES_REQUEST:
            let item = state.courses.find(e => e.courseId === action.payload)
            return {
                ...state,
                course: item,
            };
        default:
            return state;
    }
};

export default reducer;
