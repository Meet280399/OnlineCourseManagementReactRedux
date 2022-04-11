import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LoginStudent from "../../model/LoginStudent";
import StudentService from "../../service/StudentService";

function StudentLogin() {
  const navigate = useNavigate();
  let service = new StudentService();
  // const [state, setState] = useState({ student: new Student() });
  const [loginState, setLoginState] = useState({loginStudent: new LoginStudent() })

  return (
    <div>
      <div className="student-login">
        <h2>Login Page</h2>
        <form>
          <div>
            <input
              className="form-control"
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
          <div>
            <input
              className="form-control"
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
          <button type="submit" className="btn btn-outline-primary mt-3"
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
            }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;