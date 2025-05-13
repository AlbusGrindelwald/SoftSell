import React from 'react';
import { Smartphone, Lock, BarChart, Clock, PieChart, Users } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary-600 dark:text-white" />,
    title: 'Mobile Access',
    description: 'Manage your finances on-the-go with our secure and intuitive mobile platform.'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary-600 dark:text-white" />,
    title: 'Bank-Level Security',
    description: 'Rest easy knowing your financial data is protected by industry-leading security protocols.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary-600 dark:text-white" />,
    title: 'Real-Time Analytics',
    description: 'Track your investments and financial health with up-to-the-minute data analysis.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary-600 dark:text-white" />,
    title: '24/7 Support',
    description: 'Our dedicated team is always available to assist you with any questions or concerns.'
  },
  {
    icon: <PieChart className="h-8 w-8 text-primary-600 dark:text-white" />,
    title: 'Custom Dashboards',
    description: 'Personalize your financial overview with custom widgets and tracking metrics.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary-600 dark:text-white" />,
    title: 'Expert Advisors',
    description: 'Connect with certified financial advisors who understand your unique situation.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#111827] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose SoftSell
          </h2>
          <p className="text-lg text-gray-700 dark:text-white">
            Our platform combines powerful technology with personal expertise to deliver an exceptional financial management experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-[#1F2937] p-6 rounded-xl transition-all duration-300 hover:shadow-card group"
            >
              <div className="p-3 bg-white dark:bg-[#111827] inline-block rounded-lg shadow-soft mb-5 transition-all duration-300 group-hover:bg-primary-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-700 dark:text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
