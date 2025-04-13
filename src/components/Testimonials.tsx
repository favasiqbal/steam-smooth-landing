
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sabith",
      position: "Customer",
      image: "https://lh3.googleusercontent.com/a/ACg8ocL8VXB7lEP18DKZ5NAglGWqlIjXYlH_skvbX2hAvlI=s120-c-rp-mo-br100", 
      stars: 5,
      text: "I was skeptical about outsourcing my ironing but Press N Glow made me a believer with their exceptional service. My clothes came back perfectly pressed and the convenience is unmatched. Highly recommend!"
    },
    {
      name: "Sachin Pk",
      position: "Customer",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXpVbo2VEix0TDvgET57-jQqRl4blUwhdGWmF-_ScwO9A=s120-c-rp-mo-br100",
      stars: 5,
      text: "The best ironing service I've ever used! Press N Glow delivers consistently perfect results every time. Their attention to detail is impressive and their staff is very professional."
    },
    {
      name: "Moideen Kutty",
      position: "Customer",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjVrqZOOsXLQkkM7voJf5JmvB3F-X9qaS9JhtfDuUAB3Kw=s120-c-rp-mo-br100",
      stars: 5,
      text: "Excellent service! Fast, efficient, and my clothes have never looked better. The team at Press N Glow takes great care with even the most delicate fabrics. I'm a customer for life."
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Press N Glow.
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
