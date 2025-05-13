import React from 'react';
import { Upload, DollarSign, CreditCard, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-10 w-10 text-[#2596be] dark:text-white" />,
    title: 'Upload License',
    description: 'Simply upload your software license details through our secure platform.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-[#2596be] dark:text-white" />,
    title: 'Get Valuation',
    description: 'Our experts analyze your license and provide a fair market valuation within 24 hours.',
  },
  {
    icon: <CreditCard className="h-10 w-10 text-[#2596be] dark:text-white" />,
    title: 'Get Paid',
    description: 'Accept our offer and receive payment through your preferred payment method.',
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-white">
            Turn your unused software licenses into cash with our simple three-step process. Fast, secure, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-white/10 rounded-xl p-6 transition-all hover:shadow-card hover:translate-y-[-5px] duration-300 relative"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 dark:text-white mb-4">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-[#2596be] dark:text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
