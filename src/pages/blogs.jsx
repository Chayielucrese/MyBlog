import React from "react";
import { Code2, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function Blogs() {
  const colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    accent: "#F59E0B",
    dark: "#0F172A",
    darker: "#020617",
    light: "#F1F5F9",
    text: "#E2E8F0",
  };

  const blogs = [
    {
      id: 1,
      title: "Understanding React Hooks",
      excerpt:
        "React Hooks let you use state and lifecycle features in functional components...",
      icon: Code2,
    },
    {
      id: 2,
      title: "Mastering Express Middleware",
      excerpt:
        "Learn how to build efficient backend systems with custom middleware in Express.js...",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Sequelize ORM Simplified",
      excerpt:
        "Sequelize makes database management seamless for Node.js applications...",
      icon: Code2,
    },
    {
      id: 4,
      title: "Async/Await in JavaScript",
      excerpt:
        "Master asynchronous programming in JavaScript with async/await patterns...",
      icon: Code2,
    },
    {
      id: 5,
      title: "Building REST APIs",
      excerpt:
        "A complete guide to designing scalable and secure REST APIs using Node.js...",
      icon: BookOpen,
    },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: colors.darker,
      color: colors.text,
      padding: "4rem 2rem",
    },
    header: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    headerTitle: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: "bold",
      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "0.5rem",
    },
    headerSubtitle: {
      fontSize: "1.25rem",
      color: "#94A3B8",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    card: {
      backgroundColor: colors.darker,
      border: `2px solid ${colors.primary}40`,
      borderRadius: "16px",
      padding: "2rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: `0 4px 20px ${colors.dark}`,
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: `0 8px 30px ${colors.primary}40`,
    },
    cardIcon: {
      width: "48px",
      height: "48px",
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      borderRadius: "8px",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 0 20px ${colors.primary}60`,
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "0.75rem",
    },
    cardText: {
      color: "#94A3B8",
      lineHeight: "1.6",
      marginBottom: "1rem",
      flexGrow: 1,
    },
    readMore: {
      color: colors.primary,
      fontWeight: "500",
      textDecoration: "none",
      alignSelf: "flex-start",
      transition: "color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>All Blogs</h1>
        <p style={styles.headerSubtitle}>
          Explore all coding solutions, tutorials, and tips I've shared.
        </p>
      </div>

      <div style={styles.grid}>
        {blogs.map((blog) => {
          const Icon = blog.icon;
          return (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              style={styles.card}
              className="blog-card"
            >
              <div style={styles.cardIcon}>
                <Icon
                  style={{ width: "24px", height: "24px", color: "white" }}
                />
              </div>
              <h3 style={styles.cardTitle}>{blog.title}</h3>
              <p style={styles.cardText}>{blog.excerpt}</p>
              <span style={styles.readMore}>Read more →</span>
            </Link>
          );
        })}
      </div>

      {/* Optional closing note */}
      <div style={{ textAlign: "center", marginTop: "4rem", color: "#94A3B8" }}>
        “Every blog is a step in my coding journey, sharing lessons learned
        along the way.”
      </div>

      {/* Card hover effect using inline style */}
      <style>
        {`
          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px ${colors.primary}40;
          }
          .blog-card:hover span {
            color: ${colors.secondary};
          }
        `}
      </style>
    </div>
  );
}

export default Blogs;
