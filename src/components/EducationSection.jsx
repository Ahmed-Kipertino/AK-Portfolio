import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap,
  Award,
  BookOpen,
  Clock,
  Calendar,
  MapPin,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  School,
  Medal,
  TrendingUp,
  Brain,
  Code2,
  Shield,
  Globe,
  Zap,
  CheckCircle,
  Target
} from "lucide-react";

const EducationSection = () => {
  const [expandedCert, setExpandedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Toutes", count: 0 },
    { id: "degree", label: "Diplômes", count: 2 },
    { id: "tech", label: "Technique", count: 4 },
    { id: "certification", label: "Certifications", count: 2 }
  ];

  // Diplômes universitaires
  const degrees = [
    {
      id: 1,
      title: "Licence en Sociologie",
      subtitle: "Spécialisation Développement communautaire",
      institution: "Université Général Lansana Conté de Sonfonia (UGLC)",
      period: "Oct. 2021 - Nov. 2024",
      location: "Conakry, Guinée",
      description: "Formation approfondie en sociologie du développement avec focus sur les dynamiques communautaires et organisationnelles.",
      achievements: [
        "Réalisation de plus de 10 études de terrain auprès de communautés locales",
        "Participation à 5 projets de recherche en sociologie des organisations",
        "Gestion et suivi de projets communautaires touchant 500+ bénéficiaires",
        "Analyse de données sociales pour des recommandations stratégiques"
      ],
      skills: ["Recherche qualitative", "Analyse sociale", "Gestion de projet", "Méthodologie"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      type: "degree"
    },
    {
      id: 2,
      title: "Formation en Développement Web Moderne",
      subtitle: "10 technologies web modernes",
      institution: "Shinepress Academy",
      period: "Févr. 2024 - Juil. 2024",
      location: "Conakry, Guinée",
      description: "Formation intensive en développement web fullstack couvrant le cycle complet de création d'applications web.",
      achievements: [
        "Maîtrise du développement frontend (HTML, CSS, JavaScript moderne)",
        "Expertise en backend avec Python & Django",
        "Gestion de versions avec Git/GitHub",
        "Techniques de web scraping et automation",
        "Développement d'applications complètes de A à Z"
      ],
      skills: ["HTML/CSS/JS", "Python/Django", "Git", "REST APIs", "Web Scraping"],
      icon: <Code2 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      type: "tech"
    }
  ];

  // Certifications
  const certifications = [
    {
      id: 3,
      title: "Développeur Web FullStack",
      subtitle: "Certification Simplon & AUF",
      institution: "AUF (Agence Universitaire de la Francophonie)",
      period: "Avr. 2025 - Sept. 2025",
      location: "Conakry, Guinée",
      description: "Certification professionnelle en développement web fullstack avec spécialisation MERN Stack (MongoDB, Express, React, Node.js).",
      achievements: [
        "Conception et développement d'applications web complètes",
        "Spécialisation MERN Stack (MongoDB, Express, React, Node.js)",
        "Réalisation de projets concrets avec méthodologies agiles",
        "Développement d'applications responsives et performantes",
        "Gestion de bases de données et APIs REST"
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "API REST", "Tailwind"],
      icon: <Medal className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      type: "certification",
      status: "En cours",
      progress: 85
    },
    {
      id: 4,
      title: "Formateur / Mentor - 200 Femmes dans les TIC",
      subtitle: "Programme ANSUTEN & SUITE",
      institution: "SUITE (StartUp & Innovation Technology Ecosystem)",
      period: "Octobre 2025",
      location: "Conakry, Guinée",
      description: "Formation et mentorat de 200 femmes dans les technologies de l'information et de la communication.",
      achievements: [
        "Conception et animation d'ateliers en développement Web Front-End et Back-End",
        "Enseignement de React JS, Node.js, MySQL, Git/GitHub, Tailwind CSS",
        "Introduction à l'utilisation d'outils d'IA pour accélérer le développement",
        "Coaching en développement de projets concrets (MVP)",
        "Accompagnement dans la réalisation de mini-projets numériques"
      ],
      skills: ["Formation", "Mentorat", "React", "Node.js", "IA", "Pédagogie"],
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      type: "certification",
      status: "Terminé"
    }
  ];

  // Formations complémentaires
  const additionalTrainings = [
    {
      id: 5,
      title: "Sécurité & HSE",
      subtitle: "Hygiène, Sécurité, Environnement",
      institution: "Croix-Rouge Guinéenne & AFRIGEC",
      period: "2023 - Présent",
      location: "Conakry, Guinée",
      description: "Formation continue en prévention des risques, sensibilisation communautaire et premiers secours.",
      achievements: [
        "Formation aux premiers secours (Croix-Rouge guinéenne)",
        "Animation de sessions HSE pour divers publics",
        "Rédaction de contenus pédagogiques et supports de formation",
        "Participation à la rédaction de rapports d'activité"
      ],
      skills: ["Premiers secours", "Prévention risques", "Formation HSE", "Sensibilisation"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      type: "tech"
    },
    {
      id: 6,
      title: "Veille Technologique Continue",
      subtitle: "Auto-formation permanente",
      institution: "Autodidacte",
      period: "2017 - Présent",
      location: "En ligne & Communautés tech",
      description: "Apprentissage continu et veille technologique sur les dernières tendances du développement web.",
      achievements: [
        "Suivi régulier des nouvelles technologies et frameworks",
        "Participation à des communautés de développeurs",
        "Expérimentation de nouvelles technologies sur projets personnels",
        "Formation en ligne sur plateformes spécialisées"
      ],
      skills: ["Auto-formation", "Veille tech", "Communautés", "Innovation"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      type: "tech"
    }
  ];

  const allEducations = [...degrees, ...certifications, ...additionalTrainings];

  const filteredEducations = activeFilter === "all" 
    ? allEducations 
    : allEducations.filter(edu => edu.type === activeFilter);

  return (
    <section id="education" className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-500/20 mb-4">
            <GraduationCap className="w-4 h-4 text-blue-500 dark:text-purple-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-purple-400">Apprentissage Continu</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent">
              Formations & Certifications
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un parcours académique riche combinant sciences sociales et expertise technique pour une approche unique du développement
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Formations</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Institutions</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">200+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Étudiants formés</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Ans d'études</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all relative group ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {filter.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
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

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-cyan-500/30 transform -translate-x-1/2" />
          
          <div className="space-y-8 lg:space-y-12">
            {filteredEducations.map((education, index) => (
              <EducationCard 
                key={education.id}
                education={education}
                index={index}
                isExpanded={expandedCert === education.id}
                onToggle={() => setExpandedCert(
                  expandedCert === education.id ? null : education.id
                )}
              />
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Philosophie d'apprentissage
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Je crois en l'apprentissage continu et en la combinaison des connaissances. 
                      Ma formation en sociologie me donne une compréhension profonde des besoins humains, 
                      tandis que mon expertise technique me permet de créer des solutions adaptées.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-green-500/20 mt-1">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          Approche hybride : Tech + Sciences sociales
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          Apprentissage par la pratique (learning by doing)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          Partage des connaissances (formation, mentorat)
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-cyan-500/20 mt-1">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          Veille technologique constante
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <div className="inline-flex flex-col items-center lg:items-end gap-2">
                    <div className="text-4xl font-bold text-white">🚀</div>
                    <div className="text-lg font-semibold text-white">Prochaine étape</div>
                    <div className="text-gray-300 text-sm">Spécialisation en Cybersécurité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Un projet de formation en tête ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Que vous soyez une entreprise cherchant à former vos équipes ou un particulier voulant apprendre le développement web, discutons de vos besoins.
              </p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-blue-500/30"
            >
              <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Discuter formation</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EducationCard = ({ education, index, isExpanded, onToggle }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative group ${isLeft ? 'lg:pr-1/2 lg:pl-8' : 'lg:pl-1/2 lg:pr-8'}`}
    >
      {/* Timeline connector for desktop */}
      <div className="hidden lg:block absolute top-8 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{
          left: isLeft ? 'calc(50% - 4px)' : 'auto',
          right: isLeft ? 'auto' : 'calc(50% - 4px)',
          transform: isLeft ? 'none' : 'scaleX(-1)'
        }}
      />
      
      {/* Timeline dot */}
      <div className="hidden lg:block absolute top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-gray-900"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      />

      <div className="relative">
        {/* Card Background */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isLeft ? 'lg:rounded-r-none' : 'lg:rounded-l-none'
        }`} />
        
        <div className={`relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden ${
          isLeft ? 'lg:rounded-r-none lg:border-r-0' : 'lg:rounded-l-none lg:border-l-0'
        }`}>
          {/* Card Header */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${education.color} bg-opacity-10`}>
                    {education.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {education.title}
                      </h3>
                      
                      {education.status && (
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          education.status === "Terminé"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}>
                          {education.status}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {education.subtitle}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <School className="w-4 h-4" />
                        <span>{education.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {education.description}
                </p>
                
                {/* Progress bar for ongoing certifications */}
                {education.progress && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Progression</span>
                      <span>{education.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${education.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${education.color}`}
                      />
                    </div>
                  </div>
                )}
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {education.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggle}
                className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors self-start ${
                  isExpanded ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </motion.button>
            </div>
            
            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Réalisations & Acquis
                </h4>
                
                <ul className="space-y-3">
                  {education.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`p-1 rounded-full bg-gradient-to-r ${education.color} mt-1 flex-shrink-0`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Additional Info */}
                {education.type === "certification" && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Impact de cette certification
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Cette certification renforce mon expertise technique tout en validant mes compétences 
                      auprès des professionnels et clients.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Corner */}
          <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-24 h-24 opacity-10`}>
            <div className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-0 w-24 h-24 border-t-2 border-r-2 ${isLeft ? 'border-r-2' : 'border-l-2'} border-gradient-to-r ${education.color} ${isLeft ? 'rounded-tr-2xl' : 'rounded-tl-2xl'}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;