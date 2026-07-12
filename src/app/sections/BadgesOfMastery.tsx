'use client'

import React from 'react'

export default function BadgesOfMastery() {
  const badges = [
    {
      name: 'Canva Certificate',
      img: '/assets/images/cert3.png',
    },
    {
      name: 'Microsoft Certificate',
      img: '/assets/images/cert1.png',
    },
    {
      name: 'Python Institute',
      img: '/assets/images/cert2.png',
    },
  ]

  return (
    <section className="badges-section">
      {/* HEADER */}
      <header className="badges-header">
        <h2>Badges of Mastery</h2>

        <p>PROOF I DIDN’T JUST WATCH THE YOUTUBE TUTORIAL</p>
      </header>

      {/* CERTIFICATE AREA */}
      <div className="badges-background">
        <div className="badges-grid">
          {badges.map((badge) => (
            <article className="certificate-card" key={badge.name}>
              <h3>{badge.name}</h3>

              <div className="title-decoration" aria-hidden="true">
                <span />
                <i>✦</i>
                <span />
              </div>

              <div className="certificate-image-wrapper">
                <img src={badge.img} alt={badge.name} />
              </div>

              <div className="certificate-laurel" aria-hidden="true">
                <span className="laurel laurel-left">❧</span>
                <span className="laurel laurel-right">❧</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap');

        .badges-section {
          position: relative;
          z-index: 20;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          padding: 70px 20px 88px;
          color: #ffffff;
          text-align: center;
          background: #000000;
        }

        .badges-header {
          position: relative;
          z-index: 3;
          width: 100%;
          margin: 0 auto 34px;
          text-align: center;
        }

        .badges-header h2 {
          margin: 0;
          color: #ffffff;
          font-family: 'Island Moments', cursive;
          font-size: clamp(58px, 5vw, 84px);
          font-weight: 400;
          line-height: 0.82;
          letter-spacing: 1px;
        }

        .badges-header p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-family: 'Halant', serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .badges-background {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1580px;
          margin: 0 auto;
          padding: 20px 70px 38px;
          overflow: hidden;
          background: #000000;
        }

        .badges-grid {
          display: grid;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 36px;
        }

        .certificate-card {
          position: relative;
          display: flex;
          min-height: 410px;
          flex-direction: column;
          align-items: center;
          padding: 32px 24px 20px;
          overflow: hidden;
          background: #0b0b0b;
          border: 1px solid rgba(255, 255, 255, 0.42);
          border-radius: 14px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 22px 45px rgba(0, 0, 0, 0.7);
          transition:
            transform 0.45s ease,
            border-color 0.45s ease,
            box-shadow 0.45s ease;
        }

        .certificate-card:hover {
          border-color: rgba(255, 255, 255, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 26px 50px rgba(0, 0, 0, 0.78),
            0 0 20px rgba(255, 255, 255, 0.07);
          transform: translateY(-7px);
        }

        .certificate-card h3 {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-family: 'Halant', serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.3;
        }

        .title-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 110px;
          margin: 10px auto 18px;
        }

        .title-decoration span {
          width: 38px;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.3)
          );
        }

        .title-decoration span:last-child {
          background: linear-gradient(
            to left,
            transparent,
            rgba(255, 255, 255, 0.3)
          );
        }

        .title-decoration i {
          margin: 0 7px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 8px;
          font-style: normal;
          text-shadow: 0 0 7px rgba(255, 255, 255, 0.8);
        }

        .certificate-image-wrapper {
          position: relative;
          width: 100%;
          height: 225px;
          overflow: hidden;
          background: #101010;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          box-shadow:
            inset 0 0 22px rgba(0, 0, 0, 0.6),
            0 14px 26px rgba(0, 0, 0, 0.55);
        }

        .certificate-image-wrapper::after {
          position: absolute;
          inset: 0;
          content: '';
          pointer-events: none;
          background: linear-gradient(
            125deg,
            rgba(255, 255, 255, 0.035),
            transparent 35%,
            transparent 70%,
            rgba(255, 255, 255, 0.025)
          );
        }

        .certificate-image-wrapper img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(1) brightness(0.72) contrast(1.08);
          transition:
            filter 0.5s ease,
            transform 0.5s ease;
        }

        .certificate-card:hover .certificate-image-wrapper img {
          filter: grayscale(0) brightness(1) contrast(1);
          transform: scale(1.02);
        }

        .certificate-laurel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.65);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 34px;
          line-height: 1;
        }

        .laurel {
          display: inline-block;
        }

        .laurel-left {
          transform: rotate(25deg);
        }

        .laurel-right {
          transform: scaleX(-1) rotate(25deg);
        }

        @media (max-width: 1100px) {
          .badges-background {
            padding-right: 35px;
            padding-left: 35px;
          }

          .badges-grid {
            gap: 24px;
          }

          .certificate-card {
            min-height: 380px;
            padding-right: 18px;
            padding-left: 18px;
          }

          .certificate-image-wrapper {
            height: 205px;
          }
        }

        @media (max-width: 850px) {
          .badges-grid {
            max-width: 700px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .badges-section {
            padding: 70px 14px 65px;
          }

          .badges-header {
            margin-bottom: 32px;
          }

          .badges-header h2 {
            font-size: clamp(55px, 15vw, 75px);
          }

          .badges-header p {
            max-width: 360px;
            margin-right: auto;
            margin-left: auto;
            padding: 0 10px;
            font-size: 10px;
            line-height: 1.45;
          }

          .badges-background {
            padding: 20px 20px 30px;
          }
        }

        @media (max-width: 560px) {
          .badges-grid {
            max-width: 340px;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .certificate-card {
            min-height: 395px;
          }

          .certificate-image-wrapper {
            height: 220px;
          }
        }

        @media (max-width: 420px) {
          .badges-section {
            padding-top: 62px;
          }

          .badges-header h2 {
            font-size: 55px;
          }

          .badges-header p {
            font-size: 9px;
          }

          .badges-background {
            padding-right: 12px;
            padding-left: 12px;
          }

          .certificate-card {
            min-height: 370px;
            padding: 28px 16px 18px;
          }

          .certificate-card h3 {
            font-size: 16px;
          }

          .certificate-image-wrapper {
            height: 205px;
          }
        }
      `}</style>
    </section>
  )
}