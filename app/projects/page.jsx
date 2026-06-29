'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PROJECTS = [
  {
    title: '🛒 Ecommerce Website',
    desc: 'A comprehensive online shopping platform featuring user authentication, product listings, interactive cart management, role-based seller dashboards, and Stripe payment integration.',
    ss: '/logos/Ecommerce-Web.webp',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://ecommercewebstore-bysadhan.vercel.app/',
    code: 'https://github.com/CoderSadhan/Ecommerce-Web'
  },
  {
    title: '☁️ WebCloud Store',
    desc: 'A secure cloud storage and file sharing system. Supports multi-format file uploads, download management, and link generation for public access.',
    ss: '/logos/webcloud-store.webp',
    tech: ['React.js', 'Node.js', 'Express.js', 'AWS S3', 'MongoDB'],
    live: '#',
    code: 'https://github.com/CoderSadhan?tab=repositories'
  },
  {
    title: '🏫 College ERP System',
    desc: 'An administrative platform for colleges with role-based access for Admin, Teachers, and Students to manage attendance, student databases, notice boards, and grade submissions.',
    ss: '/logos/ERP-SYSTEM.webp',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    live: '#',
    code: 'https://github.com/CoderSadhan/College-ERP-system'
  },
  {
    title: '💬 Realtime Chat Application',
    desc: 'A live messaging platform featuring instant chat, direct messaging, active status indicators, and group chat creation using WebSockets.',
    ss: '/logos/Chat-application.webp',
    tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
    live: 'https://online-chat-app-sadhan-das-projects.vercel.app/',
    code: 'https://github.com/CoderSadhan/Online_Chat_App'
  },
  {
    title: '🌤️ Weather Application',
    desc: 'A responsive weather forecasting dashboard that displays real-time weather details, weekly forecasts, hourly predictions, and interactive weather maps.',
    ss: '/logos/weather.webp',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    live: 'https://weatherforcast-bysadhan.netlify.app/',
    code: 'https://github.com/CoderSadhan/Weather-App'
  },
  {
    title: '💱 Currency Converter',
    desc: 'A clean financial converter widget that provides real-time conversion rates across 150+ currencies with historical exchange rate comparison charts.',
    ss: '/logos/currency.webp',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    live: 'https://currencyconverter-bysadhan.netlify.app/',
    code: 'https://github.com/CoderSadhan/Currency_Converter'
  },
  {
    title: '🎬 Netflix Clone',
    desc: 'A high-fidelity landing page and media player replica of Netflix featuring movie category rows, trailers, profile management, and a personalized watchlist.',
    ss: '/logos/netflix.webp',
    tech: ['React.js', 'Redux', 'CSS3', 'REST APIs'],
    live: '#',
    code: 'https://github.com/CoderSadhan/Netflix-Clone'
  }
]

export default function Projects() {
  const [imageErrors, setImageErrors] = useState({});

  return (
    <section
      className="container"
      style={{
        padding: '4rem 0',
      }}
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          style={{
            fontSize: '2.25rem',
            fontWeight: 600,
            color: '#06b6d4',
            marginBottom: '0.5rem',
          }}
        >
          🚀 Projects
        </h2>
        <p className="text-gray-400 mb-10" style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => {
            const hasError = imageErrors[idx];
            return (
              <div
                key={idx}
                className="project-card"
                style={{
                  background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                  border: '1px solid rgba(0,255,255,0.1)',
                  borderRadius: 16,
                  padding: 16,
                  overflow: 'hidden',
                  boxShadow: '0 0 20px rgba(0,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)';
                }}
              >
                <div
                  className="ss"
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden',
                    height: '200px',
                    position: 'relative',
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(99,102,241,0.08))',
                    border: '1px solid rgba(0,255,255,0.05)',
                  }}
                >
                  {!hasError ? (
                    <Image
                      src={p.ss}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        borderRadius: 12,
                        transition: 'transform 0.3s ease',
                      }}
                      onError={() => {
                        setImageErrors((prev) => ({ ...prev, [idx]: true }));
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '4.5rem',
                        background: 'radial-gradient(circle, rgba(0,255,200,0.15) 0%, transparent 70%)',
                        filter: 'drop-shadow(0 0 15px rgba(0,255,255,0.25))',
                      }}
                    >
                      {p.title.split(' ')[0]}
                    </div>
                  )}
                </div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <Link
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }}
                  >
                    <span style={{ fontSize: 14 }}>🔗</span> Code
                  </Link>
                  <Link
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.background = 'linear-gradient(90deg, #0891b2, #06b6d4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={{ fontSize: 14 }}>🌐</span> Live
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  )
}
