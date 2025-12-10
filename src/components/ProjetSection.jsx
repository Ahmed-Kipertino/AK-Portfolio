import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Building,
  Globe,
  Zap,
  Eye,
  Rocket,
  ShoppingCart,
  Tags,
  Shield,
  Layout,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Minimize2
} from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "LoguiStud",
      subtitle: "Plateforme de colocation étudiante",
      description: "Plateforme complète de recherche et gestion de colocation étudiante avec système de réservation, chat et évaluations.",
      longDescription: "Solution complète MERN Stack pour faciliter la recherche de logement étudiant. Système de matching intelligent avec critères personnalisés, réservation sécurisée avec paiement en ligne, chat intégré en temps réel, et système d'évaluations pour garantir la transparence. Interface moderne et intuitive optimisée pour mobile.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "JWT", "Socket.io", "Stripe"],
      status: "En développement",
      github: "https://github.com/AhmedKipert/loguistud",
      liveLink: "#",
      category: "fullstack",
      icon: <Building className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Authentification JWT sécurisée avec 2FA",
        "Recherche géolocalisée avec filtres avancés",
        "Chat temps réel avec Socket.io",
        "Système de réservation avec calendrier",
        "Paiements en ligne sécurisés (Stripe)",
        "Évaluations et commentaires vérifiés",
        "Notifications email et push"
      ],
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "IRLA Website",
      subtitle: "Refonte de site institutionnel",
      description: "Modernisation complète du site web de l'Institut de Recherche Linguistique Appliquée.",
      longDescription: "Refonte complète du site web institutionnel avec design moderne respectant l'identité visuelle. Intégration d'un CMS personnalisé, optimisation SEO avancée, interface responsive avec animations fluides, et amélioration des performances de chargement. Système de gestion de contenu intuitif pour l'équipe administrative.",
      technologies: ["React", "Tailwind", "Framer Motion", "Next.js", "Sanity CMS", "GraphQL"],
      status: "Terminé",
      github: "https://github.com/AhmedKipert/irla-redesign",
      liveLink: "#",
      category: "frontend",
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Design responsive avec mobile-first",
        "Optimisation SEO complète",
        "Animations fluides avec Framer Motion",
        "Performance optimisée (Score Lighthouse 95+)",
        "Interface d'administration intuitive",
        "Blog intégré avec système de catégories",
        "Multilangue (Français, Anglais)"
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "E-Commerce API",
      subtitle: "Backend e-commerce robuste",
      description: "API REST complète pour plateforme e-commerce avec microservices.",
      longDescription: "Architecture microservices scalable pour plateforme e-commerce. Gestion complète des produits, commandes, paiements et notifications. Intégration avec Stripe et PayPal, système de cache Redis, conteneurisation Docker, monitoring avec Prometheus et logs centralisés. API documentée avec Swagger.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "Kubernetes", "Stripe", "Jest"],
      status: "En cours",
      github: "https://github.com/AhmedKipert/ecommerce-api",
      liveLink: "#",
      category: "backend",
      icon: <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Architecture microservices indépendants",
        "Paiements Stripe et PayPal intégrés",
        "Cache Redis pour haute performance",
        "Conteneurisation Docker et orchestration",
        "Tests unitaires et d'intégration complets",
        "Documentation Swagger interactive",
        "Système de notification en temps réel"
      ],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 4,
      title: "TaskFlow Pro",
      subtitle: "Application de gestion de tâches",
      description: "Application web de productivité avec IA et automatisations.",
      longDescription: "Système avancé de gestion de tâches avec intelligence artificielle pour la priorisation automatique. Collaboration en équipe avec permissions granulaire, génération automatique de rapports, intégrations multiples (Slack, Google Calendar, GitHub), et application mobile native. Algorithmes de productivité personnalisés.",
      technologies: ["React", "Python", "Django", "PostgreSQL", "Celery", "Redis", "React Native", "TensorFlow"],
      status: "Terminé",
      github: "https://github.com/AhmedKipert/taskflow",
      liveLink: "#",
      category: "fullstack",
      icon: <Tags className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Priorisation intelligente avec IA",
        "Collaboration en équipe avec rôles",
        "Rapports automatiques hebdomadaires",
        "Intégrations API multiples",
        "Notifications push et email",
        "Application mobile native",
        "Analytics de productivité"
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 5,
      title: "SecureAuth API",
      subtitle: "Système d'authentification sécurisé",
      description: "API d'authentification avec 2FA, OAuth2 et sécurité renforcée.",
      longDescription: "Solution complète d'authentification sécurisée pour applications modernes. Support multi-providers (Google, Facebook, GitHub), gestion de rôles RBAC, rate limiting avancé, audit logs complets, et protection contre les attaques courantes. Architecture en microservices avec haute disponibilité.",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "JWT", "OAuth2", "Docker", "Jest"],
      status: "En développement",
      github: "https://github.com/AhmedKipert/secure-auth",
      liveLink: "#",
      category: "backend",
      icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "Authentification 2FA et OAuth2",
        "Gestion de rôles RBAC avancée",
        "Rate limiting intelligent",
        "Audit logs complets",
        "Protection contre les attaques",
        "Haute disponibilité",
        "Monitoring de sécurité"
      ],
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Portfolio React",
      subtitle: "Site portfolio moderne",
      description: "Portfolio personnel avec animations avancées et design interactif.",
      longDescription: "Site portfolio single-page avec animations Framer Motion avancées, mode sombre/clair automatique, design responsive mobile-first, optimisation des performances (100/100 Lighthouse), et SEO technique complet. Intégration de Three.js pour des effets 3D légers et système de blog intégré.",
      technologies: ["React", "Tailwind", "Framer Motion", "Three.js", "Next.js", "Vercel", "MDX"],
      status: "Terminé",
      github: "https://github.com/AhmedKipert/portfolio",
      liveLink: "#",
      category: "frontend",
      icon: <Layout className="w-5 h-5 md:w-6 md:h-6" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Animations Framer Motion avancées",
        "Mode sombre/clair automatique",
        "Design responsive mobile-first",
        "Performance optimale (100/100)",
        "SEO technique complet",
        "Effets 3D avec Three.js",
        "Blog intégré avec MDX"
      ],
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
      ]
    }
  ];

  const filters = [
    { id: "all", label: "Tous", count: projects.length },
    { id: "fullstack", label: "FullStack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "backend", label: "Backend", count: projects.filter(p => p.category === "backend").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Gestion des événements clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setShowGallery(false);
    document.body.style.overflow = 'hidden';
  };

  const openProjectGallery = (project) => {
    setSelectedProject(project);
    setShowGallery(true);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowGallery(false);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="projects" className="relative py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 mb-3 md:mb-4">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-blue-500 dark:text-purple-400" />
            <span className="text-xs md:text-sm font-semibold text-blue-600 dark:text-purple-400">
              Portfolio Créatif
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl md:max-w-3xl mx-auto px-4">
            Découvrez mes réalisations techniques, des applications web complètes aux solutions innovantes
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-all text-sm md:text-base ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <span className="flex items-center gap-1.5 md:gap-2">
                {filter.label}
                <span className={`px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? "bg-white/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}>
                  {filter.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onViewDetails={() => openProjectDetails(project)}
              onViewGallery={() => openProjectGallery(project)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <div className="relative inline-block max-w-4xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-3 md:-inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl md:rounded-3xl blur-xl"
            />
            
            <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-200/20 dark:border-gray-700/20">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    Un projet en tête ?
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base max-w-lg">
                    Discutons de votre idée et transformons-la en une solution numérique innovante
                  </p>
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg md:rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-blue-500/30 text-sm md:text-base"
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span>Démarrer un projet</span>
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Modal avec Galerie */}
      {selectedProject && (
        showGallery ? (
          <GalleryModal 
            project={selectedProject}
            currentImageIndex={currentImageIndex}
            onClose={closeModal}
            onNextImage={nextImage}
            onPrevImage={prevImage}
            onGoToImage={goToImage}
            onToggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
            isMobile={isMobile}
          />
        ) : (
          <ProjectDetailsModal 
            project={selectedProject}
            onClose={closeModal}
            onViewGallery={() => {
              setShowGallery(true);
              setCurrentImageIndex(0);
            }}
            isMobile={isMobile}
          />
        )
      )}
    </section>
  );
};

const ProjectCard = ({ project, index, onViewDetails, onViewGallery, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}
      onTouchEnd={() => isMobile && setTimeout(() => setIsHovered(false), 150)}
    >
      {/* Card Background with Gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden flex flex-col">
        
        {/* Image Gallery Preview */}
        <button 
          onClick={onViewGallery}
          className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden cursor-pointer group/image flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/30 dark:from-gray-800/50 dark:to-gray-900/30 z-10" />
          
          {/* Images en grille responsive */}
          <div className="absolute inset-0 flex">
            <div className="relative w-2/3 overflow-hidden">
              <img 
                src={project.images[0]}
                alt={`${project.title} - Vue principale`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                loading="lazy"
              />
            </div>
            
            <div className="w-1/3 flex flex-col">
              {project.images.slice(1, 3).map((img, idx) => (
                <div 
                  key={idx}
                  className="flex-1 overflow-hidden border-l border-white/20"
                >
                  <img 
                    src={img}
                    alt={`${project.title} - Vue ${idx + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Overlay avec bouton galerie */}
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-black/70 backdrop-blur-sm rounded-full text-white flex items-center gap-1.5 md:gap-2">
              <Eye className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">Voir la galerie</span>
            </div>
          </div>
          
          {/* Badge images count */}
          <div className="absolute bottom-3 right-3 z-20">
            <div className="px-2 py-1 md:px-3 md:py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs">
              {project.images.length} photos
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-20">
            <div className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
              project.status === "Terminé" 
                ? "bg-green-500/90 text-white"
                : project.status === "En développement"
                ? "bg-blue-500/90 text-white"
                : "bg-yellow-500/90 text-white"
            }`}>
              {project.status}
            </div>
          </div>
        </button>

        {/* Project Content */}
        <div className="p-4 md:p-6 flex-grow flex flex-col">
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 truncate">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-3 line-clamp-1">
                {project.subtitle}
              </p>
            </div>
            <div className={`p-2 rounded-lg md:rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 ml-3 flex-shrink-0`}>
              {React.cloneElement(project.icon, { className: "w-4 h-4 md:w-5 md:h-5" })}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1 md:gap-1.5 mb-4 md:mb-6">
            {project.technologies.slice(0, isMobile ? 3 : 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium truncate max-w-[100px]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isMobile ? 3 : 4) && (
              <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                +{project.technologies.length - (isMobile ? 3 : 4)}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
            <div className="flex gap-1 md:gap-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Voir sur GitHub"
              >
                <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </motion.a>
              
              {project.liveLink && project.liveLink !== "#" && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  title="Voir le site"
                >
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.a>
              )}
            </div>
            
            <div className="flex gap-1 md:gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewDetails}
                className="px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2"
              >
                <Eye className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span className="hidden sm:inline">Détails</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// MODAL pour les DÉTAILS du projet
const ProjectDetailsModal = ({ project, onClose, onViewGallery, isMobile }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6"
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl md:max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg md:rounded-2xl shadow-2xl overflow-hidden z-[10000]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-1.5 md:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        {/* Header avec image de prévisualisation */}
        <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-r from-gray-900 to-gray-800">
          <img 
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`p-2 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-90`}>
              {React.cloneElement(project.icon, { className: "w-8 h-8 md:w-12 md:h-12 text-white" })}
            </div>
          </div>
          <button
            onClick={onViewGallery}
            className="absolute bottom-2 right-2 md:bottom-4 md:right-4 px-2 py-1 md:px-4 md:py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 hover:bg-black/80"
          >
            <Eye className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Voir la galerie</span>
            <span className="sm:hidden">Galerie</span>
            <span className="ml-1">({project.images.length})</span>
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="p-4 md:p-6 lg:p-8 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 8rem)' }}>
          {/* En-tête */}
          <div className="mb-4 md:mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 md:mb-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 truncate">
                  {project.subtitle}
                </p>
              </div>
              <div className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap ${
                project.status === "Terminé" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : project.status === "En développement"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
              }`}>
                {project.status}
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              {project.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              {/* Fonctionnalités */}
              <div className="mb-4 md:mb-6 lg:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 lg:mb-4">
                  Fonctionnalités principales
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3">
                      <div className={`p-0.5 md:p-1 rounded-full bg-gradient-to-r ${project.color} mt-1 flex-shrink-0`}>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Technologies */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6">
                <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 lg:mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 md:px-3 md:py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded md:rounded-lg text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Liens */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6">
                <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3 lg:mb-4">
                  Liens du projet
                </h4>
                <div className="space-y-2 md:space-y-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm md:text-base"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="truncate">Code source GitHub</span>
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-auto flex-shrink-0" />
                  </a>
                  
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm md:text-base"
                    >
                      <Globe className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="truncate">Voir le site en ligne</span>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-auto flex-shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6 lg:mt-8 pt-4 md:pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
              Fermer
            </button>
            <button
              onClick={onViewGallery}
              className={`px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl font-semibold bg-gradient-to-r ${project.color} text-white transition-transform hover:scale-[1.02] flex items-center justify-center gap-1.5 md:gap-2 text-sm md:text-base`}
            >
              <Eye className="w-4 h-4 md:w-5 md:h-5" />
              <span>Voir la galerie</span>
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl font-semibold bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-center text-sm md:text-base"
            >
              Discuter du projet
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// MODAL pour la GALERIE d'images
const GalleryModal = ({ 
  project, 
  currentImageIndex, 
  onClose, 
  onNextImage, 
  onPrevImage, 
  onGoToImage,
  onToggleFullscreen,
  isFullscreen,
  isMobile 
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Configuration du swipe pour mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      onNextImage();
    } else if (isRightSwipe) {
      onPrevImage();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[9999] ${isFullscreen ? '' : 'flex items-center justify-center p-2 sm:p-4'}`}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`absolute inset-0 bg-black/90 backdrop-blur-sm ${isFullscreen ? '' : ''}`}
        onClick={!isFullscreen ? onClose : undefined}
      />
      
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className={`relative ${isFullscreen ? 'h-full w-full' : 'w-full max-w-4xl md:max-w-6xl max-h-[90vh] md:max-h-[80vh]'} bg-black rounded-lg md:rounded-xl overflow-hidden z-[10000]`}
      >
        {/* Header de la galerie */}
        {!isFullscreen && (
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-3 md:p-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={onClose}
                className="p-1.5 md:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
              <div className="max-w-[70%]">
                <h2 className="text-sm md:text-base font-semibold text-white truncate">{project.title}</h2>
                <p className="text-xs md:text-sm text-white/70 truncate">Galerie d'images</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3">
              {!isMobile && (
                <button
                  onClick={onToggleFullscreen}
                  className="p-1.5 md:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  ) : (
                    <Maximize2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  )}
                </button>
              )}
              <div className="text-white">
                <span className="px-2 py-1 bg-black/50 rounded-full text-xs md:text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Image principale */}
        <div 
          className={`relative ${isFullscreen ? 'h-full' : 'h-[60vh] md:h-[70vh]'} flex items-center justify-center`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Navigation buttons - masqués sur mobile en plein écran */}
          {(!isMobile || !isFullscreen) && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrevImage();
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNextImage();
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Image */}
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className={`${isFullscreen ? 'max-h-full' : 'max-w-full max-h-full'} object-contain cursor-pointer`}
            onClick={isFullscreen ? onToggleFullscreen : undefined}
            loading="lazy"
          />

          {/* Indicateurs de swipe pour mobile */}
          {isMobile && !isFullscreen && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
              {project.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Miniatures - masquées en plein écran */}
        {!isFullscreen && (
          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex overflow-x-auto gap-1 md:gap-2 pb-1 md:pb-2 scrollbar-hide px-1">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => onGoToImage(index)}
                  className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded overflow-hidden border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-blue-500' 
                      : 'border-transparent hover:border-white/50'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniature ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bouton plein écran sur mobile */}
        {isMobile && !isFullscreen && (
          <div className="absolute bottom-16 right-4">
            <button
              onClick={onToggleFullscreen}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Bouton fermer en plein écran */}
        {isFullscreen && (
          <div className="absolute top-4 right-4">
            <button
              onClick={onToggleFullscreen}
              className="p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <Minimize2 className="w-6 h-6" />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;