import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/home";
import Journey from "./components/Journey/journey";
import Destinations from "./components/Destinations/Destinations";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Journey/>
      <Destinations/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;