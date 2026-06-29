'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: "Home", to: "/" },
  { label: "About me", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const normalizePath = (path) => path.replace(/\/$/, '') || '/'

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'resume']
        const currentScroll = window.scrollY + 120
        
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100
        if (isAtBottom) {
          setActiveSection('resume')
          return
        }
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId)
          if (section) {
            const sectionTop = section.offsetTop
            const sectionBottom = sectionTop + section.offsetHeight
            
            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
              setActiveSection(sectionId)
              break
            }
          }
        }
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
      const timer = setTimeout(handleScroll, 100)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(timer)
      }
    } else {
      setActiveSection('')
    }
  }, [pathname])

  return (
    <nav className="nav-container">
      <div className="nav-main">
        {/* --- Left Logo --- */}
        <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
          <div className="logo-box">
            <span className="logo-text">Sadhan</span>
          </div>
        </Link>

        {/* --- Center Navigation Links (Desktop Only) --- */}
        <div className="nav-links-desktop">
          {links.map((l) => {
            const isHomeSectionActive = pathname === '/' && (
              (l.label === 'Home' && activeSection === 'home') ||
              (l.label === 'About me' && activeSection === 'about') ||
              (l.label === 'Resume' && activeSection === 'resume')
            )
            const isPageActive = normalizePath(pathname) === normalizePath(l.to) && normalizePath(pathname) !== '/'
            const isActive = isHomeSectionActive || isPageActive

            return (
              <Link
                key={l.to}
                href={l.to}
                onClick={(e) => {
                  if (pathname === '/' && (l.label === 'Home' || l.label === 'About me' || l.label === 'Resume')) {
                    e.preventDefault()
                    const sectionId = l.label === 'Home' ? 'home' : 
                                     l.label === 'About me' ? 'about' : 'resume'
                    const element = document.getElementById(sectionId)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                }}
                className={`nav-link ${isActive ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                {l.label}
                {isActive && <span className="active-indicator" />}
              </Link>
            )
          })}
        </div>

        {/* --- Right Actions (Desktop: Toggle only, Mobile: Toggle + Hamburger) --- */}
        <div className="nav-actions">
          <div className="desktop-toggle">
            <ThemeToggle />
          </div>
          
          <button 
            className="hamburger-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-toggle-row">
          <span>Theme Mode:</span>
          <ThemeToggle />
        </div>
        <div className="mobile-links-list">
          {links.map((l) => {
            const isHomeSectionActive = pathname === '/' && (
              (l.label === 'Home' && activeSection === 'home') ||
              (l.label === 'About me' && activeSection === 'about') ||
              (l.label === 'Resume' && activeSection === 'resume')
            )
            const isPageActive = normalizePath(pathname) === normalizePath(l.to) && normalizePath(pathname) !== '/'
            const isActive = isHomeSectionActive || isPageActive

            return (
              <Link
                key={l.to}
                href={l.to}
                onClick={(e) => {
                  setIsOpen(false)
                  if (pathname === '/' && (l.label === 'Home' || l.label === 'About me' || l.label === 'Resume')) {
                    e.preventDefault()
                    const sectionId = l.label === 'Home' ? 'home' : 
                                     l.label === 'About me' ? 'about' : 'resume'
                    const element = document.getElementById(sectionId)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }
                }}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                style={{ textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .nav-container {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
          transition: all 0.3s ease;
        }

        .nav-main {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 2rem;
          height: 64px;
          position: relative;
        }

        .logo-box {
          position: relative;
          padding: 4px 16px;
          border-radius: 12px;
          background: #1f2937;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          background: linear-gradient(90deg, #ff6b6b, #ffd166, #06d6a0, #118ab2, #ef476f);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textGradientShift 3s ease infinite;
          font-family: 'Poppins', 'Montserrat', sans-serif;
        }

        @keyframes textGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        :global(.nav-link) {
          position: relative;
          font-size: 0.95rem;
          color: rgba(226, 232, 240, 0.8) !important;
          font-weight: 500;
          padding: 6px 12px;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        :global(.nav-link:hover) {
          color: var(--accent) !important;
        }

        :global(.nav-link.active) {
          color: var(--accent) !important;
          font-weight: 700;
        }

        .active-indicator {
          position: absolute;
          bottom: -4px;
          left: 12px;
          right: 12px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          box-shadow: 0 0 10px var(--accent);
          border-radius: 99px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .desktop-toggle {
          display: block;
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 28px;
          height: 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }

        .hamburger-btn:focus {
          outline: none;
        }

        .bar {
          width: 28px;
          height: 3px;
          background: #f1f5f9;
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          position: relative;
        }

        /* Hamburger Animation */
        .bar:first-child.open {
          transform: translateY(7px) rotate(45deg);
        }

        .bar:nth-child(2).open {
          opacity: 0;
          transform: translateX(-20px);
        }

        .bar:last-child.open {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Drawer */
        .mobile-menu-drawer {
          display: none;
          flex-direction: column;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-drawer.open {
          max-height: 480px;
          padding-bottom: 1.5rem;
        }

        .mobile-toggle-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          color: rgba(226, 232, 240, 0.9);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .mobile-links-list {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 1rem;
        }

        :global(.mobile-nav-link) {
          padding: 0.8rem 1rem;
          font-size: 1.1rem;
          color: rgba(226, 232, 240, 0.85) !important;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        :global(.mobile-nav-link:hover), :global(.mobile-nav-link.active) {
          color: var(--accent) !important;
          background: rgba(6, 182, 212, 0.08);
          padding-left: 1.5rem !important;
        }

        /* --- Media Queries --- */
        @media (max-width: 900px) {
          .nav-links-desktop {
            display: none;
          }

          .desktop-toggle {
            display: none;
          }

          .hamburger-btn {
            display: flex;
          }

          .mobile-menu-drawer {
            display: flex;
          }
        }
      `}</style>
    </nav>
  )
}
