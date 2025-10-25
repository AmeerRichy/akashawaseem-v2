'use client'

import React from 'react'

export default function BadgesOfMastery() {
  const badges = [
    { name: 'Microsoft Certificate', img: '/assets/images/cert1.png' },
    { name: 'Python Institute', img: '/assets/images/cert2.png' },
    { name: 'Corvit Certificate', img: '/assets/images/cert3.png' },
  ]

  return (
    <section
      style={{
        background: '#050505',
        color: '#fff',
        textAlign: 'center',
        padding: '100px 0 120px',
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: '60px' }}>
        <h2
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '2.5rem',
            color: '#d29889',
            letterSpacing: '1px',
            marginBottom: '10px',
          }}
        >
          Badges of Mastery
        </h2>
        <p
          style={{
            fontFamily: "'Poiret One', cursive",
            fontSize: '.9rem',
            color: '#fff',
            letterSpacing: '2px',
          }}
        >
          PROOF I DIDN’T JUST WATCH THE YOUTUBE TUTORIAL
        </p>
      </div>

      {/* CERTIFICATES */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '50px',
        }}
      >
        {badges.map((badge, index) => (
          <div
            key={index}
            style={{
              width: '350px', // unified width
              height: '230px', // unified height
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#111',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow =
                '0 0 30px rgba(210,152,137,0.7)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)'
              e.currentTarget.style.boxShadow =
                '0 0 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            <img
              src={badge.img}
              alt={badge.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
