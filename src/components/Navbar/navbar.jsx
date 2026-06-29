import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        TravelGo
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li>
    <a href="#hero">Home</a>
  </li>

  <li>
    <a href="#destinations">Destinations</a>
  </li>

  <li>
    <a href="#journey">Itinerary</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>

  <a href="#contact">
  <button className="mobile-btn">
    Book Now
  </button>
</a>
</ul>

      <a href="#contact">
  <button className="desktop-btn">
    Book Now
  </button>
</a>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;