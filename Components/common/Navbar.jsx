import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/service" },
    { name: "Lawyers", to: "/lawyers" },
    { name: "Consult", to: "/consult" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FAF9F6]/90 backdrop-blur-md shadow-sm text-[#121212]" : "bg-[#FAF9F6] text-[#121212]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#800000] to-[#a00000] bg-clip-text text-transparent">
              JusticeConnect <span className="text-[#800000]">⚖</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map(({ name, to }) => (
                <li key={name}>
                  <Link 
                    to={to}
                    className="relative group font-medium text-[#121212] hover:text-[#800000] transition-colors"
                  >
                    {name}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#800000] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="ml-8 flex items-center space-x-4">
              <Link to="/login" className="px-4 py-2 rounded-lg font-medium text-[#121212] hover:text-[#800000] transition-colors">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-[#800000] to-[#a00000] text-[#FAF9F6] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#121212] hover:text-[#800000] focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-4 pt-2 pb-8 space-y-4 bg-[#FAF9F6]">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#121212] hover:text-[#800000] hover:bg-[#800000]/10 transition-colors"
            >
              {name}
            </Link>
          ))}
          <div className="pt-4 space-y-4">
            <Link to="/login" onClick={() => setIsOpen(false)} className="w-full block px-4 py-2 rounded-lg font-medium text-[#121212] hover:bg-[#800000]/10 transition-colors">
              Login
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full block px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-[#800000] to-[#a00000] text-[#FAF9F6] shadow-md hover:shadow-lg transition-all duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
