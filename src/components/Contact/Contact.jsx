import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-header">

        <span>Contact Us</span>

        <h2>
          Ready For Your Arunachal Adventure?
        </h2>

        <p>
          Contact us for bookings, trip details,
          Inner Line Permit assistance, pricing,
          and travel guidance.
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your travel plans..."
          ></textarea>

          <button>
            Send Inquiry
          </button>

        </div>

        <div className="contact-info">

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91  6000817670</p>
          </div>

          <div className="info-box">
            <h3>💬 WhatsApp</h3>
            <p>+91 60020 44101</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>travelgo@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>📍 Location</h3>
            <p>Silapathar, Assam</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;