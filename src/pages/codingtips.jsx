import React, { useState, CSSProperties } from "react";
import {
  Code2,
  Lightbulb,
  Zap,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Terminal,
  GitBranch,
  Database,
  Layout,
  Shield,
  Sparkles,
  TrendingUp,
  Clock,
  Star,
  Search,
} from "lucide-react";

const CodingTips = () => {
  const [selectedCategory, setSelectedCategory] = useState < string > "all";
  const [searchQuery, setSearchQuery] = useState < string > "";

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
    },
    heroBackground: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(circle at 50% 0%, ${colors.primary}15 0%, transparent 50%)`,
      pointerEvents: "none",
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
      maxWidth: "56rem",
      margin: "0 auto",
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
      border: `2px solid ${colors.primary}30`,
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
    categoriesSection: {
      marginBottom: "3rem",
    },
    categoriesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "1rem",
      marginBottom: "2rem",
    },
    categoryCard: {
      backgroundColor: colors.dark,
      padding: "1.25rem",
      borderRadius: "12px",
      border: `2px solid ${colors.primary}30`,
      cursor: "pointer",
      transition: "all 0.3s ease",
      textAlign: "center",
    },
    categoryIcon: {
      margin: "0 auto 0.75rem",
      padding: "0.75rem",
      borderRadius: "10px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    categoryName: {
      fontSize: "0.875rem",
      fontWeight: "600",
      color: colors.text,
      marginBottom: "0.25rem",
    },
    categoryCount: {
      fontSize: "0.75rem",
      color: "#94A3B8",
    },
    tipsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "2rem",
    },
    tipCard: {
      backgroundColor: colors.dark,
      borderRadius: "16px",
      padding: "2rem",
      border: `2px solid ${colors.primary}30`,
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
    featuredBadge: {
      position: "absolute",
      top: "1rem",
      right: "1rem",
      backgroundColor: colors.accent,
      color: colors.darker,
      padding: "0.25rem 0.75rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
    },
    tipHeader: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1rem",
    },
    tipIcon: {
      width: "40px",
      height: "40px",
      padding: "8px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    tipMeta: {
      display: "flex",
      gap: "1rem",
      fontSize: "0.75rem",
      color: "#94A3B8",
      marginBottom: "1rem",
    },
    tipTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: colors.text,
      marginBottom: "0.75rem",
    },
    tipDescription: {
      color: "#94A3B8",
      lineHeight: "1.7",
      marginBottom: "1.5rem",
    },
    tipsList: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 1.5rem 0",
    },
    tipsListItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
      marginBottom: "0.75rem",
      color: "#CBD5E1",
      lineHeight: "1.6",
    },
    codeBlock: {
      backgroundColor: colors.darker,
      border: `1px solid ${colors.primary}20`,
      borderRadius: "8px",
      padding: "1rem",
      fontSize: "0.875rem",
      fontFamily: "monospace",
      color: colors.text,
      overflowX: "auto",
      marginTop: "1rem",
    },
    readMoreBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      color: colors.primary,
      fontWeight: "600",
      fontSize: "0.875rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    difficultyBadge: {
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      borderRadius: "20px",
      fontSize: "0.75rem",
      fontWeight: "600",
    },
    statsBar: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1.5rem",
      marginBottom: "3rem",
    },
    statCard: {
      backgroundColor: colors.dark,
      padding: "1.5rem",
      borderRadius: "12px",
      border: `2px solid ${colors.secondary}30`,
      textAlign: "center",
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
  };

  const categories = [
    {
      id: "all",
      name: "All Tips",
      icon: Sparkles,
      color: colors.text,
      count: 12,
    },
    {
      id: "best-practices",
      name: "Best Practices",
      icon: CheckCircle,
      color: colors.primary,
      count: 4,
    },
    {
      id: "performance",
      name: "Performance",
      icon: Zap,
      color: colors.accent,
      count: 3,
    },
    {
      id: "architecture",
      name: "Architecture",
      icon: Layout,
      color: colors.secondary,
      count: 2,
    },
    {
      id: "git",
      name: "Git & Version Control",
      icon: GitBranch,
      color: colors.primary,
      count: 2,
    },
    {
      id: "security",
      name: "Security",
      icon: Shield,
      color: colors.accent,
      count: 1,
    },
  ];

  const tips = [
    {
      id: 1,
      category: "best-practices",
      title: "Write Clean, Self-Documenting Code",
      description:
        "Good code should read like prose. Use meaningful variable names and clear function signatures.",
      difficulty: "Beginner",
      readTime: "5 min",
      featured: true,
      tips: [
        "Use descriptive variable names that explain intent, not implementation",
        "Keep functions small and focused on a single responsibility",
        "Avoid magic numbers - use named constants instead",
        'Write comments for "why", not "what" - the code should explain what',
      ],
      codeExample: `// Bad
const x = u * 0.8;

// Good
const DISCOUNT_RATE = 0.8;
const discountedPrice = originalPrice * DISCOUNT_RATE;`,
    },
    {
      id: 2,
      category: "performance",
      title: "Optimize React Re-renders",
      description:
        "Minimize unnecessary re-renders to keep your React apps fast and responsive.",
      difficulty: "Intermediate",
      readTime: "8 min",
      tips: [
        "Use React.memo for expensive components",
        "Leverage useMemo and useCallback hooks wisely",
        "Split large components into smaller, focused ones",
        "Use React DevTools Profiler to identify bottlenecks",
      ],
      codeExample: `const MemoizedComponent = React.memo(({ data }) => {
  return <ExpensiveComponent data={data} />;
});`,
    },
    {
      id: 3,
      category: "git",
      title: "Master Git Commit Messages",
      description:
        "Well-written commit messages make your project history a valuable resource.",
      difficulty: "Beginner",
      readTime: "4 min",
      featured: true,
      tips: [
        "Start with a verb in imperative mood (Add, Fix, Update)",
        "Keep the first line under 50 characters",
        'Use the body to explain "why" and "what", not "how"',
        "Reference issue numbers when applicable",
      ],
      codeExample: `feat: Add user authentication with JWT

Implemented JWT-based authentication to secure API endpoints.
Added login and registration flows with proper validation.

Closes #123`,
    },
    {
      id: 4,
      category: "architecture",
      title: "Embrace SOLID Principles",
      description:
        "Apply SOLID principles to write maintainable, scalable object-oriented code.",
      difficulty: "Advanced",
      readTime: "12 min",
      tips: [
        "Single Responsibility: Each class should have one reason to change",
        "Open/Closed: Open for extension, closed for modification",
        "Liskov Substitution: Subtypes must be substitutable for base types",
        "Interface Segregation: Many specific interfaces over one general interface",
        "Dependency Inversion: Depend on abstractions, not concretions",
      ],
    },
    {
      id: 5,
      category: "best-practices",
      title: "Error Handling Done Right",
      description:
        "Robust error handling makes your applications reliable and maintainable.",
      difficulty: "Intermediate",
      readTime: "6 min",
      tips: [
        "Always handle errors explicitly - never silently fail",
        "Provide meaningful error messages for debugging",
        "Use custom error types for different error categories",
        "Log errors with context (timestamp, user ID, stack trace)",
      ],
      codeExample: `try {
  await fetchUserData(userId);
} catch (error) {
  logger.error('Failed to fetch user data', {
    userId,
    error: error.message,
    timestamp: new Date(),
  });
  throw new UserDataError('Unable to load user', error);
}`,
    },
    {
      id: 6,
      category: "performance",
      title: "Database Query Optimization",
      description:
        "Fast queries lead to fast applications. Learn to write efficient database queries.",
      difficulty: "Intermediate",
      readTime: "10 min",
      tips: [
        "Use indexes on frequently queried columns",
        "Avoid N+1 queries - use joins or batch loading",
        "Select only the columns you need, not SELECT *",
        "Use EXPLAIN to analyze query performance",
        "Consider caching for frequently accessed data",
      ],
    },
    {
      id: 7,
      category: "security",
      title: "Secure Your APIs",
      description:
        "Security should never be an afterthought. Protect your APIs from common vulnerabilities.",
      difficulty: "Advanced",
      readTime: "15 min",
      featured: true,
      tips: [
        "Always validate and sanitize user input",
        "Use HTTPS everywhere - no exceptions",
        "Implement rate limiting to prevent abuse",
        "Use strong authentication (JWT, OAuth2)",
        "Keep dependencies updated and scan for vulnerabilities",
        "Never expose sensitive data in error messages",
      ],
    },
    {
      id: 8,
      category: "best-practices",
      title: "Test-Driven Development",
      description:
        "Write tests first to drive better design and catch bugs early.",
      difficulty: "Intermediate",
      readTime: "7 min",
      tips: [
        "Write the test before the implementation (Red-Green-Refactor)",
        "Keep tests simple and focused on one thing",
        "Use descriptive test names that explain the expected behavior",
        "Aim for high coverage, but focus on critical paths",
        "Mock external dependencies for faster, reliable tests",
      ],
    },
    {
      id: 9,
      category: "performance",
      title: "Frontend Performance Optimization",
      description:
        "Fast-loading websites provide better user experience and improve SEO.",
      difficulty: "Intermediate",
      readTime: "9 min",
      tips: [
        "Lazy load images and components below the fold",
        "Minify and compress CSS, JavaScript, and images",
        "Use a CDN for static assets",
        "Implement code splitting for large applications",
        "Optimize web fonts with font-display: swap",
        "Leverage browser caching with proper cache headers",
      ],
    },
    {
      id: 10,
      category: "git",
      title: "Git Branching Strategies",
      description:
        "Adopt a branching strategy that fits your team and workflow.",
      difficulty: "Intermediate",
      readTime: "8 min",
      tips: [
        "Use feature branches for new development",
        "Keep main/master branch always deployable",
        "Use pull requests for code review",
        "Delete branches after merging to keep repo clean",
        "Consider GitFlow or GitHub Flow based on team size",
      ],
    },
    {
      id: 11,
      category: "architecture",
      title: "Microservices Design Patterns",
      description:
        "Build scalable distributed systems with proven microservices patterns.",
      difficulty: "Advanced",
      readTime: "14 min",
      tips: [
        "Keep services loosely coupled and highly cohesive",
        "Use API gateways for routing and authentication",
        "Implement circuit breakers for fault tolerance",
        "Use event-driven architecture for async communication",
        "Implement distributed tracing for debugging",
        "Design for failure - every service can go down",
      ],
    },
    {
      id: 12,
      category: "best-practices",
      title: "Code Review Best Practices",
      description:
        "Effective code reviews improve code quality and team knowledge.",
      difficulty: "Beginner",
      readTime: "6 min",
      tips: [
        "Review code within 24 hours to maintain momentum",
        "Be constructive and respectful in feedback",
        "Focus on logic, design, and maintainability, not style",
        "Ask questions rather than making demands",
        "Approve when satisfied, request changes when needed",
        "Learn from reviews - both giving and receiving",
      ],
    },
  ];

  const filteredTips = tips.filter((tip) => {
    const matchesCategory =
      selectedCategory === "all" || tip.category === selectedCategory;
    const matchesSearch =
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "#10B981";
      case "Intermediate":
        return colors.accent;
      case "Advanced":
        return "#EF4444";
      default:
        return colors.text;
    }
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category?.color || colors.primary;
  };

  return (
    <div style={styles.container}>
      <style>{`
        .category-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.primary};
          box-shadow: 0 10px 30px ${colors.primary}20;
        }
        .category-card.active {
          border-color: ${colors.primary};
          background-color: ${colors.primary}15;
        }
        .tip-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.primary};
          box-shadow: 0 20px 40px ${colors.primary}30;
        }
        .read-more:hover {
          gap: 0.75rem;
          color: ${colors.secondary};
        }
        input:focus {
          border-color: ${colors.primary} !important;
          box-shadow: 0 0 0 3px ${colors.primary}20 !important;
        }
      `}</style>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroBackground} />
        <div style={styles.heroContent}>
          <div style={{ marginBottom: "2rem" }}>
            <Code2
              style={{
                width: "64px",
                height: "64px",
                color: colors.primary,
                margin: "0 auto",
                filter: `drop-shadow(0 0 20px ${colors.primary}60)`,
              }}
            />
          </div>
          <h1 style={styles.title}>Coding Tips & Best Practices</h1>
          <p style={styles.subtitle}>
            Curated collection of practical coding tips, best practices, and
            proven techniques to level up your development skills. From
            beginners to advanced developers, there's something here for
            everyone.
          </p>

          {/* Search Bar */}
          <div style={styles.searchBar}>
            <Search
              style={{ ...styles.searchIcon, width: "20px", height: "20px" }}
            />
            <input
              type="text"
              placeholder="Search tips..."
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
          <div style={styles.statCard}>
            <div style={styles.statNumber}>12+</div>
            <div style={styles.statLabel}>Coding Tips</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>6</div>
            <div style={styles.statLabel}>Categories</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>100+</div>
            <div style={styles.statLabel}>Pro Techniques</div>
          </div>
        </div>

        {/* Categories */}
        <div style={styles.categoriesSection}>
          <div style={styles.categoriesGrid}>
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <div
                  key={category.id}
                  className={`category-card ${isActive ? "active" : ""}`}
                  style={styles.categoryCard}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div
                    style={{
                      ...styles.categoryIcon,
                      backgroundColor: `${category.color}20`,
                    }}
                  >
                    <Icon
                      style={{
                        width: "24px",
                        height: "24px",
                        color: category.color,
                      }}
                    />
                  </div>
                  <div style={styles.categoryName}>{category.name}</div>
                  <div style={styles.categoryCount}>{category.count} tips</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tips Grid */}
        <div style={styles.tipsGrid}>
          {filteredTips.map((tip) => {
            const categoryColor = getCategoryColor(tip.category);
            return (
              <div key={tip.id} className="tip-card" style={styles.tipCard}>
                {tip.featured && (
                  <div style={styles.featuredBadge}>
                    <Star style={{ width: "12px", height: "12px" }} />
                    Featured
                  </div>
                )}

                <div style={styles.tipHeader}>
                  <div
                    style={{
                      ...styles.tipIcon,
                      backgroundColor: `${categoryColor}20`,
                    }}
                  >
                    <Lightbulb
                      style={{
                        width: "24px",
                        height: "24px",
                        color: categoryColor,
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        ...styles.difficultyBadge,
                        backgroundColor: `${getDifficultyColor(
                          tip.difficulty
                        )}20`,
                        color: getDifficultyColor(tip.difficulty),
                      }}
                    >
                      {tip.difficulty}
                    </div>
                  </div>
                </div>

                <div style={styles.tipMeta}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <Clock style={{ width: "14px", height: "14px" }} />
                    {tip.readTime}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <BookOpen style={{ width: "14px", height: "14px" }} />
                    {tip.tips.length} tips
                  </span>
                </div>

                <h3 style={styles.tipTitle}>{tip.title}</h3>
                <p style={styles.tipDescription}>{tip.description}</p>

                <ul style={styles.tipsList}>
                  {tip.tips.slice(0, 3).map((item, index) => (
                    <li key={index} style={styles.tipsListItem}>
                      <CheckCircle
                        style={{
                          width: "16px",
                          height: "16px",
                          color: colors.primary,
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {tip.codeExample && (
                  <pre style={styles.codeBlock}>{tip.codeExample}</pre>
                )}

                <div className="read-more" style={styles.readMoreBtn}>
                  <span>Read full article</span>
                  <ArrowRight style={{ width: "16px", height: "16px" }} />
                </div>
              </div>
            );
          })}
        </div>

        {filteredTips.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 1rem",
              color: "#94A3B8",
            }}
          >
            <BookOpen
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 1rem",
                opacity: 0.5,
              }}
            />
            <p style={{ fontSize: "1.125rem" }}>
              No tips found matching your search.
            </p>
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodingTips;
