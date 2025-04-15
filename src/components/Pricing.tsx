
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  const services = [
    { 
      name: "Shirt", 
      originalPrice: 20.00, 
      discountedPrice: 15.00 
    },
    { 
      name: "Pant", 
      originalPrice: 20.00, 
      discountedPrice: 15.00 
    },
    { 
      name: "Churidhar Top", 
      originalPrice: 20.00, 
      discountedPrice: 15.00 
    },
    { 
      name: "Mundu", 
      originalPrice: 20.00, 
      discountedPrice: 15.00 
    },
    { 
      name: "Churidhar Bottom", 
      originalPrice: 20.00, 
      discountedPrice: 15.00 
    },
    { 
      name: "Saree", 
      originalPrice: 50.00, 
      discountedPrice: 40.00 
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent and affordable pricing for all your ironing needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:shadow-lg transition-all"
            >
              <CardHeader className="text-center pt-6">
                <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 line-through mr-2">
                    ₹{service.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    ₹{service.discountedPrice.toFixed(2)}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Per piece ironing charge</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open('https://www.whatsapp.com/catalog/918217078794', '_blank')}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
