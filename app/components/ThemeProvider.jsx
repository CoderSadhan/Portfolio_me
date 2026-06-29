'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { gsap } from 'gsap'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('nebula')
  const [isInitialized, setIsInitialized] = useState(false)

  const themes = {
    // Dark Themes
    nebula: {
      name: 'Nebula Glow',
      mode: 'dark',
      colors: {
        bg: '#020617', // deep navy
        text: '#e5f4ff',
        accent: '#22d3ee', // cyan
        accent2: '#a855f7', // violet
        card: 'rgba(15,23,42,0.85)',
        glow: 'rgba(56,189,248,0.45)',
        muted: '#94a3b8',
        border: 'rgba(255,255,255,0.08)'
      }
    },
    aurora: {
      name: 'Aurora Wave',
      mode: 'dark',
      colors: {
        bg: '#020617',
        text: '#ecfeff',
        accent: '#22c55e', // emerald
        accent2: '#22d3ee', // teal/cyan
        // keep cards consistent across dark themes so text backgrounds don't change color
        card: 'rgba(15,23,42,0.85)',
        glow: 'rgba(16,185,129,0.5)',
        muted: '#94a3b8',
        border: 'rgba(255,255,255,0.08)'
      }
    },
    cosmic: {
      name: 'Cosmic Sunset',
      mode: 'dark',
      colors: {
        bg: '#050114', // space purple
        text: '#f9fafb',
        accent: '#f97316', // orange
        accent2: '#e11d48', // pink/red
        card: 'rgba(15,23,42,0.85)',
        glow: 'rgba(249,115,22,0.55)',
        muted: '#94a3b8',
        border: 'rgba(255,255,255,0.08)'
      }
    },
    ocean: {
      name: 'Electric Ocean',
      mode: 'dark',
      colors: {
        bg: '#020617',
        text: '#dbeafe',
        accent: '#0ea5e9', // sky blue
        accent2: '#22c1c3', // aqua
        card: 'rgba(15,23,42,0.9)',
        glow: 'rgba(14,165,233,0.55)',
        muted: '#94a3b8',
        border: 'rgba(255,255,255,0.08)'
      }
    },
    // Light Themes
    light: {
      name: 'Light Mode',
      mode: 'light',
      colors: {
        bg: '#ffffff',
        text: '#1e293b',
        accent: '#0ea5e9',
        accent2: '#06b6d4',
        card: 'rgba(255,255,255,0.9)',
        glow: 'rgba(14,165,233,0.2)',
        muted: '#64748b',
        border: 'rgba(0,0,0,0.1)'
      }
    },
    sunrise: {
      name: 'Sunrise Light',
      mode: 'light',
      colors: {
        bg: '#fef7ed',
        text: '#1e293b',
        accent: '#f97316',
        accent2: '#ea580c',
        card: 'rgba(255,255,255,0.9)',
        glow: 'rgba(249,115,22,0.2)',
        muted: '#64748b',
        border: 'rgba(0,0,0,0.1)'
      }
    },
    forest: {
      name: 'Forest Light',
      mode: 'light',
      colors: {
        bg: '#f0fdf4',
        text: '#1e293b',
        accent: '#22c55e',
        accent2: '#16a34a',
        card: 'rgba(255,255,255,0.9)',
        glow: 'rgba(34,197,94,0.2)',
        muted: '#64748b',
        border: 'rgba(0,0,0,0.1)'
      }
    },
    sky: {
      name: 'Sky Light',
      mode: 'light',
      colors: {
        bg: '#f0f9ff',
        text: '#1e293b',
        accent: '#0ea5e9',
        accent2: '#0284c7',
        card: 'rgba(255,255,255,0.9)',
        glow: 'rgba(14,165,233,0.2)',
        muted: '#64748b',
        border: 'rgba(0,0,0,0.1)'
      }
    }
  }

  useEffect(() => {
    // Initialize theme from localStorage (runs only on client)
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme)
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (!isInitialized) return

    const colors = themes[theme].colors
    const root = document.documentElement

    // Update CSS variables
    root.style.setProperty('--bg', colors.bg)
    root.style.setProperty('--text', colors.text)
    root.style.setProperty('--accent', colors.accent)
    root.style.setProperty('--accent-2', colors.accent2)
    root.style.setProperty('--card', colors.card)
    root.style.setProperty('--glow', colors.glow)
    root.style.setProperty('--muted', colors.muted || '#94a3b8')
    root.style.setProperty('--border', colors.border || 'rgba(255,255,255,0.08)')

    // Save to localStorage
    localStorage.setItem('portfolio-theme', theme)

    // Animate theme transition
    gsap.fromTo(
      root,
      { filter: 'brightness(0.8) saturate(0.8)' },
      {
        filter: 'brightness(1) saturate(1)',
        duration: 1.5,
        ease: 'power2.out'
      }
    )

    // Create ambient particles
    createAmbientParticles(colors)
  }, [theme, isInitialized])

  const createAmbientParticles = (colors) => {

    // Remove existing particles
    const existing = document.querySelectorAll('.ambient-particle')
    existing.forEach(el => el.remove())

    // Create new particles
    const container = document.body
    if (!container) return

    const particleCount = 20

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'ambient-particle'
      particle.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: radial-gradient(circle, ${colors.accent}, ${colors.accent2});
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        pointer-events: none;
        z-index: -1;
        filter: blur(0.5px);
      `
      container.appendChild(particle)

      // Animate particles
      gsap.to(particle, {
        y: Math.random() * 100 - 50,
        x: Math.random() * 100 - 50,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 3 + 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      })
    }
  }

  const value = {
    theme,
    themes,
    setTheme,
    currentColors: themes[theme].colors,
    isInitialized,
    isMounted: true
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
