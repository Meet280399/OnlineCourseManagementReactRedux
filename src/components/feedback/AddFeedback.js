import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Feedback from '../Model/Feedback';
import FeedbackService from '../Service/FeedbackService';
// import AddFeedback from './ShowFeedback';
//import {Link} from "react-router-dom";

function AddFeedback() {
    const navigate = useNavigate();
    let service = new FeedbackService();
    const [state, setState] = useState({ feedback: new Feedback() });
  return (
    <div>
        <div>
            <form>
                <div>
                    <input className="form-control" type="text" placeholder="FeedbackId"
                        value={state.feedback.feedbackId}
                        onChange={(u) => {
                            setState({
                                feedback: {
                                   ...state.feedback,
                                   feedbackId: u.target.value 
                                }
                            })
                        }}
                    />
                    <br></br>
                </div>
                <div>
                    <input className="form-control " type="text" placeholder="feedbackdescription"
                        value={state.feedback.feedbackdescription}
                        onChange={(u) => setState({
                            feedback: {
                                ...state.feedback,
                                feedbackdescription: u.target.value
                            }
                        })}
                    />
                     <br></br>
                </div>
                <div>
                    <input className="form-control" type="text" placeholder="feedbackDate"
                        value={state.feedback.feedbackDate}
                        onChange={(u) => setState({
                            feedback: {
                                ...state.feedback,
                                feedbackdate: u.target.value
                            }
                        })}
                    />
                    <br></br>
                </div>
                <button
            className="btn btn-outline-primary mt-3"
            onClick={(e) => {
              e.preventDefault();
              service
                .addFeedback(state.feedback)
                .then((result) => {
                  alert("Feedback is added in database. ");
                  navigate("/feedbacks");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }}
          >
            Add Feedback
          </button>
          <button className="btn btn-outline-primary mt-3 ml-3" to="/feedbacks">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFeedback