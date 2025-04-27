import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const differentiators = [
    "Team of experienced AI researchers and engineers",
    "Custom solutions tailored to your specific business needs",
    "Proven track record with enterprise clients across industries",
    "Continuous R&D to stay at the forefront of AI innovation"
  ];

  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">About Us</h2>
            <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">
              Pioneering the Future of AI
            </p>
            
            <div className="mt-6 text-gray-300 space-y-6">
              <p>
                Founded in 2020, AI-Co is on a mission to make advanced artificial intelligence accessible and 
                actionable for businesses of all sizes. We believe that AI is not just a technology trend but a 
                fundamental shift in how organizations operate and compete.
              </p>
              <p>
                Our team of world-class AI researchers, data scientists, and industry experts work together to 
                deliver solutions that drive measurable business impact. We're passionate about pushing the 
                boundaries of what's possible with AI while ensuring our solutions are practical, ethical, and 
                aligned with your business objectives.
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-white mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-8 py-16 text-center">
                  <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto flex items-center justify-center mb-6">
                    <span className="text-white text-3xl font-bold">AI</span>
                  </div>
                  <blockquote className="text-xl font-medium text-white">
                    "We're committed to developing AI solutions that are not just technologically advanced, 
                    but also ethical, transparent, and designed with humans at the center."
                  </blockquote>
                  <p className="mt-4 text-indigo-300 font-semibold">— Dr. Sarah Chen, Founder & CEO</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;