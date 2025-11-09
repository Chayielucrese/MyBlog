import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Search,
  Filter,
  Clock,
  BarChart,
  Star,
  Users,
  Play,
  CheckCircle,
  Code2,
  Database,
  Globe,
  Server,
  Zap,
  Layout,
  Terminal,
  GitBranch,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
} from "lucide-react";

function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    accent: "#F59E0B",
    dark: "#0F172A",
    darker: "#020617",
    text: "#E2E8F0",
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: colors.darker,
      color: colors.text,
    },
    hero: {
      padding: "6rem 1.5rem 4rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.darker} 100%)`,
    },
    heroBackground: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(circle at 50% 0%, ${colors.secondary}15 0%, transparent 50%)`,
      pointerEvents: "none",
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
      maxWidth: "56rem",
      margin: "0 auto",
    },
    iconWrapper: {
      marginBottom: "2rem",
    },
    title: {
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      fontWeight: "bold",
      marginBottom: "1rem",
      background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
      color: "#94A3B8",
      lineHeight: "1.8",
      marginBottom: "3rem",
      maxWidth: "700px",
      margin: "0 auto 3rem",
    },
    searchBar: {
      maxWidth: "600px",
      margin: "0 auto",
      position: "relative",
    },
    searchInput: {
      width: "100%",
      padding: "1rem 3rem 1rem 3.5rem",
      backgroundColor: colors.dark,
      border: `2px solid ${colors.secondary}30`,
      borderRadius: "50px",
      color: colors.text,
      fontSize: "1rem",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    searchIcon: {
      position: "absolute",
      left: "1.25rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#94A3B8",
      pointerEvents: "none",
    },
    mainContent: {
      maxWidth: "72rem",
      margin: "0 auto",
      padding: "0 1.5rem 6rem",
    },
    statsBar: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1.5rem",
      marginBottom: "3rem",
      marginTop: "3rem",
    },
    statCard: {
      backgroundColor: colors.dark,
      padding: "1.5rem",
      borderRadius: "12px",
      border: `2px solid ${colors.secondary}30`,
      textAlign: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    statNumber: {
      fontSize: "2rem",
      fontWeight: "900",
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "0.25rem",
    },
    statLabel: {
      fontSize: "0.875rem",
      color: "#94A3B8",
    },
    filtersSection: {
      marginBottom: "3rem",
    },
    filtersHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
      flexWrap: "wrap",
      gap: "1rem",
    },
    filtersTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: colors.text,
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    sortDropdown: {
      padding: "0.75rem 1.5rem",
      backgroundColor: colors.dark,
      border: `2px solid ${colors.primary}30`,
      borderRadius: "50px",
      color: colors.text,
      fontSize: "0.875rem",
      fontWeight: "600",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.3s ease",
    },
    filterTabs: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      marginBottom: "1.5rem",
    },
    filterTab: {
      padding: "0.75rem 1.5rem",
      backgroundColor: colors.dark,
      border: `2px solid ${colors.primary}30`,
      borderRadius: "50px",
      color: colors.text,
      fontSize: "0.875rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    tutorialsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "2rem",
    },
    tutorialCard: {
      backgroundColor: colors.dark,
      borderRadius: "16px",
      overflow: "hidden",
      border: `2px solid ${colors.secondary}30`,
      transition: "all 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
    },
    cardThumbnail: {
      width: "100%",
      height: "200px",
      background: `linear-gradient(135deg, ${colors.primary}40 0%, ${colors.secondary}40 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    },
    playButton: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: colors.darker,
      border: `2px solid ${colors.primary}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      boxShadow: `0 0 30px ${colors.primary}60`,
    },
    cardContent: {
      padding: "1.5rem",
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
    },
    categoryBadge: {
      padding: "0.25rem 0.75rem",
      backgroundColor: `${colors.secondary}20`,
      border: `1px solid ${colors.secondary}40`,
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "600",
      color: colors.secondary,
    },
    levelBadge: {
      padding: "0.25rem 0.75rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "600",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: colors.text,
      marginBottom: "0.75rem",
      lineHeight: "1.4",
    },
    cardDescription: {
      fontSize: "0.95rem",
      color: "#94A3B8",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
      flex: 1,
    },
    cardMeta: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "1rem",
      borderTop: `1px solid ${colors.primary}20`,
      fontSize: "0.875rem",
      color: "#94A3B8",
    },
    metaItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    cardFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "1rem",
    },
    progressBar: {
      flex: 1,
      height: "6px",
      backgroundColor: colors.darker,
      borderRadius: "10px",
      overflow: "hidden",
      marginRight: "1rem",
    },
    progressFill: {
      height: "100%",
      background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      borderRadius: "10px",
      transition: "width 0.3s ease",
    },
    lessonCount: {
      fontSize: "0.75rem",
      color: "#94A3B8",
      whiteSpace: "nowrap",
    },
    featuredSection: {
      backgroundColor: colors.dark,
      borderRadius: "20px",
      padding: "3rem",
      marginBottom: "3rem",
      border: `2px solid ${colors.accent}40`,
      position: "relative",
      overflow: "hidden",
    },
    featuredBadge: {
      position: "absolute",
      top: "1.5rem",
      right: "1.5rem",
      padding: "0.5rem 1rem",
      backgroundColor: colors.accent,
      color: colors.darker,
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    featuredContent: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      alignItems: "center",
    },
    featuredText: {
      flex: 1,
    },
    featuredTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: colors.text,
      marginBottom: "1rem",
    },
    featuredDescription: {
      fontSize: "1.125rem",
      color: "#94A3B8",
      lineHeight: "1.7",
      marginBottom: "2rem",
    },
    featuredButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "1rem 2rem",
      backgroundColor: colors.accent,
      color: colors.darker,
      borderRadius: "50px",
      border: "none",
      fontSize: "1rem",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
    },
    emptyState: {
      textAlign: "center",
      padding: "4rem 1rem",
      color: "#94A3B8",
    },
  };

  const categories = [
    { id: "all", name: "All Tutorials", icon: Layers, color: colors.text },
    { id: "frontend", name: "Frontend", icon: Layout, color: colors.primary },
    { id: "backend", name: "Backend", icon: Server, color: colors.secondary },
    { id: "database", name: "Database", icon: Database, color: colors.accent },
    { id: "devops", name: "DevOps", icon: Terminal, color: colors.primary },
    {
      id: "fullstack",
      name: "Full Stack",
      icon: Layers,
      color: colors.secondary,
    },
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const tutorials = [
    {
      id: 1,
      title: "Complete React.js Masterclass",
      description:
        "Learn React from scratch with hooks, context API, Redux, and build real-world projects. Perfect for beginners and intermediate developers.",
      category: "frontend",
      level: "beginner",
      duration: "12 hours",
      lessons: 45,
      enrolled: 1234,
      rating: 4.8,
      progress: 0,
      featured: true,
    },
    {
      id: 2,
      title: "Node.js & Express Backend Development",
      description:
        "Build scalable REST APIs with Node.js and Express. Learn authentication, database integration, and deployment strategies.",
      category: "backend",
      level: "intermediate",
      duration: "10 hours",
      lessons: 38,
      enrolled: 892,
      rating: 4.7,
      progress: 35,
    },
    {
      id: 3,
      title: "PostgreSQL Database Design & Optimization",
      description:
        "Master database design, complex queries, indexing, and performance optimization techniques for production applications.",
      category: "database",
      level: "advanced",
      duration: "8 hours",
      lessons: 32,
      enrolled: 567,
      rating: 4.9,
      progress: 0,
    },
    {
      id: 4,
      title: "Docker & Kubernetes for DevOps",
      description:
        "Containerize applications with Docker and orchestrate with Kubernetes. Learn CI/CD pipelines and cloud deployment.",
      category: "devops",
      level: "intermediate",
      duration: "15 hours",
      lessons: 52,
      enrolled: 1089,
      rating: 4.6,
      progress: 0,
    },
    {
      id: 5,
      title: "Full Stack JavaScript Development",
      description:
        "Build complete web applications with React, Node.js, MongoDB, and deploy to production. End-to-end development guide.",
      category: "fullstack",
      level: "intermediate",
      duration: "20 hours",
      lessons: 68,
      enrolled: 2145,
      rating: 4.8,
      progress: 60,
    },
    {
      id: 6,
      title: "Advanced TypeScript Patterns",
      description:
        "Deep dive into TypeScript advanced types, generics, decorators, and architectural patterns for large-scale applications.",
      category: "frontend",
      level: "advanced",
      duration: "6 hours",
      lessons: 24,
      enrolled: 445,
      rating: 4.9,
      progress: 0,
    },
    {
      id: 7,
      title: "GraphQL API Development",
      description:
        "Learn GraphQL from basics to advanced concepts. Build type-safe APIs with Apollo Server and integrate with React.",
      category: "backend",
      level: "intermediate",
      duration: "9 hours",
      lessons: 35,
      enrolled: 678,
      rating: 4.7,
      progress: 0,
    },
    {
      id: 8,
      title: "MongoDB Fundamentals & Best Practices",
      description:
        "Master MongoDB from schema design to aggregation pipelines. Learn indexing, transactions, and production optimization.",
      category: "database",
      level: "beginner",
      duration: "7 hours",
      lessons: 28,
      enrolled: 923,
      rating: 4.6,
      progress: 0,
    },
    {
      id: 9,
      title: "AWS Cloud Architecture",
      description:
        "Build scalable cloud applications on AWS. Learn EC2, S3, Lambda, RDS, and infrastructure as code with Terraform.",
      category: "devops",
      level: "advanced",
      duration: "18 hours",
      lessons: 62,
      enrolled: 756,
      rating: 4.8,
      progress: 0,
    },
  ];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory =
      selectedCategory === "all" || tutorial.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || tutorial.level === selectedLevel;
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const sortedTutorials = [...filteredTutorials].sort((a, b) => {
    if (sortBy === "popular") return b.enrolled - a.enrolled;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "newest") return b.id - a.id;
    return 0;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case "beginner":
        return "#10B981";
      case "intermediate":
        return colors.accent;
      case "advanced":
        return "#EF4444";
      default:
        return colors.text;
    }
  };

  const featuredTutorial = tutorials.find((t) => t.featured);

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 768px) {
          .featured-content { grid-template-columns: 1fr !important; }
        }
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.secondary};
          box-shadow: 0 10px 30px ${colors.secondary}20;
        }
        .filter-tab:hover {
          border-color: ${colors.primary};
          background-color: ${colors.primary}15;
        }
        .filter-tab.active {
          background-color: ${colors.primary}20;
          border-color: ${colors.primary};
          color: ${colors.primary};
        }
        .tutorial-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.secondary};
          box-shadow: 0 20px 40px ${colors.secondary}30;
        }
        .tutorial-card:hover .play-button {
          transform: scale(1.15);
          background-color: ${colors.primary};
        }
        .featured-button:hover {
          background-color: ${colors.primary};
          color: white;
          transform: translateX(5px);
        }
        input:focus {
          border-color: ${colors.secondary} !important;
          box-shadow: 0 0 0 3px ${colors.secondary}20 !important;
        }
        select:hover {
          border-color: ${colors.primary};
        }
      `}</style>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroBackground} />
        <div style={styles.heroContent}>
          <div style={styles.iconWrapper}>
            <BookOpen
              style={{
                width: "64px",
                height: "64px",
                color: colors.secondary,
                margin: "0 auto",
                filter: `drop-shadow(0 0 20px ${colors.secondary}60)`,
              }}
            />
          </div>
          <h1 style={styles.title}>Tutorials & Courses</h1>
          <p style={styles.subtitle}>
            Comprehensive step-by-step tutorials and courses to master web
            development. Learn by building real-world projects with expert
            guidance.
          </p>

          {/* Search Bar */}
          <div style={styles.searchBar}>
            <Search
              style={{ ...styles.searchIcon, width: "20px", height: "20px" }}
            />
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Stats Bar */}
        <div style={styles.statsBar}>
          <div className="stat-card" style={styles.statCard}>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Tutorials</div>
          </div>
          <div className="stat-card" style={styles.statCard}>
            <div style={styles.statNumber}>10K+</div>
            <div style={styles.statLabel}>Students</div>
          </div>
          <div className="stat-card" style={styles.statCard}>
            <div style={styles.statNumber}>200+</div>
            <div style={styles.statLabel}>Hours Content</div>
          </div>
          <div className="stat-card" style={styles.statCard}>
            <div style={styles.statNumber}>4.8★</div>
            <div style={styles.statLabel}>Avg Rating</div>
          </div>
        </div>

        {/* Featured Tutorial */}
        {featuredTutorial && (
          <div style={styles.featuredSection}>
            <div style={styles.featuredBadge}>
              <Star style={{ width: "14px", height: "14px" }} />
              Featured Course
            </div>
            <div className="featured-content" style={styles.featuredContent}>
              <div style={styles.featuredText}>
                <h2 style={styles.featuredTitle}>{featuredTutorial.title}</h2>
                <p style={styles.featuredDescription}>
                  {featuredTutorial.description}
                </p>
                <Link
                  to={`/tutorial/${featuredTutorial.id}`}
                  className="featured-button"
                  style={styles.featuredButton}
                >
                  <Play style={{ width: "20px", height: "20px" }} />
                  Start Learning
                </Link>
              </div>
              <div>
                <div
                  style={{
                    ...styles.cardThumbnail,
                    borderRadius: "12px",
                    height: "250px",
                  }}
                >
                  <div className="play-button" style={styles.playButton}>
                    <Play
                      style={{
                        width: "24px",
                        height: "24px",
                        color: colors.primary,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Section */}
        <div style={styles.filtersSection}>
          <div style={styles.filtersHeader}>
            <h2 style={styles.filtersTitle}>
              <Filter style={{ width: "20px", height: "20px" }} />
              Filter Tutorials
            </h2>
            <select
              style={styles.sortDropdown}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Category Filters */}
          <div style={styles.filterTabs}>
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  className={`filter-tab ${isActive ? "active" : ""}`}
                  style={styles.filterTab}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "inline",
                      marginRight: "0.5rem",
                    }}
                  />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Level Filters */}
          <div style={styles.filterTabs}>
            {levels.map((level) => {
              const isActive = selectedLevel === level.id;
              return (
                <button
                  key={level.id}
                  className={`filter-tab ${isActive ? "active" : ""}`}
                  style={styles.filterTab}
                  onClick={() => setSelectedLevel(level.id)}
                >
                  {level.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div style={styles.tutorialsGrid}>
          {sortedTutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              to={`/tutorial/${tutorial.id}`}
              className="tutorial-card"
              style={styles.tutorialCard}
            >
              <div style={styles.cardThumbnail}>
                <div className="play-button" style={styles.playButton}>
                  <Play
                    style={{
                      width: "24px",
                      height: "24px",
                      color: colors.primary,
                    }}
                  />
                </div>
              </div>

              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <span style={styles.categoryBadge}>
                    {categories.find((c) => c.id === tutorial.category)?.name}
                  </span>
                  <span
                    style={{
                      ...styles.levelBadge,
                      backgroundColor: `${getLevelColor(tutorial.level)}20`,
                      color: getLevelColor(tutorial.level),
                    }}
                  >
                    {tutorial.level}
                  </span>
                </div>

                <h3 style={styles.cardTitle}>{tutorial.title}</h3>
                <p style={styles.cardDescription}>{tutorial.description}</p>

                <div style={styles.cardMeta}>
                  <div style={styles.metaItem}>
                    <Clock style={{ width: "16px", height: "16px" }} />
                    {tutorial.duration}
                  </div>
                  <div style={styles.metaItem}>
                    <BookOpen style={{ width: "16px", height: "16px" }} />
                    {tutorial.lessons} lessons
                  </div>
                  <div style={styles.metaItem}>
                    <Users style={{ width: "16px", height: "16px" }} />
                    {tutorial.enrolled}
                  </div>
                </div>

                {tutorial.progress > 0 && (
                  <div style={styles.cardFooter}>
                    <div style={styles.progressBar}>
                      <div
                        style={{
                          ...styles.progressFill,
                          width: `${tutorial.progress}%`,
                        }}
                      />
                    </div>
                    <span style={styles.lessonCount}>{tutorial.progress}%</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {sortedTutorials.length === 0 && (
          <div style={styles.emptyState}>
            <BookOpen
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 1rem",
                opacity: 0.5,
              }}
            />
            <p style={{ fontSize: "1.125rem" }}>
              No tutorials found matching your criteria.
            </p>
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tutorials;
