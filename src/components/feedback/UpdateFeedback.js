import { useEffect, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateFeedback } from "../../redux/feedback/feedbackAction";
import Feedback from "../../model/Feedback";
import FeedbackService from "../../service/FeedbackService";

function UpdateFeedback() {
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState();

  let service = new FeedbackService();

  const { feedId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setFeedback(feedbacks.find((e) => e.feedbackId == feedId));
  }, [feedId]);

  return feedback ? createForm(feedback) : <div>Loading</div>;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateFeedback(feedback));
    navigate("/feedbacks");
  }

  function createForm(feedback) {
    return (
      <div>
        <form>
          <div>
            <input
              className="form-control"
              onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
              type="text"
              id="feedbackId"
              placeholder="Enter Feedback Id"
              value={feedback.feedbackId}
              readOnly={true}
            />
          </div>
          <div>
            <input
              className="form-control "
              type="text"
              id="description"
              placeholder="Enter description"
              value={feedback.description}
              onChange={(e) => {
                setFeedback({
                    ...feedback,
                    description: e.target.value,
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
              value={feedback.feedbackDate}
              onChange={(e) => {
                setFeedback({
                    ...feedback,
                    feedbackDate: e.target.value,
                });
              }}
            />
          </div>

          <button
            className="btn btn-outline-primary mt-3"
            onClick={handleSubmit}
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
}

export default UpdateFeedback;
