import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthenticationButton from "./AuthenticationButton";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // ✅ track screen width

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // ✅ Listen for screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // ✅ Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ✅ Determine if nav should show
  const showNav = menuOpen || screenWidth > 576;

  return (
    <nav className="nav-container">
      {/* Toggle icon for small screens only */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Show nav if menuOpen (on small) or width > 576 (large) */}
      {showNav && (
        <div className="nav-inner">
          <div className="nav-links">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</Link>
            <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
          </div>
          <AuthenticationButton />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
