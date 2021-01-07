import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-product">
      Add Product
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
      Products
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="navbar">
        <NavLink className="ProductsAppHome" to="/">
          ProductsApp
        </NavLink>
        <div className="logo">
          <img
            src="../../../../logo/logo-maker-for-a-stationery-supply-store-1380i-294-el (1).png"
            alt="our logo"
          />
        </div>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
