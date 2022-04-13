import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import App from "../../App";
import InstructorService from "../../service/InstructorService.js";
import LoginInstructor from "./../../model/LoginInstructor.js";

function InstructorLogin() {
  const navigate = useNavigate();
  let service = new InstructorService();
  // const [state, setState] = useState({ student: new Student() });
  const [loginState, setLoginState] = useState({
    loginInstructor: new LoginInstructor(),
  });

  const goToLastPage = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="student-login">
        <h2 className="login-header">Login Instructor Page</h2>
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
              placeholder="Enter Instructor Email"
              value={loginState.loginInstructor.email}
              onChange={(e) => {
                setLoginState({
                  loginInstructor: {
                    ...loginState.loginInstructor,
                    email: e.target.value,
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
              value={loginState.loginInstructor.instPassword}
              onChange={(e) => {
                setLoginState({
                  loginInstructor: {
                    ...loginState.loginInstructor,
                    instPassword: e.target.value,
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
                  .checkLogin(loginState.loginInstructor)
                  .then((result) => {
                    alert("Login Successfull");
                    navigate("/instructors");
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

export default InstructorLogin;
