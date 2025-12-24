import React, { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUsers, faGraduationCap, faBrain } from "@fortawesome/free-solid-svg-icons";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Award,
  Code2,
  Database,
  Server,
  Palette,
  ChevronRight,
  Sparkles,
  Target,
  FlaskRound,
  Snowflake,
  Code,
  Terminal,
  Zap,
  Rocket,
  Brain,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ProjectSection from "../components/ProjetSection";
import ProjectsSection from "../components/ProjetSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";

// Composant Aurora Background simplifié
const AuroraBackground = ({ children, className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient aurora effect - éloigné du contenu */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: ["-15%", "15%", "-15%"],
            y: ["15%", "-15%", "15%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-60 left-1/3 w-[650px] h-[650px] bg-gradient-to-tl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"
        />
      </div>
      
      {children}
    </div>
  );
};

// Composant Text Generate Effect (MODIFIÉ - sans le nom)
const TextGenerateEffect = ({ text, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span className={`relative ${className}`}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1 inline-block w-1"
      >
        |
      </motion.span>
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
    </span>
  );
};

// Composant Sticky Scroll simplifié
const StickyScroll = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <div className="sticky top-24 z-10 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {content.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all relative overflow-hidden ${
                activeIndex === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {/* Effet de brillance sur les boutons actifs */}
              {activeIndex === index && (
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              )}
              {item.title}
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {content[activeIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Composant Floating Particles
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Composant Cercles Colorés Animés Autour de l'Image
const AnimatedImageCircles = () => {
  const circles = [
    { color: "from-blue-500 to-cyan-500", size: "w-64 h-64", delay: 0, duration: 8 },
    { color: "from-purple-500 to-pink-500", size: "w-72 h-72", delay: 0.5, duration: 10 },
    { color: "from-green-500 to-emerald-500", size: "w-80 h-80", delay: 1, duration: 12 },
    { color: "from-orange-500 to-red-500", size: "w-88 h-88", delay: 1.5, duration: 14 },
    { color: "from-indigo-500 to-blue-500", size: "w-96 h-96", delay: 2, duration: 16 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute ${circle.size} rounded-full`}
          initial={{ 
            scale: 0,
            opacity: 0 
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: 360
          }}
          transition={{
            scale: {
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: circle.duration * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: circle.delay
            }
          }}
        >
          {/* Cercle extérieur avec gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${circle.color} rounded-full blur-sm opacity-20`} />
          
          {/* Cercle intérieur avec bordure animée */}
          <motion.div
            animate={{
              borderWidth: ["1px", "2px", "1px"],
            }}
            transition={{
              duration: circle.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: circle.delay
            }}
            className={`absolute inset-4 rounded-full border-2 border-transparent bg-gradient-to-r ${circle.color} bg-clip-border`}
            style={{
              background: `linear-gradient(${index * 45}deg, transparent 50%, rgba(255,255,255,0.1) 100%)`,
            }}
          >
            {/* Points autour du cercle */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white"
                style={{
                  left: `${50 + 42 * Math.cos((i * Math.PI) / 6)}%`,
                  top: `${50 + 42 * Math.sin((i * Math.PI) / 6)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (i * 0.2) + circle.delay,
                }}
              />
            ))}
          </motion.div>

          {/* Lignes connectées */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + 40 * Math.cos((i * Math.PI) / 3)}%`}
                y2={`${50 + 40 * Math.sin((i * Math.PI) / 3)}%`}
                stroke={`url(#gradient-${index})`}
                strokeWidth="1"
                strokeDasharray="4,4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 + circle.delay }}
              />
            ))}
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// Composant CTAButton avec animation d'attention
const CTAButton = ({ children, href, variant = "primary", icon: Icon, pulse = false }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        group relative px-8 py-4 rounded-xl font-bold overflow-hidden
        ${variant === "primary" 
          ? "text-white" 
          : "border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200"
        }
        transition-all duration-300
      `}
    >
      {/* Background avec animation */}
      {variant === "primary" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 animate-gradient-x" />
          {/* Effet de vague animé */}
          <motion.div
            animate={{
              y: ["100%", "-100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
          />
          {/* Bordure brillante */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      )}

      {/* Effet de pulsation pour attirer l'attention */}
      {pulse && (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl blur-md"
        />
      )}

      {/* Icône flottante */}
      {Icon && (
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-2 -right-2 w-6 h-6 text-blue-400 opacity-70"
        >
          <Icon className="w-full h-full" />
        </motion.div>
      )}

      {/* Contenu du bouton */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        {Icon && <Icon className="w-5 h-5" />}
        <span>{children}</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
      </span>
    </motion.a>
  );
};

const Home = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.98]), {
    stiffness: 100,
    damping: 30
  });

  // Technologies modifiées avec MERN et Python/Django
  const technologies = [
    { 
      name: "MERN Stack", 
      level: 95, 
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      icon: <Code className="w-5 h-5" />,
      description: "MongoDB, Express, React, Node.js"
    },
    
    { 
      name: "MongoDB & SQL", 
      level: 85, 
      color: "bg-gradient-to-r from-emerald-500 to-green-500",
      icon: <Database className="w-5 h-5" />,
      description: "Base de données NoSQL et SQL"
    },
    { 
      name: "React", 
      level: 95, 
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      icon: <Code2 className="w-5 h-5" />,
      description: "UI/UX Avancé & Frontend"
    },
    { 
      name: "Express - Node.js", 
      level: 90, 
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      icon: <Server className="w-5 h-5" />,
      description: "Backend Performant"
    },
    { 
      name: "Python - Django", 
      level: 88, 
      color: "bg-gradient-to-r from-blue-600 to-indigo-500",
      icon: <Snowflake className="w-5 h-5" />,
      description: "Django REST Framework"
    },
  ];

  const techContent = technologies.map(tech => ({
    title: tech.name,
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-sm">
              {tech.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {tech.name}
              </h4>
              <p className="text-sm my-2 text-gray-600 dark:text-gray-400">
                {tech.description}
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
            {tech.level}%
          </div>
        </div>
        
        <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${tech.level}%` }}
            transition={{ duration: 2, type: "spring" }}
            className={`h-full rounded-full relative ${tech.color}`}
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    ),
  }));


  return (
  <>
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-900"
    >
      
      <AuroraBackground>
        <FloatingParticles />
      </AuroraBackground>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-20 mx-auto px-4 py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Colonne gauche */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                    <span className="mr-4 text-gray-900 dark:text-white">
                      AHMED
                    </span>
                    <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                      KIPERTINO
                    </span>
                  </h1>
                </motion.div>

                <div className="h-20 lg:h-24 flex items-center">
                  <div className="relative">
                    <TextGenerateEffect 
                      text="Développeur FullStack (MERN)"
                      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-300 dark:via-gray-200 dark:to-white bg-clip-text text-transparent pr-2"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -right-8 top-1/2 transform -translate-y-1/2"
                    >
                      <Sparkles className="w-6 h-6 text-blue-500" />
                    </motion.div>
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl"
                >
                  Architecte de solutions digitales innovantes, je transforme des idées complexes 
                  en expériences utilisateur exceptionnelles grâce aux technologies modernes 
                  comme le MERN Stack et Python/Django.
                </motion.p>
              </div>

              {/* Boutons CTA avec animations d'attention */}
              <div className="flex flex-col sm:flex-row gap-6">
                <CTAButton 
                  href="#projects" 
                  variant="primary" 
                  icon={Target}
                  pulse={true} // Effet pulsant pour attirer l'attention
                >
                  Explorer mon univers
                </CTAButton>
                
                <CTAButton 
                  href="#contact" 
                  icon={Mail}
                >
                  Discutons
                </CTAButton>
              </div>

              {/* Indicateur d'action avec animation */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Conakry, Guinée</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span>+224 622 40 26 38</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-2 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>fkipertino@gmail.com</span>
                </motion.div>
              </div>
            </div>

            {/* Colonne droite - Image avec cercles animés */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative mx-auto w-full max-w-md"
              >
                {/* Container pour les cercles animés */}
                <div className="relative flex items-center justify-center">
                  {/* Cercles colorés animés autour de l'image */}
                  <AnimatedImageCircles />
                  
                  {/* Container de l'image réduite */}
                  <div className="relative z-20">
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{
                        y: { duration: 3, repeat: Infinity }
                      }}
                      className="relative w-56 h-56 md:w-64 md:h-64 mx-auto"
                    >
                      {/* Bordure lumineuse autour de l'image */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(59, 130, 246, 0.3)',
                            '0 0 40px rgba(139, 92, 246, 0.5)',
                            '0 0 30px rgba(6, 182, 212, 0.4)',
                            '0 0 20px rgba(59, 130, 246, 0.3)',
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity
                        }}
                        className="absolute -ins-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-sm"
                      />
                      
                      {/* Image réduite et claire */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                        <img 
                          src="./photo_profile.png" 
                          alt="Ahmed Kipertino"
                          className="w-full h-full object-cover"
                          style={{ filter: 'none' }}
                        />
                      </div>

                      {/* Badges avec nouvelles icônes */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl cursor-pointer z-30"
                      >
                        <Award className="w-5 h-5 text-white" />
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        className="absolute bottom-2 left-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl cursor-pointer z-30"
                      >
                        <Brain className="w-5 h-5 text-white" />
                      </motion.div>

                      {/* Points lumineux tournants autour de l'image */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4"
                      >
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                            style={{
                              left: `${50 + 50 * Math.cos((i * Math.PI) / 4)}%`,
                              top: `${50 + 50 * Math.sin((i * Math.PI) / 4)}%`,
                              transform: 'translate(-50%, -50%)',
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Stack Technique */}
                <div className="mt-12">
                  <StickyScroll content={techContent} />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>


      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
    <AboutSection/>
    <EducationSection/>
    <ExperienceSection/>
    <ProjectsSection />
    <ContactSection />
    
  </>
)
};

export default Home;