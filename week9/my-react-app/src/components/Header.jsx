import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function Header({ appName, showForm, onToggleForm }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{appName}</h1>

      {location.pathname === "/" && (
        <button className="toggle-btn" onClick={onToggleForm}>
          {showForm ? "Close" : "Add a Task"}
        </button>
      )}
    </header>
  );
}

// Define PropTypes
Header.propTypes = {
  appName: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
  onToggleForm: PropTypes.func.isRequired,
};

export default Header;