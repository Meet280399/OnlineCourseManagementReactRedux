import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginStudent from "../../model/LoginStudent";
import StudentService from "../../service/StudentService";
import "../../css/login.css";
import { useHistory } from "react-router-dom";
// import { ReactDOM } from 'react-dom';

function StudentLogin() {
  const navigate = useNavigate();

  let service = new StudentService();
  // const [state, setState] = useState({ student: new Student() });
  const [loginState, setLoginState] = useState({
    loginStudent: new LoginStudent(),
  });
  // const [style, setStyle] = useState("student-login");

  const goToLastPage = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="student-login">
        <h2 className="login-header">Login Page</h2>
        <form className="form-login">
          <div className="row">
            <div className="col-md-4">
              <label>
                E-Mail <span>*</span>
              </label>
            </div>
            <input
              className="form-control col-md-8"
              type="text"
              placeholder="Enter Student Email"
              value={loginState.loginStudent.studentEmail}
              onChange={(e) => {
                setLoginState({
                  loginStudent: {
                    ...loginState.loginStudent,
                    studentEmail: e.target.value,
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
              value={loginState.loginStudent.password}
              onChange={(e) => {
                setLoginState({
                  loginStudent: {
                    ...loginState.loginStudent,
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
                .checkLogin(loginState.loginStudent)
                .then((result) => {
                  alert("Login Successfull");
                  navigate("/students");
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

export default StudentLogin;
