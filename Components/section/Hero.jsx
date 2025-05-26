import React, { useState, useEffect } from 'react';
import { 
  Clock, Users, Star, MessageCircle, ArrowRight, Briefcase, Award, Shield, 
  Gavel, Scale, BookOpen, FileText, Check, BarChart2, Globe, Zap, Bookmark 
} from 'lucide-react';

export default function EnhancedLegalTalentPlatform() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    { icon: <Zap className="w-5 h-5 text-[#a88f67]" />, text: "Instant connections to vetted attorneys" },
    { icon: <Globe className="w-5 h-5 text-[#a88f67]" />, text: "Global network of legal specialists" },
    { icon: <BarChart2 className="w-5 h-5 text-[#a88f67]" />, text: "Performance analytics and ratings" },
    { icon: <Bookmark className="w-5 h-5 text-[#a88f67]" />, text: "Save your favorite legal experts" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 py-16 flex-grow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Content */}
          <div className="max-w-lg">
            <div className={`transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-10 bg-[#a88f67]"></div>
                <span className="text-[#a88f67] font-medium tracking-wider">LEGAL TALENT PLATFORM</span>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Connect with <span className="text-[#a88f67] relative inline-block">
                  Elite Legal
                  <span className="absolute bottom-1 left-0 w-full h-1.5 bg-[#a88f67]/20"></span>
                </span><br />
                Talent in Minutes
              </h1>
              
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Legal departments of all sizes — from startups to Fortune 500s — use Lexicon to instantly 
                connect to elite world-class legal talent and scale their outside counsel work.
              </p>
              
              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="bg-[#a88f67]/10 p-1.5 rounded-full">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  className={`relative bg-[#a88f67] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${hoveredButton === 'talent' ? 'shadow-lg' : 'shadow-md'}`}
                  onMouseEnter={() => setHoveredButton('talent')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <span className="relative z-10">Browse Talent Network</span>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'talent' ? 'transform translate-x-1' : ''}`} />
                  <span className="absolute inset-0 bg-gradient-to-r from-[#a88f67] to-[#c0aa84] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                
                <button 
                  className={`relative bg-white text-gray-800 px-8 py-3.5 rounded-lg font-medium border-2 border-gray-200 hover:border-[#a88f67] transition-all duration-300 ${hoveredButton === 'join' ? 'shadow-md border-[#a88f67]' : ''}`}
                  onMouseEnter={() => setHoveredButton('join')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <span className="relative z-10">Join as Legal Expert</span>
                  <span className="absolute inset-0 bg-[#a88f67]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className={`mt-8 flex flex-wrap items-center gap-6 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">500+ Active Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.9/5 (1.2k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Legal Elements */}
          <div className="relative h-[500px]">
            {/* Decorative Law Elements */}
            <div className={`absolute left-0 top-12 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Scale className="w-16 h-16 text-[#a88f67]/20" />
            </div>
            
            <div className={`absolute right-0 bottom-0 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Gavel className="w-20 h-20 text-[#a88f67]/20 transform rotate-45" />
            </div>
            
            {/* Main Profile Card */}
            <div 
              className={`absolute right-4 top-0 bg-white rounded-xl shadow-lg overflow-hidden w-64 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Profile" 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="absolute bottom-2 right-2 bg-white/90 rounded-full p-2 shadow-sm">
                  <FileText className="w-5 h-5 text-[#a88f67]" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">Justin Forge</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm ml-1">4.9</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#a88f67]" />
                  <p className="text-sm text-gray-600">Corporate Law</p>
                </div>
                <div className="mt-3 flex gap-1">
                  <span className="text-xs px-2 py-1 bg-[#a88f67]/10 text-[#a88f67] rounded">M&A</span>
                  <span className="text-xs px-2 py-1 bg-[#a88f67]/10 text-[#a88f67] rounded">Compliance</span>
                </div>
              </div>
            </div>
            
            {/* Connection Line with Law Icons */}
            <div className="absolute right-32 top-24">
              <svg width="120" height="100" className="transform rotate-45">
                <path d="M0,0 C50,20 70,60 120,100" stroke="#a88f67" strokeWidth="1.5" strokeDasharray="5,5" fill="none">
                  <animate 
                    attributeName="stroke-dashoffset" 
                    from="12" 
                    to="0" 
                    dur="4s" 
                    repeatCount="indefinite" 
                  />
                </path>
                <foreignObject x="40" y="30" width="24" height="24">
                  <BookOpen className="w-6 h-6 text-[#a88f67]" />
                </foreignObject>
                <foreignObject x="80" y="70" width="24" height="24">
                  <Scale className="w-6 h-6 text-[#a88f67]" />
                </foreignObject>
              </svg>
            </div>
            
            {/* Contact Flag with Document Icon */}
            <div 
              className={`absolute right-52 top-12 bg-white rounded-lg shadow-md p-3 w-56 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-[#a88f67] mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Contact This Attorney</p>
                  <div className="flex gap-2">
                    <button className="bg-[#a88f67] text-white text-xs px-3 py-1 rounded hover:bg-[#9a805a] transition-colors duration-300 flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" /> Chat
                    </button>
                    <button className="bg-gray-700 text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-300 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Schedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Small Profile Card with Badge */}
            <div 
              className={`absolute left-6 bottom-16 bg-white rounded-lg shadow-lg p-3 w-48 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex gap-3 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#a88f67]/10"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Sarah Frame</h4>
                  <p className="text-xs text-gray-500">Privacy Law</p>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs text-[#a88f67] flex items-center">
                  <Award className="w-3 h-3 mr-1" /> Top Rated
                </span>
                <span className="text-xs bg-[#a88f67]/10 text-[#a88f67] px-2 py-0.5 rounded">GDPR</span>
              </div>
            </div>
            
            {/* Middle Profile Card with Case Files */}
            <div 
              className={`absolute right-28 bottom-8 bg-white rounded-lg shadow-lg overflow-hidden w-56 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="flex gap-3 p-3 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#a88f67]/10"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Anna Martinez</h4>
                  <p className="text-xs text-gray-500">IP Expert</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#a88f67]" />
                  <span className="text-xs text-gray-800 font-medium">82 Cases</span>
                </div>
                <button className="bg-[#a88f67] text-white text-xs px-3 py-1 rounded hover:bg-[#9a805a] transition-colors duration-300">
                  Connect
                </button>
              </div>
            </div>
            
            {/* Animated Connecting Network */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              {/* Main connection lines */}
              <path 
                d="M100,160 C150,220 220,240 280,130" 
                stroke="#a88f67" 
                strokeWidth="1.5" 
                strokeDasharray="5,5" 
                fill="none"
                opacity={isLoaded ? "0.3" : "0"}
                className="transition-opacity duration-1000"
                style={{ transitionDelay: '1000ms' }}
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="12" 
                  to="0" 
                  dur="5s" 
                  repeatCount="indefinite" 
                />
              </path>
              
              {/* Secondary connection lines */}
              <path 
                d="M80,180 C180,240 220,180 260,220" 
                stroke="#a88f67" 
                strokeWidth="1.5" 
                strokeDasharray="5,5" 
                fill="none"
                opacity={isLoaded ? "0.3" : "0"}
                className="transition-opacity duration-1000"
                style={{ transitionDelay: '1200ms' }}
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="12" 
                  to="0" 
                  dur="6s" 
                  repeatCount="indefinite" 
                />
              </path>
              
              {/* Law icon nodes */}
              <foreignObject x="120" y="80" width="24" height="24" opacity={isLoaded ? "1" : "0"} className="transition-opacity duration-500" style={{ transitionDelay: '1400ms' }}>
                <Gavel className="w-6 h-6 text-[#a88f67]/50" />
              </foreignObject>
              
              <foreignObject x="200" y="150" width="24" height="24" opacity={isLoaded ? "1" : "0"} className="transition-opacity duration-500" style={{ transitionDelay: '1600ms' }}>
                <Scale className="w-6 h-6 text-[#a88f67]/50" />
              </foreignObject>
              
              <foreignObject x="180" y="220" width="24" height="24" opacity={isLoaded ? "1" : "0"} className="transition-opacity duration-500" style={{ transitionDelay: '1800ms' }}>
                <BookOpen className="w-6 h-6 text-[#a88f67]/50" />
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}