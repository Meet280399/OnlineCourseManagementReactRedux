import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAdmin from "../../model/LoginAdmin.js";
import AdminService from "../../service/AdminService.js";
import "../../css/login.css";
// import { useHistory } from "react-router-dom";
// import { ReactDOM } from 'react-dom';

function AdminLogin() {
  const navigate = useNavigate();

  let service = new AdminService();
  // const [state, setState] = useState({ student: new Student() });
  const [loginState, setLoginState] = useState({
    loginAdmin: new LoginAdmin(),
  });
  // const [style, setStyle] = useState("student-login");

  const goToLastPage = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="student-login">
        <h2 className="login-header">Admin Login</h2>
        <form className="form-login">
          <div className="row">
            <div className="col-md-4">
              <label>
                Username <span>*</span>
              </label>
            </div>
            <input
              className="form-control col-md-8"
              type="text"
              placeholder="Admin Username"
              value={loginState.loginAdmin.userName}
              onChange={(e) => {
                setLoginState({
                  loginAdmin: {
                    ...loginState.loginAdmin,
                    userName: e.target.value,
                  },
                });
              }}
            />
            <br></br>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label>
                Password <span>*</span>
              </label>
            </div>
            <input
              className="form-control col-md-8"
              type="password"
              placeholder="Enter password"
              value={loginState.loginAdmin.password}
              onChange={(e) => {
                setLoginState({
                  loginAdmin: {
                    ...loginState.loginAdmin,
                    password: e.target.value,
                  },
                });
              }}
            />
            <br></br>
          </div>
          <div className="middle-btn">
          <button
            type="submit"
            className="btn btn-outline-info mt-3 btn-custom"
            onClick={(e) => {
              e.preventDefault();
              service
                .checkLogin(loginState.loginAdmin)
                .then((result) => {
                  alert("Admin Access");
                  navigate("/admin");
                })
                .catch((error2) => {
                  alert(error2);
                });
            }}
          >
            Submit
          </button>
          <button
            className="btn btn-outline-danger mt-3 ml-3 btn-custom"
            onClick={goToLastPage}
          >
            Cancel
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
