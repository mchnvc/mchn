import React from 'react';
import { Brain, Database, Workflow, Shield } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:bg-gray-700 hover:shadow-xl hover:transform hover:-translate-y-2">
      <div className="bg-indigo-900/30 p-4 rounded-lg inline-flex mb-4 text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-800/40 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain size={28} />,
      title: "AI Strategy Consulting",
      description: "We help organizations develop comprehensive AI strategies aligned with business goals, ensuring maximum ROI and competitive advantage."
    },
    {
      icon: <Database size={28} />,
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable insights with our advanced analytics solutions, powered by cutting-edge machine learning algorithms."
    },
    {
      icon: <Workflow size={28} />,
      title: "Process Automation",
      description: "Streamline operations and reduce costs by automating routine tasks using AI-powered workflows and intelligent automation tools."
    },
    {
      icon: <Shield size={28} />,
      title: "AI Security Solutions",
      description: "Protect your organization with AI-enhanced security solutions that detect threats in real-time and adapt to evolving security challenges."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Services</h2>
          <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight">
            AI Solutions That Drive Results
          </p>
          <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-400">
            Our comprehensive suite of AI services designed to transform your business operations and unlock new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;