import FeedbackService from "../../service/FeedbackService.js"
import {
    FETCH_FEEDBACKS_REQUEST,
    FETCH_FEEDBACKS_SUCCESS,
    FETCH_FEEDBACKS_FAILURE,
    DELETE_FEEDBACK_REQUEST,
    UPDATE_FEEDBACK_REQUEST,
    ADD_FEEDBACK_REQUEST,
    SEARCH_FEEDBACKS_REQUEST
} from "./feedbackType.js";

export const fetchFeedbacksRequest = () => {
    return {
        type: FETCH_FEEDBACKS_REQUEST,
    };
};
export const fetchFeedbacksSuccess = (feedbacks) => {
    return {
        type: FETCH_FEEDBACKS_SUCCESS,
        payload: feedbacks //data from database
    };
};
export const fetchFeedbacksFailure = (error) => {
    return {
        type: FETCH_FEEDBACKS_FAILURE,
        payload: error,
    };
};
export const deleteFeedbackRequest = (feedId) => {
    return {
        type: DELETE_FEEDBACK_REQUEST,
        payload: feedId
    };
};
export const updateFeedbackRequest = (feed) => {
    return {
        type: UPDATE_FEEDBACK_REQUEST,
        payload: feed, //data from database
    };
};
export const addFeedbackRequest = (feed) => {
    return {
        type: ADD_FEEDBACK_REQUEST,
        payload: feed, //data from database
    };
};
export const searchFeedback = (feedId) => {
    return {
        type: SEARCH_FEEDBACKS_REQUEST,
        payload: feedId
    };
};


//get feedbacks
export const fetchFeedbacks = () => {
    return (dispatch) => {
        let service = new FeedbackService();
        service.getAllFeedbacks()
            .then((response) => {
                const feedbacks = response.data;
                dispatch(fetchFeedbacksSuccess(feedbacks));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                dispatch(fetchFeedbacksFailure(error.message));
            });
    };
};

export const deleteFeedback = (feedId) => {
    
    return (dispatch) => {
        let service = new FeedbackService();
        service.deleteFeedbackById(feedId)
            .then(() => {
                dispatch(deleteFeedbackRequest(feedId));
                        service.getAllFeedbacks()
                            .then((response) => {
                                const feedbacks = response.data;
                                dispatch(fetchFeedbacksSuccess(feedbacks));//take action as parameter,reudcer is triggered
                            })
                            .catch((error) => {
                                dispatch(fetchFeedbacksFailure(error.message));
                            });
            })
            .catch((error) => {
                dispatch(fetchFeedbacksFailure(error.message));
            });
    };

};

export const updateFeedback = (feed) => {
    return (dispatch) => {
        let service = new FeedbackService();
        service.updateFeedback(feed)
            .then((response) => {
                let feedback = response.data;
                dispatch(updateFeedbackRequest(feed));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchFeedbacksFailure(error.message));
            });
    };
};

//Adding feedback
export const addFeedback = (feed) => {
    return (dispatch) => {
        let service = new FeedbackService();
        service.addFeedback(feed)
            .then((response) => {
                const feedback = response.data;
                dispatch(addFeedbackRequest(feedback));//take action as parameter,reudcer is triggered
            })
            .catch((error) => {
                // dispatch(fetchFeedbackFailure(error.message));
            });
    };
};