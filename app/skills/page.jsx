'use client'

import Image from 'next/image'

const skillCategories = [
  {
    title: '💻 Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python']
  },
  {
    title: '🌐 Frontend',
    skills: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: '⚙️ Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Swagger UI']
  },
  {
    title: '🗄️ Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: '☁️ Cloud & DevOps',
    skills: ['Docker', 'AWS S3', 'Git', 'GitLab']
  },
  {
    title: '🛠️ Tools & Technologies',
    skills: ['Git', 'GitLab', 'Swagger UI', 'Postman', 'npm', 'VS Code']
  }
]

export default function Skills() {
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
          🧠 Skills
        </h2>
        <p className="text-gray-400 mb-10" style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
          Technical skills and expertise across various technologies and frameworks.
        </p>

        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 20,
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
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(0,255,255,0.05)',
                      border: '1px solid rgba(0,255,255,0.1)',
                      padding: '6px 12px',
                      borderRadius: 20,
                      fontSize: 13,
                      color: '#aaf',
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
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* === CERTIFICATES SECTION === */}
        <div style={{ marginTop: 40 }}>
          <h3
            style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: '#06b6d4',
              marginBottom: '0.5rem',
            }}
          >
            🏆 Certificates
          </h3>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            Certifications and achievements that validate my skills and knowledge.
          </p>

          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              {
                title: "Generative AI Career Essentials",
                organization: "Microsoft & LinkedIn",
                category: "AI/ML",
                image: "/certs/Career Essentials in Generative AI by Microsoft and LinkedIn.webp",
                url: "/certs/Career Essentials in Generative AI by Microsoft and LinkedIn.webp"
              },
              {
                title: "Software Development Career Essentials",
                organization: "Microsoft & LinkedIn",
                category: "Software Development",
                image: "/certs/Career Essentials in Software Development by Microsoft and LinkedIn.webp",
                url: "/certs/Career Essentials in Software Development by Microsoft and LinkedIn.webp"
              },
              {
                title: "Google Technical Certification",
                organization: "Google",
                category: "Technical",
                image: "/certs/GOOGLE.webp",
                url: "/certs/GOOGLE.webp"
              },
              {
                title: "Oracle Professional Certification",
                organization: "Oracle",
                category: "Databases & Cloud",
                image: "/certs/ORACLE.webp",
                url: "/certs/ORACLE.webp"
              },
              {
                title: "React Developer Certification",
                organization: "HackerRank",
                category: "Frontend",
                image: "/certs/React From HackerRank.webp",
                url: "/certs/React From HackerRank.webp"
              },
              {
                title: "Naukri Academy Certification",
                organization: "Naukri",
                category: "Professional",
                image: "/certs/Naukri.webp",
                url: "/certs/Naukri.webp"
              }
            ].map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                style={{
                  display: 'block',
                  background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                  border: '1px solid rgba(0,255,255,0.1)',
                  borderRadius: 16,
                  padding: 16,
                  boxShadow: '0 0 20px rgba(0,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,255,255,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0,255,255,0.1)';
                }}
              >
                {/* --- Certificate Image Preview --- */}
                <div
                  style={{
                    height: '180px',
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '16px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="cert-img"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <h4 style={{ fontSize: 15, color: '#e2e8f0', marginBottom: 4, fontWeight: 600 }}>
                  {cert.title}
                </h4>
                <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 500, marginBottom: 8 }}>
                  {cert.organization}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#94a3b8' }}>
                  <span>View Full Image</span>
                  <span style={{ transition: 'transform 0.2s' }}>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
