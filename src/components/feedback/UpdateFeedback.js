import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Feedback from "../Model/Feedback";
import FeedbackService from "../Service/FeedbackService";

function UpdateFeedback() {
  const [state, setState] = useState({ feedback: new Feedback() });

  let service = new FeedbackService();

  const { feedId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    service
      .findFeedbackById(feedId)
      .then((result) => {
        alert("inside updated" + JSON.stringify(result.data));
        setState({ feedback: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <form>
        <div>
          <input
            className="form-control my-2"
            type="text"
            id="feedbackId"
            placeholder="Enter Feedback Id"
            value={state.feedback.feedbackId}
            readOnly={true}
          />
        </div>
        <div>
          <input
            className="form-control my-2"
            type="text"
            id="feedbackdescription"
            placeholder="Enter Feedback description"
            value={state.feedback.feedbackdescription}
            onChange={(e) => {
              setState({
                course: {
                  ...state.feedback,
                  feedbackdescription: e.target.value,
                },
              });
            }}
          />
        </div>
        <div>
          <input
            className="form-control my-2"
            type="text"
            id="feedbackDate"
            placeholder="Enter feedback Date"
            value={state.feedback.feedbackDate}
            onChange={(e) => {
              setState({
                feedback: {
                  ...state.feedback,
                  feedbackdate: e.target.value,
                },
              });
            }}
          />
        </div>
        
        <button
          className="btn btn-outline-primary mt-3"
          onClick={(e) => {
            e.preventDefault();
            service
              .updateFeedback(state.feedback)
              .then(() => {
                alert("Feedback record is Updated. ");
                setState({ feedback: new Feedback() });
                navigate("/feedback");
              })
              .catch((er) => {
                alert(er);
              });
          }}
        >
          Update Feedback
        </button>
        <Link className="btn btn-outline-primary mt-3 ml-3" to="/feedbacks">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default UpdateFeedback;