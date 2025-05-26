import React from "react";
import { Quote } from "lucide-react";

const images = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/33.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/women/36.jpg",
  "https://randomuser.me/api/portraits/men/21.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/women/23.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
];

const positions = [
  "top-[20px] left-[10%]",
  "top-[60px] left-[18%]",
  "top-[0px] left-[26%]",
  "top-[50px] left-[34%]",
  "top-[10px] left-[42%]",
  "top-[70px] left-[50%]",
  "top-[0px] left-[58%]",
  "top-[60px] left-[66%]",
  "top-[20px] left-[74%]",
  "top-[80px] left-[82%]",
  "top-[30px] left-[90%]",
  "top-[90px] left-[98%]",
];

const companies = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Facebook",
  "Tesla",
  "Netflix",
  "Adobe",
  "Salesforce",
  "Uber",
  "Airbnb",
  "Spotify"
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-[#f9f7f2] to-white py-36 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a88f67] mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#a88f67] mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full bg-[#a88f67] mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating images with company badges */}
      <div className="absolute w-full h-[300px] top-0 left-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute ${positions[index]} w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-xl group border-2 border-[#a88f67]/20`}
          >
            <img
              src={src}
              alt={`${companies[index]} representative`}
              className="w-full h-full object-cover"
              loading="lazy"
              width={112}
              height={112}
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#a88f67] text-white px-2 py-1 rounded-full shadow-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {companies[index]}
            </div>
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center justify-center bg-[#a88f67]/10 rounded-full px-4 py-1 mb-4">
          <Quote className="w-4 h-4 text-[#a88f67] mr-2" />
          <p className="text-xs uppercase text-[#a88f67] tracking-wider font-medium">
            Testimonials
          </p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Trusted by leaders <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a88f67] to-[#8a7556]">
            from top companies
          </span>
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover why industry leaders rely on our solutions to transform their customer experiences and drive measurable results.
        </p>
        
        <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#a88f67] to-[#8a7556] text-white rounded-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
          <span className="relative z-10 flex items-center">
            Read Success Stories
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#8a7556] to-[#6d5d45] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}