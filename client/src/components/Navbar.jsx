import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/login" className="login-btn">Login</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About HSB</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li className="dropdown">
          <button className="dropbtn">Weddings</button>
          <div className="dropdown-content">
            <Link to="/weddings/packages">Packages</Link>
            <Link to="/weddings/gallery">Gallery</Link>
          </div>
        </li>

        <li className="dropdown">
          <button className="dropbtn">Learn to Dance</button>
          <div className="dropdown-content">
            <Link to="/learn-to-dance/classes">Classes</Link>
            <Link to="/learn-to-dance/schedule">Schedule</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
