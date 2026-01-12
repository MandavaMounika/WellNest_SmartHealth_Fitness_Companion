import { Link } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h2 className="logo">wellNEST</h2>

        {/* Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="nav-actions">
          <Link to="/login" className="btn-outline">Login</Link>
          <Link to="/register" className="btn-primary">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
