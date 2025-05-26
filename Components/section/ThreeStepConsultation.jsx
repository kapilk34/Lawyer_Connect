import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiUserCheck, FiMessageSquare } from "react-icons/fi";

const ThreeStepConsultation = () => {
  const steps = [
    {
      id: 1,
      title: "Book Consultation",
      description: "Purchase service with secure payments via Wallet, UPI, Credit/Debit Cards, or Net Banking.",
      icon: <FiCalendar className="w-8 h-8" />,
      features: ["Secure payment gateway", "Instant confirmation", "Flexible scheduling"]
    },
    {
      id: 2,
      title: "Expert Assignment",
      description: "We'll match you with a vetted consultant specialized in your legal needs.",
      icon: <FiUserCheck className="w-8 h-8" />,
      features: ["Verified professionals", "Specialized matching", "Quality guaranteed"]
    },
    {
      id: 3,
      title: "Instant Connection",
      description: "Get direct access to your expert's contact details for immediate consultation.",
      icon: <FiMessageSquare className="w-8 h-8" />,
      features: ["Direct communication", "Multiple channels", "Priority support"]
    }
  ];

  // Color palette
  const accentColor = "#a88f67";
  const accentLight = "#f5f1eb";
  const accentDark = "#8a7555";
  const gradient = `linear-gradient(135deg, ${accentColor} 0%, ${accentDark} 100%)`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f8f6] to-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-32 h-32 rounded-full opacity-10" 
             style={{ background: accentColor, filter: "blur(60px)" }}></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full opacity-10" 
             style={{ background: accentColor, filter: "blur(80px)" }}></div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          {/* Header section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full mb-4 text-sm font-semibold tracking-wide uppercase"
                  style={{ background: accentLight, color: accentDark }}>
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif leading-tight">
              Premium Consultation in <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="relative z-10">Three Effortless Steps</span>
                <span className="absolute bottom-1 left-0 w-full h-3 opacity-30" 
                      style={{ background: accentLight }}></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience seamless access to top-tier legal experts with our streamlined process designed for your convenience
            </p>
          </motion.div>
          
          {/* Steps divider */}
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 mx-auto mb-16 rounded-full"
            style={{ background: gradient }}
          />
          
          {/* Steps grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20 relative">
            {/* Decorative connecting line */}
            <div 
              className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1.5 mx-auto"
              style={{ background: `linear-gradient(to right, transparent, ${accentColor}, ${accentDark}, transparent)` }}
            ></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                variants={itemVariants}
                className="flex flex-col items-center relative z-10"
              >
                <div className="relative mb-8 w-full">
                  {/* Card background */}
                  <div className="absolute inset-0 bg-white rounded-xl shadow-md transition-all duration-300"></div>
                  
                  {/* Card content */}
                  <div className="relative p-8 h-full">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div 
                        className="absolute -top-2 -left-2 w-16 h-16 rounded-xl opacity-20"
                        style={{ background: accentColor }}
                      ></div>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center relative transition-all duration-300"
                        style={{ 
                          background: gradient,
                        }}
                      >
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Step number */}
                    <div 
                      className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-sm"
                      style={{ 
                        background: accentDark,
                      }}
                    >
                      {step.id}
                    </div>
                    
                    {/* Content */}
                    <h3 
                      className="text-2xl font-bold mb-4 text-gray-800"
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="space-y-2 mt-4">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke={accentColor} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div 
                    className="md:hidden mt-4 w-16 h-1.5 mx-auto rounded-full"
                    style={{ background: gradient }}
                  ></div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* CTA button */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 8px 30px -8px ${accentColor}`
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-full font-bold text-lg tracking-wide transition-all duration-300 relative overflow-hidden group"
              style={{
                color: "white",
                boxShadow: `0 6px 20px -8px ${accentColor}`
              }}
            >
              <span className="absolute inset-0" style={{ background: gradient }}></span>
              <span className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center justify-center">
                Begin Your Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>
            
            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <span>500+ Satisfied Clients</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 (200+ Reviews)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeStepConsultation;