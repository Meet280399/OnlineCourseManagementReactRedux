import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  deleteInstructor,
  fetchInstructors,
} from "../../redux/instructor/instructorActions.js";
import { NavbarInstructor } from "../NavbarInstructor.js";
function InstructorHome({
  instructorsData,
  fetchInstructors,
  deleteInstructor,
}) {
  //bcm prop of comp

  useEffect(() => {
    fetchInstructors();
  }, []);

  return instructorsData.loading ? (
    <h2>Loading</h2>
  ) : instructorsData.error ? (
    <h2>{instructorsData.error}</h2>
  ) : (
    <>
      <NavbarInstructor />
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              {console.log(
                "Instructor" + JSON.stringify(instructorsData.loading)
              )}
              <th scope="col">Instructor Id</th>
              <th scope="col">Instructor Name</th>
              <th scope="col">Instructor Email</th>
              <th scope="col">Instructor MobileNo </th>
              <th scope="col">Instructor Salary</th>
              <th scope="col">Instructor Grades</th>
              {/* <th scope ="col">Feedback Id</th> */}

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructorsData.instructors.map((instructor, index) => (
              <tr key={index}>
                {console.log("Instructor" + JSON.stringify(instructor))}
                <td>{instructor.instructorId}</td>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
                <td>{instructor.mobileNo}</td>
                <td>{instructor.salary}</td>
                <td>{instructor.grades}</td>
                {/* <td>{instructor.feedback.feedbackId}</td> */}

                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/instructors/update/${instructor.instructorId}`}
                  >
                    Modify
                  </Link>
                  <button
                    className="btn btn-outline-primary mr-2"
                    onClick={() => deleteInstructor(instructor.instructorId)}
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
    instructorsData: state.instructors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchInstructors: () => {
      dispatch(fetchInstructors());
    },
    deleteInstructor: (instId) => {
      dispatch(deleteInstructor(instId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InstructorHome);
