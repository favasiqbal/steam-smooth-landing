
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleBookNowClick = () => {
    window.open("https://www.whatsapp.com/catalog/918217078794", "_blank");
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-primary">Press N Glow</span> Steam Ironing Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              We take care of the wrinkles, so you don't have to. Professional, reliable, and convenient ironing services delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-md text-lg"
                onClick={handleBookNowClick}
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-8">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-sm text-gray-500">Happy Customers</span>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-primary">24h</span>
                <span className="text-sm text-gray-500">Fast Turnaround</span>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-gray-500">Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white p-2 rounded-lg shadow-lg max-w-md mx-auto animate-float">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Press N Glow Logo" 
                className="w-full h-auto rounded object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
