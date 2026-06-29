import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">TravelGo</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={closeMenu}>
          <a href="#hero">Home</a>
        </li>

        <li onClick={closeMenu}>
          <a href="#destinations">Destinations</a>
        </li>

        <li onClick={closeMenu}>
          <a href="#journey">Itinerary</a>
        </li>

        <li onClick={closeMenu}>
          <a href="#about">About</a>
        </li>

        <li onClick={closeMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-actions">
        <a href="#contact">
          <button className="desktop-btn">
            Book Now
          </button>
        </a>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;