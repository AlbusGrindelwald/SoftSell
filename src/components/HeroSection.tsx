import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4 glow-text">
              Smart Financial Solutions for Your Future
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed glow-text">
              We help you make informed financial decisions with our cutting-edge technology and expert advisory services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="glow-button bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-blue-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg">
                Get a Quote
              </button>
              <button className="border border-blue-600 text-blue-600 dark:border-white dark:text-white hover:bg-blue-50 dark:hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-all duration-300">
                Sell My Licenses
              </button>
            </div>

            <div className="mt-10 flex items-center space-x-6">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Secure Platform</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 dark:text-gray-300">Expert Advisors</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-200 dark:bg-accent-700 rounded-full opacity-70"></div>
            <img
              src="https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Financial professionals at work"
              className="w-full h-auto object-cover rounded-xl shadow-elevated relative z-10 glow-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
