import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import "./Nav.css";
import logo from "../../../logo/W.Bard-image.png";
// import logo from "../../../logo/W.Bard-image-square.png";

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
      See Products
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="navbar">
        {/* <NavLink className="ProductsAppHome" to="/">
          ProductsApp
        </NavLink> */}
        <img className="logo" src={logo} alt="our logo" />
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
          <FaUserCircle size="2em" color="black" />
          <AiOutlineShoppingCart size="2em" color="black" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
