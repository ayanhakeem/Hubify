import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Navbar.css"; // Still used for styling

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout(); // clear user context and localStorage
    navigate("/"); // redirect to home
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">NCEThub</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={location.pathname === "/events" ? "active" : ""}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className={location.pathname === "/support" ? "active" : ""}
          >
            Support
          </Link>
        </li>

        {/* Auth Links */}
        {!user ? (
          <>
            <li>
              <Link to="/signup" className="signup-btn">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="signup-btn">
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* Admin Dashboard Link only for admins */}
            {user.role === "admin" && (
              <li>
                <Link
                  to="/admin"
                  className={location.pathname === "/admin" ? "active" : ""}
                >
                  Admin Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/dashboard"
                className={location.pathname === "/dashboard" ? "active" : ""}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="signup-btn">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
