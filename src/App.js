// import ShowCourse from "./components/ShowCourse";
import AddCourse from "./components/course/AddCourse.js";
import Header from "./components/course/Header.js";
import UpdateCourse from "./components/course/UpdateCourse.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import CourseHome from "./components/course/CourseHome.js";
import StudentHome from "./components/student/StudentHome.js";
import SubjectHome from "./components/subject/SubjectHome.js";
import InstructorHome from "./components/instructor/InstructorHome.js";
import FeedbackHome from "./components/feedback/FeedbackHome.js";
import AddSubject from "./components/subject/AddSubject.js";
import AddStudent from "./components/student/AddStudent.js";
import UpdateStudent from "./components/student/UpdateStudent.js";
import UpdateSubject from "./components/subject/UpdateSubject.js";
import AddInstructor from "./components/instructor/AddInstructor.js";
import UpdateInstructor from "./components/instructor/UpdateInstructor.js";
import AddFeedback from "./components/feedback/AddFeedback.js";
import UpdateFeedback from "./components/feedback/UpdateFeedback.js";
import StudentLogin from "./components/login/StudentLogin.js";
import InstructorLogin from "./components/login/InstructorLogin.js";
import LoginPage from "./components/LoginPage.js";
import { NavbarStudent } from "./components/NavbarStudent.js";
import { NavbarInstructor } from "./components/NavbarInstructor.js";
import AdminLogin from "./components/login/AdminLogin.js";
import { NavbarAdmin } from "./components/NavbarAdmin.js";

function App() {
  //  const changeNavlink = () => {
  //   let element = document.getElementById('student-login')
  //   .findDOMNode(element).style.display = this.state.isClicked ? 'none' : 'flex'
  // }

  return (
    <div>
      <Router>
        <Header title="React Online Course Management System" />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/loginAdmin" element={<AdminLogin />} />
          <Route exact path="/loginStudent" element={<StudentLogin />} />
          <Route exact path="/loginInstructor" element={<InstructorLogin />} />

          <Route exact path="/admin" element={<NavbarAdmin />} />

          <Route exact path="/students" element={<NavbarStudent />} />
          <Route exact path="/students/show" element={<StudentHome />} />
          <Route exact path="/students/add" element={<AddStudent />} />
          <Route
            exact
            path="/students/update/:studId"
            element={<UpdateStudent />}
          />

          <Route exact path="/instructors" element={<NavbarInstructor />} />
          <Route exact path="/instructors/show" element={<InstructorHome />} />
          <Route exact path="/instructors/add" element={<AddInstructor />} />
          <Route
            exact
            path="/instructors/update/:instId"
            element={<UpdateInstructor />}
          />

          <Route exact path="/feedbacks/show" element={<FeedbackHome />} />
          <Route exact path="/feedbacks/add" element={<AddFeedback />} />
          <Route
            exact
            path="/feedbacks/update/:feedId"
            element={<UpdateFeedback />}
          />

          <Route exact path="/courses/show" element={<CourseHome />} />
          <Route exact path="/courses/add" element={<AddCourse />} />
          <Route
            exact
            path="/courses/update/:courId"
            element={<UpdateCourse />}
          />

          <Route exact path="/subjects/show" element={<SubjectHome />} />
          <Route exact path="/subjects/add" element={<AddSubject />} />
          <Route
            exact
            path="/subjects/update/:courId"
            element={<UpdateSubject />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
