import "./home.css";
import heroImage from "../../assets/hero-bg.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">Explore Northeast India</span>

        <h1>Arunachal Explorer Circuit</h1>

        <p>
          Experience the breathtaking beauty of Pasighat, Yingkiong, Aalo,
          Daporijo, Basar and Likabali on a 4 Days • 3 Nights adventure through
          the heart of Arunachal Pradesh.
        </p>

        <a href="#destinations">
          <button className="primary-btn">Explore Tours</button>
        </a>

        <a href="#contact">
          <button className="secondary-btn">Contact Us</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
