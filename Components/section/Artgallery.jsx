import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ArtGallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle image focused

  const artworks = [
    {
      id: 1,
      title: "Rainy Evening",
      artist: "Unknown Artist",
      imageUrl: "https://images.surferseo.art/3d01232c-ca88-4edf-9bce-b47e8a97715c.jpeg", // Replace with actual image URL
      alt: "Couple walking with umbrella in rainy street"
    },
    {
      id: 2,
      title: "Countryside Morning",
      artist: "Unknown Artist",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBV7g7CRzeuGK5lOGzwqiIpzRBbG22lWfug&s", // Replace with actual image URL
      alt: "Scenic countryside with tree and deer"
    },
    {
      id: 3,
      title: "Keeper of the Night",
      artist: "Robbie Aryal",
      imageUrl: "https://www.alphajwc.com/wp-content/uploads/2023/03/apa-itu-co-founder.jpg", // Replace with actual image URL
      alt: "Deer silhouette under full moon"
    },
    {
      id: 4,
      title: "Colorful City Walk",
      artist: "Unknown Artist",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D22AQHItXfxNZWgXQ/feedshare-shrink_800/feedshare-shrink_800/0/1719172941681?e=2147483647&v=beta&t=6v46B49IFD1UEP3F_ODl_e55KDRfhdd93I_mP90Tpcw", // Replace with actual image URL
      alt: "People walking in colorful cityscape"
    },
    {
      id: 5,
      title: "Moonlit Waterfall",
      artist: "Unknown Artist",
      imageUrl: "https://www.alphajwc.com/wp-content/uploads/2023/03/startup-founder_6_11zon-1024x682.jpg", // Replace with actual image URL
      alt: "Waterfall landscape under moonlight"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? artworks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === artworks.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate indices for all visible cards
  const getVisibleIndices = () => {
    const totalCards = artworks.length;
    const indices = [];
    
    // Add two cards before current
    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i + totalCards) % totalCards;
      indices.push(index);
    }
    
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-full bg-gray-100 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title for current artwork */}
        <div className="text-center mb-8">
          <h2 className="text-2xl text-indigo-900 font-medium">
            {artworks[currentIndex].title}
          </h2>
          <p className="text-sm text-gray-500">
            {artworks[currentIndex].artist}
          </p>
        </div>

        {/* Card Gallery */}
        <div className="relative h-[500px] flex items-center justify-center">
          {visibleIndices.map((index, i) => {
            // Calculate position and styles based on position relative to current
            const position = i - 2; // -2, -1, 0, 1, 2
            const isCurrent = position === 0;
            
            let zIndex = 10 - Math.abs(position) * 2;
            let opacity = 1 - Math.abs(position) * 0.2;
            let scale = 1 - Math.abs(position) * 0.15;
            let translateX = position * 180; // Horizontal offset
            
            return (
              <div
                key={artworks[index].id}
                className={`absolute rounded-2xl overflow-hidden transition-all duration-500 shadow-lg ${
                  isCurrent ? 'shadow-xl' : ''
                }`}
                style={{
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  width: '280px',
                  height: isCurrent ? '450px' : '400px',
                }}
              >
                <img
                  src={artworks[index].imageUrl}
                  alt={artworks[index].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 gap-2">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Previous artwork"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-orange-500 shadow-md flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
            aria-label="Next artwork"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtGallerySlider;