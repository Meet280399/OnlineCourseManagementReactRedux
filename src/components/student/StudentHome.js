import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../../redux/student/studentActions";
import { Link } from "react-router-dom";
import { deleteStudent } from "../../redux/student/studentActions";

function StudentHome({ studentsData, fetchStudents, deleteStud }) {
  useEffect(() => {
    fetchStudents();
  }, []);

  // function studentData(studentsData) {
  //   var allStudents = [studentsData].map()
  // }
  // {
  //   let dataStudentArray = Array.from(studentsData);
  // }

  return studentsData.loading ? (
    <h2>Loading</h2>
  ) : studentsData.error ? (
    <h2> {studentsData.error} </h2>
  ) : (
    <div className="py-4">
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            {console.log("students data" + JSON.stringify(studentsData.loading))}
            <th scope="col">Student Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student E-Mail</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Mobile Number</th>
            <th scope="col">Student Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.studentsData.students.map((student, courses, index) => (
            <tr>
              {console.log("stud" + JSON.stringify(student))}
              <td key={index}> {student.studentId} </td>
              <td key={index}> {student.studentName} </td>
              <td key={index}> {student.studentEmail} </td>
              <td key={index}> {student.studentAddress} </td>
              <td key={index}> {student.studentMobile} </td>
              {/* <td> {student.course.courseName} </td> */}
                {courses.map((courseName, i) => {
                  {console.log("courses" + JSON.stringify(this.courses))}
                  <td key={i}>{courseName}</td>
                })}
              <td>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/students/update/${student.studentId}`}
                >
                  Modify
                </Link>
                <button
                  className="btn btn-outline-primary mr-2"
                  onClick={() => deleteStud(student.studentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ), this)}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    studentsData: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents());
    },
    deleteStud: (studId) => {
      dispatch(deleteStudent(studId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentHome);
