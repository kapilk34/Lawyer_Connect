import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Gavel, Library, BookOpen, Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Eleanor Whitmore',
      position: 'Senior Partner',
      specialization: 'Corporate Law',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      color: 'bg-[#a88f67]',
      featured: true,
      bio: 'Harvard Law graduate with 20+ years experience in high-stakes corporate litigation.',
      social: {
        linkedin: '#',
        twitter: '#'
      },
      cases: 240,
      successRate: '98%'
    },
    {
      name: 'Robert Langford',
      position: 'Litigation Director',
      specialization: 'Criminal Defense',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      color: 'bg-[#8a7556]',
      featured: false,
      bio: 'Former District Attorney specializing in white-collar criminal defense.',
      social: {
        linkedin: '#',
        twitter: '#'
      },
      cases: 185,
      successRate: '95%'
    },
    {
      name: 'Claire Vanderbilt',
      position: 'Managing Partner',
      specialization: 'Intellectual Property',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      color: 'bg-[#6d5d45]',
      featured: false,
      bio: 'IP law expert with numerous landmark cases in tech and entertainment.',
      social: {
        linkedin: '#',
        twitter: '#'
      },
      cases: 320,
      successRate: '97%'
    },
  ];

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

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)"
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#f8f5f0] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-[#a88f67]/10">
              <Gavel className="w-5 h-5 text-[#a88f67] mr-2" />
              <span className="text-sm font-semibold tracking-wide uppercase text-[#a88f67]">
                Our Legal Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our <span className="text-[#a88f67]">Distinguished</span> Attorneys
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Seasoned legal professionals with a proven track record of successful outcomes for our clients.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-24 h-1.5 mx-auto my-10 rounded-full bg-[#a88f67]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="relative group"
              >
                {/* Background shape */}
                <div 
                  className={`absolute -inset-2 rounded-xl ${member.color} opacity-20 blur-md group-hover:opacity-30 transition-all duration-300 -z-10`}
                ></div>

                {/* Card */}
                <motion.div 
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 border border-[#a88f67]/10"
                >
                  {/* Profile header */}
                  <div className={`relative h-32 ${member.color}`}>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <img
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                        src={member.img}
                        alt={member.name}
                      />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="pt-16 pb-6 px-6 text-center">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-[#a88f67] font-medium">{member.position}</p>
                      <p className="text-sm text-gray-500 italic">{member.specialization}</p>
                    </div>

                    <p className="text-gray-600 mb-6 text-sm">{member.bio}</p>

                    {/* Legal stats */}
                    <div className="flex justify-between items-center mb-6 px-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center text-[#a88f67] mb-1">
                          <Scale className="w-4 h-4 mr-1" />
                          <span className="text-xs font-medium">Cases</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">{member.cases}+</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center text-[#a88f67] mb-1">
                          <Library className="w-4 h-4 mr-1" />
                          <span className="text-xs font-medium">Success</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">{member.successRate}</span>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center space-x-4 border-t border-[#a88f67]/10 pt-4">
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-[#a88f67] transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-[#a88f67] transition-colors">
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Featured badge */}
                  {member.featured && (
                    <div className="absolute top-4 right-4 bg-[#a88f67] rounded-full p-2 shadow-sm">
                      <BookOpen size={18} className="text-white" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <button className="px-8 py-3 rounded-lg bg-[#a88f67] text-white font-medium hover:bg-[#8a7556] transition-colors shadow-md hover:shadow-lg flex items-center mx-auto">
              Meet Our Full Legal Team
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;