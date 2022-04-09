import React from "react";
import Subject from "../model/Subject";
import { Link } from "react-router-dom";
import SubjectService from "../service/SubjectService";

class ShowSubject extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: new Subject(),
      subjects: [],
    };
    this.subjectService = new SubjectService();
  }

  componentDidMount() {
    this.subjectService
      .getAllSubjects()
      .then((result) => {
        alert(JSON.stringify(result));
        this.setState({ subjects: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>
          {
            this.state.subjects.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Subject Id</th>
                    <th>Subject Name</th>
                    
                    {/* <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Course Duration</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.subjects.map((sub) => (
                      <tr>
                        <td>{sub.subjectId}</td>
                        <td>{sub.subjectName}</td>
                        
                        {/* <td> {stud.course.courseId} </td>
                        <td> {stud.course.courseName} </td>
                        <td> {stud.course.courseDuration} </td> */}
                        <td><Link className="btn btn-warning" to={{ pathname: `/subjects/update/${sub.subjectId}` }}> Update </Link></td>
                        <td><button className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              this.subjectService.deleteSubjectById(sub.subjectId)
                              .then((result) => {
                                this.subjectService.getAllSubjects()
                                .then((result2) => {
                                  this.setState({ subjects: result2.data });
                                })
                                .catch((error) => {
                                  alert("error");
                                });
                              })
                              .catch((error) => {
                                alert("error");
                              })
                            }}
                        >Delete</button></td>
                      </tr>
                    )
                    )
                  }
                </tbody>
              </table>
            ) : <div>No Subject Present </div>
          }
        </div>
      </div>
    );
  }
}

export default ShowSubject;
