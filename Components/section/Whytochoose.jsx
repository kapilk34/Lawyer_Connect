import React from "react";
import { motion } from "framer-motion";
import { 
  FaBalanceScale, 
  FaUserShield, 
  FaClock, 
  FaGavel, 
  FaHandshake, 
  FaLock,
  FaStar,
  FaRegStar,
  FaStarHalfAlt
} from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";

const WhyChoose = () => {
  const features = [
    {
      title: "Verified Legal Experts",
      description: "All attorneys undergo rigorous background checks and maintain active bar membership with proven track records.",
      icon: <FaGavel className="text-3xl" />,
      highlight: "100% Verified",
      stats: "500+ Legal Experts"
    },
    {
      title: "Attorney-Client Privilege",
      description: "Your consultations are protected by law with end-to-end encryption and strict confidentiality protocols.",
      icon: <FaLock className="text-3xl" />,
      highlight: "100% Confidential",
      stats: "Military-Grade Encryption"
    },
    {
      title: "24/7 Emergency Access",
      description: "Immediate connection to qualified lawyers for urgent matters, anytime day or night.",
      icon: <FaClock className="text-3xl" />,
      highlight: "Instant Response",
      stats: "90s Average Connect Time"
    },
    {
      title: "Fair Pricing",
      description: "Transparent fee structures with free initial consultations and flexible payment options.",
      icon: <FaBalanceScale className="text-3xl" />,
      highlight: "No Hidden Fees",
      stats: "Free Initial Consultations"
    },
    {
      title: "Case Assessment",
      description: "Comprehensive case evaluation with strategic planning from multiple legal perspectives.",
      icon: <FaUserShield className="text-3xl" />,
      highlight: "360° Analysis",
      stats: "95% Client Satisfaction"
    },
    {
      title: "Client Advocacy",
      description: "We fight to protect your rights and ensure you receive the justice you deserve.",
      icon: <FaHandshake className="text-3xl" />,
      highlight: "Your Champion",
      stats: "10,000+ Cases Won"
    }
  ];

  const stats = [
    { value: "15,000+", label: "Clients Served" },
    { value: "4.9/5", label: "Client Rating" },
    { value: "24/7", label: "Availability" },
    { value: "100%", label: "Confidential" }
  ];

  const renderStars = () => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= 4 ? 
            <FaStar key={star} className="text-[#a88f67] mx-0.5" /> : 
            <FaStarHalfAlt key={star} className="text-[#a88f67] mx-0.5" />
        ))}
      </div>
    );
  };

  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Justice-themed decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#a88f67] to-[#c2aa82] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-[#a88f67] to-[#c2aa82] rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-[#a88f67] to-[#c2aa82] rounded-full filter blur-3xl"></div>
      </div>

      {/* Scales of Justice SVG Decoration */}
      <div className="absolute top-1/4 left-10 opacity-5 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#a88f67" strokeWidth="0.5">
          <path d="M12 3v15m0 0l-3-3m3 3l3-3m-6-9l-3 3 3 3m12-6l-3 3 3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6 bg-gradient-to-r from-[#a88f67]/10 to-[#c2aa82]/10 px-6 py-2 rounded-full border border-[#a88f67]/20"
          >
            <IoIosRibbon className="text-[#a88f67] mr-2" />
            <span className="text-sm font-medium text-[#a88f67]">Award-Winning Service</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a88f67] to-[#c2aa82]">JusticeConnect</span> Difference
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#a88f67] to-[#c2aa82] mx-auto mb-8"
          />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-[#a88f67] font-medium">centuries of legal expertise</span> meet <span className="text-[#a88f67] font-medium">cutting-edge technology</span> to deliver unparalleled legal representation for the modern world.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-[#121212] to-[#0a0a0a] p-6 rounded-xl border border-[#a88f67]/10 shadow-lg text-center"
            >
              <motion.p 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-[#a88f67] mb-2"
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(168, 143, 103, 0.2), 0 10px 10px -5px rgba(168, 143, 103, 0.1)"
              }}
              className="bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-[#a88f67]/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <div className="relative">
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a88f67]/5 to-[#c2aa82]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {/* Icon with animated border */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="inline-flex items-center justify-center p-4 mb-6 rounded-xl bg-gradient-to-br from-[#a88f67]/10 to-[#c2aa82]/10 border border-[#a88f67]/20"
                >
                  {feature.icon}
                </motion.div>
                
                {/* Highlight badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#a88f67] bg-[#a88f67]/10 rounded-full mb-3">
                  {feature.highlight}
                </span>
                
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                
                {/* Stats indicator */}
                <div className="flex items-center text-sm text-[#a88f67]">
                  <div className="w-2 h-2 bg-[#a88f67] rounded-full mr-2"></div>
                  <span>{feature.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-[#a88f67]/10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Client Avatars */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: item * 0.1
                    }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a88f67] to-[#c2aa82] border-2 border-[#121212] shadow-md"
                  />
                ))}
              </div>
              <p className="text-gray-400 text-center lg:text-left">
                <span className="text-white font-medium">15,000+ satisfied clients</span> nationwide
              </p>
            </div>
            
            {/* Divider */}
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#a88f67] to-transparent lg:h-20 lg:w-px lg:bg-gradient-to-b" />
            
            {/* Rating */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="flex items-center mb-2">
                {renderStars()}
                <span className="ml-2 text-white font-medium">4.9</span>
              </div>
              <p className="text-gray-400 text-center lg:text-right">
                Rated <span className="text-white font-medium">#1 Legal Service</span> for 3 consecutive years
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button className="relative px-8 py-4 bg-gradient-to-r from-[#a88f67] to-[#c2aa82] text-white font-semibold rounded-lg overflow-hidden group">
              <span className="relative z-10">Schedule Your Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c2aa82] to-[#a88f67] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;