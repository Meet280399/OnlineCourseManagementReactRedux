// import ShowCourse from "./components/ShowCourse";
import AddCourse from "./components/course/AddCourse";
import Header from "./components/course/Header";
import UpdateCourse from "./components/course/UpdateCourse";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import CourseHome from "./components/course/CourseHome";
import StudentHome from "./components/student/StudentHome";
import SubjectHome from "./components/subject/SubjectHome";
import InstructorHome from "./components/instructor/InstructorHome";
import FeedbackHome from "./components/feedback/FeedbackHome";
import AddSubject from "./components/subject/AddSubject";
import AddStudent from "./components/student/AddStudent";
import UpdateStudent from "./components/student/UpdateStudent";
import UpdateSubject from "./components/subject/UpdateSubject";
import AddInstructor from "./components/instructor/AddInstructor";
import UpdateInstructor from "./components/instructor/UpdateInstructor";
import AddFeedback from "./components/feedback/AddFeedback";
import UpdateFeedback from "./components/feedback/UpdateFeedback";
import StudentLogin from "./components/login/StudentLogin";
import { Navbar } from "./components/Navbar";
import InstructorLogin from './components/login/InstructorLogin';
import LoginPage from "./components/LoginPage";
import { NavbarStudent } from "./components/NavbarStudent";
// import { ReactDOM } from 'react-dom';

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
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/loginStudent' element={<StudentLogin />} />
        <Route exact path='/loginInstructor' element={<InstructorLogin />} />
        <Route exact path='/students' element={<NavbarStudent />} />
        <Route exact path="/students/show" element={<StudentHome />} />
        <Route exact path='/students/add' element={<AddStudent />} />
        <Route exact path='/students/update/:studId' element={<UpdateStudent />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
