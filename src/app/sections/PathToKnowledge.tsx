'use client'

import React from 'react'

export default function PathToKnowledge() {
  const education = [
    {
      institution: 'NCBA&E, Lahore',
      degree: 'Computer Science | 2023',
      details:
        'Developed strong project management skills during BSCS through team-based projects & capstone work. Collaborated across disciplines, managed timelines, & built strengths in communication & problem-solving.',
      logo: '/assets/images/NCBAE.svg',
      imageSide: 'left',
    },
    {
      institution: 'Queen Mary College, Lahore',
      degree: 'Computer Science | 2018',
      details:
        'Completed ICS in 2017, & proactively appeared for improvement exams in 2018 to strengthen my university application. Strengthened programming, design & admin skills during the gap year—turning a challenge into lasting professional growth.',
      logo: '/assets/images/QMC1.svg',
      imageSide: 'right',
    },
    {
      institution: 'LAPS, Lahore',
      degree: 'Computer Science | 2015',
      details:
        'Matriculated in Computer Science with a focus on developing a comprehensive understanding of core concepts. Equipped with practical experience & ready to apply knowledge in real-world scenarios for academic & professional advancement.',
      logo: '/assets/images/LAPS.svg',
      imageSide: 'left',
    },
  ]

  return (
    <section className="knowledge-section">
      {/* HEADER */}
      <header className="knowledge-header">
        <h2>The Path to Knowledge</h2>
        <p>EXPERIENCE GAINED IN KNOWLEDGE &amp; CHAOS</p>
      </header>

      {/* EDUCATION ROWS */}
      <div className="education-list">
        {education.map((item, index) => (
          <article
            key={item.institution}
            className={`education-row ${
              item.imageSide === 'right' ? 'image-right' : 'image-left'
            }`}
          >
            <div className="education-logo-box">
              <img src={item.logo} alt={`${item.institution} logo`} />
            </div>

            <div className="education-content">
              <h3>{item.institution}</h3>
              <h4>{item.degree}</h4>

              <p>{item.details}</p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap');

        .knowledge-section {
          position: relative;
          z-index: 20;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          padding: 72px 20px 48px;
          color: #ffffff;
          background: #000000;
          font-family: 'Halant', serif;
        }

        .knowledge-header {
          position: relative;
          z-index: 2;
          width: 100%;
          margin: 0 auto 50px;
          text-align: center;
        }

        .knowledge-header h2 {
          margin: 0;
          color: #ffffff;
          font-family: 'Island Moments', cursive;
          font-size: clamp(58px, 5vw, 84px);
          font-weight: 400;
          line-height: 0.82;
          letter-spacing: 1px;
        }

        .knowledge-header p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.88);
          font-family: 'Halant', serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .education-list {
          position: relative;
          z-index: 2;
          display: flex;
          width: 100%;
          max-width: 1580px;
          margin: 0 auto;
          flex-direction: column;
          gap: 14px;
        }

        .education-row {
          display: grid;
          width: 100%;
          grid-template-columns: 180px minmax(0, 1fr);
          align-items: center;
          gap: 45px;
          min-height: 180px;
        }

        .education-row.image-right {
          grid-template-columns: minmax(0, 1fr) 180px;
        }

        .education-row.image-right .education-logo-box {
          grid-column: 2;
          grid-row: 1;
        }

        .education-row.image-right .education-content {
          grid-column: 1;
          grid-row: 1;
          text-align: right;
        }

        .education-logo-box {
          display: flex;
          width: 180px;
          height: 180px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            linear-gradient(
              145deg,
              rgba(65, 65, 65, 0.82),
              rgba(25, 25, 25, 0.98)
            );
        }

        .education-logo-box img {
          display: block;
          width: 118px;
          height: 118px;
          object-fit: contain;
          filter: drop-shadow(0 14px 10px rgba(0, 0, 0, 0.75));
        }

        .education-content {
          min-width: 0;
          text-align: left;
        }

        .education-content h3,
        .education-content h4 {
          margin: 0;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;
        }

        .education-content p {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.86);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.45;
          word-spacing: 8px;
        }

        .education-row.image-right .education-content p {
          margin-left: auto;
        }

        @media (max-width: 900px) {
          .education-list {
            max-width: 760px;
            gap: 30px;
          }

          .education-row,
          .education-row.image-right {
            grid-template-columns: 155px minmax(0, 1fr);
            gap: 28px;
          }

          .education-row.image-right .education-logo-box {
            grid-column: 1;
          }

          .education-row.image-right .education-content {
            grid-column: 2;
            text-align: left;
          }

          .education-logo-box {
            width: 155px;
            height: 155px;
          }

          .education-logo-box img {
            width: 102px;
            height: 102px;
          }

          .education-content p {
            font-size: 15px;
            word-spacing: 4px;
          }
        }

        @media (max-width: 768px) {
          .knowledge-section {
            padding: 72px 16px 55px;
          }

          .knowledge-header {
            margin-bottom: 42px;
          }

          .knowledge-header h2 {
            font-size: clamp(55px, 15vw, 75px);
          }

          .knowledge-header p {
            max-width: 360px;
            margin-right: auto;
            margin-left: auto;
            font-size: 10px;
            line-height: 1.45;
          }

          .education-list {
            max-width: 560px;
            gap: 48px;
          }

          .education-row,
          .education-row.image-right {
            display: flex;
            min-height: auto;
            flex-direction: column;
            gap: 24px;
          }

          .education-row.image-right .education-logo-box {
            order: 0;
          }

          .education-row.image-right .education-content {
            order: 1;
          }

          .education-logo-box {
            width: min(100%, 260px);
            height: 220px;
          }

          .education-logo-box img {
            width: 135px;
            height: 135px;
          }

          .education-content,
          .education-row.image-right .education-content {
            width: 100%;
            text-align: center;
          }

          .education-content h3,
          .education-content h4 {
            font-size: 17px;
          }

          .education-content p {
            margin-top: 16px;
            font-size: 15px;
            line-height: 1.55;
            word-spacing: 2px;
          }
        }

        @media (max-width: 420px) {
          .knowledge-section {
            padding-top: 62px;
          }

          .knowledge-header h2 {
            font-size: 55px;
          }

          .knowledge-header p {
            font-size: 9px;
          }

          .education-logo-box {
            height: 200px;
          }

          .education-logo-box img {
            width: 120px;
            height: 120px;
          }

          .education-content h3,
          .education-content h4 {
            font-size: 16px;
          }

          .education-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  )
}