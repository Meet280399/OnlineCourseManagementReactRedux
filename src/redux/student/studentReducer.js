import {
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  UPDATE_STUDENT_REQUEST,
  DELETE_STUDENT_REQUEST,
  ADD_STUDENT_REQUEST,
  SEARCH_STUDENTS_REQUEST,
} from "./studentTypes";

const initialState = {
  loading: false,
  students: [],
  student: {},
  error: "",
};

/*
    Reducers are the only way to change the states in redux
    Reducers are the only place where you can write logic and calculations
    Reducer function accepts the previous state and the action being dispatched
    It calculates the next state and returns new object
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT_REQUEST:
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        students: [...state.students, action.payload],
        loading: true,
      };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload, // student data
        loading: false,
      };

    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        students: state.students.filter((e) => e.studentId !== action.payload),
      };

    case UPDATE_STUDENT_REQUEST:
      let items = state.students.filter(
        (e) => e.studentId !== action.payload.studentId
      );
      return {
        ...state,
        students: [...items, action.payload],
      };

    case SEARCH_STUDENTS_REQUEST:
      let item = state.students.find((e) => e.studentId === action.payload);
      return {
        ...state,
        student: item,
      };

    default:
      return state;
  }
};

export default reducer;
