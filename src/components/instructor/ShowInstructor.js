// import React from "react";
// import { Link } from "react-router-dom";
// import Instructor from "../../model/Instructor";
// import InstructorService from "../../service/InstructorService";
// class ShowInstructor extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             instructor: new Instructor(),
//             instructors: []
//         }
//         this.instructorService=new InstructorService();
//     }
//     componentDidMount() {
//        this.instructorService.getAllInstructors()
//             .then((result) => {
//                alert(JSON.stringify(result));
//                 this.setState({ instructors: result.data });
//             })
//             .catch((error) => {
//                 alert(error);
//             });
        

//     }
//     render() {
//         console.log('render');
//         return (
//             <div>
//                 <div>
//                     {
//                         this.state.instructors.length > 0 ? (
//                             <table className="table table-bordered">
//                                 <thead>
//                                     <tr>
//                                         <th>Instructor Id</th>
//                                         <th>Instructor Name</th>
//                                         <th>Instructor Email</th>
//                                         <th>Instructor MobileNo</th>
//                                         <th>Instructor Salary  </th>
//                                         <th>Instructor Grades </th>
//                                         <th>Feedback Id </th>
//                                         <th> Description </th>
                                        

                                        
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         this.state.instructors.map((inst) =>
//                                         (
//                                             <tr>
//                                                 <td>{inst.instructorId}</td>
//                                                 <td>{inst.name}</td>
//                                                 <td>{inst.email}</td>
//                                                 <td>{inst.mobileNo}</td>
//                                                 <td>{inst.salary}</td>
//                                                 <td>{inst.grades}</td>
//                                                 <td>{inst.feedback.feedbackId}</td>
//                                                 <td>{inst.feedback.feedbackame}</td>
                                                
//             <td><Link className="btn btn-warning" to={{ pathname: `/instructors/update/${inst.instructorId}` }}>Update</Link></td>
//             {/* <td><Link className="btn btn-warning" to={{ pathname: `/instructors/add/${inst.instructorId}` }}>Add</Link></td> */}
//                         <td><button className="btn btn-danger"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               this.instructorService.deleteInstructorById(inst.instructorId)
//                               .then((result) => {
//                                 this.instructorService.getAllInstructors()
//                                 .then((result2) => {
//                                   this.setState({ instructors: result2.data });
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
//                         ) : <div>No Instructor Present</div>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }
// export default ShowInstructor;