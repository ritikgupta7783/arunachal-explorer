import "./home.css";
import heroImage from "../../assets/hero-bg.jpg";
import { TypeAnimation } from "react-type-animation";

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
        <span className="hero-tag">
          Explore Northeast India
        </span>

        <div className="typing-container">
          <h1>
            <TypeAnimation
              sequence={[
                "Arunachal Explorer Circuit",
                3000,
                "4 Days • 3 Nights Adventure",
                3000,
                "Explore Hidden Arunachal",
                3000,
              ]}
              speed={120}
              cursor={true}
              repeat={Infinity}
            />
          </h1>
        </div>

        <p>
          Experience the breathtaking beauty of Pasighat,
          Yingkiong, Aalo, Daporijo, Basar and Likabali on a
          4 Days • 3 Nights adventure through the heart of
          Arunachal Pradesh.
        </p>

        <div className="hero-buttons">
          <a href="#destinations">
            <button className="primary-btn">
              Explore Tours
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;