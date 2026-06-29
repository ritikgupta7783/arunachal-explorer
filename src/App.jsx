import Navbar from "./components/Navbar/navbar";

import Hero from "./components/Hero/home";
import Journey from "./components/Journey/journey";
import Destinations from "./components/Destinations/Destinations";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Journey/>
      <Destinations/>
      <About/>
      <Contact/>
    </>
  );
}

export default App;