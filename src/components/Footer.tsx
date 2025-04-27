import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">AI-Co</span>
            </div>
            <p className="mt-4 text-base text-gray-400 max-w-md">
              AI-Co is a leading provider of artificial intelligence solutions, 
              helping businesses harness the power of AI to drive innovation, 
              efficiency, and growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#home" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 text-center md:text-left">
            &copy; {currentYear} AI-Co. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <span className="sr-only">{item}</span>
                  <div className="h-6 w-6 capitalize">{item[0]}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;