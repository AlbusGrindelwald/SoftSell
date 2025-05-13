import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "SoftSell transformed how I manage my finances. Their tools are intuitive and their advisors truly care about my financial goals.",
    author: "Sarah Johnson",
    position: "Small Business Owner",
    companyName: "Global Systems Inc",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "I've tried several financial platforms, but SoftSell stands out with their personalized approach and cutting-edge technology.",
    author: "Michael Chen",
    position: "Tech Executive",
    companyName: "TechCorp Innovations",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "Their investment strategies helped me secure my retirement plan. The team at SoftSell is professional, knowledgeable, and responsive.",
    author: "David Rodriguez",
    position: "Marketing Director",
    companyName: "Frontier Media Group",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#111827] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0"
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-4">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
                    <p className="text-white dark:text-white">{testimonials[currentIndex].companyName}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
