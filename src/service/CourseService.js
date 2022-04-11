import axios from "axios";

class CourseService {
  baseUrl = `http://localhost:8090/onlinecoursemanagement/rest/courses`;
  // baseStudentUrl = `http://localhost:8090/onlinecoursemanagement/rest/students`;

  getAllCourses() {
    // alert("inside get all course")
    return axios.get(this.baseUrl);
  }

  addCourse(course) {
    // console.log("inside service" + JSON.stringify(course));
    return axios.post(this.baseUrl, course);
  }

  updateCourse(course) {
    return axios.put(this.baseUrl + "/" + course.courId, course);
  }

  deleteCourseById(courId) {
    return axios.delete(this.baseUrl + "/" + courId);
  }

  findCourseById(courId) {
    return axios.get(this.baseUrl + "/" + courId);
  }

  // getAllStudents() {
  //   return axios.get(this.baseStudentUrl);
  // }
}

export default CourseService;
