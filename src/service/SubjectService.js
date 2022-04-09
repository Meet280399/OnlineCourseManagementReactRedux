import axios from "axios";

class SubjectService {
  baseUrl = `http://localhost:8090/onlinecoursemanagement/rest/subjects`;
  // baseCourseUrl = `http://localhost:8090/onlinecoursemanagement/rest/courses`;
  getAllSubjects() {
    alert("inside get all subject");
    return axios.get(this.baseUrl);
  }

  // getAllCourse() {
  //   return axios.get(this.baseCourseUrl);
  // }

  addSubject(subject) {
    console.log("inside service" + JSON.stringify(subject));
    return axios.post(this.baseUrl, subject);
  }

  deleteSubjectById(subId) {
    return axios.delete(this.baseUrl + "/" + subId);
  }

  updateSubject(subject) {
    return axios.put(this.baseUrl + "/" + subject.subId, subject);
  }

  findSubjectById(subId) {
    return axios.get(this.baseUrl + "/" + subId);
  }
}

export default SubjectService;
