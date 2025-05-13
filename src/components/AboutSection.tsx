import React from 'react';
import { Users, TrendingUp, ShieldCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gray-50 dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-100 rounded-tl-3xl z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team of financial experts" 
                className="w-full h-auto object-cover rounded-lg shadow-elevated relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-br-3xl z-0"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About SoftSell Financial
            </h2>
            <p className="text-lg text-gray-700 dark:text-white mb-6 leading-relaxed">
              At SoftSell Financial, we combine cutting-edge technology with human expertise to provide smart financial solutions. Our mission is to make financial management accessible, transparent, and effective for everyone.
            </p>
            <p className="text-lg text-gray-700 dark:text-white mb-8 leading-relaxed">
              Founded in 2020, we've helped thousands of clients achieve their financial goals through personalized strategies and innovative tools.
            </p>

            <div className="space-y-4">
              {/* Experience */}
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <Users className="h-5 w-5 text-primary-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    Experienced Team
                  </h3>
                  <p className="text-gray-700 dark:text-white">
                    Our advisors have over 50 years of combined experience in finance.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <TrendingUp className="h-5 w-5 text-primary-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    Proven Results
                  </h3>
                  <p className="text-gray-700 dark:text-white">
                    We've helped clients achieve above-market returns consistently.
                  </p>
                </div>
              </div>

              {/* Security */}
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                  <ShieldCheck className="h-5 w-5 text-primary-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    Secure & Compliant
                  </h3>
                  <p className="text-gray-700 dark:text-white">
                    Your data and investments are protected by industry-leading security.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
