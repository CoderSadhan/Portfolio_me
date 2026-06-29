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

  const normalizePath = (path) => path.replace(/\/$/, '') || '/'

  useEffect(() => {
    // Handle active section detection for home page
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'resume']
        const currentScroll = window.scrollY + 120 // Offset for sticky navbar
        
        // Handle bottom-of-page edge case
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
      handleScroll() // Check initial position immediately
      const timer = setTimeout(handleScroll, 100) // Ensure layout is settled

      return () => {
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(timer)
      }
    } else {
      setActiveSection('')
    }
  }, [pathname])

  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.8rem 2rem",
        borderBottom: "1px solid rgba(148,163,184,0.15)",
        background: "rgba(15,23,42,0.55)",
        backdropFilter: "blur(16px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* --- Left Logo --- */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          className="logo"
          style={{
            position: "relative",
            padding: "4px 16px",
            borderRadius: "12px",
            background: "#1f2937",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              letterSpacing: "1px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              background: "linear-gradient(90deg, #ff6b6b, #ffd166, #06d6a0, #118ab2, #ef476f)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "textGradientShift 3s ease infinite",
              fontFamily: "'Poppins', 'Montserrat', 'Segoe UI', 'Arial', sans-serif",
            }}
          >
            Sadhan
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes textGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* --- Theme Toggle Button --- */}
      <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)' }}>
        <ThemeToggle />
      </div>

      {/* --- Center Navigation Links --- */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.8rem",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {links.map((l) => {
          // Determine active state for home page sections
          const isHomeSectionActive = pathname === '/' && (
            (l.label === 'Home' && activeSection === 'home') ||
            (l.label === 'About me' && activeSection === 'about') ||
            (l.label === 'Resume' && activeSection === 'resume')
          )
          
          // Determine active state for page navigation
          const isPageActive = normalizePath(pathname) === normalizePath(l.to) && normalizePath(pathname) !== '/'
          
          const isActive = isHomeSectionActive || isPageActive
          
          return (
            <Link
              key={l.to}
              href={l.to}
              onClick={(e) => {
                // Handle smooth scrolling for same-page sections (only on home page)
                if (pathname === '/' && (l.label === 'Home' || l.label === 'About me' || l.label === 'Resume')) {
                  e.preventDefault()
                  const sectionId = l.label === 'Home' ? 'home' : 
                                   l.label === 'About me' ? 'about' : 'resume'
                  const element = document.getElementById(sectionId)
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    })
                  } else {
                    // Fallback: navigate to separate page if section doesn't exist
                    window.location.href = l.to
                  }
                }
                // For other pages, normal navigation will occur
              }}
              style={{
                position: "relative",
                fontSize: "0.95rem",
                textDecoration: "none",
                color: isActive ? "var(--accent)" : "rgba(226,232,240,0.85)",
                fontWeight: isActive ? 700 : 500,
                padding: "6px 10px",
                borderRadius: "999px",
                transition: "all 0.2s ease",
                cursor: "pointer",
                background: "transparent",
                border: "1px solid transparent",
              }}
            >
              {l.label}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                    boxShadow: "0 0 10px var(--accent)",
                  }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
