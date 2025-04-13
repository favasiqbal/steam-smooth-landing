
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNowClick = () => {
    window.open("https://www.whatsapp.com/catalog/918217078794", "_blank");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            Press N Glow
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
            <a href="#process" className="text-sm font-medium hover:text-primary">How It Works</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
            <Button className="bg-primary text-white hover:bg-primary/90" onClick={handleBookNowClick}>
              Book Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#process" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Button className="bg-primary text-white hover:bg-primary/90 w-full" onClick={() => {
                setMobileMenuOpen(false);
                handleBookNowClick();
              }}>
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
