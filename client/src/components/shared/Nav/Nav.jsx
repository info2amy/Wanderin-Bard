import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../../logo/W.Bard-image.png";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add a Product
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/products">
      See All Products
    </NavLink>
  </>
);

const aboutUs = (
  <>
    <NavLink className="link" to="/aboutus">
      About Us
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="navbar">
        <NavLink className="to-home" to="/">
          <img className="logo" src={logo} alt="our logo" />
        </NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
          {aboutUs}
        </div>
      </div>
    </nav>
  );
};




export default Nav;
