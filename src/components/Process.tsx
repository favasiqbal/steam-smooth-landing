
import { CheckCircle2, Package, Truck, Clock } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Book Online",
      description: "Schedule a pickup and tell us how many items you need ironed."
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "We Collect",
      description: "Our team picks up your clothes at your convenient time and location."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Professional Ironing",
      description: "We carefully iron your clothes with professional steam equipment."
    },
    {
      icon: <CheckCircle2 className="h-12 w-12 text-primary" />,
      title: "Delivery",
      description: "We deliver your perfectly ironed clothes back to your door."
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your clothes perfectly pressed has never been easier with our simple 4-step process.
          </p>
        </div>

        <div className="relative">
          {/* Process connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-4 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
