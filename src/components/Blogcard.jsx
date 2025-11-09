import React from "react";
import { Calendar, Clock, Tag } from "lucide-react";


/**
 * BlogCard props:
 * - post: {
 *     title: string,
 *     excerpt: string,
 *     image: string (url) optional,
 *     date: string optional,
 *     readTime: string optional,
 *     tags: string[] optional,
 *     href: string optional (link to post)
 *   }
 */
const BlogCard = ({ post = {}, onClick }) => {
  const colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    dark: "#0F172A",
    darker: "#020617",
    text: "#E2E8F0",
  };

  const {
    title = "Untitled Post",
    excerpt = "No description provided. This post will be updated soon.",
    image,
    date = "Unknown date",
    readTime = "—",
    tags = [],
    href,
  } = post;

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    background: colors.dark,
    borderRadius: 16,
    overflow: "hidden",
    border: `2px solid ${colors.primary}12`,
    boxShadow: `0 8px 30px ${colors.darker}`,
    transition:
      "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
    cursor: href || onClick ? "pointer" : "default",
    minHeight: 160,
  };

  const mediaStyle = {
    width: "100%",
    height: 200,
    objectFit: "cover",
    display: "block",
    flexShrink: 0,
    backgroundColor: "#081022",
  };

  const contentWrapper = {
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  };

  const titleStyle = {
    fontSize: "1.15rem",
    fontWeight: 700,
    margin: 0,
    color: colors.text,
    lineHeight: 1.25,
    background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const excerptStyle = {
    margin: 0,
    color: "#94A3B8",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  };

  const metaRow = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    color: "#94A3B8",
    marginTop: "auto",
    flexWrap: "wrap",
  };

  const tagStyle = {
    fontSize: "0.8rem",
    padding: "0.25rem 0.6rem",
    borderRadius: 999,
    border: `1px solid ${colors.primary}20`,
    color: colors.text,
    background: `${colors.primary}10`,
    fontWeight: 600,
  };

  // Responsive: on wide screens, show image left and content right
  const cardInner = {
    display: "flex",
    flexDirection: "column",
  };

  const cardMediaLeft = {
    flex: "0 0 38%",
    minWidth: 180,
    maxWidth: 320,
  };

  const cardContentRight = {
    flex: 1,
  };

  // We'll add hover effect using inline onMouse events because we keep everything self-contained
  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(-6px)";
    el.style.boxShadow = `0 18px 60px ${colors.primary}20`;
    el.style.borderColor = `${colors.primary}60`;
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    el.style.boxShadow = `0 8px 30px ${colors.darker}`;
    el.style.borderColor = `rgba(14,165,233,0.07)`;
  };

  const CardInnerMarkup = () => (
    <>
      <div
        style={{
          display: "flex",
          gap: 0,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Media (cover) */}
        <div style={cardMediaLeft} className="blogcard-media">
          <img
            src={image || "./lulu.jpeg"}
            alt={title}
            style={mediaStyle}
            onError={(e) => {
              e.currentTarget.src =  "./lulu.jpeg";
            }}
          />
        </div>

        {/* Content */}
        <div style={{ ...cardContentRight }}>
          <div style={contentWrapper}>
            <h3 style={titleStyle}>{title}</h3>
            <p style={excerptStyle}>{excerpt}</p>

            <div style={metaRow} aria-hidden>
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  fontSize: 13,
                }}
              >
                <Calendar size={14} />
                <span style={{ color: "#94A3B8" }}>{date}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  fontSize: 13,
                }}
              >
                <Clock size={14} />
                <span style={{ color: "#94A3B8" }}>{readTime}</span>
              </div>

              {tags && tags.length > 0 && (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <Tag size={14} />
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {tags.slice(0, 3).map((t) => (
                      <span key={t} style={tagStyle}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const rootProps = {
    role: href || onClick ? "link" : "article",
    onClick: (e) => {
      if (onClick) return onClick(e);
      if (href) {
        // allow normal navigation if href provided
        window.location.href = href;
      }
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: containerStyle,
  };

  // For smaller screens we want the media stacked on top — we'll add a small inline style override via media query block
  return (
    <>
      <div {...rootProps} className="blogcard-root">
        <div style={cardInner}>
          <CardInnerMarkup />
        </div>
      </div>

      {/* Small responsive CSS to stack on narrow screens */}
      <style>{`
        @media (max-width: 800px) {
          .blogcard-root {
            border-radius: 12px;
          }
          .blogcard-root .blogcard-media {
            width: 100% !important;
            max-width: 100% !important;
            flex-basis: 100% !important;
          }
          .blogcard-root img {
            height: 220px !important;
          }
        }
      `}</style>
    </>
  );
};

export default BlogCard;
