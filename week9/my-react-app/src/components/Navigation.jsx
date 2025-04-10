import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthenticationButton from "./AuthenticationButton";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav-container">
      {/* Toggle icon: only visible on small screens via CSS */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav items: always visible on large screens, conditionally shown on small */}
      <div className={`nav-inner ${menuOpen ? "show" : ""}`}>
        <div className="nav-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</Link>
          <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
        </div>
        <AuthenticationButton />
      </div>
    </nav>
  );
}

export default Navigation;
