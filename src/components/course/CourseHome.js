import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { deleteCourse, fetchCourses } from "../../redux/course/courseAction.js";
import { NavbarInstructor } from "../NavbarInstructor.js";
function CourseHome({ coursesData, fetchCourses, deleteCour }) {
  //bcm prop of comp

  useEffect(() => {
    fetchCourses();
  }, []);

  return coursesData.loading ? (
    <h2>Loading</h2>
  ) : coursesData.error ? (
    <h2>{coursesData.error}</h2>
  ) : (
    <>
      <NavbarInstructor />
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Course Id</th>
              <th scope="col">Course Name</th>
              <th scope="col">Course Duration (Hrs.)</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {coursesData.courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseId}</td>
                <td>{course.courseName}</td>
                <td>{course.courseDuration}</td>

                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/courses/update/${course.courseId}`}
                  >
                    Modify
                  </Link>
                  <button
                    className="btn btn-outline-primary mr-2"
                    onClick={() => deleteCour(course.courseId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  // redux state
  return {
    coursesData: state.courses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => {
      dispatch(fetchCourses());
    },
    deleteCour: (courId) => {
      dispatch(deleteCourse(courId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseHome);
