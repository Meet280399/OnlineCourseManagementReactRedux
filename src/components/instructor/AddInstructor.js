import { useNavigate } from "react-router";
//import { useEffect, useState } from "react";
import React, { useState } from "react";
import Instructor from "../../model/Instructor";
import InstructorService from "../../service/InstructorService";
import { Link } from "react-router-dom";
import { addInstructor } from "../../redux/instructor/instructorActions";
import { connect } from "react-redux";

function AddInstructor(props) {
  const navigate = useNavigate();
  let service = new InstructorService();
  const [state, setState] = useState({ instructor: new Instructor() });
  const [instIdErr, setInstructorIdErr] = useState(" ");
  const [instNameErr, setInstructorNameErr] = useState(" ");
  const [instEmailErr, setInstructorEmailErr] = useState(" ");
  const [instMobileNoErr, setInstructorMobileNoErr] = useState(" ");
  const [instSalaryErr, setInstructorSalaryErr] = useState(" ");
  const [instGradesErr, setInstructorGradesErr] = useState(" ");

  const formValidation = () => {
    // alert("Validation");
    let isValid = true;
    const instIdErr = {};
    const instNameErr = {};
    const instEmailErr = {};
    const instMobileNoErr = {};
    const instSalaryErr = {};
    const instGradesErr = {};

    if (state.instructor.instructorId.trim().length <= 0) {
      instIdErr.instIdRequired = "Instructor Id is Required";
      isValid = false;
    }
    if (state.instructor.name.trim().length <= 0) {
      instNameErr.instNameRequired = "Instructor Name is Required";
      isValid = false;
    } else if (typeof state.instructor.name.trim() !== "undefined") {
      if (!state.instructor.name.trim().match(/^[a-zA-Z]+$/)) {
        isValid = false;

        instNameErr.instNameRequired = "Only letters are allowed";
      }
    }

    if (state.instructor.email.trim().length <= 0) {
      instEmailErr.instEmailRequired = "Instructor Email is Required";
      isValid = false;
    } else if (typeof state.instructor.email.trim() !== "undefined") {
      let lastAtPos = state.instructor.email.trim().lastIndexOf("@");
      let lastDotPos = state.instructor.email.trim().lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          state.instructor.email.trim().indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          state.instructor.email.trim().length - lastDotPos > 2
        )
      ) {
        isValid = false;
        instEmailErr.instEmailRequired = "Email is not valid";
      }
    }

    if (state.instructor.mobileNo.trim().length <= 0) {
      instMobileNoErr.instMobileNoRequired =
        "Instructor mobile number is Required";
      isValid = false;
    } else if (state.instructor.mobileNo.trim().length != 10) {
      instMobileNoErr.instMobileNoRequired = "Please 10 Digit Phone Number";
    }

    if (state.instructor.salary.trim().length <= 0) {
      instSalaryErr.instSalaryRequired = "Instructor Salary is Required";
      isValid = false;
    }
    if (state.instructor.grades.trim().length <= 0) {
      instGradesErr.instGradesRequired = "Instructor Grades is Required";
      isValid = false;
    }
    setInstructorIdErr(instIdErr);
    setInstructorNameErr(instNameErr);
    setInstructorEmailErr(instEmailErr);
    setInstructorMobileNoErr(instMobileNoErr);
    setInstructorSalaryErr(instSalaryErr);
    setInstructorGradesErr(instGradesErr);
    return isValid;
  };

  function handleClick(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      props.addInstructor(state.instructor);
      navigate("/instructors");
    }
  }

  // const [feedbacks, setFeedbacks] = useState([]);
  return (
    <div className="add">
      <div>
        <form className="addForm">
          <div className="addInput">
            <div className="label-div">
              <label>Enter Instructor Id</label>
            </div>
            <input
              className="form-control"
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              type="text"
              placeholder="Instructor Id"
              value={state.instructor.instructorId}
              onChange={(u) => {
                setState({
                  instructor: {
                    ...state.instructor,
                    instructorId: u.target.value,
                  },
                });
              }}
            />
            {Object.keys(instIdErr).map((key) => {
              return (
                <p className="error-message" style={{ color: "red" }}>
                  {instIdErr[key]}
                </p>
              );
            })}
          </div>
          <br></br>
          <div className="addInput">
            <div className="label-div">
              <label>Enter Instructor Name</label>
            </div>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Instructor Name"
              value={state.instructor.name}
              onChange={(u) =>
                setState({
                  instructor: {
                    ...state.instructor,
                    name: u.target.value,
                  },
                })
              }
            />

            {Object.keys(instNameErr).map((key) => {
              return (
                <p className="error-message" style={{ color: "red" }}>
                  {instNameErr[key]}
                </p>
              );
            })}
          </div>
          <br></br>
          <div className="addInput">
            <div className="label-div">
              <label>Enter Instructor E-Mail</label>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Instructor Email"
              value={state.instructor.email}
              onChange={(u) =>
                setState({
                  instructor: {
                    ...state.instructor,
                    email: u.target.value,
                  },
                })
              }
            />

            {Object.keys(instEmailErr).map((key) => {
              return (
                <p className="error-message" style={{ color: "red" }}>
                  {instEmailErr[key]}
                </p>
              );
            })}
          </div>
          <br></br>
          <div className="addInput">
            <div className="label-div">
              <label>Enter Instructor Mobile Number</label>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Instructor MobileNo"
              value={state.instructor.mobileNo}
              onChange={(u) => {
                setState({
                  instructor: {
                    ...state.instructor,
                    mobileNo: u.target.value,
                  },
                });
              }}
            />

            {Object.keys(instMobileNoErr).map((key) => {
              return (
                <p className="error-message" style={{ color: "red" }}>
                  {instMobileNoErr[key]}
                </p>
              );
            })}
          </div>
          <br></br>
          <div className="addInput">
            <div className="label-div">
              <label>Enter Instructor Salary</label>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Instructor Salary In Rupees"
              value={state.instructor.salary}
              onChange={(u) => {
                setState({
                  instructor: {
                    ...state.instructor,
                    salary: u.target.value,
                  },
                });
              }}
            />

            {Object.keys(instSalaryErr).map((key) => {
              return (
                <p className="error-message" style={{ color: "red" }}>
                  {instSalaryErr[key]}
                </p>
              );
            })}
          </div>
          <br></br>
          <div className="addInput">
            <div className="label-div">
              <label>Enter Instructor Grades</label>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Instructor Grades"
              value={state.instructor.grades}
              onChange={(u) => {
                setState({
                  instructor: {
                    ...state.instructor,
                    grades: u.target.value,
                  },
                });
              }}
            />
            {Object.keys(instGradesErr).map((key) => {
              return (
                <p className="error-message" style={{ color: "red" }}>
                  {instGradesErr[key]}
                </p>
              );
            })}
          </div>
          <br></br>
          {/* <div>
                <select
                            className="form-control my-2"
                            value={state.instructor.feedback.feedbackId}
                            onChange={(event) =>
                                setState({ instructor: { ...state.instructor, feedback: { ...state.instructor.feedback, feedbackId: event.target.value } } })
                            }
                        >
                            {feedbacks.map((feed) => (
                                <option key={feed.value} value={feed.value}>
                                    {feed.display}
                                </option>
                            ))}
                        </select>
                        <br></br>
                </div> */}

          {/* <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              let isValid=formValidation()
              if(!isValid){
                  return false;
              }
              else{
              service
                .addInstructor(state.instructor)
                .then((result) => {
                  alert("Instructor is added in database. ");
                  navigate("/instructors");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }
            }}
          > Add Instructor
          </button> */}

          <button
            className="btn btn-outline-success mt-3 btn-custom"
            onClick={handleClick}
          >
            Add Instructor
          </button>
          <Link className="btn btn-outline-danger mt-3 ml-3 btn-custom" to="/instructors">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    //triger action

    addInstructor: (inst) => {
      dispatch(addInstructor(inst));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddInstructor);
