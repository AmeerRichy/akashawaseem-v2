'use client'
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const container = document.getElementById('particles-container')
    if (!container) return

    const count = 80
    const resetParticle = (p: HTMLDivElement) => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      p.style.left = `${x}px`
      p.style.top = `${y}px`
      p.style.opacity = '0'
      return { x, y }
    }

    const animateParticle = (p: HTMLDivElement, pos: { x: number; y: number }) => {
      const duration = Math.random() * 10 + 10
      const delay = Math.random() * 5
      setTimeout(() => {
        p.style.transition = `all ${duration}s linear`
        p.style.opacity = `${Math.random() * 0.3 + 0.1}`
        const moveX = pos.x + (Math.random() * 200 - 100)
        const moveY = pos.y - Math.random() * 200
        p.style.left = `${moveX}px`
        p.style.top = `${moveY}px`
        setTimeout(() => animateParticle(p, resetParticle(p)), duration * 1000)
      }, delay * 1000)
    }

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      Object.assign(p.style, {
        position: 'absolute',
        background: 'white',
        borderRadius: '50%',
        opacity: '0',
        pointerEvents: 'none',
      })
      const size = Math.random() * 3 + 1
      p.style.width = `${size}px`
      p.style.height = `${size}px`
      const pos = resetParticle(p)
      container.appendChild(p)
      animateParticle(p, pos)
    }

    const mouseHandler = (e: MouseEvent) => {
      const p = document.createElement('div')
      Object.assign(p.style, {
        position: 'absolute',
        background: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
      })
      const size = Math.random() * 4 + 2
      p.style.width = `${size}px`
      p.style.height = `${size}px`

      const x = e.clientX + window.scrollX
      const y = e.clientY + window.scrollY
      p.style.left = `${x}px`
      p.style.top = `${y}px`
      p.style.opacity = '0.6'
      container.appendChild(p)

      setTimeout(() => {
        p.style.transition = 'all 1.5s ease-out'
        p.style.left = `${x + (Math.random() * 50 - 25)}px`
        p.style.top = `${y + (Math.random() * 50 - 25)}px`
        p.style.opacity = '0'
        setTimeout(() => p.remove(), 1500)
      }, 10)
    }

    document.addEventListener('mousemove', mouseHandler)
    return () => document.removeEventListener('mousemove', mouseHandler)
  }, [])

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 0% 0%, #7a5a3a 0%, #050505 60%)',
        color: '#e9c5b3',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Background Blobs + Particles */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            filter: 'blur(60px)',
            background: 'linear-gradient(90deg,#967350 ,#30241b)',
            top: '-40%',
            left: '-30%',
            animation: 'float1 15s ease-in-out infinite alternate',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '45vw',
            height: '45vw',
            borderRadius: '50%',
            filter: 'blur(60px)',
            background: 'linear-gradient(-90deg,#be9f8f80,#a3837380)',
            bottom: '-30%',
            right: '-10%',
            animation: 'float2 18s ease-in-out infinite alternate',
          }}
        />
        <div
          id="particles-container"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Main Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1000px',
          width: '100%',
          padding: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Left: Name Images */}
        <div
          className="left-column"
          style={{
            flex: 1,
            minWidth: '250px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <img
            src="/assets/images/Akasha.png"
            alt="Akasha"
            className="name akasha"
            style={{
              width: 'clamp(180px, 30vw, 300px)',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.5))',
              opacity: 0,
              transform: 'translateX(-60px)',
            }}
          />
          <img
            src="/assets/images/Waseem.png"
            alt="Waseem"
            className="name waseem"
            style={{
              width: 'clamp(180px, 30vw, 300px)',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.5))',
              opacity: 0,
              transform: 'translateX(60px)',
            }}
          />
        </div>

        {/* Right: Character */}
        <div
          className="right-column"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '300px',
          }}
        >
          <img
            src="/assets/images/Character.png"
            alt="Character"
            style={{
              width: '100%',
              maxWidth: '350px',
              borderRadius: '20px',
              boxShadow: '0 0 80px rgba(90,60,40,0.4)',
              background: 'radial-gradient(circle at bottom, #1b1511, transparent 70%)',
              transition: 'transform 0.8s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0% {transform: translate(0,0) scale(1);}
          100% {transform: translate(50%,10%) scale(1.1);}
        }
        @keyframes float2 {
          0% {transform: translate(0,0) scale(1);}
          100% {transform: translate(-25%,5%) scale(1.15);}
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .akasha {
          animation: fadeSlideRight 1.2s ease-out forwards;
        }
        .waseem {
          animation: fadeSlideLeft 1.2s ease-out forwards;
          animation-delay: 0.3s;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column !important;
            text-align: center !important;
          }
          .left-column {
            align-items: center !important;
          }
          .right-column img {
            max-width: 250px !important;
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  )
}
