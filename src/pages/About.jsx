import React, { useState, useEffect } from "react";
import {
  Code2,
  Server,
  Globe,
  Coffee,
  Zap,
  Heart,
  Rocket,
  Award,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  GitBranch,
  Terminal,
  Database,
  Cloud,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    heroParticles: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
      maxWidth: "56rem",
      margin: "0 auto",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.8s ease-out",
    },
    profileImageWrapper: {
      position: "relative",
      display: "inline-block",
      marginBottom: "2rem",
    },
    profileImageGlow: {
      position: "absolute",
      inset: "-10px",
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      borderRadius: "50%",
      filter: "blur(20px)",
      opacity: 0.5,
      animation: "pulse 3s ease-in-out infinite",
    },
    profileImage: {
      position: "relative",
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      objectFit: "cover",
      border: `4px solid ${colors.primary}`,
      boxShadow: `0 0 40px ${colors.primary}60`,
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
      fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
      color: "#94A3B8",
      lineHeight: "1.8",
      marginBottom: "2rem",
      maxWidth: "700px",
      margin: "0 auto 2rem",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 1.5rem",
      backgroundColor: `${colors.primary}20`,
      border: `2px solid ${colors.primary}40`,
      borderRadius: "50px",
      fontSize: "0.875rem",
      fontWeight: "600",
      color: colors.primary,
      marginTop: "1rem",
    },
    mainContent: {
      maxWidth: "68rem",
      margin: "0 auto",
      padding: "0 1.5rem 6rem",
    },
    section: {
      marginBottom: "5rem",
    },
    sectionTitle: {
      fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
      fontWeight: "700",
      marginBottom: "1rem",
      color: colors.text,
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    sectionSubtitle: {
      fontSize: "1.125rem",
      color: "#94A3B8",
      marginBottom: "2.5rem",
      lineHeight: "1.7",
    },
    sectionIcon: {
      width: "36px",
      height: "36px",
      color: colors.primary,
      filter: `drop-shadow(0 0 10px ${colors.primary})`,
    },
    card: {
      backgroundColor: colors.dark,
      borderRadius: "20px",
      padding: "2.5rem",
      border: `2px solid ${colors.primary}30`,
      boxShadow: `0 8px 32px ${colors.darker}80`,
      transition: "all 0.3s ease",
      marginBottom: "2rem",
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      marginTop: "2rem",
    },
    skillCard: {
      backgroundColor: colors.dark,
      borderRadius: "16px",
      padding: "2rem",
      border: `2px solid ${colors.primary}30`,
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
    skillCardGlow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    skillIcon: {
      width: "48px",
      height: "48px",
      padding: "10px",
      borderRadius: "12px",
      marginBottom: "1.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    },
    skillTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: colors.text,
      marginBottom: "0.75rem",
    },
    skillText: {
      color: "#94A3B8",
      fontSize: "0.95rem",
      lineHeight: "1.7",
      marginBottom: "1rem",
    },
    techTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginTop: "1rem",
    },
    techTag: {
      padding: "0.25rem 0.75rem",
      backgroundColor: `${colors.primary}15`,
      border: `1px solid ${colors.primary}30`,
      borderRadius: "20px",
      fontSize: "0.75rem",
      color: colors.text,
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "2rem",
      marginTop: "2rem",
    },
    statCard: {
      backgroundColor: colors.dark,
      borderRadius: "16px",
      padding: "2rem",
      textAlign: "center",
      border: `2px solid ${colors.secondary}30`,
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    statGlow: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      filter: "blur(50px)",
      opacity: 0.3,
      pointerEvents: "none",
    },
    statNumber: {
      fontSize: "3rem",
      fontWeight: "900",
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      marginBottom: "0.5rem",
      position: "relative",
    },
    statLabel: {
      color: colors.text,
      fontSize: "1rem",
      fontWeight: "600",
      position: "relative",
      marginBottom: "0.5rem",
    },
    statDescription: {
      color: "#94A3B8",
      fontSize: "0.875rem",
      position: "relative",
    },
    valuesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      marginTop: "2rem",
    },
    valueCard: {
      backgroundColor: colors.dark,
      borderRadius: "12px",
      padding: "1.75rem",
      border: `2px solid ${colors.accent}30`,
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    journeyTimeline: {
      position: "relative",
      paddingLeft: "2rem",
      borderLeft: `3px solid ${colors.primary}30`,
      marginTop: "2rem",
    },
    timelineItem: {
      marginBottom: "2.5rem",
      position: "relative",
    },
    timelineDot: {
      position: "absolute",
      left: "-2.6rem",
      top: "0.5rem",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: colors.primary,
      boxShadow: `0 0 0 4px ${colors.darker}, 0 0 20px ${colors.primary}60`,
    },
    timelineYear: {
      fontSize: "0.875rem",
      fontWeight: "700",
      color: colors.primary,
      marginBottom: "0.5rem",
    },
    timelineTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: colors.text,
      marginBottom: "0.5rem",
    },
    timelineDescription: {
      color: "#94A3B8",
      lineHeight: "1.6",
    },
  };

  const skills = [
    {
      icon: Code2,
      title: "Programming",
      description:
        "Crafting clean, efficient code with modern languages and best practices. Passionate about writing maintainable solutions that scale.",
      color: colors.primary,
      technologies: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure",
      description:
        "Automating deployments, managing infrastructure as code, and ensuring high availability with modern DevOps practices.",
      color: colors.secondary,
      technologies: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Building responsive, accessible, and performant web applications with modern frameworks and cutting-edge technologies.",
      color: colors.accent,
      technologies: ["React", "Next.js", "Node.js", "Tailwind"],
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Designing efficient database schemas, optimizing queries, and managing data architecture for scalable applications.",
      color: colors.primary,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description:
        "Architecting cloud-native solutions, leveraging serverless technologies, and optimizing cloud infrastructure costs.",
      color: colors.secondary,
      technologies: ["AWS", "Azure", "GCP", "Serverless"],
    },
    {
      icon: Terminal,
      title: "System Administration",
      description:
        "Managing Linux servers, scripting automation tasks, and maintaining secure, performant production environments.",
      color: colors.accent,
      technologies: ["Linux", "Bash", "Nginx", "Security"],
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Articles Written",
      color: colors.primary,
      description: "In-depth tutorials and guides",
    },
    {
      number: "50K+",
      label: "Monthly Readers",
      color: colors.secondary,
      description: "Growing community worldwide",
    },
    {
      number: "3+",
      label: "Years Experience",
      color: colors.accent,
      description: "In software development",
    },
    {
      number: "20+",
      label: "Projects Completed",
      color: colors.primary,
      description: "Successful deployments",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "Embracing new technologies and staying current with industry trends through constant experimentation and study.",
      color: colors.primary,
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Sharing knowledge openly, helping others grow, and contributing to the developer community's collective success.",
      color: colors.secondary,
    },
    {
      icon: Target,
      title: "Quality & Precision",
      description:
        "Writing clean, tested code with attention to detail. Every line matters, every solution is thoughtfully crafted.",
      color: colors.accent,
    },
  ];

const journey = [
  {
    year: "2025",
    title: "Full-Stack Developer & Blogger",
    description:
      "Started my professional career, working on real projects. I document challenges I face and the solutions I find, sharing insights that help me and other developers grow.",
  },
  {
    year: "2024",
    title: "Internships & Practical Experience",
    description:
      "Gained hands-on experience through internships while completing my Bachelor's. Solved real-world problems, documented solutions, and learned to collaborate in teams.",
  },
  {
    year: "2021-2024",
    title: "Bachelor's Degree & Learning Journey",
    description:
      "Studied software development, exploring web technologies, cloud frameworks, and programming fundamentals. Practiced through projects and internships, documenting both successes and difficulties.",
  },
  {
    year: "2020",
    title: "Started Coding",
    description:
      "Discovered my passion for programming, experimenting with web development, learning from mistakes, and recording solutions to improve over time.",
  },
];



  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .skill-card:hover {
          transform: translateY(-8px);
          border-color: ${colors.primary};
          box-shadow: 0 20px 40px ${colors.primary}30;
        }
        .skill-card:hover .skill-card-glow {
          opacity: 1;
        }
        .stat-card:hover {
          transform: scale(1.05);
          border-color: ${colors.secondary};
          box-shadow: 0 12px 30px ${colors.secondary}30;
        }
        .main-card:hover {
          border-color: ${colors.primary};
          box-shadow: 0 12px 48px ${colors.primary}30;
        }
        .value-card:hover {
          transform: translateY(-5px);
          border-color: ${colors.accent};
          box-shadow: 0 10px 30px ${colors.accent}20;
        }
        button:hover {
          transform: scale(1.05) !important;
        }
      `}</style>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroBackground} />
        <div style={styles.heroParticles}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor:
                  i % 3 === 0
                    ? colors.primary
                    : i % 3 === 1
                    ? colors.secondary
                    : colors.accent,
                left: `${15 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
                opacity: 0.4,
                animation: "float 3s ease-in-out infinite",
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div style={styles.heroContent}>
          <div style={styles.profileImageWrapper}>
            <div style={styles.profileImageGlow} />
            <img
              src="./lucrese.jpeg"
              alt="Chayie Lucrese"
              style={styles.profileImage}
            />
          </div>

          <h1 style={styles.title}>About Me</h1>
          <p style={styles.subtitle}>
            <p style={styles.subtitle}>
              Hello! 👋 I'm Chayie Lucrese, a full-stack developer passionate
              about building practical web solutions. This blog is my personal
              space to document challenges I encounter, how I solve them, and
              share insights that can help both myself and fellow developers
              navigate the world of coding, DevOps, and web development.
            </p>
          </p>

          <div style={styles.badge}>
            <Rocket style={{ width: "16px", height: "16px" }} />
            <span>Open for Collaboration</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Mission Statement */}
        <div style={styles.section}>
          <div className="main-card" style={styles.card}>
            <h2 style={{ ...styles.sectionTitle, marginBottom: "1rem" }}>
              <Heart style={styles.sectionIcon} />
              My Mission
            </h2>
            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.9",
                fontSize: "1.125rem",
                marginBottom: "1rem",
              }}
            >
              This blog is more than tutorials—it's a record of my development
              journey. I write about the problems I face, the mistakes I make,
              and the solutions I discover. Sharing these experiences helps me
              solidify my understanding while providing practical guidance to
              others.
            </p>
            <p
              style={{
                color: "#94A3B8",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              Whether you're starting your coding journey or are an experienced
              developer, I hope these reflections and problem-solving stories
              offer valuable lessons that can save you time, frustration, and
              help you grow.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Award style={styles.sectionIcon} />
            Core Values
          </h2>
          <p style={styles.sectionSubtitle}>
            This blog reflects my values: learning from real challenges, sharing
            solutions, and building practical skills for myself and the
            developer community.
          </p>

          <div style={styles.valuesGrid}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card"
                  style={styles.valueCard}
                >
                  <div
                    style={{
                      ...styles.skillIcon,
                      backgroundColor: `${value.color}20`,
                      width: "40px",
                      height: "40px",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon
                      style={{
                        width: "20px",
                        height: "20px",
                        color: value.color,
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: colors.text,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      color: "#94A3B8",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expertise Areas */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Zap style={styles.sectionIcon} />
            Areas of Expertise
          </h2>
          <p style={styles.sectionSubtitle}>
            The technologies and domains I work with regularly and write about
            on this blog. Each area represents years of hands-on experience and
            continuous learning.
          </p>
          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="skill-card"
                  style={styles.skillCard}
                >
                  <div
                    className="skill-card-glow"
                    style={styles.skillCardGlow}
                  />
                  <div
                    style={{
                      ...styles.skillIcon,
                      backgroundColor: `${skill.color}20`,
                    }}
                  >
                    <Icon
                      style={{
                        width: "28px",
                        height: "28px",
                        color: skill.color,
                      }}
                    />
                  </div>
                  <h3 style={styles.skillTitle}>{skill.title}</h3>
                  <p style={styles.skillText}>{skill.description}</p>
                  <div style={styles.techTags}>
                    {skill.technologies.map((tech, i) => (
                      <span key={i} style={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Coffee style={styles.sectionIcon} />
            By The Numbers
          </h2>
          <p style={styles.sectionSubtitle}>
            Milestones and metrics that reflect the growth of this blog and my
            development journey.
          </p>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={styles.statCard}>
                <div
                  style={{ ...styles.statGlow, backgroundColor: stat.color }}
                />
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
                <div style={styles.statDescription}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <GitBranch style={styles.sectionIcon} />
            My Journey
          </h2>
          <p style={styles.sectionSubtitle}>
            Key milestones in my development career—from first line of code to
            where I am today.
          </p>
          <div style={styles.journeyTimeline}>
            {journey.map((item, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineDot} />
                <div style={styles.timelineYear}>{item.year}</div>
                <div style={styles.timelineTitle}>{item.title}</div>
                <div style={styles.timelineDescription}>{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={styles.section}>
          <div
            className="main-card"
            style={{
              ...styles.card,
              textAlign: "center",
              background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary}15 100%)`,
              border: `2px solid ${colors.primary}40`,
            }}
          >
            <BookOpen
              style={{
                width: "48px",
                height: "48px",
                color: colors.primary,
                margin: "0 auto 1.5rem",
                filter: `drop-shadow(0 0 20px ${colors.primary}60)`,
              }}
            />
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: colors.text,
                marginBottom: "1rem",
              }}
            >
              Let's Connect & Collaborate
            </h2>
            <p
              style={{
                color: "#94A3B8",
                lineHeight: "1.8",
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
                fontSize: "1.05rem",
              }}
            >
              If you have questions, want to collaborate, or just discuss the
              challenges of coding, feel free to reach out! I love sharing
              solutions and learning from experiences—both mine and yours.
            </p>

            <button
              style={{
                backgroundColor: colors.primary,
                color: "white",
                padding: "1rem 3rem",
                borderRadius: "50px",
                border: "none",
                fontSize: "1.125rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: `0 8px 24px ${colors.primary}50`,
              }}
              
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = colors.secondary;
                e.currentTarget.style.boxShadow = `0 12px 32px ${colors.secondary}50`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.boxShadow = `0 8px 24px ${colors.primary}50`;
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
