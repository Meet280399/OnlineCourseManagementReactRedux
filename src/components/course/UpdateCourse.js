import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import CourseService from "../../service/CourseService";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../../redux/course/courseAction";
import Course from '../../model/Course';

export default function UpdateCourse() {

  //useSelector: A hook to access the redux store's state.
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const { courId } = useParams();
  const [course, setCourse] = useState();
  const navigate = useNavigate();
  const service = new CourseService();


  const [courIdErr, setCourseIdErr] = useState("");
  const [courNameErr, setCourseNameErr] = useState("");
  const [courDurationErr, setCourseDurationErr] = useState("");

  const formValidation = () => {

    let isValid = true;
    const courIdErr = {};
    const courNameErr = {};
    const courDurationErr = {};


    if (course.courseId.length <= 0) {
      courIdErr.courIdRequired = "Course ID is required";
      isValid = false;
    }
    if (course.courseName.length <= 0) {
      courNameErr.courNameRequired = "Course Name is required";
      isValid = false;
    } else if (typeof course.courseName!== "undefined") {
      if (!course.courseName.match(/^[a-z ,.'-]+$/i)) {
        isValid = false;
        courNameErr.courNameRequired = "Enter Proper Course Name";
      }
    }
    if (course.courseDuration.length <= 0) {
      courDurationErr.courNameRequired = "Course Duration is required";
      isValid = false;
    }
    setCourseIdErr(courIdErr);
    setCourseNameErr(courNameErr);
    setCourseDurationErr(courDurationErr);

    return isValid;
  }

  // useEffect(() => {
  //   setCourse(courses.find(e => e.courseId == courId));
  //   // console.log("Data courses " + JSON.stringify(courses))
  //   // console.log("Data Id " + JSON.stringify(course.courseId))
  //   // console.log("Data Duration " + JSON.stringify(course.courseDuration))
  // }, [courId])

  // return (
  //   (course) ? createForm(course) :
  //     <div>Loading</div>

  // )

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      dispatch(updateCourse(course));
      navigate("/courses");
    }
  }

  useEffect(() => {
    setCourse(courses.find(e => e.courseId == courId));
    // loadCourses();
  }, [courId]);

  return course ? createForm(course) : <div>Loading</div>;


  function createForm(course) {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Update Course</h2>
          <form>
            <div>
              <input className="form-control"
                type="text"
                id="courseId"
                placeholder="Enter Course Id"
                value={course.courseId}
                readOnly={true}
              />
            </div>
            <br></br>
            <div>
              {/* <div className="alert-danger">{error.nameError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="courseName"
                placeholder="Enter Course Name"
                value={course.courseName}
                onChange={(e) =>
                  setCourse({
                    ...course,
                    courseName: e.target.value,
                  })
                }
              />
              {Object.keys(courNameErr).map((key) => {
                return (
                  <p
                    course={course}
                    key={course.courseName}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {courNameErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div>
              {/* <div className="alert-danger">{error.durationError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="courseDuration"
                placeholder="Enter Course Name"
                value={course.courseDuration}
                onChange={(e) =>
                  setCourse({
                    ...course,
                    courseDuration: e.target.value,
                  })
                }
              />
              {Object.keys(courDurationErr).map((key) => {
                return (
                  <p
                    course={course}
                    key={course.courseName}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {courDurationErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={handleSubmit}
            >
              Update Course
            </button>
            <Link
              className="btn btn-outline-primary mt-3 ml-3"
              to={"/courses"}
            >
              Cancel
            </Link>

          </form>
        </div>
      </div>
    )
  }

}