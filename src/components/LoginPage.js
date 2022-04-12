import { NavLink } from 'react-router-dom';
import '../css/login.css'

function LoginPage() {
  return (
    <>
      <NavLink to="/loginStudent" className="users-style">
        Student User
      </NavLink>
      <NavLink to="/loginInstructor" className="users-style">Instructor User</NavLink>
    </>
  );
}

export default LoginPage;
