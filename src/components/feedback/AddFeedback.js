import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Feedback from "../../model/Feedback.js";
import { addFeedback } from "../../redux/feedback/feedbackAction.js";
import FeedbackService from "../../service/FeedbackService.js";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../../css/login.css";
import { NavbarInstructor } from "../NavbarInstructor.js";

function AddFeedback(props) {
  const navigate = useNavigate();
  let service = new FeedbackService();
  const [state, setState] = useState({ feedback: new Feedback() });
  const [feedIdErr, setFeedbackIdErr] = useState("");
  const [feedDescriptionErr, setFeedbackDescriptionErr] = useState("");
  const [feedDateErr, setFeedbackDateErr] = useState("");

  const formValidation = () => {
    let isValid = true;
    const feedIdErr = {};
    const feedDescriptionErr = {};
    const feedDateErr = {};

    if (state.feedback.feedbackId.trim().length <= 0) {
      feedIdErr.feedIdRequired = "Feedback ID is required";
      isValid = false;
    }
    if (state.feedback.description.trim().length <= 0) {
      feedDescriptionErr.feedDescriptionRequired = "Description is required";
      isValid = false;
    } else if (typeof state.feedback.description.trim() !== "undefined") {
      if (!state.feedback.description.trim().match(/^[a-zA-Z]+$/)) {
        isValid = false;
        feedDescriptionErr.feedDescriptionRequired = "Only letters";
      }
    }

    if (state.feedback.feedbackDate.trim().length <= 0) {
      feedDateErr.feedDateRequired = "Feedback Date is required";
      isValid = false;
    }

    setFeedbackIdErr(feedIdErr);
    setFeedbackDescriptionErr(feedDescriptionErr);
    setFeedbackDateErr(feedDateErr);
    return isValid;
  };

  function handleClick(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      props.addFeedback(state.feedback);
      navigate("/feedbacks");
    }
  }

  return (
    <>
      <NavbarInstructor />
      <div className="add">
        <div>
          <h2 className="login-header">Add a Feedback</h2>
          <form>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Feedback Id</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                type="text"
                placeholder="feedbackId"
                value={state.feedback.feedbackId}
                onChange={(u) => {
                  setState({
                    feedback: {
                      ...state.feedback,
                      feedbackId: u.target.value,
                    },
                  });
                }}
              />
              {Object.keys(feedIdErr).map((key) => {
                return (
                  <p className="error-message" style={{ color: "red" }}>
                    {feedIdErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Description</label>
              </div>
              <input
                className="form-control my-2 col-md-8"
                type="text"
                placeholder="feedbackDescription"
                value={state.feedback.description}
                onChange={(u) =>
                  setState({
                    feedback: {
                      ...state.feedback,

                      description: u.target.value,
                    },
                  })
                }
              />
              {Object.keys(feedDescriptionErr).map((key) => {
                return (
                  <p
                    className="error-message"
                    key={key}
                    style={{ color: "red" }}
                  >
                    {feedDescriptionErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div className="row">
              <div className="label-div col-md-4">
                <label>Enter Feedback Date</label>
              </div>
              <input
                className="form-control col-md-8"
                type="text"
                placeholder="feedbackDate"
                value={state.feedback.feedbackDate}
                onChange={(u) =>
                  setState({
                    feedback: {
                      ...state.feedback,
                      feedbackDate: u.target.value,
                    },
                  })
                }
              />
              {Object.keys(feedDateErr).map((key) => {
                return (
                  <p
                    className="error-message"
                    key={key}
                    style={{ color: "red" }}
                  >
                    {feedDateErr[key]}
                  </p>
                );
              })}
            </div>

            <div className="btn-group">
              <button
                className="btn btn-outline-success mt-3 btn-custom"
                onClick={handleClick}
              >
                {" "}
                Add Feedback
              </button>
              <Link
                className="btn btn-outline-danger mt-3 ml-3 btn-custom"
                to="/instructors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
//used for dispatching actions to the store.
const mapDispatchToProps = (dispatch) => {
  return {
    //triger action

    addFeedback: (feed) => {
      dispatch(addFeedback(feed));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddFeedback);
