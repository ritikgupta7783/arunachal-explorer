import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>TravelGo</h2>

          <p>
            Explore Arunachal Pradesh with affordable bike trips, car tours,
            group adventures, hotel stays and free Inner Line Permit assistance.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
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
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📞 +91 XXXXX XXXXX</p>
          <p>📧 travelgo@gmail.com</p>
          <p>📍 Silapathar, Assam</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>

          <a
            href="https://facebook.com/your_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘 Facebook
          </a>

          <a
            href="https://youtube.com/@your_channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶️ YouTube
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelGo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
