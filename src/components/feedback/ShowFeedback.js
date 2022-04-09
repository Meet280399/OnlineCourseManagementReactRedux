import React from "react";
import Feedback from "../Model/Feedback";
import { Link } from "react-router-dom";
import FeedbackService from "../Service/FeedbackService";

class ShowFeedback extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: new Feedback(),
      feedback: [],
    };
    this.feedbackService = new FeedbackService();
  }

  componentDidMount() {
    this.feedbackService
      .getAllFeedbacks()
      .then((result) => {
        alert(JSON.stringify(result));
        this.setState({ feedback: result.data });
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
            this.state.feedback.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Feedback Id</th>
                    <th>Feedback description</th>
                    <th>Feedback Date</th>
                    
                    {/* <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Course Duration</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.feedback.map((feed) => (
                      <tr>
                        <td>{feed.feedbackId}</td>
                        <td>{feed.feedbackdescription}</td>
                        <td>{feed. feedbackDate}</td>

                        
                        {/* <td> {stud.course.courseId} </td>
                        <td> {stud.course.courseName} </td>
                        <td> {stud.course.courseDuration} </td> */}
                        <td><Link className="btn btn-warning" to={{ pathname: `/feedbacks/update/${feed.feedbackId}` }}> Update </Link></td>
                        <td><button className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              this.feedbackService.deleteFeedbackById(feed.feedbackId)
                              .then((result) => {
                                this.feedbackService.getAllFeedbacks()
                                .then((result2) => {
                                  this.setState({ feedbacks: result2.data });
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
            ) : <div>No Feedback Present </div>
          }
        </div>
      </div>
    );
  }
}

export default ShowFeedback