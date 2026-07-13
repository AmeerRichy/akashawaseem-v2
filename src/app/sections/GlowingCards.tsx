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
      className="glowing-cards-section"
      style={{
        background:
          'radial-gradient(circle at 50% bottom, #0b0b0b 0%, #000 100%)',
        backgroundColor: '#000',
        padding: '100px 20px',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
        zIndex: 10,
        isolation: 'isolate',
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: '60px',
          position: 'relative',
          zIndex: 2,
        }}
      >
       <h2
  style={{
    fontFamily: "'Island Moments', cursive",
    fontSize: 'clamp(58px, 5vw, 84px)!important',
    fontWeight: '400',
    color: '#fff',
    marginBottom: '8px',
    letterSpacing: '1px',
    lineHeight: '0.82',
  }}
>
  Labs of Wonders
</h2>

        <p
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '.9rem',
            color: '#aaa',
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
          position: 'relative',
          zIndex: 2,
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="pod"
            style={
              {
                '--glow': card.glowColor,
              } as React.CSSProperties
            }
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

      {/* Original CSS with black-and-white default */}
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
          filter: grayscale(1) blur(3px);
          z-index: -1;
          pointer-events: none;
          transition:
            filter 0.8s ease,
            opacity 0.8s ease;
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
          transform: translate(-50%, -50%) rotate(250deg);
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

        .pod:hover > .darkBordrBg {
          filter: grayscale(0) blur(3px);
        }

        .pod:hover > .darkBordrBg::before {
          transform: translate(-50%, -50%) rotate(-98deg);
        }

        .glw {
          max-width: 470px;
          max-height: 880px;
          filter: grayscale(1) blur(30px);
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

        .pod:hover > .glw {
          filter: grayscale(0) blur(30px);
        }

        .pod:hover > .glw::before {
          transform: translate(-50%, -50%) rotate(250deg);
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
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.08);
          transition:
            transform 0.3s ease,
            box-shadow 0.8s ease;
        }

        .pod:hover .wwd-link-preview {
          transform: translateY(-4px);
          box-shadow: 0 0 25px var(--glow);
        }

        .wwd-thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          object-fit: contain;
          filter: grayscale(1);
          transition: filter 0.8s ease;
        }

        .pod:hover .wwd-thumbnail {
          filter: grayscale(0);
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
          color: #888;
          transition:
            color 0.8s ease,
            text-shadow 0.8s ease;
        }

        .pod:hover .wwd-url {
          color: var(--glow);
          text-shadow: 0 0 10px var(--glow);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .glowing-cards-section {
            padding: 64px 14px !important;
            overflow: hidden !important;
          }

          .pod {
            flex: 1 1 100%;
            width: 100%;
            min-width: 0;
          }

          .wwd-link-preview {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            width: 100%;
            max-width: 460px;
            min-height: auto;
          }

          .wwd-thumbnail {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 420px) {
          .glowing-cards-section {
            padding: 54px 12px !important;
          }

          .wwd-link-preview {
            padding: 16px;
          }

          .wwd-thumbnail {
            width: 68px;
            height: 68px;
          }
        }
      `}</style>
    </section>
  )
}
