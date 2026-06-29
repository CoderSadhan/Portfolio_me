'use client'

import { useTheme } from './ThemeProvider'
import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  const { theme, themes, setTheme } = useTheme()

  // Initialize showLightMode based on current theme mode, defaulting to dark
  const [showLightMode, setShowLightMode] = useState(false)

  // Initialize showLightMode from localStorage after component mounts (client-side only)
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && themes[savedTheme]) {
      setShowLightMode(themes[savedTheme].mode === 'light')
    }
  }, [themes])

  // Get current theme mode and initialize showLightMode state
  const currentMode = themes[theme]?.mode || 'dark'

  useEffect(() => {
    setShowLightMode(currentMode === 'light')
  }, [currentMode])

  // Filter themes by mode
  const darkThemes = Object.entries(themes).filter(([_, themeData]) => themeData.mode === 'dark')
  const lightThemes = Object.entries(themes).filter(([_, themeData]) => themeData.mode === 'light')

  const toggleMode = () => {
    const newShowLightMode = !showLightMode
    setShowLightMode(newShowLightMode)
    // Switch to first theme of the target mode
    const targetThemes = newShowLightMode ? lightThemes : darkThemes
    if (targetThemes.length > 0) {
      setTheme(targetThemes[0][0])
    }
  }

  const currentThemes = showLightMode ? lightThemes : darkThemes

  const panelBg = showLightMode ? 'var(--card)' : 'rgba(0,0,0,0.15)'
  const panelBorder = showLightMode ? '1px solid var(--border)' : '1px solid rgba(255,255,255,0.18)'
  const panelShadow = showLightMode ? '0 10px 30px rgba(0,0,0,0.12)' : '0 10px 30px rgba(0,0,0,0.35)'

  return (
    <div className="theme-switcher floating slow" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center',
      padding: '12px',
      border: panelBorder,
      borderRadius: '16px',
      background: panelBg,
      backdropFilter: 'blur(10px)',
      boxShadow: panelShadow,
      minWidth: '200px'
    }}>
      {/* Mode Toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        <span style={{
          fontSize: '12px',
          color: 'var(--text)',
          fontWeight: 600
        }}>
          🎨 Theme
        </span>
        <button
          onClick={toggleMode}
          style={{
            padding: '4px 8px',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            background: showLightMode ? 'var(--accent)' : 'var(--bg)',
            color: showLightMode ? 'white' : 'var(--text)',
            fontSize: '11px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          title={`Switch to ${showLightMode ? 'Dark' : 'Light'} Mode`}
        >
          {showLightMode ? '🌙' : '☀️'} {showLightMode ? 'Dark' : 'Light'}
        </button>
      </div>

      {/* Theme Options */}
      <div style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {currentThemes.map(([key, themeData]) => (
          <button
            key={key}
            className={`theme-option ${theme === key ? 'active' : ''}`}
            onClick={() => setTheme(key)}
            title={themeData.name}
            style={{
              background: themeData.mode === 'light'
                ? `linear-gradient(135deg, ${themeData.colors.bg}, ${themeData.colors.accent}20)`
                : `linear-gradient(135deg, ${themeData.colors.accent}, ${themeData.colors.accent2})`,
              boxShadow: theme === key ? `0 0 20px ${themeData.colors.glow}` : 'none',
              border: theme === key ? `2px solid ${themeData.colors.accent}` : '2px solid transparent'
            }}
            aria-label={`Switch to ${themeData.name} theme`}
          />
        ))}
      </div>
    </div>
  )
}
