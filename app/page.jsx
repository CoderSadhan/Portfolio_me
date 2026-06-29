"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// 🖼️ Import Assets
import photo from "../public/photo.webp";
import githubLogo from "../public/github.png";
import linkedinLogo from "../public/linkedin.png";
import gmailLogo from "../public/gmail.png";
import whatsappLogo from "../public/whatsapp.png";
import instagramLogo from "../public/insta.png";
import facebookLogo from "../public/facebook.png";

export default function Home() {
  const containerRef = useRef(null);
  const photoRef = useRef(null);
  const titleRef = useRef(null);
  const typingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Simplified animations for better performance
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
    );

    tl.fromTo(
      photoRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.5",
    );

    tl.fromTo(
      titleRef.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6",
    );

    // Simplified typing effect
    const typingText = typingRef.current;
    if (typingText) {
      const originalText = typingText.textContent;
      typingText.textContent = "";

      gsap.to(typingText, {
        duration: 2,
        text: originalText,
        ease: "power1.out",
        delay: 0.3,
      });
    }

    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.4",
    );

    return () => {
      // Cleanup
      gsap.killTweensOf(containerRef.current);
      gsap.killTweensOf(photoRef.current);
      gsap.killTweensOf(titleRef.current);
      gsap.killTweensOf(cardsRef.current);
    };
  }, []);

  const professions = [
    "Full-Stack Developer",
    "Shopify & WordPress Developer",
    "React Developer",
    "Automation Expert",
    "Problem Solver",
  ];

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/CoderSadhan",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sadhan-das-82a465246/",
    },
    { img: gmailLogo, title: "Email", link: "sadhanda70@gmail.com" },
    {
      img: whatsappLogo,
      title: "WhatsApp",
      link: "https://wa.me/+916295842221",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/im_sadhan.09/",
    },
    {
      img: facebookLogo,
      title: "Facebook",
      link: "https://www.facebook.com/sadhan.das.52438",
    },
  ];

  return (
    <div>
      {/* === HOME SECTION === */}
      <section
        id="home"
        style={{
          minHeight: "calc(100vh - 80px)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
          alignItems: "center",
          padding: "0.5rem 2rem 2rem",
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,255,200,0.08), transparent 80%)",
          color: "var(--text)",
        }}
      >
        <style>
          {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink {
            50% { border-color: transparent; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @media (max-width: 900px) {
            #home {
              padding-top: 5.5rem !important;
            }
            .photo-column {
              justify-content: flex-start !important;
              padding-left: 1rem !important;
            }
          }
        `}
        </style>

        {/* --- Top Section: Photo + Info --- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            maxWidth: "1250px",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/* --- Left: Animated Glowing Photo --- */}
          <div
            className="photo-column"
            style={{
              position: "relative",
              flex: "0 1 380px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Concentric alignment helper wrapper */}
            <div
              style={{
                position: "relative",
                width: "330px",
                height: "330px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "330px",
                  height: "330px",
                  borderRadius: "50%",
                  border: "2px dashed var(--accent)",
                  opacity: 0.3,
                  animation: "spin 25s linear infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "300px",
                  height: "300px",
                  boxShadow: "0 0 45px rgba(0,255,200,0.25)",
                  border: "3px solid var(--accent)",
                  zIndex: 1,
                  animation: "float 4s ease-in-out infinite",
                  background: "#718bbe",
                }}
              >
                <Image
                  src={photo}
                  alt="Sadhan Das"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    marginTop: "1.2rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* --- Right: Info Section --- */}
          <div
            style={{
              flex: 1,
              minWidth: "min(360px, 100%)",
              maxWidth: "700px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "0.4rem",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200%",
                  animation: "gradient 4s linear infinite",
                  textFillColor: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sadhan Das
              </span>
            </h1>

            {/* --- Typing Animated Text --- */}
            <p
              className="typing-effect"
              style={{
                fontSize: "1.2rem",
                color: "var(--muted)",
                marginTop: "0.4rem",
                maxWidth: "95%",
              }}
            >
              Full Stack Developer | Tech Explorer
            </p>

            {/* --- Profession Tags --- */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                marginTop: "1.4rem",
              }}
            >
              {professions.map((role, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid var(--accent)",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.95rem",
                    color: "var(--muted)",
                    cursor: "default",
                    background: "var(--card)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.background = "rgba(148,163,184,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background = "var(--card)";
                  }}
                >
                  {role}
                </div>
              ))}
            </div>

            {/* --- Info Cards --- */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "1.2rem",
              }}
            >
              {[
                { label: "📍 Location", value: "CoochBehar,West Bengal,India" },
                { label: "💼 Expertise", value: "Full Stack Development" },
                { label: "📧 Contact", value: "sadhandas.dev@gmail.com" },
              ].map((info, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--card)",
                    borderRadius: "12px",
                    padding: "12px 18px",
                    minWidth: "180px",
                    textAlign: "center",
                    boxShadow: "0 0 10px rgba(0,255,200,0.08)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  <strong style={{ fontSize: "1rem" }}>{info.label}</strong>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--muted)",
                      marginTop: "4px",
                    }}
                  >
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
            {/* --- Bottom Quick Links --- */}
            <div
              style={{
                textAlign: "left",
                marginTop: "1.8rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                Connect
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  gap: "22px",
                }}
              >
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.link}
                    title={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      transition: "all 0.3s ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "scale(1.15) rotate(5deg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        filter: "brightness(0.9)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter =
                          "drop-shadow(0 0 15px var(--accent)) brightness(1.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "brightness(0.9)";
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ABOUT SECTION === */}
      <section
        id="about"
        style={{
          padding: "4rem 2rem",
          background:
            "radial-gradient(circle at 70% 70%, rgba(96,165,250,0.1), transparent 80%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "var(--card)",
            borderRadius: 16,
            padding: 30,
            border: "1px solid var(--border)",
            boxShadow: "0 0 30px var(--glow)",
          }}
        >
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: "0.5rem",
            }}
          >
            🧑‍💻 About Me
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "2.5rem" }}>
            Get to know me better — my journey, passions, and what drives me to
            create.
          </p>

          <div
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 0 20px var(--glow)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 40px var(--glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 20px var(--glow)";
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  color: "var(--accent)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                🎯 Who I Am
              </h3>
              <p
                style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}
              >
                I'm Sadhan Das, a Full-Stack Software Engineer passionate about
                building scalable, user-centric web applications. With
                professional experience in developing RESTful APIs, modern React
                applications, and automation tools, I enjoy solving real-world
                problems through clean, efficient, and maintainable code. I'm
                always eager to learn new technologies and contribute to
                impactful software products.
              </p>
            </div>

            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 0 20px var(--glow)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 40px var(--glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 20px var(--glow)";
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  color: "var(--accent)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                🚀 What I Do
              </h3>
              <ul
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  paddingLeft: 20,
                }}
              >
                <li>
                  Build scalable full-stack web applications using React,
                  Next.js, Node.js, and Express.js.
                </li>
                <li>
                  Develop secure and efficient REST APIs with modern backend
                  architectures.
                </li>
                <li>
                  Design responsive and intuitive user interfaces using Tailwind
                  CSS.
                </li>
                <li>
                  Work with databases like MongoDB, PostgreSQL, and MySQL.
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 0 20px var(--glow)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 40px var(--glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 20px var(--glow)";
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  color: "var(--accent)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                💡 My Philosophy
              </h3>
              <p
                style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}
              >
                I believe great software is built by combining clean engineering
                with a deep understanding of user needs. My goal is to create
                reliable, scalable, and high-performance applications that solve
                real-world problems while continuously learning and growing as a
                developer.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <h3
              style={{
                fontSize: 20,
                color: "var(--accent)",
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              🎯 Core Values
            </h3>
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              {[
                "Innovation",
                "Quality",
                "Learning",
                "Collaboration",
                "Problem Solving",
                "Continuous Improvement",
              ].map((value, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    padding: "12px 16px",
                    borderRadius: 12,
                    fontSize: 14,
                    color: "var(--muted)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--card)";
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === RESUME SECTION === */}
      <section
        id="resume"
        style={{
          padding: "4rem 2rem",
          background:
            "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.1), transparent 80%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "var(--card)",
            borderRadius: 16,
            padding: 30,
            border: "1px solid var(--border)",
            boxShadow: "0 0 30px var(--glow)",
          }}
        >
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: "0.5rem",
            }}
          >
            📄 Resume
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "2.5rem" }}>
            Download my resume and explore my professional journey and
            qualifications.
          </p>

          <div
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,255,255,0.08)";
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  color: "var(--accent)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                📋 Download Resume
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  marginBottom: 16,
                  lineHeight: 1.6,
                }}
              >
                Get a detailed overview of my skills, experience, and education
                in PDF format.
              </p>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent-2))",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <span style={{ fontSize: 16 }}>📄</span>
                Download PDF
              </Link>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,255,255,0.08)";
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  color: "var(--accent)",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                🎯 Quick Summary
              </h3>
              <div style={{ display: "grid", gap: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: "rgba(0,255,255,0.05)",
                    borderRadius: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>
                    Education
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    B.E in IT
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: "rgba(0,255,255,0.05)",
                    borderRadius: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>
                    Location
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    Kolkata, India
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: "rgba(0,255,255,0.05)",
                    borderRadius: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>
                    Experience
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    1+ Years
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: "rgba(0,255,255,0.05)",
                    borderRadius: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>
                    Specialization
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    React & Next.js Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <h3
              style={{
                fontSize: 20,
                color: "var(--accent)",
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              📊 Key Skills
            </h3>
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              {[
                "Java",
                "JavaScript",
                "Python",
                "TypeScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "REST APIs",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Tailwind CSS",
                "Redux",
                "Docker",
                "AWS S3",
                "Git",
                "GitLab",
                "Swagger UI",
                "Postman",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(0,255,255,0.05)",
                    border: "1px solid rgba(0,255,255,0.1)",
                    padding: "10px 14px",
                    borderRadius: 20,
                    fontSize: 13,
                    color: "var(--accent)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,255,255,0.15)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,255,255,0.05)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
