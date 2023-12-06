import React from "react";
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import logomark from "../assets/logomark.svg";
import "./Nav.css";

const Nav = ({ userName }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" aria-label="Go to home" className="logo">
          <img src={logomark} alt="" height={30} />
          <span>ExpenseIt</span>
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/budget-tracker" activeClassName="active-link">
          Budget Tracker
        </NavLink>

        <NavLink to="/blog" activeClassName="active-link" className="blog-link">
          Blog
        </NavLink>
        <NavLink to="/" activeClassName="active-link">
          Log In
        </NavLink>
        {userName && (
          <Form
            method="post"
            action="/logout"
            onSubmit={(event) => {
              if (!window.confirm("Delete user and all data?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn btn-warning">
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        )}
      </div>
    </nav>
  );
};

export default Nav;
