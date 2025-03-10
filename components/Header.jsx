import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="link-warning">CommunioHub</h1>
      <nav>
        <ul className="navbar-toggler nav flex-column navbar-expand-lg">
          <li>
            <Link className="link-warning" to="/">
              Home
            </Link>
            <Link className="link-warning" to="/events">
              Events
            </Link>
            <Link className="link-warning" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
/*<header className="header">
      <h1 className="link-warning">CommunioHub</h1>
      <nav>
      <ul className=" collapse navbar-collapse navbar-toggler nav flex-column navbar-expand-lg">
      <li>
        <Link className="link-warning" to="/">Home</Link>
        <Link className="link-warning" to="/events">Events</Link>
        <Link className="link-warning" to="/about">About</Link>
      </li>
      </ul> 
      </nav>
    </header>*/

/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Communion App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>*/
