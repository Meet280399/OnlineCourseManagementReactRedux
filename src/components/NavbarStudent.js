
import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavbarStudent = () => {
  return (
    <>
        <NavLink to='/students'>Home</NavLink>
        <NavLink to='/students/add'>Add Student</NavLink>
    </>
  )
}
