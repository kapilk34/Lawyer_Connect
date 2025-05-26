import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Corporate Branding",
      description: "Complete visual identity for Horizon Technologies",
      category: "Branding",
      imageUrl: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?cs=srgb&dl=pexels-andre-furtado-43594-1264210.jpg&fm=jpg",
      size: "large",
      link: "#",
      details: "Created a comprehensive brand identity including logo, color palette, typography, and brand guidelines for Horizon Technologies."
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Mobile app interface for financial services",
      category: "UI/UX",
      imageUrl: "https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_640.jpg",
      size: "medium",
      link: "#",
      details: "Designed an intuitive mobile banking interface with focus on accessibility and user experience."
    },
    {
      id: 3,
      title: "Product Photography",
      description: "Premium product showcase for luxury items",
      category: "Photography",
      imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
      size: "small",
      link: "#",
      details: "High-end product photography campaign showcasing luxury watches with dramatic lighting."
    },
    {
      id: 4,
      title: "Logo Design",
      description: "Modern aesthetic for tech startups",
      category: "Branding",
      imageUrl: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      size: "xsmall",
      link: "#",
      details: "Minimalist logo design for a tech startup focusing on clean lines and modern typography."
    },
    {
      id: 5,
      title: "Web Development",
      description: "E-commerce platform with custom features",
      category: "Web Design",
      imageUrl: "https://iso.500px.com/wp-content/uploads/2019/07/stock-photo-maderas-312058103.jpg",
      size: "medium",
      link: "#",
      details: "Built a performant e-commerce platform with custom checkout flow and inventory management."
    },
    {
      id: 6,
      title: "Print Design",
      description: "Magazine layout and typography",
      category: "Branding",
      imageUrl: "https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265_1280.jpg",
      size: "small",
      link: "#",
      details: "Editorial design for a quarterly magazine with innovative layout and typographic treatments."
    },
    {
      id: 7,
      title: "Custom Illustration",
      description: "Digital artwork for marketing campaigns",
      category: "UI/UX",
      imageUrl: "https://images.unsplash.com/photo-1554080353-a576cf803bda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D",
      size: "xsmall",
      link: "#",
      details: "Series of custom illustrations for a marketing campaign with consistent visual style."
    },
    // {
    //   id: 8,
    //   title: "Landing Page Design",
    //   description: "High-conversion landing page for SaaS products",
    //   category: "Web Design",
    //   imageUrl: "https://ichef.bbci.co.uk/ace/standard/999/cpsprodpb/15951/production/_117310488_16.jpg",
    //   size: "medium",
    //   link: "#",
    //   details: "Designed and developed a conversion-optimized landing page that increased signups by 35%."
    // },
  ];

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return "col-span-1 md:col-span-3 row-span-2";
      case 'medium':
        return "col-span-1 md:col-span-3 sm:col-span-2";
      case 'small':
        return "col-span-1 md:col-span-2";
      case 'xsmall':
        return "col-span-1";
      default:
        return "col-span-1";
    }
  };

  const openDetailView = (item) => {
    setActiveItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeDetailView = () => {
    setActiveItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
            Our <span className="text-blue-600">Gallery</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className={`${getSizeClasses(
                  ['large', 'medium', 'small', 'xsmall'][index % 4]
                )} bg-gray-200 rounded-lg animate-pulse h-64`}
              />
            ))}
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`${getSizeClasses(item.size)} overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group relative`}
                >
                  <div className="h-full w-full">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-3">
                          {item.category}
                        </span>
                        <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm mb-4">{item.description}</p>
                        <div className="flex gap-3">
                          <button 
                            onClick={() => openDetailView(item)}
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors flex items-center gap-1 text-sm text-white"
                            aria-label={`View details for ${item.title}`}
                          >
                            <ZoomIn size={16} />
                            <span>Details</span>
                          </button>
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors flex items-center gap-1 text-sm text-white"
                            aria-label={`Open ${item.title} in new tab`}
                          >
                            <ExternalLink size={16} />
                            <span>Visit</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Detail View Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetailView}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeDetailView}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Close details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img 
                    src={activeItem.imageUrl} 
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-4">
                    {activeItem.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activeItem.title}</h3>
                  <p className="text-gray-600 mb-4">{activeItem.description}</p>
                  <div className="prose prose-sm text-gray-700 mb-6">
                    <p>{activeItem.details}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={activeItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Visit Project
                    </a>
                    <button 
                      onClick={closeDetailView}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;