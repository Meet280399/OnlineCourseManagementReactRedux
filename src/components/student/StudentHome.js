import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";
import { fetchStudents } from "../../redux/student/studentActions.js";
import { Link } from "react-router-dom";
import { deleteStudent } from "../../redux/student/studentActions.js";
import { NavbarStudent } from "../NavbarStudent.js";
// import { NavbarStudent } from "../NavbarStudent";
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { fetchStudentsRequest } from './../../redux/student/studentActions.js';

function StudentHome({ studentsData, fetchStudents, deleteStud }) {
  // const students = useSelector((state) => state.students.students);
  // const {studId} = useParams();
  // const [student, setStudent] = useState();
  useEffect(() => {
    fetchStudents();
    // setStudent(students.find((e) => e.studentId == studId))
    // {console.log("first" + JSON.stringify(setStudent()))}
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
    <>
      <NavbarStudent />
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              {console.log(
                "students data" + JSON.stringify(studentsData.loading)
              )}
              <th scope="col">Student Id</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student E-Mail</th>
              <th scope="col">Student Address</th>
              <th scope="col">Student Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.students.map(
              (student, courses, index) => (
                <tr>
                  {console.log("stud" + JSON.stringify(student))}
                  <td key={index}> {student.studentId} </td>
                  <td key={index}> {student.studentName} </td>
                  <td key={index}> {student.studentEmail} </td>
                  <td key={index}> {student.studentAddress} </td>
                  <td key={index}> {student.studentMobile} </td>
                  {/* <td> {student.course.courseName} </td> */}
                  {/* {courses.map((courseName, i) => {
                  {console.log("courses" + JSON.stringify(this.courses))}
                  <td key={i}>{courseName}</td>
                })} */}
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
              ),
              this
            )}
          </tbody>
        </table>
      </div>
    </>
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

// function StudentHome(props) {
//   const {studentData} = props;
//   const dispatch = useDispatch();
//   const [studId, setStudId] = useState();

//   const handleClick = (e) => {
//     e.preventDefault();
//     setStudId(e.target.value)
//     dispatch(fetchStudentsRequest(studId))
//   }

//   return (
//     <div>
//       <h2>Student Detais</h2>
//       <br></br>
//       <button onClick={handleClick}>Get Student Details</button>
//       <br></br>
//       <br></br>

//       <table className='table border shadow'>
//         <thead className='thead-dark'>
//           <tr>
//             <th scope='col'>Student Id</th>
//             <th scope='col'>Student Name</th>
//             <th scope='col'>Student Email</th>
//             <th scope='col'>Student Address</th>
//             <th scope='col'>Student Mobile Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {studentData && (
//             <tr>
//               <td>{studentData.studentId}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default StudentHome;