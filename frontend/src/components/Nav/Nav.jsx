// Nav.jsx
import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import "./Nav.css";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <span>HomeBudget</span>
      </NavLink>
      <NavLink to="/blog" aria-label="Go to blog">
        {" "}
        {/* Add this line */}
        <span>Blog</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!window.confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
