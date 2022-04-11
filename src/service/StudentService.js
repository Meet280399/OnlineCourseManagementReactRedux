import axios from "axios";

class StudentService {
  baseUrl = `http://localhost:8090/onlinecoursemanagement/rest/students`;
  // baseCourseUrl = `http://localhost:8090/onlinecoursemanagement/rest/courses`;
  getAllStudents() {
    // alert("inside get all student");
    return axios.get(this.baseUrl);
  }

  // getAllCourse() {
  //   return axios.get(this.baseCourseUrl);
  // }

  addStudent(student) {
    // console.log("inside service" + JSON.stringify(student));
    return axios.post(this.baseUrl, student);
  }

  deleteStudentById(studId) {
    return axios.delete(this.baseUrl + "/" + studId);
  }

  updateStudent(student) {
    return axios.put(this.baseUrl + "/" + student.studId, student);
  }

  findStudentById(studId) {
    return axios.get(this.baseUrl + "/" + studId);
  }

  // getAllCourse() {
  //   return axios.get(this.baseCourseUrl);
  // }

  checkLogin(loginStudent) {
    return axios.post(this.baseUrl + "/checkStudentLogin", loginStudent)
  }
}

export default StudentService;
