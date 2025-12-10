import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSun, 
  faMoon, 
  faBars, 
  faTimes,
  faBrain
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Globe, Sparkles, ChevronRight, Mail } from "lucide-react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const navItems = [
    { name: "Accueil", href: "#home", icon: "🏠" },
    { name: "Projets", href: "#projects", icon: "💼" },
    { name: "Compétences", href: "#skills", icon: "⚡" },
    { name: "Expérience", href: "#experience", icon: "📈" },
    { name: "Formations", href: "#education", icon: "🎓" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ];

  const expertiseIcons = [
    { icon: <Brain className="w-3 h-3 md:w-4 md:h-4" />, color: "text-purple-500", label: "IA" },
    { icon: <Cpu className="w-3 h-3 md:w-4 md:h-4" />, color: "text-blue-500", label: "FullStack" },
    { icon: <Globe className="w-3 h-3 md:w-4 md:h-4" />, color: "text-green-500", label: "Web" },
    { icon: <Sparkles className="w-3 h-3 md:w-4 md:h-4" />, color: "text-yellow-500", label: "Innovation" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Badge */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Badge principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 dark:from-blue-500/15 dark:via-purple-500/15 dark:to-pink-500/15 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-500/20 dark:border-purple-500/20"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                    FullStack Junior
                  </span>
                </div>
                
                {/* Séparateur visible seulement sur tablette et plus */}
                <div className="hidden sm:flex items-center gap-1.5">
                  <div className="w-px h-4 bg-blue-500/30" />
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faBrain} className="text-purple-500 text-xs" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      Socio-Tech
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Badge mobile seulement */}
              <div className="sm:hidden flex items-center gap-1">
                <FontAwesomeIcon icon={faBrain} className="text-purple-500 text-xs" />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Tech
                </span>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium group text-sm lg:text-base"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md transition-all"
                aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-4 h-4" />
              </motion.button>

              {/* CTA Contact */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden lg:inline">Contact</span>
                <span className="lg:hidden">Contacter</span>
              </motion.a>
            </nav>

            {/* Menu Mobile Button avec compteur d'items */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Dark Mode Toggle Mobile */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md transition-all"
                aria-label={isDarkMode ? "Mode clair" : "Mode sombre"}
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-4 h-4" />
              </motion.button>
              
              {/* Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2.5 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md transition-all"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-4 h-4" />
                {/* Notification badge pour items du menu */}
                {!isMenuOpen && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden pt-20"
          >
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Navigation
                  </h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Profile Badge */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/15 dark:to-purple-500/15 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">AK</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Ahmed Kipertino</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Développeur FullStack</p>
                    </div>
                  </div>
                  
                  {/* Expertise Icons */}
                  <div className="flex justify-between">
                    {expertiseIcons.map((expertise, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <div className={`p-1.5 rounded-lg ${expertise.color} bg-opacity-10`}>
                          {expertise.icon}
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {expertise.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Menu Items */}
              <div className="p-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
                
                {/* Contact CTA Mobile */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/15 dark:to-purple-500/15 rounded-xl">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Disponible pour collaborer
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Discutons de votre projet
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="block w-full py-3 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                  >
                    Me contacter
                  </a>
                </div>
                
                {/* Social & Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      fkipertino@gmail.com
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Conakry, Guinée • +224 622 40 26 38
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      {scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden"
        >
          <div className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex items-center gap-1">
              {navItems.slice(0, 3).map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-2"
                >
                  {item.name}
                </a>
              ))}
              <span className="text-gray-400">•</span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="text-xs text-blue-600 dark:text-blue-400 font-medium px-2"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;