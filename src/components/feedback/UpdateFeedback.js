import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

// import FeedbackService from '../../Service/FeedbackService';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateFeedback } from "../../redux/feedback/feedbackAction";
// import Feedback from '../Model/Feedback';

export default function UpdateFeedback() {
  //useSelector: A hook to access the redux store's state.
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const dispatch = useDispatch();
  const { feedId } = useParams();
  const [feedback, setFeedback] = useState();

  //  const[feedIdErr, setFeedbackIdErr] = useState("")
  const [feeddescriptionErr, setFeedbackdescriptionErr] = useState("");
  const [feedDateErr, setFeedbackDateErr] = useState("");

  const formValidation = () => {
    let isValid = true;
    const feedIdErr = {};
    const feeddescriptionErr = {};
    const feedDateErr = {};

    // if (feedback.feedbackId.trim().length <= 0) {
    //   feedIdErr.feedIdRequired = "Feedback Id is required";
    //   isValid = false;
    // }
    if (feedback.description.trim().length <= 0) {
      feeddescriptionErr.feeddescriptionRequired =
        "Feedback description is required";
      isValid = false;
    } else if (typeof feedback.description.trim() !== "undefined") {
      if (!feedback.description.trim().match(/^[a-z ,.'-]+$/i)) {
        isValid = false;
        feeddescriptionErr.feeddescriptionRequired =
          "Enter Proper Feedback description ";
      }
    }
    if (feedback.feedbackDate.trim().length <= 0) {
      feedDateErr.feedDateRequired = "Feedback Date is required";
      isValid = false;
    }

    //  setFeedbackIdErr(feedIdErr);
    setFeedbackdescriptionErr(feeddescriptionErr);
    setFeedbackDateErr(feedDateErr);
    return isValid;
  };
  // console.log("first" + JSON.stringify(student.studentMobile))

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = formValidation();
    if (!isValid) {
      return false;
    } else {
      dispatch(updateFeedback(feedback));
      navigate("/feedbacks");
    }
  }

  //  let service = new FeedbackService();

  const navigate = useNavigate();

  useEffect(() => {
    setFeedback(feedbacks.find((e) => e.feedbackId == feedId));
  }, [feedId]);

  return feedback ? createForm(feedback) : <div>Loading</div>;

  function createForm(feedback) {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Update Feedback</h2>
          <form>
            <div>
              <input
                className="form-control"
                type="text"
                id="feedbackId"
                placeholder="Enter Feedback Id"
                value={feedback.feedbackId}
                readOnly={true}
              />
            </div>
            <br></br>
            <div>
              {/* <div className="alert-danger">{error.nameError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="description"
                placeholder="Enter Feedback description"
                value={feedback.description}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    description: e.target.value,
                  })
                }
              />
              {Object.keys(feeddescriptionErr).map((key) => {
                return (
                  <p
                    feedback={feedback}
                    key={feedback.description}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {feeddescriptionErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <div>
              {/* <div className="alert-danger">{error.DateError}</div> */}
              <input
                className="form-control my-2"
                type="text"
                id="feedbackDate"
                placeholder="Enter Feedback Date"
                value={feedback.feedbackDate}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    feedbackDate: e.target.value,
                  })
                }
              />
              {Object.keys(feedDateErr).map((key) => {
                return (
                  <p
                    feedback={feedback}
                    key={feedback.feedbackDate}
                    className="error-message"
                    style={{ color: "red" }}
                  >
                    {feedDateErr[key]}
                  </p>
                );
              })}
            </div>
            <br></br>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={handleSubmit}
            >
              Update Feedback
            </button>
            <Link
              className="btn btn-outline-primary mt-3 ml-3"
              to={"/feedbacks"}
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
