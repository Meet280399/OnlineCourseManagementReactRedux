import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavbarStudent = () => {
  return (
    <>
      <nav>
        <Link to="/students/show">Home</Link>
        <Link to="/students/add">Add Student</Link>
      </nav>
    </>
  );
};
