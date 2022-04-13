import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbarStyle.css";

export const NavbarInstructor = () => {
  return (
    <>
      <nav className="navbar-style">
        <NavLink to="/instructors/show" className="nav-style">
          Instructors
        </NavLink>
        <NavLink to="/feedbacks/add" className="nav-style">
          Add Feedbacks
        </NavLink>
        <NavLink to="/courses/show" className="nav-style">
          Courses
        </NavLink>
        <NavLink to="/feedbacks/show" className="nav-style">
          Feedbacks
        </NavLink>
        <NavLink to="/" className="nav-style">
          LogOut
        </NavLink>
      </nav>
    </>
  );
};
