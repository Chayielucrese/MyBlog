import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    dark: "#0F172A",
    darker: "#020617",
    text: "#E2E8F0",
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },

    { name: "Blog", path: "/blogs" },
    // { name: "Tutorials", path: "/tutorials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      style={{
        backgroundColor: colors.darker,
        borderBottom: `1px solid ${colors.primary}20`,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        boxShadow: `0 4px 20px ${colors.primary}10`,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textDecoration: "none",
          }}
        >
          My<span style={{ color: colors.text }}>Blog</span>
        </Link>

        {/* Desktop Links */}
        <div
          className="navbar-links"
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color:
                  location.pathname === link.path
                    ? colors.primary
                    : colors.text,
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  location.pathname === link.path
                    ? colors.primary
                    : colors.text;
              }}
            >
              {link.name}
              {location.pathname === link.path && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                    borderRadius: "4px",
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn"
          style={{
            background: "none",
            border: "none",
            color: colors.text,
            cursor: "pointer",
            display: "none",
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            backgroundColor: colors.dark,
            borderTop: `1px solid ${colors.primary}30`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem 0",
            gap: "1rem",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                color:
                  location.pathname === link.path
                    ? colors.primary
                    : colors.text,
                fontSize: "1rem",
                fontWeight: "500",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  location.pathname === link.path
                    ? colors.primary
                    : colors.text;
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive Behavior */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-links {
            display: none !important;
          }
          .menu-btn {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
