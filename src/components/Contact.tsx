
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to book? Get in touch with our friendly team and we'll be happy to help.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
                <p>+91-8217078794</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
                <p>pressnglowservices@gmail.com</p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-3">Operating Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
