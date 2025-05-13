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
              {/* Social icons */}
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.497v-9.294H9.692v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482A13.957 13.957 0 011.671 3.149a4.917 4.917 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.062a4.922 4.922 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.928 4.928 0 004.6 3.417A9.867 9.867 0 010 21.539 13.94 13.94 0 007.548 24c9.058 0 14.01-7.514 14.01-14.01 0-.213-.004-.425-.014-.636A10.025 10.025 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.392 3.635 1.358 2.669 2.324 2.407 3.497 2.349 4.774.291 6.056.277 6.467.277 12s.014 5.944.072 7.226c.058 1.276.32 2.449 1.286 3.415.966.966 2.139 1.228 3.415 1.286C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.276-.058 2.449-.32 3.415-1.286.966-.966 1.228-2.139 1.286-3.415.058-1.282.072-1.691.072-7.226s-.014-5.944-.072-7.226c-.058-1.276-.32-2.449-1.286-3.415C19.397.392 18.224.13 16.948.072 15.668.014 15.259 0 12 0z"/>
                  <path d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.162A4 4 0 1116 12a4 4 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
              <a href="#" className="text-[#111827] dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true">
                  <path d="M19.615 3.184C21.403 3.597 22.598 5.071 22.996 6.94 23.478 9.155 23.478 12 23.478 12s0 2.845-.482 5.06c-.398 1.869-1.593 3.343-3.381 3.756-2.317.53-11.615.53-11.615.53s-9.298 0-11.615-.53c-1.788-.413-2.983-1.887-3.381-3.756C.522 14.845.522 12 .522 12s0-2.845.482-5.06C1.402 5.071 2.597 3.597 4.385 3.184 6.702 2.654 16 2.654 16 2.654s9.298 0 11.615.53zM9.75 15.5l6-3.5-6-3.5v7z"/>
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
