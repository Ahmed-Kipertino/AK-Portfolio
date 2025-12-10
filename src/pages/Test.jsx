import React, { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUsers, faGraduationCap, faBrain } from "@fortawesome/free-solid-svg-icons";
import { 
  ExternalLink, 
  Mail, 
  MapPin, 
  Phone, 
  Cpu, 
  Award,
  Sparkles as SparkleIcon,
  Zap,
  Code2,
  Database,
  Server,
  Palette,
  ChevronRight,
  Star
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// Composant Aurora Background personnalisé
const AuroraBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen w-full bg-white dark:bg-gray-900 overflow-hidden ${className}`}>
      {/* Gradient aurora effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full"
      />
      
      {children}
    </div>
  );
};

// Composant Text Generate Effect
const TextGenerateEffect = ({ words, className = "" }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + words[index]);
        setIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  return (
    <span className={`relative ${className}`}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
    </span>
  );
};

// Composant Background Gradient
const BackgroundGradient = ({ children, className = "", containerClassName = "" }) => {
  return (
    <div className={`relative group ${containerClassName}`}>
      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-30 blur-lg transition duration-1000 group-hover:opacity-70 ${className}`} />
      <div className="relative">
        {children}
      </div>
    </div>
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
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeIndex === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
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
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Composant Floating Particles (simplifié sans tsparticles)
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
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
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Composant GlassCard
const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl blur" />
      <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20">
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.9]), {
    stiffness: 100,
    damping: 30
  });

  const stats = [
    { 
      icon: faCode, 
      value: "10+", 
      label: "Projets", 
      color: "from-blue-500 to-cyan-500",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    { 
      icon: faUsers, 
      value: "500+", 
      label: "Bénéficiaires", 
      color: "from-purple-500 to-pink-500",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
    { 
      icon: faGraduationCap, 
      value: "3", 
      label: "Certifications", 
      color: "from-green-500 to-emerald-500",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    { 
      icon: faBrain, 
      value: "IA", 
      label: "Innovation", 
      color: "from-yellow-500 to-orange-500",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)"
    },
  ];

  const technologies = [
    { 
      name: "React", 
      level: 95, 
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      icon: <Code2 className="w-5 h-5" />,
      description: "UI/UX Avancé"
    },
    { 
      name: "Node.js", 
      level: 90, 
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      icon: <Server className="w-5 h-5" />,
      description: "Backend Performant"
    },
    { 
      name: "MongoDB", 
      level: 85, 
      color: "bg-gradient-to-r from-emerald-500 to-green-500",
      icon: <Database className="w-5 h-5" />,
      description: "Base de données NoSQL"
    },
    { 
      name: "Tailwind", 
      level: 95, 
      color: "bg-gradient-to-r from-teal-500 to-cyan-500",
      icon: <Palette className="w-5 h-5" />,
      description: "Styling Utility-First"
    },
  ];

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background avec effets avancés */}
      <AuroraBackground>
        <FloatingParticles />
        
        {/* Effet de lumière dynamique */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
        />
      </AuroraBackground>

      {/* Contenu principal avec effet parallax */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-20 mx-auto px-4 py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Colonne gauche - Contenu avec animations */}
            <div className="space-y-8 lg:space-y-12">
              {/* Titre principal */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                    <span className="block text-gray-900 dark:text-white">
                      AHMED
                    </span>
                    <TextGenerateEffect 
                      words="KI-PERTINO"
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
                    />
                  </h1>
                  
                  {/* Sous-titre avec étoiles */}
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Expert FullStack
                    </span>
                  </div>
                </motion.div>

                {/* Typing animation */}
                <div className="h-16 lg:h-20 flex items-center">
                  <TypeAnimation
                    sequence={[
                      "Développeur FullStack MERN",
                      2000,
                      "Agent Communautaire",
                      2000,
                      "Spécialiste IA & Innovation",
                      2000,
                      "Formateur Technique",
                      2000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    deletionSpeed={60}
                    repeat={Infinity}
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-300 dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
                  />
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl"
                >
                  Architecte de solutions digitales innovantes, je transforme des idées complexes 
                  en expériences utilisateur exceptionnelles grâce à la stack MERN et aux 
                  technologies de pointe.
                </motion.p>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <GlassCard key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="p-4 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 mb-3 shadow-inner">
                        <FontAwesomeIcon 
                          icon={stat.icon} 
                          className={`text-xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        />
                      </div>
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ background: stat.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  </GlassCard>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden"
                >
                  {/* Gradient animé */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient-x" />
                  
                  {/* Overlay avec effet de vague */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_50%)]" />
                  </div>
                  
                  {/* Bordure animée */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span>Explorer mon univers</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group px-8 py-4 rounded-xl font-bold border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3 transition-colors group-hover:text-white dark:group-hover:text-gray-900">
                    <Mail className="w-5 h-5" />
                    <span>Discutons</span>
                  </span>
                </motion.a>
              </div>

              {/* Contact info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Conakry, Guinée</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span>+224 622 40 26 38</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span>fkipertino@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Colonne droite - Visual */}
            <div className="relative">
              {/* Image container avec effets 3D */}
              <motion.div
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative mx-auto w-full max-w-md"
              >
                {/* Orbite extérieure */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute -ins-8 md:-inset-12"
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                      className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${
                        i % 4 === 0 ? "from-blue-500 to-cyan-500" :
                        i % 4 === 1 ? "from-purple-500 to-pink-500" :
                        i % 4 === 2 ? "from-green-500 to-emerald-500" :
                        "from-yellow-500 to-orange-500"
                      }`}
                      style={{
                        left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                        top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                </motion.div>

                {/* Image principale */}
                <div className="relative z-10">
                  {/* Effet de lumière */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl" />
                  
                  {/* Cadre de l'image */}
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={{
                      y: { duration: 4, repeat: Infinity },
                      rotate: { duration: 10, repeat: Infinity }
                    }}
                    className="relative w-72 h-72 md:w-96 md:h-96 mx-auto"
                  >
                    {/* Bordure animée */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 border-4 border-dashed border-blue-400/30 rounded-full"
                    />
                    
                    {/* Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/80 dark:border-gray-800/80 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 z-10" />
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                        alt="Ahmed Kipertino"
                        className="w-full h-full object-cover scale-105"
                      />
                    </div>

                    {/* Badges */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                    >
                      <Award className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                    >
                      <Cpu className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Stack Technique */}
                <div className="mt-12">
                  <StickyScroll content={technologies.map(tech => ({
                    title: tech.name,
                    description: tech.description,
                    content: (
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
                              {tech.icon}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                {tech.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {tech.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 bg-clip-text text-transparent">
                            {tech.level}%
                          </div>
                        </div>
                        
                        {/* Barre de progression */}
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
                        
                        {/* Points de repère */}
                        <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>Débutant</span>
                          <span>Intermédiaire</span>
                          <span>Avancé</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    ),
                  }))} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium animate-pulse">
            Scroll pour explorer
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;