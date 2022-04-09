import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Course from "../../model/Course";
import CourseService from "../../service/CourseService";

function UpdateCourse() {
  const [state, setState] = useState({ course: new Course() });

  let service = new CourseService();

  const { courId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    service
      .findCourseById(courId)
      .then((result) => {
        alert("inside updated" + JSON.stringify(result.data));
        setState({ course: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <form>
        <div>
          <input
            className="form-control"
            type="text"
            id="courseId"
            placeholder="Enter Course Id"
            value={state.course.courseId}
            readOnly={true}
          />
        </div>
        <div>
          <input
            className="form-control my-2"
            type="text"
            id="courseName"
            placeholder="Enter Course Name"
            value={state.course.courseName}
            onChange={(e) => {
              setState({
                course: {
                  ...state.course,
                  courseName: e.target.value,
                },
              });
            }}
          />
        </div>
        <div>
          <input
            className="form-control my-2"
            type="text"
            id="courseDuration"
            placeholder="Enter Course Duration"
            value={state.course.courseDuration}
            onChange={(e) => {
              setState({
                course: {
                  ...state.course,
                  courseDuration: e.target.value,
                },
              });
            }}
          />
        </div>
        
        <button
          className="btn btn-outline-primary mt-3"
          onClick={(e) => {
            e.preventDefault();
            service
              .updateCourse(state.course)
              .then(() => {
                alert("Course record is Updated. ");
                setState({ course: new Course() });
                navigate("/courses");
              })
              .catch((er) => {
                alert(er);
              });
          }}
        >
          Update Course
        </button>
        <Link className="btn btn-outline-primary mt-3 ml-3" to="/courses">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default UpdateCourse;
