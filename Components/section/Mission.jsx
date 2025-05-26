import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Video, Mic, Phone, Lock, Camera, Smile, Zap } from "lucide-react";

const MeetingHero = () => {
  const [meetingLink, setMeetingLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [positions, setPositions] = useState([]);

  const people = [
    { 
      id: 1,
      img: "https://randomuser.me/api/portraits/men/75.jpg", 
      emoji: <Mic size={16} className="text-indigo-600" />,
      name: "Alex",
      speaking: true
    },
    { 
      id: 2,
      img: "https://randomuser.me/api/portraits/men/32.jpg", 
      emoji: <Smile size={16} className="text-yellow-500" />,
      name: "James",
      reaction: "LOL",
      laughing: true
    },
    { 
      id: 3,
      img: "https://randomuser.me/api/portraits/women/81.jpg", 
      emoji: <Phone size={16} className="text-green-500" />,
      name: "Sarah",
      calling: true
    },
    { 
      id: 4,
      img: "https://randomuser.me/api/portraits/women/45.jpg", 
      emoji: <Lock size={16} className="text-gray-500" />,
      name: "Emma",
      muted: true
    },
    { 
      id: 5,
      img: "https://randomuser.me/api/portraits/women/11.jpg", 
      emoji: <Camera size={16} className="text-blue-500" />,
      name: "Olivia",
      sharing: true
    },
    { 
      id: 6,
      img: "https://randomuser.me/api/portraits/men/78.jpg", 
      emoji: "😮",
      name: "Michael",
      reaction: "WOW",
      surprised: true
    },
    { 
      id: 7,
      img: "https://randomuser.me/api/portraits/men/33.jpg", 
      emoji: <Zap size={16} className="text-amber-500" />,
      name: "David",
      active: true
    },
    { 
      id: 8,
      img: "https://randomuser.me/api/portraits/men/45.jpg", 
      emoji: "🙊",
      name: "Daniel",
      reaction: "OMG"
    },
  ];

  // Calculate connections between participants
  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 7 },
    { from: 6, to: 8 },
    { from: 7, to: 1 },
    { from: 8, to: 2 },
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const newPositions = people.map(person => {
        const element = document.getElementById(`person-${person.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          return {
            id: person.id,
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2
          };
        }
        return { id: person.id, x: 0, y: 0 };
      });
      setPositions(newPositions);
    }
  }, [dimensions]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(meetingLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Function to draw connection lines
  const drawConnections = () => {
    return connections.map((connection, index) => {
      const fromPerson = positions.find(p => p.id === connection.from);
      const toPerson = positions.find(p => p.id === connection.to);

      if (!fromPerson || !toPerson) return null;

      return (
        <svg
          key={index}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <line
            x1={fromPerson.x}
            y1={fromPerson.y}
            x2={toPerson.x}
            y2={toPerson.y}
            stroke="#6366f1"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.5"
          />
        </svg>
      );
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Left Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex-1 text-center md:text-left mb-16 md:mb-0 max-w-lg"
      >
        {/* ... (keep existing left section content unchanged) ... */}
      </motion.div>

      {/* Right Section with Connections */}
      <motion.div 
        ref={containerRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex-1 grid grid-cols-3 gap-4 md:gap-6 relative max-w-xl"
        style={{ minHeight: '400px' }}
      >
        {/* Draw connection lines */}
        {drawConnections()}
        
        {people.map((person) => (
          <motion.div 
            key={person.id}
            id={`person-${person.id}`}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg mx-auto border-2 border-transparent hover:border-indigo-300 transition-all z-10"
          >
            <img
              src={person.img}
              alt={`${person.name}'s profile`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            
            {/* Status indicator */}
            <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              {person.name}
            </div>
            
            {/* Reaction/Status */}
            {person.reaction ? (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-3 right-2 bg-white text-black text-xs px-3 py-1 rounded-full shadow-md flex items-center"
              >
                <span className="mr-1">{person.reaction}</span>
                {person.emoji}
              </motion.div>
            ) : (
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                {person.emoji}
              </div>
            )}
            
            {/* Active speaking indicator */}
            {person.speaking && (
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                <Mic className="w-3 h-3 text-white" />
              </div>
            )}
          </motion.div>
        ))}
        
        {/* Decorative elements */}
        <div className="absolute -z-10 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-200 opacity-30 blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-200 opacity-20 blur-xl"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default MeetingHero;