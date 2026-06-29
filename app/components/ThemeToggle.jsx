'use client'

import { useTheme } from './ThemeProvider'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const { theme, themes, setTheme, currentColors } = useTheme()
  const [showPanel, setShowPanel] = useState(false)

  // Filter themes by mode
  const currentMode = themes[theme]?.mode || 'dark'
  const darkThemes = Object.entries(themes).filter(([_, themeData]) => themeData.mode === 'dark')
  const lightThemes = Object.entries(themes).filter(([_, themeData]) => themeData.mode === 'light')
  const currentThemes = currentMode === 'dark' ? darkThemes : lightThemes

  const toggleMode = () => {
    const newMode = currentMode === 'dark' ? 'light' : 'dark'
    const targetThemes = newMode === 'dark' ? darkThemes : lightThemes
    if (targetThemes.length > 0) {
      setTheme(targetThemes[0][0])
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          background: 'transparent',
          color: 'var(--text)',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
        }}
      >
        <span style={{ fontSize: '16px' }}>
          {currentMode === 'dark' ? '🌙' : '☀️'}
        </span>
        <span>{currentMode === 'dark' ? 'Dark' : 'Light'}</span>
        <span style={{ 
          fontSize: '12px', 
          color: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.accent-2})`,
            boxShadow: `0 0 8px ${currentColors.glow}`,
            display: 'inline-block'
          }} />
          {themes[theme]?.name || ''}
        </span>
      </button>

      {/* Theme Selection Panel */}
      {showPanel && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '16px',
            borderRadius: '16px',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            minWidth: '220px',
            zIndex: 1000,
          }}
        >
          {/* Mode Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
          }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>
              🎨 Theme Mode
            </span>
            <button
              onClick={toggleMode}
              style={{
                padding: '6px 10px',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                background: currentMode === 'light' ? 'var(--accent)' : 'var(--bg)',
                color: currentMode === 'light' ? 'white' : 'var(--text)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {currentMode === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>

          {/* Theme Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>
              🎯 {currentMode === 'dark' ? 'Dark' : 'Light'} Themes
            </span>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
            }}>
              {currentThemes.map(([key, themeData]) => (
                <button
                  key={key}
                  onClick={() => {
                    setTheme(key)
                    setShowPanel(false)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    borderRadius: '10px',
                    border: key === theme ? `2px solid ${themeData.colors.accent}` : '1px solid var(--border)',
                    background: key === theme 
                      ? `linear-gradient(135deg, ${themeData.colors.accent}20, ${themeData.colors.accent-2}20)`
                      : 'var(--card)',
                    color: 'var(--text)',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: key === theme ? `0 0 15px ${themeData.colors.glow}` : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = `0 0 20px ${themeData.colors.glow}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = key === theme ? `0 0 15px ${themeData.colors.glow}` : 'none'
                  }}
                >
                  <span 
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${themeData.colors.accent}, ${themeData.colors.accent-2})`,
                      boxShadow: `0 0 10px ${themeData.colors.glow}`,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ textAlign: 'left' }}>
                    {themeData.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowPanel(false)}
            style={{
              padding: '8px 12px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--muted)',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'var(--text)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.color = 'var(--muted)'
            }}
          >
            ✨ Close
          </button>
        </div>
      )}

      {/* Click outside to close */}
      {showPanel && (
        <div
          onClick={() => setShowPanel(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
          }}
        />
      )}
    </div>
  )
}
