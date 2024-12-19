import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useLocation } from "react-router-dom";
import logo2 from "../../img/Logo2.png";
import "../../styles/navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import "../../styles/index.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const token = store.token;

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    actions.logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container navbar-banner">
        <img
          className="logo"
          src={logo2}
          alt="Logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
        <div className="example-only diphylleia-regular">
          <strong>** Example Site **</strong>
        </div>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="dropdown-toggle diphylleia-regular"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Start Here
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li className="navbar-dropdown-item">
                <a className="dropdown-item" href="#" onClick={() => navigate("/")}>
                  Home
                </a>
              </li>

              {location.pathname === "/" && (
                <li className="scrollLink" style={{ paddingLeft: "15px", paddingTop: "5px", paddingBottom: "5px" }}>
                  <Link
                    activeClass="active"
                    to="how-it-works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    How it Works
                  </Link>
                </li>
              )}

              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => navigate("/blog")}
                >
                  Blog/Resources
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => navigate("/contact-us")}>
                  Contact Us
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              {token ? (
                <>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => navigate("/account-settings")}
                      style={{ cursor: "pointer" }}
                    >
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={handleLogout}>
                      Log Out
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/login")}>
                      Log In
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/signup")}>
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
