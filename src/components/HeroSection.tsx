import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 10 + 3;
      const posX = Math.random() * particlesRef.current!.offsetWidth;
      const posY = Math.random() * particlesRef.current!.offsetHeight;
      const duration = Math.random() * 4 + 2;
      const opacity = Math.random() * 0.5 + 0.3;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.opacity = opacity.toString();
      particle.style.animation = `float ${duration}s linear infinite`;
      particle.className = 'absolute rounded-full bg-indigo-500';
      
      particlesRef.current!.appendChild(particle);
      
      setTimeout(() => {
        if (particlesRef.current && particlesRef.current.contains(particle)) {
          particlesRef.current.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }
    
    // Continue creating particles
    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-indigo-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          <span className="block">Transform Your Business With</span>
          <span className="block text-indigo-400 mt-2">Advanced AI Solutions</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
          Unlock the potential of artificial intelligence to streamline operations, 
          enhance decision-making, and drive innovation across your organization.
        </p>
        
        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce p-2 cursor-pointer" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;