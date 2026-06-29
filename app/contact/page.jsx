"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields (Name, Email, Message).' })
      return
    }

    setStatus({ submitting: true, success: null, error: null })

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact Message',
        message: formData.message
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setStatus({ submitting: false, success: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: null }))
      }, 5000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus({
        submitting: false,
        success: false,
        error: err.text || 'Failed to send message. Please try again later.'
      })
    }
  }

  return (
    <section
      className="container"
      style={{
        padding: "4rem 0",
      }}
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          style={{
            fontSize: "2.25rem",
            fontWeight: 600,
            color: "#06b6d4",
            marginBottom: "0.5rem",
          }}
        >
          📞 Contact Me
        </h2>
        <p
          className="text-gray-400 mb-10"
          style={{ color: "#94a3b8", marginBottom: "2.5rem" }}
        >
          Let's connect and discuss how we can work together!
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
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,255,0.08)";
            }}
          >
            <h3
              style={{
                fontSize: 18,
                color: "#0ea5e9",
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              📧 Get In Touch
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px",
                  background: "rgba(0,255,255,0.05)",
                  borderRadius: 8,
                }}
              >
                <span style={{ fontSize: 18 }}>📧</span>
                <div>
                  <div style={{ fontSize: 13, color: "#bbb" }}>Email</div>
                  <div
                    style={{ fontSize: 14, color: "#a7f3d0", fontWeight: 600 }}
                  >
                    sadhandas.dev@gmail.com
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px",
                  background: "rgba(0,255,255,0.05)",
                  borderRadius: 8,
                }}
              >
                <span style={{ fontSize: 18 }}>📱</span>
                <div>
                  <div style={{ fontSize: 13, color: "#bbb" }}>Phone</div>
                  <div
                    style={{ fontSize: 14, color: "#a7f3d0", fontWeight: 600 }}
                  >
                    +91 6295842221
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px",
                  background: "rgba(0,255,255,0.05)",
                  borderRadius: 8,
                }}
              >
                <span style={{ fontSize: 18 }}>📍</span>
                <div>
                  <div style={{ fontSize: 13, color: "#bbb" }}>Location</div>
                  <div
                    style={{ fontSize: 14, color: "#a7f3d0", fontWeight: 600 }}
                  >
                    Cooch Behar, West Bengal, India
                  </div>
                </div>
              </div>
            </div>
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
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,255,0.08)";
            }}
          >
            <h3
              style={{
                fontSize: 18,
                color: "#0ea5e9",
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              🌐 Social Links
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                {
                  name: "GitHub",
                  url: "https://github.com/CoderSadhan",
                  emoji: "🐙",
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/sadhan-das-82a465246/",
                  emoji: "💼",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/im_sadhan.09/",
                  emoji: "📸",
                },
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/sadhan.das.52438",
                  emoji: "📘",
                },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px",
                    background: "rgba(0,255,255,0.05)",
                    borderRadius: 8,
                    color: "#a7f3d0",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,255,255,0.15)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,255,255,0.05)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: 18 }}>{social.emoji}</span>
                  <span style={{ fontSize: 14 }}>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3
            style={{
              fontSize: 20,
              color: "#0ea5e9",
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            📋 Quick Contact
          </h3>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0",
                padding: "12px 16px",
                borderRadius: 10,
                fontSize: 14,
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#06b6d4";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(6,182,212,0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0",
                padding: "12px 16px",
                borderRadius: 10,
                fontSize: 14,
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#06b6d4";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(6,182,212,0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0",
                padding: "12px 16px",
                borderRadius: 10,
                fontSize: 14,
                outline: "none",
                transition: "all 0.3s ease",
                gridColumn: "1 / -1",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#06b6d4";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(6,182,212,0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0",
                padding: "12px 16px",
                borderRadius: 10,
                fontSize: 14,
                outline: "none",
                transition: "all 0.3s ease",
                gridColumn: "1 / -1",
                resize: "vertical",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#06b6d4";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(6,182,212,0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              type="submit"
              disabled={status.submitting}
              style={{
                background: status.submitting 
                  ? "rgba(148,163,184,0.3)" 
                  : "linear-gradient(90deg, #06b6d4, #0891b2)",
                color: "#fff",
                border: "none",
                padding: "14px 24px",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 700,
                cursor: status.submitting ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                alignSelf: "start",
                opacity: status.submitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!status.submitting) {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #0891b2, #06b6d4)";
                }
              }}
              onMouseLeave={(e) => {
                if (!status.submitting) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }
              }}
            >
              {status.submitting ? "⏳ Sending..." : "📤 Send Message"}
            </button>

            {status.success && (
              <div style={{ color: "#10b981", fontSize: "0.95rem", gridColumn: "1 / -1", marginTop: "12px", display: "flex", alignItems: "center", gap: 6 }}>
                <span>✅</span> Message sent successfully!
              </div>
            )}
            {status.error && (
              <div style={{ color: "#ef4444", fontSize: "0.95rem", gridColumn: "1 / -1", marginTop: "12px", display: "flex", alignItems: "center", gap: 6 }}>
                <span>❌</span> {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
