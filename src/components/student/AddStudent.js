import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import StudentService from "../../service/StudentService";
import Student from "../../model/Student";
import { connect } from "react-redux";
import { addStudent } from "../../redux/student/studentActions";
import { Link } from "react-router-dom";

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
    }
    if (state.student.studentEmail.trim().length <= 0) {
      studEmailErr.studEmailRequired = "Student E-Mail is required";
      isValid = false;
    }
    if (state.student.studentAddress.trim().length <= 0) {
      studAddressErr.studAddressRequired = "Student Address is required";
      isValid = false;
    }
    var patternMobile = RegExp(/^[0-9\b]+$/); 
    if (state.student.studentMobile.trim().length <= 0) {
      studMobileErr.studMobileRequired = "Student Mobile Number is required";
      isValid = false;
    }
    if (!patternMobile.test(studMobileErr)) {
      isValid=false;
      studMobileErr.studMobileRequired = "Please Enter Numbers Only"
    }
    else if (studMobileErr != 10) {
      studMobileErr.studMobileRequired = "Please enter valid phone number."
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
    <div>
      <div>
        <form>
          <div>
            <label>Enter Student Id</label>
            <input
              className="form-control"
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
              return <div style={{ color: "red" }}>{studIdErr[key]}</div>
            })}
          </div>
          <div>
          <label>Enter Student Name</label>
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
            {Object.keys(studNameErr).map((key) => {
              return <div key={key} style={{ color: "red" }}>{studNameErr[key]}</div>
            })}
          </div>
          <div>
          <label>Enter Student E-Mail</label>
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
            {Object.keys(studEmailErr).map((key) => {
              return <div key={key} style={{ color: "red" }}>{studEmailErr[key]}</div>
            })}
          </div>
          <div>
          <label>Enter Student Address</label>
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
            {Object.keys(studAddressErr).map((key) => {
              return <div key={key} style={{ color: "red" }}>{studAddressErr[key]}</div>
            })}
          </div>
          <div>
          <label>Enter Student Mobile Number</label>
            <input
              className="form-control"
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
            <br></br>
            {Object.keys(studMobileErr).map((key) => {
              return <div key={key} style={{ color: "red" }}>{studMobileErr[key]}</div>
            })}
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
