import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InstructorService from '../../service/InstructorService';
import LoginInstructor from './../../model/LoginInstructor';

function InstructorLogin() {
  const navigate = useNavigate();
  let service = new InstructorService();
  // const [state, setState] = useState({ student: new Student() });
  const [loginState, setLoginState] = useState({loginInstructor: new LoginInstructor() })

  return (
    <div>
      <div className="student-login">
        <h2>Login Instructor Page</h2>
        <form>
          <div>
            <input
              className="form-control"
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
          <div>
            <input
              className="form-control"
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
          <button type="submit" className="btn btn-outline-primary mt-3"
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
            }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default InstructorLogin;