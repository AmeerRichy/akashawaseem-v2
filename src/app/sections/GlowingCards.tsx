'use client'

import React from 'react'

export default function LabsOfWonders() {
  const cards = [
    {
      title: 'Graphics Hub',
      desc: 'One-stop platform that offers premium design assets, mockups, & creative solutions for brands & designers...',
      url: 'https://thegraphicshub.org',
      displayUrl: 'www.thegraphicshub.org',
      img: '/assets/images/gh.png',
      glowColor: '#ffbf00',
    },
    {
      title: 'Wonder Works Digital',
      desc: 'Short description of the website will appear here...',
      url: 'https://wonderworksdigital.com',
      displayUrl: 'www.wonderworksdigital.com',
      img: '/assets/images/wonderworks.png',
      glowColor: '#ff0083',
    },
  ]

  return (
    <section
      style={{
        background: 'radial-gradient(circle at 50% top, #0b0b0b 0%, #000 100%)',
        padding: '100px 20px',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible', // ✅ FIXED: allow glow to render outside on mobile
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <h2
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '2.5rem',
            fontWeight: '400',
            color: '#D29889',
            marginBottom: '8px',
            letterSpacing: '1px',
          }}
        >
          Labs of Wonders
        </h2>
        <p
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '.9rem',
            color: '#D1B3A4',
            letterSpacing: '2px',
          }}
        >
          WHERE IDEAS TURN INTO COOL STUFF
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="pod"
            style={{ ['--glow' as any]: card.glowColor }}
          >
            {/* Glow Layers */}
            <div className="glw"></div>
            <div className="darkBordrBg"></div>
            <div className="darkBordrBg"></div>
            <div className="darkBordrBg"></div>

            {/* Card Content */}
            <div className="wwd-link-preview">
              <img
                src={card.img}
                alt={card.title}
                className="wwd-thumbnail"
              />
              <a
                href={card.url}
                target="_blank"
                rel="noreferrer"
                className="wwd-preview-text"
              >
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <span className="wwd-url">{card.displayUrl}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Full CSS for hover animation */}
      <style>{`
        .pod {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          z-index: 0;
          flex: 1 1 45%;
          min-width: 350px;
        }

        .darkBordrBg,
        .glw {
          position: absolute;
          width: 100%;
          height: 100%;
          max-width: 310px;
          max-height: 700px;
          overflow: hidden;
          border-radius: 12px;
          filter: blur(3px);
          z-index: -1;
          pointer-events: none;
        }

        .darkBordrBg {
          max-width: 455px;
          max-height: 120px;
        }

        .darkBordrBg::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 600px;
          transform: translate(-50%, -50%) rotate(82deg);
          background: conic-gradient(
            rgba(0, 0, 0, 0),
            var(--glow),
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0) 60%,
            var(--glow),
            rgba(0, 0, 0, 0) 60%
          );
          transition: all 2s ease;
          z-index: -2;
        }

        .pod:hover > .darkBordrBg::before {
          transform: translate(-50%, -50%) rotate(-98deg);
        }

        .glw {
          max-width: 470px;
          max-height: 880px;
          filter: blur(30px);
          opacity: 0.4;
        }

        .glw::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1200px;
          height: 999px;
          transform: translate(-50%, -50%) rotate(60deg);
          background: conic-gradient(
            #000,
            var(--glow) 5%,
            #000 38%,
            #000 50%,
            var(--glow) 60%,
            #000 87%
          );
          transition: all 2s ease;
          z-index: -2;
        }

        /* Card Core */
        .pod,
        .wwd-link-preview {
          width: 460px;
          max-width: 100%;
          min-height: 120px;
          box-sizing: border-box;
        }

        .wwd-link-preview {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #111;
          color: #fff;
          border-radius: 14px;
          padding: 14px 18px;
          z-index: 2;
          box-shadow: 0 0 25px var(--glow)40;
          transition: transform .3s ease;
        }

        .wwd-link-preview:hover {
          transform: translateY(-4px);
        }

        .wwd-thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          object-fit: contain;
        }

        .wwd-preview-text {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          text-align: left;
        }

        .wwd-preview-text h4 {
          margin: 0 0 4px;
          font-size: 16px;
          color: #fff;
          font-weight: 600;
        }

        .wwd-preview-text p {
          margin: 0 0 6px;
          font-size: 13px;
          color: #bbb;
          line-height: 1.4;
        }

        .wwd-url {
          font-size: 12px;
          color: var(--glow);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pod {
            flex: 1 1 100%;
          }
          .wwd-link-preview {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            width: 100%;
          }
          .wwd-thumbnail {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </section>
  )
}
