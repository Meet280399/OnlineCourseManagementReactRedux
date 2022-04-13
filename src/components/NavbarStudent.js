import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../css/navbarStyle.css'

export const NavbarStudent = () => {
  return (
    <>
      <nav className='navbar-style'>
        <NavLink to="/students/show" className="nav-style">Students</NavLink>
        <NavLink to="/" className='nav-style'>LogOut</NavLink>
        {/* <NavLink to='/courses/show' className='nav-style'>Courses</NavLink> */}
      </nav>
    </>
  );
};
