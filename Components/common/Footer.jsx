// Footer.jsx
import React from 'react';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Our Attorneys', href: '/attorneys' },
    { name: 'Contact', href: '/contact' }
  ];

  const practiceAreas = [
    { name: 'Corporate Law', href: '/corporate-law' },
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'Family Law', href: '/family-law' },
    { name: 'Criminal Defense', href: '/criminal-defense' },
    { name: 'Immigration', href: '/immigration' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center group">
              <span className="text-indigo-400 text-3xl font-serif font-bold group-hover:text-indigo-300 transition-colors">Lawyer</span>
              <span className="text-gray-100 text-3xl font-sans font-semibold ml-1 group-hover:text-white transition-colors">Connect</span>
            </a>
            <p className="text-gray-400 mt-4 mb-6 leading-relaxed text-lg">
              Providing exceptional legal services with integrity and dedication since 1995.
            </p>
            <div className="flex space-x-5">
              <a 
                href="https://linkedin.com" 
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-indigo-400 transition-colors transform hover:-translate-y-0.5 hover:scale-110"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                aria-label="Twitter"
                className="text-gray-500 hover:text-indigo-400 transition-colors transform hover:-translate-y-0.5 hover:scale-110"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                aria-label="Facebook"
                className="text-gray-500 hover:text-indigo-400 transition-colors transform hover:-translate-y-0.5 hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-indigo-400 uppercase text-sm font-bold tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-indigo-300 transition-colors flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="group-hover:translate-x-1.5 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-indigo-400 uppercase text-sm font-bold tracking-wider mb-6">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <a 
                    href={area.href} 
                    className="text-gray-400 hover:text-indigo-300 transition-colors flex items-center group"
                  >
                    <FaArrowRight className="mr-2 text-xs text-indigo-400 opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="group-hover:translate-x-1.5 transition-transform">
                      {area.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-indigo-400 uppercase text-sm font-bold tracking-wider mb-6">
              Contact Us
            </h3>
            <address className="not-italic space-y-5">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 mr-3 flex-shrink-0 text-lg" />
                <p className="text-gray-400 text-lg">
                  123 Legal Avenue, Suite 500<br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-indigo-400 mr-3 text-lg" />
                <a 
                  href="tel:+12125551234" 
                  className="text-gray-400 hover:text-indigo-300 transition-colors text-lg"
                >
                  (212) 555-1234
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-400 mr-3 text-lg" />
                <a 
                  href="mailto:info@lawfirm.com" 
                  className="text-gray-400 hover:text-indigo-300 transition-colors text-lg"
                >
                  info@lawfirm.com
                </a>
              </div>
              <div className="flex items-center">
                <FaClock className="text-indigo-400 mr-3 text-lg" />
                <p className="text-gray-400 text-lg">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-base mb-4 md:mb-0">
            &copy; {currentYear} <span className="font-semibold text-gray-400">Lawyer Connect</span>. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {legalLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-500 hover:text-indigo-400 text-base transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;