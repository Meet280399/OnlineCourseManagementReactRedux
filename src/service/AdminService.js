import axios from "axios";

class AdminService {
  baseUrl = `http://localhost:8090/onlinecoursemanagement/rest/admin`;

  checkLogin(loginAdmin) {
    return axios.post(this.baseUrl + "/checkAdminLogin", loginAdmin);
  }
}

export default AdminService;
