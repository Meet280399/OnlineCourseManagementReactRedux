import { combineReducers } from "redux";
import courseReducer from "./course/courseReducer.js";
import studentReducer from "./student/studentReducer.js";
import subjectReducer from "./subject/subjectReducer.js";
import instructorReducer from "./instructor/instructorReducer.js";
import feedbackReducer from './feedback/feedbackReducer.js'

const rootReducer = combineReducers({
  courses: courseReducer,
  students: studentReducer,
  subjects: subjectReducer,
  instructors: instructorReducer,
  feedbacks: feedbackReducer
});

export default rootReducer;
