import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaFileContract,
  FaHandshake,
  FaHome,
  FaGavel,
} from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Legal Consultations",
      description:
        "Get expert advice from our network of specialized attorneys. We offer comprehensive case evaluations and strategic legal planning tailored to your unique situation.",
      icon: <FaBalanceScale className="text-3xl" />,
      features: [
        "30/60-minute consultations",
        "Case strength analysis",
        "Legal strategy development",
        "Multiple attorney options",
      ],
    },
    {
      title: "Contract Services",
      description:
        "Professionally drafted legal documents with precise language to protect your interests. Our attorneys ensure all contracts meet legal requirements.",
      icon: <FaFileContract className="text-3xl" />,
      features: [
        "Business agreements",
        "Real estate contracts",
        "Employment documents",
        "Custom drafting services",
      ],
    },
    {
      title: "Dispute Resolution",
      description:
        "Effective mediation and arbitration services to resolve conflicts without costly litigation. Our approach saves time and preserves relationships.",
      icon: <FaHandshake className="text-3xl" />,
      features: [
        "Mediation sessions",
        "Arbitration services",
        "Conflict negotiation",
        "Settlement agreements",
      ],
    },
    {
      title: "Real Estate Law",
      description:
        "Complete legal support for all property transactions. We handle everything from title searches to closing documentation.",
      icon: <FaHome className="text-3xl" />,
      features: [
        "Property purchases/sales",
        "Lease agreements",
        "Title disputes",
        "Zoning issues",
      ],
    },
    {
      title: "Family Law",
      description:
        "Compassionate legal guidance for sensitive family matters. We prioritize your family's wellbeing while protecting your legal rights.",
      icon: <GiFamilyHouse className="text-3xl" />,
      features: [
        "Divorce proceedings",
        "Child custody",
        "Adoption services",
        "Prenuptial agreements",
      ],
    },
    {
      title: "Criminal Defense",
      description:
        "Aggressive representation to protect your rights in criminal cases. We build strong defenses for all levels of charges.",
      icon: <FaGavel className="text-3xl" />,
      features: [
        "Misdemeanor defense",
        "Felony representation",
        "DUI cases",
        "Appeal services",
      ],
    },
  ];

  return (
    <section className="relative bg-gray-50 text-gray-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#a88f67] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#a88f67] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a88f67] to-[#c2aa80]">
              Legal Services
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a88f67] to-[#c2aa80] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized legal solutions designed to protect your rights and
            deliver justice
          </p>
        </motion.div>

        {/* Tabbed Interface */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#a88f67] to-[#c2aa80] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#a88f67]/30 rounded-xl p-8 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 flex flex-col items-center">
                <div className="bg-[#a88f67]/10 p-6 rounded-full mb-6">
                  {services[activeTab].icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  {services[activeTab].title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#a88f67] to-[#c2aa80] mx-auto mb-6"></div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#a88f67] to-[#c2aa80] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Learn More
                </motion.button>
              </div>

              <div className="lg:w-2/3">
                <p className="text-gray-600 mb-8 text-lg">
                  {services[activeTab].description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {services[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200"
                    >
                      <div className="bg-[#a88f67]/20 p-1 rounded-full mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#a88f67]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">
            Ready to Get Legal Assistance?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#a88f67] to-[#c2aa80] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-[#a88f67] text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a88f67]/10 transition-all"
            >
              Call Now: (555) 123-4567
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;