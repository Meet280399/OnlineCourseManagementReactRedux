import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
// import Course from "../../model/Course";
import CourseService from "../../service/CourseService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCourse } from '../../redux/course/courseAction'

function UpdateCourse() {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const [course, setCourse] = useState();

  let service = new CourseService();

  const { courId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCourse(courses.find((e) => e.courseId == courId));
  }, [courId]);

  return course ? createForm(course) : <div>Loading</div>;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateCourse(course));
    navigate("/courses");
  }

  function createForm(course) {
    return (
      <div>
        <form>
          <div>
            <input
              className="form-control"
              type="text"
              id="courseId"
              placeholder="Enter Course Id"
              value={course.courseId}
              readOnly={true}
            />
          </div>
          <div>
            <input
              className="form-control my-2"
              type="text"
              id="courseName"
              placeholder="Enter Course Name"
              value={course.courseName}
              onChange={(e) => {
                setCourse({
                    ...course,
                    courseName: e.target.value,
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
              value={course.courseDuration}
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              onChange={(e) => {
                setCourse({
                    ...course,
                    courseDuration: e.target.value,
                });
              }}
            />
          </div>

          <button
            className="btn btn-outline-primary mt-3"
            onClick={handleSubmit}
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
}

export default UpdateCourse;
