import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header({ appName, showForm, onToggleForm }) {
  const location = useLocation();

  return (
    <header className="header d-flex justify-content-between align-items-center px-3 py-2">
      <h1 className="m-0">{appName}</h1>

      {location.pathname === "/" && (
        <Button variant="primary" onClick={onToggleForm}>
          {showForm ? "Close" : "Add a Task"}
        </Button>
      )}
    </header>
  );
}

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
  onToggleForm: PropTypes.func.isRequired,
};

export default Header;
