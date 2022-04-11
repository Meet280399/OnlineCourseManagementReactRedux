import axios from 'axios';

class InstructorService {
    baseUrl = `http://localhost:8090/onlinecoursemanagement/rest/instructors`;
    getAllInstructors() {
        alert("inside get all instructor")
        return axios.get(this.baseUrl);
    }
    addInstructor(instructor) {
        console.log("inside service" +JSON.stringify(instructor))
        return axios.post(this.baseUrl, instructor);
    }
    deleteInstructorById(instId) {
        return axios.delete(this.baseUrl + "/" + instId);
    }
    updateInstructor(instructor) {
        return axios.put(this.baseUrl+ "/" +instructor.instId, instructor);
    
    }
    findInstructorById(instId) {
        return axios.get(this.baseUrl  + "/" + instId);
    }
    getAllFeedback() {
        return axios.get(this.baseUrl + '/getAllFeedbacks');
    }

    checkLogin(loginInstructor) {
        return axios.post(this.baseUrl + '/checkInstructorLogin', loginInstructor)
    }
    
}
export default InstructorService;