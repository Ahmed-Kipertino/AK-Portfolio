import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Users,
  Target,
  Award,
  TrendingUp,
  Code2,
  GraduationCap,
  Shield,
  BookOpen,
  Zap,
  ChevronRight,
  ExternalLink,
  Star,
  Clock,
  BarChart,
  Building,
  UserCheck,
  Lightbulb,
  Rocket,
} from "lucide-react";

const ExperienceSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedExp, setExpandedExp] = useState(null);

  const filters = [
    { id: "all", label: "Toutes", count: 4 },
    { id: "tech", label: "Technique", count: 2 },
    { id: "training", label: "Formation", count: 2 },
    { id: "research", label: "Recherche", count: 1 },
  ];

  const experiences = [
    {
      id: 1,
      title: "Assistant Formateur HSE & Développement de compétences",
      company: "Cabinet AFRIGEC",
      location: "Conakry, Guinée",
      period: "Mars 2024 - Présent",
      duration: "1 an +",
      type: "training",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description:
        "Animation de formations en Hygiène, Sécurité et Environnement (HSE) et développement de contenus pédagogiques.",
      fullDescription:
        "En tant qu'assistant formateur au sein du cabinet AFRIGEC, je participe activement à la conception et à l'animation de formations professionnelles en HSE pour divers secteurs d'activité.",
      responsibilities: [
        "Animation de sessions de formation en HSE pour divers publics (entreprises, organisations, institutions)",
        "Appui à la rédaction des contenus pédagogiques et supports de formation",
        "Préparation et coordination logistique des sessions de formation",
        "Participation à la rédaction des rapports d'activité et d'évaluation",
        "Accompagnement personnalisé des apprenants dans leur parcours de formation",
        "Mise à jour des supports selon les dernières réglementations",
      ],
      achievements: [
        "Formation de 200+ professionnels dans différents secteurs",
        "Développement de 15+ modules de formation personnalisés",
        "Taux de satisfaction des participants : 95%+",
        "Mise en place d'un système de suivi post-formation",
      ],
      skills: [
        "Formation HSE",
        "Pédagogie",
        "Conception de supports",
        "Animation",
        "Gestion de projets",
      ],
      tags: ["Formation", "HSE", "Développement", "Accompagnement"],
    },
    {
      id: 2,
      title: "Collaborateur technique (HSE & Formation)",
      company: "Cabinet Guinéenne des Performance",
      location: "Conakry, Guinée",
      period: "2024 - Présent",
      duration: "1 an",
      type: "tech",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description:
        "Participation à la rédaction d'offres techniques et suivi administratif de formations.",
      fullDescription:
        "Collaboration technique au sein d'un cabinet spécialisé en performance organisationnelle, avec focus sur les aspects HSE et formation.",
      responsibilities: [
        "Participation à la rédaction et mise en forme d'offres techniques de formations",
        "Contribution à l'élaboration des rapports de fin de formation",
        "Appui au suivi administratif des activités et projets",
        "Coordination logistique des sessions de formation",
        "Analyse des besoins en formation des clients",
        "Support à la préparation des supports pédagogiques",
      ],
      achievements: [
        "Contribution à 10+ offres techniques remportées",
        "Optimisation des processus administratifs de suivi",
        "Développement de templates pour les rapports d'activité",
        "Amélioration de l'efficacité logistique des formations",
      ],
      skills: [
        "Rédaction technique",
        "Gestion administrative",
        "Coordination",
        "Analyse de besoins",
        "Support logistique",
      ],
      tags: ["Technique", "Administration", "Coordination", "Support"],
    },
    {
      id: 3,
      title: "Formateur / Mentor - 200 Femmes dans les TIC",
      company: "SUITE (Programme ANSUTEN)",
      location: "Conakry, Guinée",
      period: "Octobre 2025",
      duration: "Projet intensif",
      type: "training",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description:
        "Formation et mentorat de 200 femmes dans les technologies de l'information et de la communication.",
      fullDescription:
        "Participation au programme innovant visant à former 200 femmes aux métiers du numérique, avec focus sur le développement web et l'entrepreneuriat tech.",
      responsibilities: [
        "Conception et animation d'ateliers de formation en développement Web Front-End et Back-End",
        "Enseignement de technologies modernes (React JS, Node.js, MySQL, Git/GitHub, Tailwind CSS)",
        "Introduction et accompagnement à l'utilisation d'outils d'IA pour accélérer le développement",
        "Coaching en développement de projets concrets (MVP)",
        "Accompagnement des participantes dans la réalisation de mini-projets numériques",
        "Mentorat individuel et collectif pour le développement de compétences",
      ],
      achievements: [
        "Formation complète de 200 femmes aux fondamentaux du développement web",
        "Accompagnement dans la réalisation de 50+ mini-projets numériques",
        "Introduction réussie aux outils d'IA pour 90% des participantes",
        "Taux de rétention exceptionnel de 98% sur le programme",
      ],
      skills: [
        "Formation tech",
        "Mentorat",
        "React/Node.js",
        "IA",
        "Coaching projet",
        "Pédagogie active",
      ],
      tags: ["Formation", "Tech", "Femmes", "Mentorat", "IA"],
    },
    {
      id: 4,
      title: "Stagiaire - Laboratoire Socio-Anthropologique de Guinée",
      company: "LASAG",
      location: "Conakry, Guinée",
      period: "Mars 2023 - Mai 2023",
      duration: "3 mois",
      type: "research",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description:
        "Stage en socio-anthropologie avec analyse de données communautaires et soutien à la recherche.",
      fullDescription:
        "Stage académique au sein d'un laboratoire de recherche en sciences sociales, avec participation active à des projets de recherche communautaire.",
      responsibilities: [
        "Analyse de données communautaires et organisationnelles",
        "Soutien à 8 projets de recherche en socio-anthropologie",
        "Participation à des études de terrain et collecte de données",
        "Rédaction de rapports et synthèses analytiques",
        "Appui méthodologique aux chercheurs seniors",
        "Participation à des séminaires et ateliers de recherche",
      ],
      achievements: [
        "Contribution à 3 publications scientifiques",
        "Analyse de données touchant 500+ participants",
        "Développement de compétences en méthodologie qualitative",
        "Participation à 5 études de terrain complètes",
      ],
      skills: [
        "Recherche qualitative",
        "Analyse sociale",
        "Méthodologie",
        "Rédaction scientifique",
        "Travail de terrain",
      ],
      tags: ["Recherche", "Socio-anthropologie", "Analyse", "Terrain"],
    },
    {
      id: 5,
      title: "Formateur en bureautique",
      company: "Lycée Dr Ibrahima Fofana",
      location: "Guinée",
      period: "Févr. 2017 - Oct. 2019",
      duration: "2 ans 8 mois",
      type: "training",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      description:
        "Formation et accompagnement des élèves à l'utilisation des outils bureautiques.",
      fullDescription:
        "Expérience formatrice au sein d'un établissement scolaire, avec transmission de compétences numériques fondamentales aux élèves.",
      responsibilities: [
        "Formation des élèves à l'utilisation des outils bureautiques (Word, Excel, PowerPoint, Access)",
        "Conception de programmes pédagogiques adaptés aux différents niveaux",
        "Accompagnement individualisé des élèves en difficulté",
        "Organisation d'ateliers pratiques et de projets collaboratifs",
        "Évaluation des compétences acquises et suivi des progrès",
        "Mise à jour des supports pédagogiques selon les nouvelles versions",
      ],
      achievements: [
        "Formation de 300+ élèves sur 3 années scolaires",
        "Développement d'une méthode pédagogique adaptée aux jeunes",
        "Taux de réussite aux évaluations : 92%",
        "Mise en place d'un club informatique scolaire",
      ],
      skills: [
        "Pédagogie",
        "Bureautique",
        "Formation",
        "Accompagnement",
        "Évaluation",
      ],
      tags: ["Formation", "Éducation", "Bureautique", "Pédagogie"],
    },
  ];

  const stats = [
    {
      number: "5+",
      label: "Années d'expérience",
      icon: <Clock className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "500+",
      label: "Personnes formées",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "15+",
      label: "Projets menés",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "98%",
      label: "Satisfaction",
      icon: <Star className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeFilter);

  const toggleExpand = (id) => {
    setExpandedExp(expandedExp === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
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
            <Briefcase className="w-4 h-4 text-blue-500 dark:text-purple-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-purple-400">
              Parcours Professionnel
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent">
              Expériences Professionnelles
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un parcours riche combinant expertise technique, formation et
            recherche pour une approche complète du développement
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
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}
                  >
                    {stat.icon}
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    activeFilter === filter.id
                      ? "bg-white/20"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  {filter.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 ml-8 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-cyan-500/30" />

          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isExpanded={expandedExp === experience.id}
                onToggle={() => toggleExpand(experience.id)}
              />
            ))}
          </div>
        </div>

        {/* Professional Journey Summary */}
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
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Évolution Professionnelle
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Mon parcours professionnel illustre une évolution
                      constante vers des rôles plus techniques et spécialisés,
                      tout en maintenant un fort engagement pour la transmission
                      des connaissances et le développement communautaire.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-green-500/20 mt-1">
                          <Zap className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          De la formation bureautique au développement web
                          fullstack
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-blue-500/20 mt-1">
                          <Zap className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          Combinaison unique de compétences techniques et
                          pédagogiques
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                          <Zap className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          Expertise croissante en HSE et gestion de projets
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-cyan-500/20 mt-1">
                          <Zap className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          Leadership dans la formation de nouvelles générations
                          tech
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:text-right">
                  <div className="inline-flex flex-col items-center lg:items-end gap-2">
                    <div className="text-4xl font-bold text-white">🎯</div>
                    <div className="text-lg font-semibold text-white">
                      Prochaine étape
                    </div>
                    <div className="text-gray-300 text-sm">
                      Lead Developer & Formateur Senior
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Compétences Développées
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "Formation & Pédagogie",
                  skills: [
                    "Animation",
                    "Conception pédagogique",
                    "Mentorat",
                    "Évaluation",
                  ],
                  level: 95,
                },
                {
                  category: "Développement Web",
                  skills: [
                    "FullStack",
                    "React/Node.js",
                    "APIs REST",
                    "Bases de données",
                  ],
                  level: 90,
                },
                {
                  category: "Gestion de Projet",
                  skills: ["Coordination", "Planning", "Suivi", "Rapports"],
                  level: 85,
                },
                {
                  category: "Recherche & Analyse",
                  skills: [
                    "Méthodologie",
                    "Analyse qualitative",
                    "Rédaction",
                    "Terrain",
                  ],
                  level: 88,
                },
                {
                  category: "HSE & Compliance",
                  skills: [
                    "Formation HSE",
                    "Réglementation",
                    "Prévention",
                    "Audit",
                  ],
                  level: 82,
                },
                {
                  category: "Soft Skills",
                  skills: [
                    "Communication",
                    "Leadership",
                    "Adaptabilité",
                    "Résolution",
                  ],
                  level: 92,
                },
              ].map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h4>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {skillGroup.level}%
                    </div>
                  </div>

                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skillGroup.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20">
              <UserCheck className="w-8 h-8 text-blue-500" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Intéressé par mon profil professionnel ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Mon expérience diversifiée en formation, développement et
                gestion de projets pourrait être un atout pour votre
                organisation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30"
              >
                <Briefcase className="w-5 h-5" />
                <span>Discuter collaboration</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv/CV_Ahmed_Kipertino.pdf"
                download="CV_Ahmed_Kipertino.pdf"
                className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-bold flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-700"
              >
                <FileText className="w-5 h-5" />
                <span>Télécharger mon CV</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group lg:pl-16"
    >
      {/* Timeline dot for desktop */}
      <div className="hidden lg:block absolute top-8 left-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2" />

      {/* Timeline connector for desktop */}
      <div className="hidden lg:block absolute top-8 left-8 w-1 h-full bg-gradient-to-b from-blue-500/30 to-transparent transform -translate-x-1/2" />

      <div className="relative">
        {/* Card Background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          {/* Card Header */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${experience.color} bg-opacity-10`}
                  >
                    {experience.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">
                          {experience.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                          {experience.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {experience.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {experience.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onToggle}
                className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors self-start ${
                  isExpanded
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : ""
                }`}
              >
                {isExpanded ? (
                  <ChevronRight className="w-5 h-5 transform rotate-90" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </motion.button>
            </div>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={
                isExpanded
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-8">
                {/* Full Description */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Description détaillée
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {experience.fullDescription}
                  </p>
                </div>

                {/* Responsibilities & Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      Responsabilités
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`p-1 rounded-full bg-gradient-to-r ${experience.color} mt-1 flex-shrink-0`}
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      Réalisations
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-yellow-500/20 mt-1 flex-shrink-0">
                            <Star className="w-3 h-3 text-yellow-500" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Compétences développées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
            <div className="absolute right-0 top-0 w-24 h-24 border-t-2 border-r-2 border-gradient-to-r from-blue-500 to-cyan-500 rounded-tr-2xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// FileText icon component
const FileText = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export default ExperienceSection;
