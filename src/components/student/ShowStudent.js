// import React from "react";
// import Student from "./../model/Student";
// import { Link } from "react-router-dom";
// import StudentService from "./../service/StudentService";

// class ShowStudent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       student: new Student(),
//       students: [],
//     };
//     this.studentService = new StudentService();
//   }

//   componentDidMount() {
//     this.studentService
//       .getAllStudents()
//       .then((result) => {
//         alert(JSON.stringify(result));
//         this.setState({ students: result.data });
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }

//   render() {
//     console.log("render");
//     return (
//       <div>
//         <div>
//           {
//             this.state.students.length > 0 ? (
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>Student Id</th>
//                     <th>Student Name</th>
//                     <th>Student E-Mail</th>
//                     <th>Student Address</th>
//                     <th>Student Mobile</th>
//                     {/* <th>Course Id</th>
//                     <th>Course Name</th>
//                     <th>Course Duration</th> */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {
//                     this.state.students.map((stud) => (
//                       <tr>
//                         <td>{stud.studentId}</td>
//                         <td>{stud.studentName}</td>
//                         <td>{stud.studentEmail}</td>
//                         <td>{stud.studentAddress}</td>
//                         <td>{stud.studentMobile}</td>
//                         {/* <td> {stud.course.courseId} </td>
//                         <td> {stud.course.courseName} </td>
//                         <td> {stud.course.courseDuration} </td> */}
//                         <td><Link className="btn btn-warning" to={{ pathname: `/students/update/${stud.studentId}` }}>Update</Link></td>
//                         <td><button className="btn btn-danger"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               this.studentService.deleteStudentById(stud.studentId)
//                               .then((result) => {
//                                 this.studentService.getAllStudents()
//                                 .then((result2) => {
//                                   this.setState({ students: result2.data });
//                                 })
//                                 .catch((error) => {
//                                   alert("error");
//                                 });
//                               })
//                               .catch((error) => {
//                                 alert("error");
//                               })
//                             }}
//                         >Delete</button></td>
//                       </tr>
//                     )
//                     )
//                   }
//                 </tbody>
//               </table>
//             ) : <div>No Student Present </div>
//           }
//         </div>
//       </div>
//     );
//   }
// }

// export default ShowStudent;
