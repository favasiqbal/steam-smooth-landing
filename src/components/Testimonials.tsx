
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Working Professional",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      stars: 5,
      text: "PerfectPress has been a lifesaver for me. With my busy work schedule, I never have time to iron my clothes properly. Their service is fast, affordable, and my clothes always look immaculate."
    },
    {
      name: "Michael Chen",
      position: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
      text: "I've been using PerfectPress for my entire family's clothes for over a year now. The quality is consistently excellent, and their staff is always friendly and accommodating."
    },
    {
      name: "Emily Rodriguez",
      position: "Executive Assistant",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      stars: 4,
      text: "As someone who cares a lot about presentation, I'm very particular about how my clothes look. PerfectPress meets my high standards every time. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
