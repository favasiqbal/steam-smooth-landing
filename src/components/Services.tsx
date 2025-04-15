import { Clock, Shirt, Package, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const servicesList = [
    {
      icon: <Shirt className="h-10 w-10 text-primary" />,
      title: "Steam Ironing",
      description: "Professional steam ironing service for everyday clothing items like shirts, trousers, and casual wear."
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: "Delicate Items",
      description: "Special care for delicate fabrics like silk, satin, and other sensitive materials."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Express Service",
      description: "Fast turnaround for urgent needs. Get your clothes back within 6-8 hours."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Premium Finishing",
      description: "Extra attention to detail with premium finishing touches and fabric treatments."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional ironing services to meet your needs, from everyday clothes to delicate fabrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <Card key={index} className="border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg text-center">
          <h3 className="font-bold text-xl mb-3">Need Custom Services?</h3>
          <p className="mb-5">We can customize our services to fit your specific needs.</p>
          <button className="text-primary font-semibold flex items-center mx-auto hover:underline">
            Contact Us <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
