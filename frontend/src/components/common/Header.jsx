import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <header className="full_bg">
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/product">Our Product</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/gallery">Gallery</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">Cart</Link>
                    </li>

                    {isLoggedIn ? (
                      <>
                        <li className="nav-item">
                          <span className="nav-link">
                            {user?.name}
                          </span>
                        </li>

                        <li className="nav-item">
                          <button
                            className="nav-link"
                            onClick={handleLogout}
                            style={{ border: "none", background: "none" }}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                      </>
                    )}

                  </ul>
                </div>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;