import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFeedback, fetchFeedbacks } from "../../redux/feedback/feedbackAction";
function FeedbackHome({ feedbacksData, fetchFeedbacks, deleteFeed }) {//bcm prop of comp

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    return feedbacksData.loading ? (
        <h2>Loading</h2>
    ) : feedbacksData.error ? (
        <h2>{feedbacksData.error}</h2>
    ) : (
        <div className="py-4">
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        {console.log("Feedback" + JSON.stringify(feedbacksData.loading))}
                        <th scope="col">Feedback Id</th>
                        <th scope="col">Feedback description</th>
                        <th scope ="col">Feedback feedbackDate</th>
                       
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {feedbacksData.feedbacks.map((feedback, index) => (
                        <tr key={index}>
                            {console.log("feedback" + JSON.stringify(feedback))}
                            <td>{feedback.feedbackId}</td>
                            <td>{feedback.description}</td>
                            <td>{feedback.feedbackDate}</td>
                         
                            <td>
                                <Link
                                    className="btn btn-outline-primary mr-2"
                                    to={`/feedbacks/update/${feedback.feedbackId}`}
                                >
                                    Modify
                                </Link>
                                <button
                                    className="btn btn-outline-primary mr-2"
                                    onClick={() => deleteFeed(feedback.feedbackId)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
const mapStateToProps = (state) => {// redux state
    return {
        feedbacksData: state.feedbacks,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchFeedbacks: () => { dispatch(fetchFeedbacks()) },
        deleteFeed: (feedId) => { dispatch(deleteFeedback(feedId)) },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackHome);