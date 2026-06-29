"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Experience() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Simplified animations for better performance
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
    );

    tl.fromTo(
      timelineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.3",
    );

    tl.fromTo(
      itemsRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.4",
    );

    // Remove floating animation for timeline dots for better performance

    return () => {
      // Cleanup
      gsap.killTweensOf(containerRef.current);
      gsap.killTweensOf(timelineRef.current);
      gsap.killTweensOf(itemsRef.current);
    };
  }, []);

  const experiences = [
    {
      id: 1,
      company: "EdgeWrapper Technology Private Limited",
      location: "Newtown, Kolkata",
      position: "Associate Software Developer",
      period: "Oct 2025 - Present",
      color: "#06b6d4",
      icon: "💻",
      achievements: [
        "Developed 5+ RESTful APIs using Node.js and Express.js, with Swagger UI hosted via Next.js for interactive API documentation",
        "Built a Facebook & WhatsApp customer support bot using TypeScript for automating 60% of customer queries",
        "Built a Product URL Validator Tool in JavaScript with ~95% accuracy and reducing manual product verification time by 50%",
        "Collaborated with the Web Ecommerce team to integrate APIs and optimize product listing performance,improving page load speed by 20%",
      ],
    },
    {
      id: 2,
      company: "Ardent Computech Private Ltd.",
      location: "Saltlake, Kolkata",
      position: "Full Stack Developer Intern",
      period: "May 2024 - July 2024",
      color: "#8b5cf6",
      icon: "🎓",
      achievements: [
        "Built a role-based College ERP System with separate access for Admin, Teachers, and Students to manage daily academic activities",
        "Implemented features like student registration, attendance tracking, marks/grade entry, timetable management, and notice announcements",
      ],
    },
  ];

  return (
    <section
      className="container"
      style={{
        padding: "4rem 0",
        background:
          "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15), transparent 80%)",
      }}
    >
      <div
        ref={containerRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "var(--card)",
          borderRadius: 16,
          padding: 30,
          border: "1px solid var(--border)",
          boxShadow: "0 0 30px var(--glow)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-50%",
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-30%",
            width: "160%",
            height: "160%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />

        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 600,
            color: "var(--accent)",
            marginBottom: "0.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          🏢 Professional Experience
        </h2>
        <p
          style={{
            color: "var(--muted)",
            marginBottom: "2.5rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          A journey through my professional growth and achievements in the tech
          industry.
        </p>

        {/* Timeline */}
        <div
          ref={timelineRef}
          style={{
            position: "relative",
            zIndex: 1,
            paddingLeft: "30px",
            borderLeft: "3px solid rgba(99,102,241,0.3)",
            marginLeft: "20px",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => (itemsRef.current[index] = el)}
              style={{
                marginBottom: "4rem",
                position: "relative",
                background: "rgba(15,23,42,0.5)",
                borderRadius: 16,
                padding: "24px",
                border: "1px solid var(--border)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(99,102,241,0.2)`;
                e.currentTarget.style.background = "rgba(15,23,42,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.background = "rgba(15,23,42,0.5)";
              }}
            >
              {/* Timeline Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-17px",
                  top: "24px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: exp.color,
                  boxShadow: `0 0 20px ${exp.color}`,
                  border: "3px solid var(--card)",
                }}
              />

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{exp.icon}</span>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {exp.position}
                </h3>
              </div>

              {/* Company Info */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(99,102,241,0.15)",
                      color: "#c7d2fe",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      border: "1px solid rgba(99,102,241,0.3)",
                    }}
                  >
                    {exp.company}
                  </span>
                  <span
                    style={{
                      background: "rgba(14,165,233,0.15)",
                      color: "#bae6fd",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      border: "1px solid rgba(14,165,233,0.3)",
                    }}
                  >
                    📍 {exp.location}
                  </span>
                </div>
                <div style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                  📅 {exp.period}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    marginBottom: "10px",
                  }}
                >
                  Key Achievements:
                </h4>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      style={{ marginBottom: "8px", color: "var(--muted)" }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          background: exp.color,
                          borderRadius: "50%",
                          marginRight: "10px",
                          marginTop: "6px",
                          boxShadow: `0 0 10px ${exp.color}`,
                        }}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, rgba(99,102,241,0.05), rgba(14,165,233,0.05))`,
                  borderRadius: 16,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div style={{ marginTop: "3rem", position: "relative", zIndex: 1 }}>
          <h3
            style={{
              fontSize: "1.3rem",
              color: "var(--accent)",
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            🛠️ Technologies & Skills
          </h3>
          <div
            style={{
              display: "grid",
              gap: 12,
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            }}
          >
            {[
              "Node.js",
              "Express.js",
              "JavaScript",
              "Next.js",
              "React",
              "MongoDB",
              "SQL",
              "REST APIs",
              "Full Stack Development",
              "Problem Solving",
              "Team Collaboration",
            ].map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  padding: "10px 14px",
                  borderRadius: 20,
                  fontSize: "0.9rem",
                  color: "#c7d2fe",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99,102,241,0.25)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
            Ready to collaborate on exciting projects?
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: 12,
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(99,102,241,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(99,102,241,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(99,102,241,0.3)";
            }}
          >
            <span>🚀</span>
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
