'use client'

import React from 'react'

export default function UnderTheHood() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    'https://upload.wikimedia.org/wikipedia/commons/d/dc/Nextjs-logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  ]

  return (
    <section
      style={{
        background: 'radial-gradient(circle at 50% top, #0b0b0b 0%, #000 100%)',
        color: '#fff',
        textAlign: 'center',
        padding: '100px 0 150px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '80px' }}>
        <h2
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '2.5rem',
            color: '#D29889',
            marginBottom: '8px',
            fontWeight: '400',
            letterSpacing: '1px',
          }}
        >
          Under the Hood
        </h2>
        <p
         style={{
              fontFamily: "'Laila', serif",
            fontSize: '.9rem',
            color: '#D1B3A4',
            letterSpacing: '2px',
          }}
        >
          THINGS I BREAK (AND THEN FIX EVEN BETTER)
        </p>
      </div>

      {/* 3D Rotating Ring */}
      <div className="rand-wrapper-xxz1">
        <div className="rand-inner-yh4s" style={{ ['--quantity' as any]: 10 }}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="rand-card-7k5b"
              style={{ ['--index' as any]: index }}
            >
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* STYLE */}
      <style>{`
        .rand-wrapper-xxz1 {
          width: 100%;
          height: 50vh;
          position: relative;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .rand-inner-yh4s {
          --w: 120px;
          --h: 120px;
          --translateZ: 220px;
          --rotateX: -15deg;
          --perspective: 1000px;
          position: relative;
          width: var(--w);
          height: var(--h);
          transform-style: preserve-3d;
          animation: rand-rotate-mn9r 20s linear infinite;
          transform: perspective(var(--perspective)) rotateX(var(--rotateX));
        }

        @keyframes rand-rotate-mn9r {
          from {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0deg);
          }
          to {
            transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(360deg);
          }
        }

        .rand-card-7k5b {
          position: absolute;
          width: var(--w);
          height: var(--h);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(5px);
          transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .rand-card-7k5b img {
          width: 60%;
          height: 60%;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }

        .rand-card-7k5b:hover img {
          transform: scale(1.15);
        }

        .rand-card-7k5b:nth-child(1) { background: radial-gradient(circle, rgba(142,249,252,0.2), rgba(142,249,252,0.6)); }
        .rand-card-7k5b:nth-child(2) { background: radial-gradient(circle, rgba(142,252,204,0.2), rgba(142,252,204,0.6)); }
        .rand-card-7k5b:nth-child(3) { background: radial-gradient(circle, rgba(142,252,157,0.2), rgba(142,252,157,0.6)); }
        .rand-card-7k5b:nth-child(4) { background: radial-gradient(circle, rgba(215,252,142,0.2), rgba(215,252,142,0.6)); }
        .rand-card-7k5b:nth-child(5) { background: radial-gradient(circle, rgba(252,252,142,0.2), rgba(252,252,142,0.6)); }
        .rand-card-7k5b:nth-child(6) { background: radial-gradient(circle, rgba(252,208,142,0.2), rgba(252,208,142,0.6)); }
        .rand-card-7k5b:nth-child(7) { background: radial-gradient(circle, rgba(252,142,142,0.2), rgba(252,142,142,0.6)); }
        .rand-card-7k5b:nth-child(8) { background: radial-gradient(circle, rgba(252,142,239,0.2), rgba(252,142,239,0.6)); }
        .rand-card-7k5b:nth-child(9) { background: radial-gradient(circle, rgba(204,142,252,0.2), rgba(204,142,252,0.6)); }
        .rand-card-7k5b:nth-child(10){ background: radial-gradient(circle, rgba(142,202,252,0.2), rgba(142,202,252,0.6)); }

        @media (max-width: 768px) {
          .rand-inner-yh4s {
            --w: 90px;
            --h: 90px;
            --translateZ: 150px;
          }
        }

        @media (max-width: 480px) {
          .rand-inner-yh4s {
            --w: 70px;
            --h: 70px;
            --translateZ: 110px;
          }
          .rand-card-7k5b img {
            width: 70%;
            height: 70%;
          }
        }
      `}</style>
    </section>
  )
}
