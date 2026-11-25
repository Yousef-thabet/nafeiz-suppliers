import "./sections/hero-about-layout.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import GlobalPresence from "./sections/GlobalPresence";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <div className="relative isolate bg-white">
          <Hero />
          <About />
        </div>

        <Services />
        <GlobalPresence />
        <Contact />
      </main>

      <Footer />
    </>
  );
}



