import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </>
  );
};

export default SignOutLinks;
