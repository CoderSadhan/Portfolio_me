'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        background: 'radial-gradient(circle at 30% 30%, rgba(0,255,200,0.08), transparent 80%)',
        color: '#fff',
        padding: '2rem',
      }}
    >
      <div
        style={{
          fontSize: '8rem',
          fontWeight: 800,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundSize: '200%',
          animation: 'gradient 4s linear infinite',
        }}
      >
        404
      </div>
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center' }}>
        Oops! Page Not Found
      </h1>
      
      <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', textAlign: 'center', maxWidth: '600px' }}>
        The page you're looking for doesn't exist or has been moved. Let's get you back on track!
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 700,
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
          🏠 Go Home
        </Link>
        
        <Link
          href="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(255,255,255,0.05)',
            color: '#0ea5e9',
            padding: '12px 24px',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 700,
            border: '1px solid rgba(0,255,255,0.1)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          🚀 View Projects
        </Link>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}
