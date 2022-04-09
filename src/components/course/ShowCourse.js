// import React from  "react";
// import Course from "../Model/Course";
// import CourseService from "../Service/CourseService";
// import { Link } from "react-router-dom";

// class ShowCourse extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             course : new Course(),
//             courses :[],
//         };
//         this.courseService = new CourseService();
//     }

//     componentDidMount()
//     {
//         this.courseService
//             .getAllCourse()
//             .then((result)=> {
//                 alert(JSON.stringify(result));
//                 this.setState({ courses : result.data });
//             })

//             .catch((error) => {
//                 alert(error);
//             });
//     }

//     render() {
//         console.log("render");
//         return (
//             <div>
//                 <div>
//                     {
//                         this.state.courses.length > 0 ? (
//                             <table className="table table-bordered">
//                                 <thead>
//                                     <tr>
//                                         <th>Course Id </th>
//                                         <th>Course Name</th>
//                                         <th>Course Duration </th>
//                                     </tr>

//                                 </thead>
//                                 <tbody>
//                                     {
//                                         this.state.courses.map((cour) =>(
//                                             <tr>
//                                                 <td>{cour.courseId}</td>
//                                                 <td>{cour.courseName}</td>
//                                                 <td>{cour.courseDuration}</td>
//                                                 <td><Link className="btn btn-warning" to={{ pathname: `/courses/update/${cour.courseId}` }}>Update</Link></td>
//                         <td><button className="btn btn-danger"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               this.courseService.deleteCourseById(cour.courseId)
//                               .then((result) => {
//                                 this.courseService.getAllCourse()
//                                 .then((result2) => {
//                                   this.setState({ courses: result2.data });
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
//                                             </tr>
//                                         )
//                                         )
//                                     }
//                                 </tbody>

//                             </table>
//                         ) : <div>No Course Present</div>
//                     }
//                 </div>
//             </div>
//         );
//     }

// }

// export default ShowCourse;