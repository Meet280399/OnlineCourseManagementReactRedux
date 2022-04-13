import React from "react";
import { NavLink } from 'react-router-dom';
// import Student from './../model/Student';

export const NavbarAdmin = () => {
  return (
    <>
      <nav className="navbar-style">
        <NavLink to="/students/add" className="nav-style">Add Student</NavLink>
        <NavLink to="/instructors/add" className="nav-style">Add Instructor</NavLink>
        <NavLink to="/courses/add" className="nav-style">Add Course</NavLink>
        <NavLink to="/subjects/add" className="nav-style">Add Subject</NavLink>
        <NavLink to="/" className='nav-style'>LogOut</NavLink>
      </nav>
    </>
  );
};
