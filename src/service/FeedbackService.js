import axios from "axios";

class FeedbackService {
  baseUrl = `http://localhost:8090/onlinecoursemanagement/rest/feedbacks`;
  // baseCourseUrl = `http://localhost:8090/onlinecoursemanagement/rest/courses`;
  getAllFeedbacks() {
    alert("inside get all feedback");
    return axios.get(this.baseUrl);
  }

  // getAllCourse() {
  //   return axios.get(this.baseCourseUrl);
  // }

  addFeedback(feedback) {
    console.log("inside service" + JSON.stringify(feedback));
    return axios.post(this.baseUrl, feedback);
  }

  deleteFeedbacktById(feedId) {
    return axios.delete(this.baseUrl + "/" + feedId);
  }

  updateFeedback(feedback) {
    return axios.put(this.baseUrl + "/" + feedback.feedId, feedback);
  }

  findFeedbackById(feedId) {
    return axios.get(this.baseUrl + "/" + feedId);
  }
}

export default FeedbackService