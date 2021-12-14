import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignOutLinks";

const Navbar = () => {
  return (
    <>
      <Link to="/">MarioPlan</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </>
  );
};

export default Navbar;
