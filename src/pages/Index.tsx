
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  // Scroll to section if URL has hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
