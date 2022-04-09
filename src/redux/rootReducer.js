import { combineReducers } from "redux";
import courseReducer from "./course/courseReducer";
import studentReducer from "./student/studentReducer";
import subjectReducer from "./subject/subjectReducer";
import instructorReducer from "./instructor/instructorReducer";
import feedbackReducer from './feedback/feedbackReducer'

const rootReducer = combineReducers({
  courses: courseReducer,
  students: studentReducer,
  subjects: subjectReducer,
  instructors: instructorReducer,
  feedbacks: feedbackReducer
});

export default rootReducer;
