// import ShowCourse from "./components/ShowCourse";
import AddCourse from "./components/course/AddCourse";
import Header from "./components/course/Header";
import UpdateCourse from "./components/course/UpdateCourse";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CourseHome from "./components/course/CourseHome";
import StudentHome from "./components/student/StudentHome";
import SubjectHome from "./components/subject/SubjectHome";
import InstructorHome from './components/instructor/InstructorHome';
import FeedbackHome from "./components/feedback/FeedbackHome";
import AddSubject from "./components/subject/AddSubject";
import AddStudent from './components/student/AddStudent';
import UpdateStudent from './components/student/UpdateStudent';
import UpdateSubject from './components/subject/UpdateSubject';
import AddInstructor from './components/instructor/AddInstructor';
import UpdateInstructor from './components/instructor/UpdateInstructor';
import AddFeedback from './components/feedback/AddFeedback';
import UpdateFeedback from './components/feedback/UpdateFeedback';

function App() {
  return (
    <div>
      <Router>
        <Header title="React Online Course Management System" />
        <Link to={`/courses/add`}>AddCourse</Link>
        <br></br>
        <Link to={`/courses`}>Show Courses</Link>
        <br></br>
        <Link to={`/students`}>Show Students</Link>
        <br></br>
        <Link to={`/subjects`}>Show Subjects</Link>
        <br></br>
        <Link to={`/subjects/add`}>Add Subjects</Link>
        <br></br>
        <Link to={`/instructors`}>Show Instructor</Link>
        <br></br>
        <Link to={`/instructors/add`}>Add Instructor</Link>
        <br></br>
        <Link to={`/feedbacks`}>Show Feedback</Link>
        <Routes>
          {/* <Route exact path ="/" Component ={ShowCourse}/> */}
          {/* routing for the course module */}
          {/* <Route exact path ="/" element ={<Home/>}/> */}
          <Route exact path="/courses" element={<CourseHome />} />
          <Route exact path="/courses/add" element={<AddCourse />} />
          <Route
            exact
            path="/courses/update/:courId"
            element={<UpdateCourse />}
          />

          {/* routing for student module  */}
          <Route exact path="/students" element={<StudentHome />} />
          <Route exact path="/students/add" element={<AddStudent />} />
          <Route exact path="/students/update/:studId" element={<UpdateStudent />} />

          {/* routing for subject module  */}
          <Route exact path="/subjects" element={<SubjectHome />} />
          <Route exact path="/subjects/add" element={<AddSubject />} />
          <Route exact path="/subjects/update/:subId" element={<UpdateSubject />} />


          {/* routing for instructor module  */}
          <Route exact path="/instructors" element={<InstructorHome />} />
          <Route exact path="/instructors/add" element={<AddInstructor />} />
          <Route exact path="/instructors/update/:instId" element={<UpdateInstructor />} />

          {/* routing for feedback module  */}
          <Route exact path="/feedbacks" element={<FeedbackHome />} />
          <Route exact path="/feedbacks/add" element={<AddFeedback />} />
          <Route exact path="/feedbacks/update/:feedId" element={<UpdateFeedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
