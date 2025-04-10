import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./AuthenticationButton";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <AuthenticationButton />
      </div>
    </nav>
  );
}

export default Navigation;
