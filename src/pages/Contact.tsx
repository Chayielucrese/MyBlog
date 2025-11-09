import React, { useState, CSSProperties, JSX } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Colors {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  darker: string;
  text: string;
}

interface ContactInfoItem {
  icon: React.ComponentType<{ style?: CSSProperties }>;
  label: string;
  value: string;
  color: string;
}

interface SocialItem {
  icon: React.ComponentType<{ style?: CSSProperties }>;
  label: string;
  color: string;
}

interface Styles {
  [key: string]: CSSProperties;
}

function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const colors: Colors = {
    primary: "#0EA5E9",
    secondary: "#8B5CF6",
    accent: "#F59E0B",
    dark: "#0F172A",
    darker: "#020617",
    text: "#E2E8F0",
  };

  const styles: Styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: colors.darker,
      color: colors.text,
      padding: "6rem 1.5rem 4rem",
    },
    hero: {
      textAlign: "center",
      marginBottom: "4rem",
      position: "relative",
    },
    heroBackground: {
      position: "absolute",
      top: "-100px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "400px",
      height: "400px",
      background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
      filter: "blur(60px)",
      pointerEvents: "none",
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
    },
    title: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      fontWeight: "bold",
      marginBottom: "1rem",
      background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
      color: "#94A3B8",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    mainContent: {
      maxWidth: "72rem",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
    twoColumn: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    leftColumn: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    profileCard: {
      backgroundColor: colors.dark,
      borderRadius: "16px",
      padding: "2rem",
      border: `2px solid ${colors.primary}30`,
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    profileGlow: {
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "200px",
      height: "200px",
      background: colors.primary,
      filter: "blur(80px)",
      opacity: 0.2,
      pointerEvents: "none",
    },
    profileImageWrapper: {
      position: "relative",
      width: "150px",
      height: "150px",
      margin: "0 auto 1.5rem",
    },
    profileImage: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      border: `3px solid ${colors.primary}`,
      boxShadow: `0 0 30px ${colors.primary}60`,
    },
    profileImagePlaceholder: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3rem",
      fontWeight: "bold",
      color: "white",
      border: `3px solid ${colors.primary}`,
      boxShadow: `0 0 30px ${colors.primary}60`,
    },
    profileName: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: colors.text,
      marginBottom: "0.5rem",
    },
    profileRole: {
      color: "#94A3B8",
      marginBottom: "1rem",
    },
    infoCard: {
      backgroundColor: colors.dark,
      borderRadius: "16px",
      padding: "2rem",
      border: `2px solid ${colors.secondary}30`,
    },
    infoTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: colors.text,
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1rem",
      padding: "0.75rem",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    infoIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    socialGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1rem",
    },
    socialCard: {
      backgroundColor: colors.darker,
      borderRadius: "12px",
      padding: "1rem",
      border: `2px solid ${colors.primary}20`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    socialIcon: {
      width: "32px",
      height: "32px",
    },
    socialLabel: {
      fontSize: "0.875rem",
      color: "#94A3B8",
    },
    formCard: {
      backgroundColor: colors.dark,
      borderRadius: "16px",
      padding: "2rem",
      border: `2px solid ${colors.primary}30`,
    },
    formTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: colors.text,
      marginBottom: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    formGroup: {
      marginBottom: "1.5rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      color: colors.text,
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    input: {
      width: "100%",
      padding: "0.75rem 1rem",
      backgroundColor: colors.darker,
      border: `2px solid ${colors.primary}30`,
      borderRadius: "8px",
      color: colors.text,
      fontSize: "1rem",
      transition: "all 0.3s ease",
      outline: "none",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "0.75rem 1rem",
      backgroundColor: colors.darker,
      border: `2px solid ${colors.primary}30`,
      borderRadius: "8px",
      color: colors.text,
      fontSize: "1rem",
      transition: "all 0.3s ease",
      outline: "none",
      minHeight: "150px",
      resize: "vertical",
      fontFamily: "inherit",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "1rem 2rem",
      backgroundColor: colors.primary,
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      boxShadow: `0 4px 15px ${colors.primary}40`,
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (): void => {
    console.log("Form submitted:", formData);
    alert(
      "Message sent! 🎉 This blog documents challenges I face and solutions I discover. Thank you for reaching out!"
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: MapPin,
      label: "Location",
      value: "Yaoundé, Cameroon",
      color: colors.primary,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: colors.secondary,
    },
    {
      icon: MessageSquare,
      label: "Availability",
      value: "Open for collaboration",
      color: colors.accent,
    },
  ];

  const socials: SocialItem[] = [
    { icon: Github, label: "GitHub", color: colors.text },
    { icon: Linkedin, label: "LinkedIn", color: colors.primary },
    { icon: Twitter, label: "Twitter", color: colors.secondary },
    { icon: Mail, label: "Email", color: colors.accent },
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @media (min-width: 768px) {
          .two-column { grid-template-columns: 400px 1fr; }
        }
        .info-item:hover {
          background-color: ${colors.darker};
          transform: translateX(5px);
        }
        .social-card:hover {
          border-color: ${colors.primary};
          transform: translateY(-5px);
          box-shadow: 0 10px 30px ${colors.primary}20;
        }
        input:focus, textarea:focus {
          border-color: ${colors.primary} !important;
          box-shadow: 0 0 0 3px ${colors.primary}20 !important;
        }
        button:hover {
          background-color: ${colors.secondary} !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px ${colors.secondary}40 !important;
        }
      `}</style>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroBackground} />
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Get In Touch</h1>
          <p style={styles.subtitle}>
            Have a question, suggestion, or just want to share your experiences?
            This blog documents challenges I encounter and solutions I find—your
            message helps me and others learn!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div className="two-column" style={styles.twoColumn}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Profile Card */}
            <div style={styles.profileCard}>
              <div style={styles.profileGlow} />
              <div style={styles.profileImageWrapper}>
                <img
                  src="/lulu.jpeg"
                  alt="Profile"
                  style={styles.profileImage}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const sibling = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (sibling) sibling.style.display = "flex";
                  }}
                />
                <div
                  style={{ ...styles.profileImagePlaceholder, display: "none" }}
                >
                  JD
                </div>
              </div>
              <h3 style={styles.profileName}>Chayie Foussoum .H. Lucrese</h3>
              <p style={styles.profileRole}>
                Full Stack Developer | Documenting coding challenges & solutions
              </p>
            </div>

            {/* Contact Info */}
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>
                <Mail
                  style={{
                    width: "20px",
                    height: "20px",
                    color: colors.primary,
                  }}
                />
                Contact Information
              </h3>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="info-item"
                    style={styles.infoItem}
                  >
                    <div
                      style={{
                        ...styles.infoIcon,
                        backgroundColor: `${item.color}20`,
                      }}
                    >
                      <Icon
                        style={{
                          width: "20px",
                          height: "20px",
                          color: item.color,
                        }}
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", color: "#94A3B8" }}>
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          color: colors.text,
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>
                <Send
                  style={{
                    width: "20px",
                    height: "20px",
                    color: colors.secondary,
                  }}
                />
                Connect With Me
              </h3>
              <div style={styles.socialGrid}>
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <div
                      key={index}
                      className="social-card"
                      style={styles.socialCard}
                    >
                      <Icon
                        style={{ ...styles.socialIcon, color: social.color }}
                      />
                      <span style={styles.socialLabel}>{social.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div style={styles.formCard}>
            <h2 style={styles.formTitle}>
              <MessageSquare
                style={{ width: "24px", height: "24px", color: colors.primary }}
              />
              Send Me a Message
            </h2>
            <div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="John Doe"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="john@example.com"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="What's this about?"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Tell me more..."
                />
              </div>

              <button onClick={handleSubmit} style={styles.button}>
                <Send style={{ width: "20px", height: "20px" }} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
