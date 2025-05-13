import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-[#1d4ed8] dark:bg-[#111827] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-48 right-24 w-48 h-48 bg-white opacity-10 rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-10 rounded-full"></div>
      </div>

      {/* CTA content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-lg md:text-xl text-white mb-8">
            Join thousands of satisfied clients who have transformed their financial health with SoftSell's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#1d4ed8] dark:text-[#1d4ed8] font-medium py-3 px-8 rounded-md hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
            <button className="border border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white hover:text-[#1d4ed8] transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
