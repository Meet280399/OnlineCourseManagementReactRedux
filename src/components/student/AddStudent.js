import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import StudentService from "./../service/StudentService";
import Student from "./../model/Student";
import { connect } from "react-redux";
import { addStudent } from "../redux/student/studentActions";
import { Link } from "react-router-dom";

function AddStudent(props) {
  const navigate = useNavigate();
  let service = new StudentService();
  const [state, setState] = useState({ student: new Student() });
  // const [courses, setCourses] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    props.addStudent(state.student);
    navigate("/students");
  }

  // useEffect(() => {
  //   service
  //     .getAllCourse()
  //     .then((result) => {
  //       let cours = result.data.map((cour) => {
  //         return { value: cour.courseId, display: cour.courseName };
  //       });
  //       setCourses([{ value: "-1", display: "Select Course" }].concat(cours));
  //     })
  //     .catch((error2) => {
  //       alert(JSON.stringify("error: " + error2));
  //     });
  // });

  return (
    <div>
      <div>
        <form>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Student Id"
              value={state.student.studentId}
              onChange={(e) => {
                setState({
                  student: {
                    ...state.student,
                    studentId: e.target.value,
                  },
                });
              }}
            />
            <br></br>
          </div>
          <div>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Enter Student Name"
              value={state.student.studentName}
              onChange={(e) => {
                setState({
                  student: {
                    ...state.student,
                    studentName: e.target.value,
                  },
                });
              }}
            />
            <br></br>
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Student Email"
              value={state.student.studentEmail}
              onChange={(e) => {
                setState({
                  student: {
                    ...state.student,
                    studentEmail: e.target.value,
                  },
                });
              }}
            />
            <br></br>
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Student Address"
              value={state.student.studentAddress}
              onChange={(e) => {
                setState({
                  student: {
                    ...state.student,
                    studentAddress: e.target.value,
                  },
                });
              }}
            />
            <br></br>
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Student Mobile Number"
              value={state.student.studentMobile}
              onChange={(e) => {
                setState({
                  student: {
                    ...state.student,
                    studentMobile: e.target.value,
                  },
                });
              }}
            />
          </div>
          {/* <div>
            <select
              className="form-control my-2"
              value={state.student.course.courseId}
              onChange={(event) =>
                setState({
                  student: {
                    ...state.student,
                    course: {
                      ...state.student.course,
                      courseId: event.target.value,
                    },
                  },
                })
              }
            >
              {courses.map((cour) => (
                <option key={cour.value} value={cour.value}>
                  {cour.display}
                </option>
              ))}
            </select>
          </div> */}
          <button
            className="btn btn-outline-primary mt-3"
            onClick={handleClick}
          >
            Add Student
          </button>
          <Link className="btn btn-outline-primary mt-3 ml-3" to="/students">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (stud) => {
      dispatch(addStudent(stud));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddStudent);
