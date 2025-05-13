import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-[#111827] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our services? Our team is here to help. Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-card">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-gray-700 p-2 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary-600 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-700 dark:text-gray-300">(555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Mon-Fri: 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-card">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-gray-700 p-2 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-700 dark:text-gray-300">contact@softsell.com</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:shadow-card">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-gray-700 p-2 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Office</h3>
                    <p className="text-gray-700 dark:text-gray-300">123 Finance Street</p>
                    <p className="text-gray-700 dark:text-gray-300">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-card">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">License Type</label>
                  <select
                    id="licenseType"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Select your license</option>
                    <option value="trial">Trial</option>
                    <option value="single-user">Single User</option>
                    <option value="multi-user">Multi User</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-900 
             dark:bg-white dark:text-[#111827] 
             dark:hover:bg-gray-100 font-medium py-2 px-6 
             rounded-md transition-colors"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
