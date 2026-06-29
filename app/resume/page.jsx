'use client'

import Link from 'next/link'

export default function Resume() {
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
          📄 Resume
        </h2>
        <p className="text-gray-400 mb-10" style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
          Download my resume and explore my professional journey and qualifications.
        </p>

        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div
            style={{
              background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
              border: '1px solid rgba(0,255,255,0.1)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 0 20px rgba(0,255,255,0.08)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)';
            }}
          >
            <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 12, fontWeight: 600 }}>
              📋 Download Resume
            </h3>
            <p style={{ fontSize: 14, color: '#bbb', marginBottom: 16, lineHeight: 1.6 }}>
              Get a detailed overview of my skills, experience, and education in PDF format.
            </p>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.background = 'linear-gradient(90deg, #0891b2, #06b6d4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <span style={{ fontSize: 16 }}>📄</span>
              Download PDF
            </Link>
          </div>

          <div
            style={{
              background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
              border: '1px solid rgba(0,255,255,0.1)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 0 20px rgba(0,255,255,0.08)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)';
            }}
          >
            <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 12, fontWeight: 600 }}>
              🎯 Quick Summary
            </h3>
            <div style={{ display: 'grid', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(0,255,255,0.05)', borderRadius: 8 }}>
                <span style={{ fontSize: 14, color: '#bbb' }}>Education</span>
                <span style={{ fontSize: 14, color: '#a7f3d0', fontWeight: 600 }}>B.Tech CSE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(0,255,255,0.05)', borderRadius: 8 }}>
                <span style={{ fontSize: 14, color: '#bbb' }}>Location</span>
                <span style={{ fontSize: 14, color: '#a7f3d0', fontWeight: 600 }}>Surat, India</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(0,255,255,0.05)', borderRadius: 8 }}>
                <span style={{ fontSize: 14, color: '#bbb' }}>Experience</span>
                <span style={{ fontSize: 14, color: '#a7f3d0', fontWeight: 600 }}>2+ Years</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'rgba(0,255,255,0.05)', borderRadius: 8 }}>
                <span style={{ fontSize: 14, color: '#bbb' }}>Specialization</span>
                <span style={{ fontSize: 14, color: '#a7f3d0', fontWeight: 600 }}>AI/ML</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: 20, color: '#0ea5e9', marginBottom: 16, fontWeight: 600 }}>
            📊 Key Skills
          </h3>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {[
              'Machine Learning',
              'Deep Learning',
              'Computer Vision',
              'Natural Language Processing',
              'Web Development',
              'Python',
              'JavaScript',
              'React/Next.js'
            ].map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(0,255,255,0.05)',
                  border: '1px solid rgba(0,255,255,0.1)',
                  padding: '10px 14px',
                  borderRadius: 20,
                  fontSize: 13,
                  color: '#aaf',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0,255,255,0.15)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0,255,255,0.05)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
