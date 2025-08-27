import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Projects from "./data/projects";
import Testimonials from "./sections/Testimonials";
import Team from "./data/Teams";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-white text-[#1C355E]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
