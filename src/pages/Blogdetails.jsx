import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock, Tag, User, Heart, MessageCircle } from "lucide-react";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Chayie Lucrese",
    date: "2025-11-06",
    readTime: "5 min",
    tags: ["React", "JavaScript", "Frontend"],
    content: `React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have become the standard for writing functional components. ...`,
    image: "https://source.unsplash.com/800x400/?code,react",
  },
  {
    id: 2,
    title: "Getting Started with Node.js",
    author: "Chayie Lucrese",
    date: "2025-10-30",
    readTime: "7 min",
    tags: ["Node.js", "Backend", "JavaScript"],
    content: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable server-side applications using JavaScript. ...`,
    image: "https://source.unsplash.com/800x400/?nodejs,backend",
  },
  {
    id: 3,
    title: "CSS Grid Layout Tips",
    author: "Chayie Lucrese",
    date: "2025-09-25",
    readTime: "4 min",
    tags: ["CSS", "Design", "Frontend"],
    content: `CSS Grid Layout is a powerful layout system available in CSS. It allows developers to create complex and responsive web layouts with minimal code. ...`,
    image: "https://source.unsplash.com/800x400/?css,design",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  const colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    accent: "#F59E0B",
    dark: "#0F172A",
    darker: "#020617",
    text: "#E2E8F0",
  };

  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([...comments, commentText.trim()]);
    setCommentText("");
  };

  if (!blog)
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.text,
          backgroundColor: colors.darker,
        }}
      >
        <p>Blog not found</p>
      </div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: colors.darker,
        color: colors.text,
        padding: "2rem 1rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Blog Cover */}
      <div
        style={{
          overflow: "hidden",
          borderRadius: "20px",
          marginBottom: "2rem",
          boxShadow: `0 10px 40px ${colors.darker}80`,
        }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          style={{
            width: "100%",
            maxHeight: "450px",
            objectFit: "cover",
            transition: "transform 20s ease-in-out",
            animation: "zoom 30s infinite alternate",
          }}
        />
      </div>

      <style>
        {`
          @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .like-btn:hover {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }
          .comment-card:hover {
            background-color: ${colors.darker}dd;
            transform: translateY(-3px);
            transition: all 0.3s ease;
          }
        `}
      </style>

      {/* Title */}
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {blog.title}
      </h1>

      {/* Meta Info */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
          fontSize: "0.9rem",
          color: "#94A3B8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <User size={16} /> <span>{blog.author}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Calendar size={16} /> <span>{blog.date}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Clock size={16} /> <span>{blog.readTime || "—"} read</span>
        </div>
        {blog.tags && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Tag size={16} />
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.5rem",
                    borderRadius: 999,
                    border: `1px solid ${colors.primary}30`,
                    color: colors.text,
                    backgroundColor: `${colors.primary}10`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          lineHeight: 1.8,
          fontSize: "1.05rem",
          color: "#CBD5E1",
          whiteSpace: "pre-line",
          marginBottom: "2rem",
        }}
      >
        {blog.content}
      </div>

      {/* Like Button */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button
          className="like-btn"
          onClick={handleLike}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            backgroundColor: colors.primary,
            color: colors.darker,
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            cursor: "pointer",
            border: "none",
            fontWeight: "500",
          }}
        >
          <Heart size={18} />
          Like {likes > 0 && `(${likes})`}
        </button>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} style={{ marginBottom: "2rem" }}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Leave a comment..."
          style={{
            width: "100%",
            minHeight: "80px",
            padding: "0.75rem",
            borderRadius: "10px",
            border: `1px solid ${colors.primary}40`,
            backgroundColor: colors.darker,
            color: colors.text,
            resize: "vertical",
            marginBottom: "0.5rem",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: colors.secondary,
            color: "#fff",
            padding: "0.5rem 1.5rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <MessageCircle size={18} />
          Comment
        </button>
      </form>

      {/* Comments List */}
      <div>
        <h3 style={{ marginBottom: "1rem" }}>Comments ({comments.length})</h3>
        {comments.length === 0 && (
          <p style={{ color: "#94A3B8" }}>No comments yet. Be the first!</p>
        )}
        {comments.map((c, idx) => (
          <div
            key={idx}
            className="comment-card"
            style={{
              backgroundColor: colors.darker,
              border: `1px solid ${colors.primary}30`,
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              color: colors.text,
            }}
          >
            <img
              src={`./meme.jpg`}
              alt="avatar"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <p>{c}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
