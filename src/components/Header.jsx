import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSun, 
  faMoon, 
  faBars, 
  faTimes,
  faCode,
  faUserGraduate,
  faShieldAlt,
  faUsers,
  faBrain
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Globe, Sparkles } from "lucide-react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", href: "#home" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Expérience", href: "#experience" },
    { name: "Formations", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const expertiseIcons = [
    { icon: <Brain className="w-4 h-4" />, color: "text-purple-500", label: "IA" },
    { icon: <Cpu className="w-4 h-4" />, color: "text-blue-500", label: "FullStack" },
    { icon: <Globe className="w-4 h-4" />, color: "text-green-500", label: "Web" },
    { icon: <Sparkles className="w-4 h-4" />, color: "text-yellow-500", label: "Innovation" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 via-cyan-500/10  dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full px-5 py-2.5 border border-blue-500/20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                    FullStack Junior confirmé
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faBrain} className="text-purple-500 text-xs" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">Sociologie & Tech</span>
                </div>
              </motion.div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.href}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium group text-sm"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md transition-all"
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </motion.button>

              {/* CTA Contact */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Contact</span>
                <FontAwesomeIcon icon={faUsers} className="text-sm" />
              </motion.a>
            </nav>

            {/* Menu Mobile Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md transition-all"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl md:hidden z-50 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium border-b border-gray-100 dark:border-gray-800 last:border-0 flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
                <div className="flex items-center justify-between pt-6">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300"
                  >
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;