import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    dark: "#0F172A",
    darker: "#020617",
    text: "#E2E8F0",
  };

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: colors.darker,
        color: colors.text,
        padding: "3rem 1.5rem",
        marginTop: "4rem",
        borderTop: `1px solid ${colors.primary}20`,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* About Section */}
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
            }}
          >
            MyBlog
          </h3>
          <p style={{ lineHeight: 1.7, fontSize: "0.95rem" }}>
            A personal space where I share insights, stories, and experiences as
            a female coder — inspiring others to create, learn, and build with
            passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: colors.primary,
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    color: colors.text,
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = colors.primary)}
                  onMouseLeave={(e) => (e.target.style.color = colors.text)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: colors.primary,
              marginBottom: "1rem",
            }}
          >
            Connect
          </h4>
          <p style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
            Follow me and stay updated on new posts and projects.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.text }}
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.text }}
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.text }}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:youremail@example.com"
              style={{ color: colors.text }}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "0.9rem",
          borderTop: `1px solid ${colors.primary}20`,
          paddingTop: "1.5rem",
          color: `${colors.text}99`,
        }}
      >
        © {year} MyBlog — Designed & Coded by{" "}
        <span
          style={{
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "600",
          }}
        >
          Chayie Lucrese
        </span>
      </div>
    </footer>
  );
};

export default Footer;
