
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: 29.99,
      description: "Perfect for individuals with occasional needs",
      features: [
        "Up to 15 items per month",
        "Standard 48-hour turnaround",
        "Free pickup and delivery",
        "Basic garment care"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: 49.99,
      description: "Ideal for small families or regular needs",
      features: [
        "Up to 30 items per month",
        "36-hour turnaround",
        "Free pickup and delivery",
        "Stain treatment",
        "Fabric softener included"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: 79.99,
      description: "Best value for large families",
      features: [
        "Up to 50 items per month",
        "24-hour express service",
        "Free pickup and delivery",
        "Premium fabric care",
        "Stain treatment",
        "Special garment processing",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that works for you. All plans include free pickup and delivery within our service area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.popular ? 'relative border-primary shadow-lg' : 'border-gray-200'} transition-all hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pt-8">
                <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-3">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom plan for your business?</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Contact for Business Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
