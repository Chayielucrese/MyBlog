import { useState, useEffect, useRef } from "react";
import {
  Code2,
  BookOpen,
  Sparkles,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const autoScrollInterval = useRef(null);

 const startAutoScroll = () => {
   const container = scrollContainerRef.current;
   if (!container) return;

   autoScrollInterval.current = setInterval(() => {
     if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
       scroll("right");
     } else {
       container.scrollTo({ left: 0, behavior: "smooth" }); // loop to start
     }
   }, 4000);
 };

 useEffect(() => {
   startAutoScroll();
   return () => clearInterval(autoScrollInterval.current);
 }, []);


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
      title: "Mastering Express Middleware",
      excerpt:
        "Learn how to build efficient backend systems with custom middleware in Express.js...",
      icon: BookOpen,
    },
    {
      id: 5,
      title: "Sequelize ORM Simplified",
      excerpt:
        "Sequelize makes database management seamless for Node.js applications...",
      icon: Code2,
    },
  ];

  const checkScrollArrows = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      setTimeout(checkScrollArrows, 300);
    }
  };

const styles = {
  container: { minHeight: "100vh", backgroundColor: colors.darker },
  heroSection: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url('./meme.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: `scale(${1 + scrollY * 0.0005})`,
    filter: "blur(3px) brightness(0.5)",
    opacity: 0.6,
  },
  gradientOverlay: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.secondary}15 50%, ${colors.accent}10 100%)`,
  },
  mainContent: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    padding: "0 1.5rem",
    maxWidth: "56rem",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: "all 1s ease-out",
  },
  title: {
    fontSize: "clamp(3rem, 8vw, 5rem)",
    fontWeight: "bold",
    marginBottom: "1rem",
    background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: `0 0 60px ${colors.primary}30`,
  },
  subtitle: {
    fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
    color: colors.text,
    marginBottom: "2rem",
    fontWeight: 300,
  },
  aboutSection: {
    backgroundColor: colors.dark,
    padding: "4rem 1.5rem",
    textAlign: "center",
  },
  aboutText: {
    color: colors.text,
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.8",
  },
  statsSection: {
    backgroundColor: colors.darker,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2rem",
    padding: "4rem 1.5rem",
    textAlign: "center",
  },
  statBlock: { color: colors.text },
  statNumber: {
    color: colors.primary,
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  sectionTitle: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "bold",
    color: colors.text,
    textShadow: `0 0 30px ${colors.primary}30`,
    marginBottom: "2rem",
    textAlign: "center",
  },
  contentSection: {
    position: "relative",
    zIndex: 10,
    padding: "5rem 1.5rem",
    backgroundColor: colors.dark,
  },
  contentContainer: { maxWidth: "72rem", margin: "0 auto" },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  card: {
    position: "relative",
    backgroundColor: colors.darker,
    borderRadius: "16px",
    padding: "2rem",
    border: "2px solid",
    borderColor: `${colors.primary}40`,
    transition: "all 0.3s ease",
    cursor: "pointer",
    overflow: "hidden",
    boxShadow: `0 4px 20px ${colors.dark}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "320px",
    maxWidth: "320px",
    textDecoration: "none",
  },
  cardGradient: {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.secondary}20 100%)`,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  cardContent: { position: "relative", zIndex: 10 },
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
  cardIconSvg: { width: "24px", height: "24px", color: "white" },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: colors.text,
    marginBottom: "0.75rem",
  },
  cardText: { color: "#94A3B8", lineHeight: "1.6", marginBottom: "1rem" },
  cardLink: {
    marginTop: "auto",
    color: colors.primary,
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  closingNote: {
    backgroundColor: colors.dark,
    padding: "3rem 1.5rem",
    textAlign: "center",
  },
  quote: {
    color: colors.text,
    fontStyle: "italic",
    maxWidth: "700px",
    margin: "0 auto",
  },
  tag: {
    backgroundColor: `${colors.dark}90`,
    padding: "0.75rem 1.5rem",
    borderRadius: "50px",
    border: "2px solid",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    textDecoration: "none",
  },
  tagCyan: { borderColor: colors.primary, color: colors.text },
  tagPurple: { borderColor: colors.secondary, color: colors.text },
  scrollIndicator: { animation: "bounce 2s ease-in-out infinite" },
  arrow: {
    width: "32px",
    height: "32px",
    color: colors.primary,
    margin: "0 auto",
    filter: "drop-shadow(0 0 10px currentColor)",
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "128px",
    background: `linear-gradient(to top, ${colors.darker}, transparent)`,
  },
  seeMoreLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: colors.primary,
    fontSize: "1.125rem",
    fontWeight: "600",
    textDecoration: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "50px",
    border: `2px solid ${colors.primary}40`,
    backgroundColor: `${colors.primary}10`,
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  scrollWrapper: { position: "relative" },
  scrollContainer: {
    display: "flex",
    gap: "2rem",
    overflowX: "auto",
    scrollBehavior: "smooth",
    paddingBottom: "1rem",
    scrollbarWidth: "thin",
    scrollbarColor: `${colors.primary} ${colors.darker}`,
  },
  scrollButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: colors.dark,
    border: `2px solid ${colors.primary}40`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "all 0.3s ease",
    boxShadow: `0 4px 15px ${colors.darker}`,
  },
  scrollButtonLeft: { left: "-24px" },
  scrollButtonRight: { right: "-24px" },
};


  

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.backgroundImage} />
        <div style={styles.gradientOverlay} />
        <div style={styles.mainContent}>
          <Sparkles
            style={{
              width: "60px",
              height: "60px",
              color: colors.primary,
              marginBottom: "1rem",
            }}
          />
          <h1 style={styles.title}>Hey, I'm Chayie</h1>
          <p style={styles.subtitle}>
            A full-stack developer who enjoys creating clean designs and
            reliable backends that make ideas work smoothly.
          </p>
          <ArrowDown
            style={{
              width: "32px",
              height: "32px",
              color: colors.primary,
              margin: "1.5rem auto 0",
              display: "block",
              animation: "bounce 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* About Me Section */}
      <div style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.aboutText}>
          I’m <strong>Chayie Foussoum Hermanne Lucrese</strong>, a full-stack
          developer with one year of professional experience. I currently work
          in an enterprise as a full-stack developer, but I’m most comfortable
          handling backend development, building APIs, and designing efficient
          systems.
          <br />
          <br />
          This blog is where I document my coding journey, the challenges I
          face, the solutions I find, and the lessons I learn as I grow in the
          tech world.
        </p>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statBlock}>
          <h3 style={styles.statNumber}>1+</h3>
          <p>Year of Experience</p>
        </div>
        <div style={styles.statBlock}>
          <h3 style={styles.statNumber}>4+</h3>
          <p>Projects Completed</p>
        </div>
        <div style={styles.statBlock}>
          <h3 style={styles.statNumber}>50+</h3>
          <p>Challenges Solved</p>
        </div>
        <div style={styles.statBlock}>
          <h3 style={styles.statNumber}>∞</h3>
          <p>Lessons Learned</p>
        </div>
      </div>

      {/* Blog Section */}
      {/* Blog Section */}
    <div style={styles.contentSection}>
        <div style={styles.contentContainer}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Latest from the Journey</h2>
            <Link to="/blogs" className="see-more" style={styles.seeMoreLink}>
              <span>See All Blogs</span>
              <ArrowRight style={{ width: "20px", height: "20px" }} />
            </Link>
          </div>

          <div style={styles.scrollWrapper}>
            {/* Left Scroll Button */}
            {showLeftArrow && (
              <button
                className="scroll-btn"
                style={{ ...styles.scrollButton, ...styles.scrollButtonLeft }}
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft
                  style={{ width: "24px", height: "24px", color: colors.primary }}
                />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="scroll-container"
              style={styles.scrollContainer}
              onScroll={checkScrollArrows}
            >
              {blogs.map((blog) => {
                const Icon = blog.icon;
                return (
                  <Link
                    to={`/blog/${blog.id}`}
                    key={blog.id}
                    className="card"
                    style={styles.card}
                  >
                    <div className="card-gradient" style={styles.cardGradient} />
                    <div style={styles.cardContent}>
                      <div style={styles.cardIcon}>
                        <Icon style={styles.cardIconSvg} />
                      </div>
                      <h3 style={styles.cardTitle}>{blog.title}</h3>
                      <p style={styles.cardText}>{blog.excerpt}</p>
                      <span className="card-link" style={styles.cardLink}>
                        Read more →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right Scroll Button */}
            {showRightArrow && (
              <button
                className="scroll-btn"
                style={{ ...styles.scrollButton, ...styles.scrollButtonRight }}
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight
                  style={{ width: "24px", height: "24px", color: colors.primary }}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div style={styles.closingNote}>
        <p style={styles.quote}>
          “Every bug hides a lesson, and every fix brings growth. This blog is
          my way of learning out loud.”
        </p>
      </div>
    </div>
  );
}

export default Home;
