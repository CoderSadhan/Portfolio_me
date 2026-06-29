import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Sadhan Das - AI Engineer & Developer',
  description: 'Portfolio of Sadhan Das - AI Engineer & Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div
            className="background-gradient"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'radial-gradient(1200px 800px at 20% 0%, var(--bg) 0%, #0a0f1a 40%, #08101a 100%)',
              zIndex: -2,
            }}
          />
          <div
            className="ambient-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'conic-gradient(from 210deg at 50% 50%, rgba(6,182,212,0.1), transparent 30%, rgba(34,211,238,0.1) 60%, transparent)',
              zIndex: -1,
              pointerEvents: 'none',
            }}
          />
          <Navbar />
          {children}
          <footer
            className="footer"
            style={{
              textAlign: 'center',
              padding: '1rem 0',
              color: 'rgba(226,232,240,0.7)',
              background: 'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(2,6,23,0.6))',
              borderTop: '1px solid rgba(148,163,184,0.15)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>
                Copyright © 2026 by Sadhan | All Rights Reserved.
              </span>
            </div>
            <div style={{ fontSize: '0.8rem' }}>
              © 2026 — Built with Next.js • React • Tailwind CSS • JavaScript
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
