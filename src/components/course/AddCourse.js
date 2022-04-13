import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Course from "../../model/Course.js";
import { addCourse } from "../../redux/course/courseAction.js";
import CourseService from "../../service/CourseService.js";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../../css/login.css";
import { NavbarAdmin } from "../NavbarAdmin.js";

function AddCourse(props) {
  const navigate = useNavigate();
  let service = new CourseService();
  const [state, setState] = useState({ course: new Course() });
  //const [projects, setProjects] = useState([]);
  const [courIdErr, setCourseIdErr] = useState("");
  const [courNameErr, setCourseNameErr] = useState("");
  const [courDurationErr, setCourseDurationErr] = useState("");
  //const [courProjErr, setCourseProjErr] = useState("");

  const formValidation = () => {
    let isValid = true;
    const courIdErr = {};
    const courNameErr = {};
    const courDurationErr = {};
    //const courProjErr = {};

    if (state.course.courseId.trim().length <= 0) {
      courIdErr.courIdRequired = "Course ID is required";
      isValid = false;
    }
    if (state.course.courseName.trim().length <= 0) {
      courNameErr.courNameRequired = "Student Name is required";
      isValid = false;
    } else if (typeof state.course.courseName.trim() !== "undefined") {
      if (!state.course.courseName.trim().match(/^[a-z ,.'-]+$/i)) {
        isValid = false;
        courNameErr.courNameRequired = "Enter Proper Student Name";
      }
    }
    if (state.course.courseDuration.trim().length <= 0) {
      courDurationErr.courNameRequired = "Course Duration is required";
      isValid = false;
    }
    // if (state.course.project.projectId.length == 0) {

    //     courProjErr.courProjRequired = "Course Project is required";
    //     isValid = false;
    // }
    setCourseIdErr(courIdErr);
    setCourseNameErr(courNameErr);
    setCourseDurationErr(courDurationErr);
    // setCourseProjErr(courProjErr);
    return isValid;
  };
  // useEffect(() => {
  //   service.getAllProjects()
  //       .then((result) => {
  //           let proj = result.data.map((pro) => {
  //               return { value: pro.projectId, display: pro.projectName };
  //           });
  //           setProjects(
  //               [{ value: "-1", display: "Select Project" }].concat(
  //                   proj
  //               ),
  //           );
  //       }).catch((error2) => {
  //           alert(JSON.stringify("error: " + error2));
  //       });

  //     });

  function handleClick(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      props.addCourse(state.course);
      navigate("/courses");
    }
  }

  return (
    <>
      <NavbarAdmin />
      <div className="add">
        <div className="container container-center">
          <h2 className="login-header">Add a Course</h2>
          <form>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Course Id</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                type="text"
                placeholder="courseId"
                value={state.course.courseId}
                onChange={(u) => {
                  setState({
                    course: {
                      ...state.course,
                      //...state.course.project,
                      courseId: u.target.value,
                    },
                  });
                }}
              />
              {Object.keys(courIdErr).map((key) => {
                return (
                  <p className="error-message" style={{ color: "red" }}>
                    {courIdErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Course Name</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
                type="text"
                placeholder="CourseName"
                value={state.course.courseName}
                onChange={(u) =>
                  setState({
                    course: {
                      ...state.course,
                      // ...state.course.project,
                      courseName: u.target.value,
                    },
                  })
                }
              />
              {Object.keys(courNameErr).map((key) => {
                return (
                  <p
                    className="error-message"
                    key={key}
                    style={{ color: "red" }}
                  >
                    {courNameErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Course Duration</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                type="text"
                placeholder="courseDuration"
                value={state.course.courseDuration}
                onChange={(u) =>
                  setState({
                    course: {
                      ...state.course,
                      //...state.course.project,
                      courseDuration: u.target.value,
                    },
                  })
                }
              />
              {Object.keys(courDurationErr).map((key) => {
                return (
                  <p
                    className="error-message"
                    key={key}
                    style={{ color: "red" }}
                  >
                    {courDurationErr[key]}
                  </p>
                );
              })}
            </div>

            {/* <div>

<select
    className="form-control my-2"
    value={state.course.project.projectId}
    onChange={(event) =>
        setState({ course: { ...state.course, project: { ...state.course.project, projectId: event.target.value } } })
    }
>
    {projects.map((pro) => (
        <option key={pro.value} value={pro.value}>
            {pro.display}
        </option>
    ))}
</select>
<br></br>
{Object.keys(courProjErr).map((key) => {
    return <div key={key} style={{ color: "red" }}>{courProjErr[key]}</div>
})}
</div> */}

            <div className="btn-group">
              <button
                className="btn btn-outline-success mt-3 btn-custom"
                onClick={handleClick}
              >
                {" "}
                Add Course
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
//used for dispatching actions to the store.
const mapDispatchToProps = (dispatch) => {
  return {
    //triger action

    addCourse: (cour) => {
      dispatch(addCourse(cour));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddCourse);
