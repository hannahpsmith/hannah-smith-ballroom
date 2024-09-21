import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS
import logo from '../assets/Name_logo_gold.png'; // Import the logo

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        {/* Logo on the top-left, linking to Home */}
        <div className="logo">
          <Link to="/"> {/* Use "/" to link to the home route */}
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links (Centered) */}
        <nav className="nav-center">
          <Link className="nav-link" to="/about">About HSB</Link>
          <Link className="nav-link" to="/notes">Notes</Link>
          <Link className="nav-link" to="/contact">Contact</Link>

          {/* Weddings Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Weddings</button>
            <div className="dropdown-content">
              <Link to="/weddings/packages">Packages</Link>
              <Link to="/weddings/gallery">Gallery</Link>
            </div>
          </div>

          {/* Learn to Dance Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Learn to Dance</button>
            <div className="dropdown-content">
              <Link to="/learn-to-dance/classes">Classes</Link>
              <Link to="/learn-to-dance/schedule">Schedule</Link>
            </div>
          </div>
        </nav>

        {/* Login Link (Top Right) */}
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
