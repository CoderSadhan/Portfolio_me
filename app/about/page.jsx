'use client'

export default function About() {
  return (
    <section
      className="container"
      style={{
        padding: '4rem 0',
      }}
    >
      <div className="card" style={{ borderRadius: 16, padding: 30 }}>
        <h2
          className="text-4xl font-semibold mb-2"
          style={{
            fontSize: '2.25rem',
            fontWeight: 600,
            color: 'var(--accent)',
            marginBottom: '0.5rem',
          }}
        >
          🧑‍💻 About Me
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>
          Get to know me better — my journey, passions, and what drives me to create.
        </p>

        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 0 20px var(--glow)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px var(--glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 20px var(--glow)';
            }}
          >
            <h3 style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 12, fontWeight: 600 }}>
              🎯 Who I Am
            </h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
              I'm Kunj Desai, an AI Engineer and Developer passionate about creating intelligent solutions
              that make a difference. With expertise in machine learning, deep learning, and web development,
              I bridge the gap between cutting-edge AI and user-friendly applications.
            </p>
          </div>

          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 0 20px var(--glow)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px var(--glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 20px var(--glow)';
            }}
          >
            <h3 style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 12, fontWeight: 600 }}>
              🚀 What I Do
            </h3>
            <ul style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Building AI-powered applications with modern frameworks</li>
              <li>Developing computer vision and NLP solutions</li>
              <li>Creating responsive and interactive web interfaces</li>
              <li>Solving complex problems with innovative approaches</li>
            </ul>
          </div>

          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 0 20px var(--glow)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px var(--glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 20px var(--glow)';
            }}
          >
            <h3 style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 12, fontWeight: 600 }}>
              💡 My Philosophy
            </h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
              I believe in the power of technology to solve real-world problems.
              My approach combines technical expertise with creative thinking to
              build solutions that are both functional and impactful.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: 20, color: 'var(--accent)', marginBottom: 16, fontWeight: 600 }}>
            🎯 Core Values
          </h3>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {[
              'Innovation',
              'Quality',
              'Learning',
              'Collaboration',
              'Problem Solving',
              'Continuous Improvement'
            ].map((value, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  padding: '12px 16px',
                  borderRadius: 12,
                  fontSize: 14,
                  color: 'var(--muted)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--card)';
                  e.currentTarget.style.color = 'var(--muted)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
