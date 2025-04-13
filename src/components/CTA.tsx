
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Perfectly Pressed Clothes?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join hundreds of satisfied customers who never worry about ironing again. Book your first service today and enjoy 15% off!
          </p>
          <Button className="bg-white text-primary hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
            Book Your First Service
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-blue-100 mt-4 text-sm">
            No contracts. Cancel anytime. Satisfaction guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
