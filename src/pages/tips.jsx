import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  BookOpen,
  CheckCircle,
  Copy,
  Check,
  Share2,
  Heart,
  MessageCircle,
  ChevronRight,
  Lightbulb,
  Code2,
  Terminal,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

function TipDetail() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    accent: "#F59E0B",
    dark: "#0F172A",
    darker: "#020617",
    text: "#E2E8F0",
  };

  // Sample tip data - in real app, fetch based on ID
  const tip = {
    id: 1,
    title: "Write Clean, Self-Documenting Code",
    description:
      "Good code should read like prose. Learn how to write code that explains itself through meaningful naming, clear structure, and thoughtful organization.",
    category: "Best Practices",
    difficulty: "Beginner",
    readTime: "8 min",
    publishedDate: "November 5, 2024",
    author: "Your Name",
    content: [
      {
        type: "paragraph",
        text: "Clean code is one of the most important skills a developer can master. It's not just about making your code work—it's about making it understandable, maintainable, and a pleasure to work with. Let's explore the key principles of writing self-documenting code.",
      },
      {
        type: "heading",
        text: "Why Clean Code Matters",
      },
      {
        type: "paragraph",
        text: "Code is read far more often than it is written. Your teammates (and future you) will thank you for writing clear, understandable code. Clean code reduces bugs, speeds up development, and makes onboarding new team members much easier.",
      },
      {
        type: "subheading",
        text: "1. Use Meaningful Variable Names",
      },
      {
        type: "paragraph",
        text: "Variables should describe what they contain, not how they are used. Choose names that reveal intent and make the code self-explanatory.",
      },
      {
        type: "code",
        language: "javascript",
        code: `// ❌ Bad - unclear naming
const d = new Date();
const x = u * 0.8;
const arr = getData();

// ✅ Good - descriptive naming
const currentDate = new Date();
const DISCOUNT_RATE = 0.8;
const discountedPrice = originalPrice * DISCOUNT_RATE;
const activeUsers = getUserList();`,
      },
      {
        type: "subheading",
        text: "2. Keep Functions Small and Focused",
      },
      {
        type: "paragraph",
        text: 'Each function should do one thing and do it well. If you need the word "and" to describe what your function does, it probably does too much.',
      },
      {
        type: "code",
        language: "javascript",
        code: `// ❌ Bad - doing too much
function processUserDataAndSendEmail(user) {
  const validated = validateUser(user);
  const saved = saveToDatabase(validated);
  const email = formatEmail(saved);
  sendEmail(email);
  logActivity(user);
  updateCache(user);
  return saved;
}

// ✅ Good - single responsibility
function processUser(user) {
  const validatedUser = validateUser(user);
  const savedUser = saveUser(validatedUser);
  notifyUser(savedUser);
  return savedUser;
}

function notifyUser(user) {
  const email = formatWelcomeEmail(user);
  sendEmail(email);
}`,
      },
      {
        type: "subheading",
        text: "3. Avoid Magic Numbers",
      },
      {
        type: "paragraph",
        text: "Numbers scattered throughout code are hard to understand and maintain. Use named constants to give context to numeric values.",
      },
      {
        type: "code",
        language: "javascript",
        code: `// ❌ Bad - magic numbers
if (age > 18 && account.balance > 1000) {
  applyDiscount(price * 0.15);
}

// ✅ Good - named constants
const LEGAL_AGE = 18;
const PREMIUM_THRESHOLD = 1000;
const PREMIUM_DISCOUNT_RATE = 0.15;

if (age > LEGAL_AGE && account.balance > PREMIUM_THRESHOLD) {
  const discount = price * PREMIUM_DISCOUNT_RATE;
  applyDiscount(discount);
}`,
      },
      {
        type: "subheading",
        text: '4. Write Comments for "Why", Not "What"',
      },
      {
        type: "paragraph",
        text: "Your code should explain what it does. Comments should explain why you made certain decisions, especially non-obvious ones.",
      },
      {
        type: "code",
        language: "javascript",
        code: `// ❌ Bad - commenting the obvious
// Loop through users
for (let i = 0; i < users.length; i++) {
  // Save the user
  save(users[i]);
}

// ✅ Good - explaining the reasoning
// Process users in batches to avoid overwhelming the database
// with too many concurrent connections (max 100 per batch)
const BATCH_SIZE = 100;
for (let i = 0; i < users.length; i += BATCH_SIZE) {
  const batch = users.slice(i, i + BATCH_SIZE);
  await processBatch(batch);
}`,
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Choose descriptive names that reveal intent",
          "Keep functions focused on a single task",
          "Replace magic numbers with named constants",
          "Comment on why, not what",
          "Make your code readable like a well-written story",
          "Refactor regularly to maintain code quality",
        ],
      },
      {
        type: "paragraph",
        text: "Remember, clean code is not about following rules rigidly—it's about making your code easy to understand and maintain. Start with these principles, and you'll develop an intuition for what makes code clean and readable.",
      },
    ],
    tags: ["Clean Code", "Best Practices", "Code Quality", "Readability"],
    relatedTips: [
      { id: 2, title: "SOLID Principles Explained", category: "Architecture" },
      {
        id: 3,
        title: "Code Review Best Practices",
        category: "Best Practices",
      },
      { id: 4, title: "Refactoring Techniques", category: "Best Practices" },
    ],
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

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

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: colors.darker,
      color: colors.text,
    },
    hero: {
      padding: "6rem 1.5rem 3rem",
      background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.darker} 100%)`,
      borderBottom: `1px solid ${colors.primary}20`,
    },
    heroContent: {
      maxWidth: "56rem",
      margin: "0 auto",
    },
    backLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      color: colors.primary,
      textDecoration: "none",
      fontSize: "0.875rem",
      fontWeight: "600",
      marginBottom: "2rem",
      transition: "all 0.3s ease",
    },
    metaBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
      marginBottom: "2rem",
      fontSize: "0.875rem",
      color: "#94A3B8",
    },
    metaItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    categoryBadge: {
      display: "inline-block",
      padding: "0.5rem 1rem",
      backgroundColor: `${colors.primary}20`,
      border: `1px solid ${colors.primary}40`,
      borderRadius: "20px",
      color: colors.primary,
      fontSize: "0.875rem",
      fontWeight: "600",
      marginBottom: "1rem",
    },
    title: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: colors.text,
      lineHeight: "1.2",
    },
    description: {
      fontSize: "1.25rem",
      color: "#94A3B8",
      lineHeight: "1.7",
      marginBottom: "2rem",
    },
    difficultyBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 1rem",
      borderRadius: "20px",
      fontSize: "0.875rem",
      fontWeight: "600",
    },
    mainContent: {
      maxWidth: "56rem",
      margin: "0 auto",
      padding: "3rem 1.5rem",
    },
    contentBlock: {
      marginBottom: "2.5rem",
    },
    paragraph: {
      fontSize: "1.125rem",
      lineHeight: "1.8",
      color: "#CBD5E1",
      marginBottom: "1.5rem",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "700",
      color: colors.text,
      marginTop: "3rem",
      marginBottom: "1.5rem",
      paddingBottom: "0.75rem",
      borderBottom: `2px solid ${colors.primary}30`,
    },
    subheading: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: colors.text,
      marginTop: "2.5rem",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    codeBlock: {
      position: "relative",
      backgroundColor: colors.dark,
      border: `1px solid ${colors.primary}20`,
      borderRadius: "12px",
      padding: "1.5rem",
      marginBottom: "2rem",
      overflow: "hidden",
    },
    codeHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
      paddingBottom: "0.75rem",
      borderBottom: `1px solid ${colors.primary}20`,
    },
    codeLanguage: {
      fontSize: "0.75rem",
      fontWeight: "600",
      color: colors.primary,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    copyButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 1rem",
      backgroundColor: `${colors.primary}20`,
      border: `1px solid ${colors.primary}40`,
      borderRadius: "6px",
      color: colors.primary,
      fontSize: "0.875rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    code: {
      fontFamily: "monospace",
      fontSize: "0.9rem",
      lineHeight: "1.6",
      color: colors.text,
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
    },
    list: {
      listStyle: "none",
      padding: 0,
      marginBottom: "2rem",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      marginBottom: "1rem",
      fontSize: "1.125rem",
      lineHeight: "1.7",
      color: "#CBD5E1",
    },
    tagsSection: {
      padding: "2rem 0",
      borderTop: `1px solid ${colors.primary}20`,
      borderBottom: `1px solid ${colors.primary}20`,
      marginTop: "3rem",
    },
    tagsTitle: {
      fontSize: "1rem",
      fontWeight: "600",
      color: colors.text,
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    tagsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
    },
    tag: {
      padding: "0.5rem 1rem",
      backgroundColor: `${colors.secondary}15`,
      border: `1px solid ${colors.secondary}30`,
      borderRadius: "20px",
      color: colors.text,
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    actionsBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2rem 0",
      flexWrap: "wrap",
      gap: "1rem",
    },
    actionButtons: {
      display: "flex",
      gap: "1rem",
    },
    actionButton: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
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
    socialShare: {
      display: "flex",
      gap: "0.75rem",
    },
    socialButton: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: colors.dark,
      border: `2px solid ${colors.primary}30`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    relatedSection: {
      backgroundColor: colors.dark,
      padding: "3rem 1.5rem",
      marginTop: "3rem",
    },
    relatedContainer: {
      maxWidth: "56rem",
      margin: "0 auto",
    },
    relatedTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      color: colors.text,
      marginBottom: "2rem",
    },
    relatedGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
    },
    relatedCard: {
      backgroundColor: colors.darker,
      padding: "1.5rem",
      borderRadius: "12px",
      border: `2px solid ${colors.primary}30`,
      textDecoration: "none",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    relatedCardCategory: {
      fontSize: "0.75rem",
      color: colors.primary,
      fontWeight: "600",
      marginBottom: "0.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    relatedCardTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: colors.text,
      marginBottom: "0.5rem",
    },
    relatedCardLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      color: colors.primary,
      fontSize: "0.875rem",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        .back-link:hover {
          transform: translateX(-5px);
          color: ${colors.secondary};
        }
        .copy-btn:hover {
          background-color: ${colors.primary}30;
          border-color: ${colors.primary};
        }
        .tag:hover {
          background-color: ${colors.secondary}25;
          border-color: ${colors.secondary};
          transform: translateY(-2px);
        }
        .action-btn:hover {
          border-color: ${colors.primary};
          background-color: ${colors.primary}15;
          transform: translateY(-2px);
        }
        .action-btn.liked {
          background-color: ${colors.accent}20;
          border-color: ${colors.accent};
          color: ${colors.accent};
        }
        .social-btn:hover {
          border-color: ${colors.primary};
          background-color: ${colors.primary}15;
          transform: scale(1.1);
        }
        .related-card:hover {
          border-color: ${colors.primary};
          transform: translateY(-5px);
          box-shadow: 0 10px 30px ${colors.primary}20;
        }
      `}</style>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <Link to="/codetips" className="back-link" style={styles.backLink}>
            <ArrowLeft style={{ width: "16px", height: "16px" }} />
            Back to All Tips
          </Link>

          <div style={styles.categoryBadge}>{tip.category}</div>

          <h1 style={styles.title}>{tip.title}</h1>
          <p style={styles.description}>{tip.description}</p>

          <div style={styles.metaBar}>
            <div style={styles.metaItem}>
              <Clock style={{ width: "16px", height: "16px" }} />
              <span>{tip.readTime} read</span>
            </div>
            <div style={styles.metaItem}>
              <Calendar style={{ width: "16px", height: "16px" }} />
              <span>{tip.publishedDate}</span>
            </div>
            <div style={styles.metaItem}>
              <BookOpen style={{ width: "16px", height: "16px" }} />
              <span>By {tip.author}</span>
            </div>
            <div
              style={{
                ...styles.difficultyBadge,
                backgroundColor: `${getDifficultyColor(tip.difficulty)}20`,
                color: getDifficultyColor(tip.difficulty),
              }}
            >
              <Lightbulb style={{ width: "14px", height: "14px" }} />
              {tip.difficulty}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {tip.content.map((block, index) => (
          <div key={index} style={styles.contentBlock}>
            {block.type === "paragraph" && (
              <p style={styles.paragraph}>{block.text}</p>
            )}

            {block.type === "heading" && (
              <h2 style={styles.heading}>{block.text}</h2>
            )}

            {block.type === "subheading" && (
              <h3 style={styles.subheading}>
                <Code2
                  style={{
                    width: "24px",
                    height: "24px",
                    color: colors.primary,
                  }}
                />
                {block.text}
              </h3>
            )}

            {block.type === "code" && (
              <div style={styles.codeBlock}>
                <div style={styles.codeHeader}>
                  <span style={styles.codeLanguage}>{block.language}</span>
                  <button
                    className="copy-btn"
                    style={styles.copyButton}
                    onClick={() => copyCode(block.code)}
                  >
                    {copied ? (
                      <>
                        <Check style={{ width: "14px", height: "14px" }} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy style={{ width: "14px", height: "14px" }} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre style={styles.code}>{block.code}</pre>
              </div>
            )}

            {block.type === "list" && (
              <ul style={styles.list}>
                {block.items.map((item, i) => (
                  <li key={i} style={styles.listItem}>
                    <CheckCircle
                      style={{
                        width: "20px",
                        height: "20px",
                        color: colors.primary,
                        flexShrink: 0,
                        marginTop: "4px",
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Tags Section */}
        <div style={styles.tagsSection}>
          <div style={styles.tagsTitle}>
            <Tag style={{ width: "18px", height: "18px" }} />
            Tags
          </div>
          <div style={styles.tagsContainer}>
            {tip.tags.map((tag, index) => (
              <div key={index} className="tag" style={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div style={styles.actionsBar}>
          <div style={styles.actionButtons}>
            <button
              className={`action-btn ${liked ? "liked" : ""}`}
              style={styles.actionButton}
              onClick={handleLike}
            >
              <Heart
                style={{
                  width: "18px",
                  height: "18px",
                  fill: liked ? "currentColor" : "none",
                }}
              />
              {likeCount} Likes
            </button>
            <button className="action-btn" style={styles.actionButton}>
              <MessageCircle style={{ width: "18px", height: "18px" }} />
              12 Comments
            </button>
          </div>

          <div style={styles.socialShare}>
            <button className="social-btn" style={styles.socialButton}>
              <Twitter
                style={{ width: "18px", height: "18px", color: colors.primary }}
              />
            </button>
            <button className="social-btn" style={styles.socialButton}>
              <Linkedin
                style={{ width: "18px", height: "18px", color: colors.primary }}
              />
            </button>
            <button className="social-btn" style={styles.socialButton}>
              <Github
                style={{ width: "18px", height: "18px", color: colors.primary }}
              />
            </button>
            <button className="social-btn" style={styles.socialButton}>
              <Share2
                style={{ width: "18px", height: "18px", color: colors.primary }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Related Tips Section */}
      <div style={styles.relatedSection}>
        <div style={styles.relatedContainer}>
          <h2 style={styles.relatedTitle}>Related Tips</h2>
          <div style={styles.relatedGrid}>
            {tip.relatedTips.map((related) => (
              <Link
                key={related.id}
                to={`/tip/${related.id}`}
                className="related-card"
                style={styles.relatedCard}
              >
                <div style={styles.relatedCardCategory}>{related.category}</div>
                <h3 style={styles.relatedCardTitle}>{related.title}</h3>
                <div style={styles.relatedCardLink}>
                  Read more
                  <ChevronRight style={{ width: "14px", height: "14px" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipDetail;
