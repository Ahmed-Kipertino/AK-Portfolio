import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Code2, 
  Server, 
  Database, 
  Palette,
  Building,
  Globe,
  Zap,
  Eye,
  Rocket,
  Layers,
  Lock,
  ChevronLeft,
  ChevronRight,
  X,
  Home,
  ShoppingCart,
  Tags,
  Shield,
  Layout,
  Smartphone
} from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      icon: <Building className="w-6 h-6" />,
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
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop", // Dashboard
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w-800&auto=format&fit=crop", // Recherche
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop", // Chat
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop", // Profil
        "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=800&auto=format&fit=crop"  // Mobile
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
      icon: <Globe className="w-6 h-6" />,
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
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", // Homepage
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop", // Recherche
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop", // Contact
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"  // Mobile
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
      icon: <ShoppingCart className="w-6 h-6" />,
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
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop", // API Docs
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", // Admin
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop", // Architecture
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"  // Dashboard
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
      icon: <Tags className="w-6 h-6" />,
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", // Dashboard
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop", // Board
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", // Analytics
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"  // Mobile
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
      icon: <Shield className="w-6 h-6" />,
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
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop", // Login
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop", // Admin
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"  // Dashboard
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
      icon: <Layout className="w-6 h-6" />,
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
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop", // Home
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", // Projects
        "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=800&auto=format&fit=crop", // Contact
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"  // Dark mode
      ]
    }
  ];

  const filters = [
    { id: "all", label: "Tous les projets", count: projects.length },
    { id: "fullstack", label: "FullStack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "backend", label: "Backend", count: projects.filter(p => p.category === "backend").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  // ... (le reste du code reste similaire jusqu'à la fin du ProjectsSection, mais on modifie ProjectCard et ProjectModal)

  return (
    <section id="projects" className="relative p-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* ... (même code que précédemment pour le header et les filtres) ... */}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            onViewDetails={() => openProjectDetails(project)}
            onViewGallery={() => openProjectGallery(project)}
          />
        ))}
      </div>

      {/* ... (même code pour CTA section) ... */}

      {/* Modal pour les détails OU la galerie */}
      {selectedProject && (
        showGallery ? (
          <GalleryModal 
            project={selectedProject}
            currentImageIndex={currentImageIndex}
            onClose={closeModal}
            onNextImage={nextImage}
            onPrevImage={prevImage}
            onGoToImage={goToImage}
          />
        ) : (
          <ProjectDetailsModal 
            project={selectedProject}
            onClose={closeModal}
            onViewGallery={() => {
              setShowGallery(true);
              setCurrentImageIndex(0);
            }}
          />
        )
      )}
    </section>
  );
};

const ProjectCard = ({ project, index, onViewDetails, onViewGallery }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background with Gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
        
        {/* Image Gallery Preview - CLICKABLE pour ouvrir la galerie */}
        <button 
          onClick={onViewGallery}
          className="relative h-48 md:h-56 w-full overflow-hidden cursor-pointer group/image"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/30 dark:from-gray-800/50 dark:to-gray-900/30 z-10" />
          
          {/* Images en grille (première image en grand) */}
          <div className="absolute inset-0 flex">
            {/* Image principale */}
            <div className="relative w-2/3 overflow-hidden">
              <img 
                src={project.images[0]}
                alt={`${project.title} - Vue principale`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
              />
            </div>
            
            {/* Miniatures des autres images */}
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
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Overlay avec bouton galerie */}
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
            <div className="px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Voir la galerie</span>
            </div>
          </div>
          
          {/* Badge images count */}
          <div className="absolute bottom-4 right-4 z-20">
            <div className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              {project.images.length} photos
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-20">
            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
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
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {project.subtitle}
              </p>
            </div>
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 ml-4`}>
              {React.cloneElement(project.icon, { className: "w-5 h-5" })}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex gap-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                title="Voir sur GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              
              {project.liveLink && project.liveLink !== "#" && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  title="Voir le site"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewDetails}
                className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium flex items-center gap-2"
              >
                <Eye className="w-3.5 h-3.5" />
                Détails
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// MODAL pour les DÉTAILS du projet
const ProjectDetailsModal = ({ project, onClose, onViewGallery }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
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
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-[10000]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header avec image de prévisualisation */}
        <div className="relative h-48 md:h-56 bg-gradient-to-r from-gray-900 to-gray-800">
          <img 
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-90`}>
              {React.cloneElement(project.icon, { className: "w-12 h-12 text-white" })}
            </div>
          </div>
          <button
            onClick={onViewGallery}
            className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2 hover:bg-black/80"
          >
            <Eye className="w-4 h-4" />
            Voir la galerie ({project.images.length} photos)
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="p-6 md:p-8 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 14rem)' }}>
          {/* En-tête */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{project.subtitle}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === "Terminé" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : project.status === "En développement"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
              }`}>
                {project.status}
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              {project.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Fonctionnalités */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Fonctionnalités principales
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full bg-gradient-to-r ${project.color} mt-1 flex-shrink-0`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Technologies */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Liens */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Liens du projet
                </h4>
                <div className="space-y-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code source GitHub</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Voir le site en ligne</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Fermer
            </button>
            <button
              onClick={onViewGallery}
              className={`px-6 py-3 rounded-xl font-semibold bg-gradient-to-r ${project.color} text-white transition-transform hover:scale-[1.02] flex items-center justify-center gap-2`}
            >
              <Eye className="w-5 h-5" />
              Voir la galerie
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-semibold bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors text-center"
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
const GalleryModal = ({ project, currentImageIndex, onClose, onNextImage, onPrevImage, onGoToImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      {/* Overlay très sombre */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container pour galerie */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-black rounded-lg overflow-hidden z-[10000]"
      >
        {/* Header de la galerie */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div>
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>
              <p className="text-sm text-white/70">Galerie d'images</p>
            </div>
          </div>
          
          <div className="text-white">
            <span className="px-3 py-1 bg-black/50 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </span>
          </div>
        </div>

        {/* Image principale */}
        <div className="relative h-[70vh] flex items-center justify-center">
          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.img
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Miniatures */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => onGoToImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                  index === currentImageIndex 
                    ? 'border-blue-500' 
                    : 'border-transparent hover:border-white/50'
                }`}
              >
                <img
                  src={img}
                  alt={`Miniature ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bouton retour aux détails */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => {
              // Retourner aux détails
              // Cette fonction serait fournie par le parent
              // Pour l'instant, on ferme juste
              onClose();
            }}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Retour aux détails
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;