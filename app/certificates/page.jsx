'use client'

import Image from 'next/image'

const certificates = [
  {
    title: "Generative AI Career Essentials",
    organization: "Microsoft & LinkedIn",
    src: "/certs/Career Essentials in Generative AI by Microsoft and LinkedIn.webp",
    alt: "Generative AI Career Essentials"
  },
  {
    title: "Software Development Career Essentials",
    organization: "Microsoft & LinkedIn",
    src: "/certs/Career Essentials in Software Development by Microsoft and LinkedIn.webp",
    alt: "Software Development Career Essentials"
  },
  {
    title: "Google Technical Certification",
    organization: "Google",
    src: "/certs/GOOGLE.webp",
    alt: "Google Technical Certification"
  },
  {
    title: "Oracle Professional Certification",
    organization: "Oracle",
    src: "/certs/ORACLE.webp",
    alt: "Oracle Professional Certification"
  },
  {
    title: "React Developer Certification",
    organization: "HackerRank",
    src: "/certs/React From HackerRank.webp",
    alt: "React Developer Certification"
  },
  {
    title: "Naukri Academy Certification",
    organization: "Naukri",
    src: "/certs/Naukri.webp",
    alt: "Naukri Academy Certification"
  }
]

export default function Certificates() {
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
          🏆 Certificates
        </h2>
        <p className="text-gray-400 mb-10" style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
          Certifications and achievements that validate my skills and knowledge.
        </p>

        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 12,
                padding: 16,
                boxShadow: '0 0 20px rgba(0,255,255,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)';
              }}
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={400}
                height={250}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: 8,
                  marginBottom: 12,
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <h4 style={{ fontSize: 16, color: '#0ea5e9', marginBottom: 8, fontWeight: 600 }}>
                {cert.title}
              </h4>
              <p style={{ fontSize: 13, color: '#94a3b8' }}>
                {cert.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
