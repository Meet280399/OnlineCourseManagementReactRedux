import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import StudentService from "../../service/StudentService.js";
import Student from "../../model/Student.js";
import { connect } from "react-redux";
import { addStudent } from "../../redux/student/studentActions.js";
import { Link, NavLink } from "react-router-dom";
import "../../css/student.css";
import "../../css/login.css";
import { NavbarAdmin } from "../NavbarAdmin.js";

function AddStudent(props) {
  const navigate = useNavigate();
  let service = new StudentService();
  const [state, setState] = useState({ student: new Student() });
  // const [courses, setCourses] = useState([]);

  const [studIdErr, setStudentIdErr] = useState("");
  const [studNameErr, setStudentNameErr] = useState("");
  const [studEmailErr, setStudentEmailErr] = useState("");
  const [studAddressErr, setStudentAddressErr] = useState("");
  const [studMobileErr, setStudentMobileErr] = useState("");

  const formValidation = () => {
    let isValid = true;
    const studIdErr = {};
    const studNameErr = {};
    const studEmailErr = {};
    const studAddressErr = {};
    const studMobileErr = {};

    if (state.student.studentId.trim().length <= 0) {
      studIdErr.studIdRequired = "Student Id is required";
      isValid = false;
    }
    if (state.student.studentName.trim().length <= 0) {
      studNameErr.studNameRequired = "Student Name is required";
      isValid = false;
    } else if (typeof state.student.studentName.trim() !== "undefined") {
      if (!state.student.studentName.trim().match(/^[a-z ,.'-]+$/i)) {
        isValid = false;
        studNameErr.studNameRequired = "Enter Proper Student Name";
      }
    }

    if (state.student.studentEmail.trim().length <= 0) {
      studEmailErr.studEmailRequired = "Student E-Mail is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        state.student.studentEmail.trim()
      )
    ) {
      studEmailErr.studEmailRequired = "Email is not valid";
    }
    if (state.student.studentAddress.trim().length <= 0) {
      studAddressErr.studAddressRequired = "Student Address is required";
      isValid = false;
    }
    if (state.student.studentMobile.trim().length <= 0) {
      studMobileErr.studMobileRequired = "Student Mobile Number is required";
      isValid = false;
    } else if (!state.student.studentMobile.trim().length > 10) {
      studMobileErr.studMobileRequired = "Please 10 Digit Phone Number";
    }

    setStudentIdErr(studIdErr);
    setStudentNameErr(studNameErr);
    setStudentEmailErr(studEmailErr);
    setStudentAddressErr(studAddressErr);
    setStudentMobileErr(studMobileErr);
    return isValid;
  };

  function handleClick(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      props.addStudent(state.student);
      navigate("/students");
    }
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
    <>
      <NavbarAdmin />
      <div className="add">
        <div className="container container-center">
          <h2 className="login-header">Add a Student</h2>
          <form>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Student Id</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
                type="text"
                placeholder="Enter Student Id"
                value={state.student.studentId}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  setState({
                    student: {
                      ...state.student,
                      studentId: e.target.value,
                    },
                  });
                }}
              />
              {Object.keys(studIdErr).map((key) => {
                return (
                  <p className="error-message" style={{ color: "red" }}>
                    {studIdErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Student Name</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
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
              {Object.keys(studNameErr).map((key) => {
                return (
                  <p
                    key={key}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studNameErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Student E-Mail</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
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
              {Object.keys(studEmailErr).map((key) => {
                return (
                  <p
                    key={key}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studEmailErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Student Address</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
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
              {Object.keys(studAddressErr).map((key) => {
                return (
                  <p
                    key={key}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studAddressErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Student Mobile Number</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
                type="text"
                placeholder="Enter Student Mobile Number"
                id="studentMobile"
                value={state.student.studentMobile}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  setState({
                    student: {
                      ...state.student,
                      studentMobile: e.target.value,
                    },
                  });
                }}
              />
              {Object.keys(studMobileErr).map((key) => {
                return (
                  <p
                    key={key}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {studMobileErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
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
            <div className="btn-group">
              <button
                className="btn btn-outline-success mt-3 btn-custom"
                onClick={handleClick}
              >
                Add Student
              </button>
              <Link
                className="btn btn-outline-danger mt-3 ml-3 btn-custom"
                to="/admin"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
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
