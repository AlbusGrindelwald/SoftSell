import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-[#111827] dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SoftSell</h3>
            <p className="mb-4">
              Smart financial solutions for a better future. We help you make informed decisions with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.497v-9.294H9.692v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>

              {/* X (Twitter replacement) */}
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 17 17" fill="currentColor" aria-hidden="true">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 15.5l6-3.5-6-3.5v7z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.25 7.5C2.25 5.019 4.019 3.25 6.5 3.25h11c2.481 0 4.25 1.769 4.25 4.25v9c0 2.481-1.769 4.25-4.25 4.25h-11C4.019 20.75 2.25 18.981 2.25 16.5v-9zM6.5 4.75C5.007 4.75 3.75 6.007 3.75 7.5v9c0 1.493 1.257 2.75 2.75 2.75h11c1.493 0 2.75-1.257 2.75-2.75v-9c0-1.493-1.257-2.75-2.75-2.75h-11z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Investment Planning</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Savings Management</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Portfolio Analysis</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Retirement Planning</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-black dark:hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-black dark:hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Financial Guides</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Market Updates</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Investment Calculators</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} SoftSell Financial. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-black dark:hover:text-gray-300 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
