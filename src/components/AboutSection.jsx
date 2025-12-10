import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  User,
  Code2,
  Brain,
  GraduationCap,
  Target,
  Rocket,
  Zap,
  Award,
  Briefcase,
  Users,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Shield,
  Globe,
  Heart,
  Clock,
  Star,
  ChevronRight,
  Sparkles
} from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Ma Mission", icon: <Target className="w-5 h-5" /> },
    { id: "expertise", label: "Expertises", icon: <Brain className="w-5 h-5" /> },
    { id: "values", label: "Valeurs", icon: <Heart className="w-5 h-5" /> },
    { id: "journey", label: "Parcours", icon: <Rocket className="w-5 h-5" /> }
  ];

  const stats = [
    { number: "10+", label: "Projets réalisés", icon: <Code2 className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { number: "200+", label: "Étudiants formés", icon: <Users className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { number: "5+", label: "Années d'expérience", icon: <Briefcase className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { number: "100%", label: "Satisfaction client", icon: <Star className="w-6 h-5" />, color: "from-orange-500 to-yellow-500" }
  ];

  const expertiseAreas = [
    {
      title: "Développement FullStack",
      description: "Création d'applications web complètes de A à Z",
      technologies: ["MERN Stack", "Python/Django", "REST APIs", "Microservices"],
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Architecture Logicielle",
      description: "Design d'architectures scalables et maintenables",
      technologies: ["Clean Architecture", "Design Patterns", "CI/CD", "Docker"],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Formation & Mentorat",
      description: "Partage de connaissances et accompagnement technique",
      technologies: ["React/Node.js", "Best Practices", "Projets réels", "Code Review"],
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Innovation Sociale",
      description: "Technologie au service du développement communautaire",
      technologies: ["Projets sociaux", "Impact positif", "Accessibilité", "Inclusion"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const values = [
    {
      title: "Excellence Technique",
      description: "Code propre, tests rigoureux et technologies à jour",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Apprentissage Continu",
      description: "Formation constante et veille technologique active",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Impact Social",
      description: "Solutions qui améliorent la vie des communautés",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Collaboration",
      description: "Travail d'équipe et partage de connaissances",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const journey = [
    {
      year: "2017-2019",
      title: "Initiation à la Tech",
      description: "Formation en bureautique et premiers pas en programmation",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      year: "2021-2024",
      title: "Sociologie & Développement",
      description: "Licence en sociologie avec spécialisation développement communautaire",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Formation Développement Web",
      description: "Mastery des technologies modernes (MERN Stack, Python/Django)",
      icon: <Brain className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "Certification FullStack",
      description: "Certification Simplon et formation de 200 femmes dans les TIC",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-cyan-500/3 rounded-full blur-3xl" />
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
            <User className="w-4 h-4 text-blue-500 dark:text-purple-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-purple-400">À propos de moi</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent">
              Passion & Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Développeur FullStack, Formateur et Agent Communautaire - Je combine technologie et sciences sociales 
            pour créer des solutions digitales à impact positif
          </p>
        </motion.div>


        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Profile & Tabs */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-24"
            >
              <div className="relative group mb-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative mb-6">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl" />
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                        <img 
                          src="./photo_profile.png" 
                          alt="Ahmed Kipertino"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Ahmed Kipertino
                    </h3>
                    <div className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4">
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Développeur FullStack & Formateur
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Conakry, Guinée • fkipertino@gmail.com • +224 622 40 26 38
                    </p>
                  </div>

                  {/* Tabs Navigation */}
                  <div className="space-y-2">
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 text-blue-600 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        }`}>
                          {tab.icon}
                        </div>
                        <span className="font-medium">{tab.label}</span>
                        <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                          activeTab === tab.id ? "rotate-90" : ""
                        }`} />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  En bref
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Autodidacte passionné depuis 2017
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Spécialiste MERN Stack & Python/Django
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Formateur certifié (200+ étudiants)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Approche sociotechnique unique
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Mission Tab */}
              {activeTab === "mission" && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Ma Mission
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Transformer des idées en solutions digitales impactantes
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        En tant que développeur FullStack et sociologue de formation, je crée des ponts entre 
                        la technologie et les besoins humains. Mon objectif est de développer des applications 
                        qui non seulement fonctionnent parfaitement, mais qui améliorent réellement la vie des 
                        utilisateurs et des communautés.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                            👨‍💻 Expertise Technique
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Développement d'applications performantes avec les technologies modernes
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                            🎓 Transmission
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Former la nouvelle génération de développeurs en Afrique
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                            🌍 Impact Social
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Solutions technologiques pour le développement communautaire
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                            🔄 Innovation Continue
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Veille technologique et adoption des meilleures pratiques
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Expertise Tab */}
              {activeTab === "expertise" && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Mes Expertises
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Un profil unique combinant technique et sciences sociales
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {expertiseAreas.map((area, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="group relative"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                            <div className="flex items-start justify-between mb-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-br ${area.color} bg-opacity-10`}>
                                {area.icon}
                              </div>
                              <TrendingUp className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {area.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                              {area.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {area.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Values Tab */}
              {activeTab === "values" && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Mes Valeurs
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Principes qui guident mon travail et mes engagements
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {values.map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="group"
                        >
                          <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20">
                              {value.icon}
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {value.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Philosophy */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        💡 Ma philosophie
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        "La technologie n'a de valeur que si elle sert l'humain. En combinant 
                        expertise technique et compréhension sociologique, je crée des solutions 
                        qui résolvent de vrais problèmes et améliorent la vie des gens."
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Journey Tab */}
              {activeTab === "journey" && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Mon Parcours
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          De la sociologie à l'expertise technique
                        </p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />
                      
                      {journey.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative flex items-start gap-6 mb-8 last:mb-0 group"
                        >
                          {/* Timeline dot */}
                          <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                                {step.icon}
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 pt-2">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                                {step.year}
                              </span>
                              <div className="w-4 h-0.5 bg-gray-300 dark:bg-gray-700" />
                              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                {step.title}
                              </h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Future Vision */}
                    <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        🚀 Vision Future
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Mon objectif est de me spécialiser en cybersécurité tout en continuant 
                        à développer des solutions innovantes pour les entreprises et communautés 
                        africaines.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          En cours : Spécialisation sécurité des systèmes d'information
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Prêt à collaborer ?
                    </h3>
                    <p className="text-gray-300">
                      Discutons de votre projet et créons ensemble quelque chose d'extraordinaire
                    </p>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-blue-500/30"
                  >
                    <Users className="w-5 h-5" />
                    <span>Travaillons ensemble</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;