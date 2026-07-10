import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <span>Contact Us</span>

        <h2>Ready For Your Arunachal Adventure?</h2>

        <p>
          Contact us for bookings, trip details, Inner Line Permit
          assistance, pricing, and travel guidance.
        </p>
      </div>

      <div className="contact-container">
        <form
          action="https://formsubmit.co/travelgo206@gmail.com"
          method="POST"
          className="contact-form"
        >
          {/* FormSubmit Settings */}
          <input
            type="hidden"
            name="_subject"
            value="New TravelGo Inquiry"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your travel plans..."
            required
          ></textarea>

          <button type="submit">
            Send Inquiry
          </button>
        </form>

        <div className="contact-info">
          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 6000817670</p>
          </div>

          <div className="info-box">
            <h3>💬 WhatsApp</h3>
            <p>+91 6000817670</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>travelgo206@gmail.com</p>
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