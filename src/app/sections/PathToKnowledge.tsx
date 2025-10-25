'use client'

import React from 'react'

export default function PathToKnowledge() {
  const cards = [
    {
      badge: 'HSSC',
      title: 'Computer Science',
      subtitle: 'LAPS, Lahore | 2015',
      details:
        'Matriculated in Computer Science with a focus on developing a comprehensive understanding of core concepts. Equipped with practical experience & ready to apply knowledge in real-world scenarios for academic & professional advancement.',
      logo: 'assets/images/LAPS.svg',
      backTitle: 'Matriculation',
    },
    {
      badge: 'SSC',
      title: 'Computer Science',
      subtitle: 'Queen Mary College, Lahore | 2018',
      details:
        'Completed ICS in 2017, & proactively appeared for improvement exams in 2018 to strengthen my university application. Strengthened programming, design & admin skills during the gap year—turning a challenge into lasting professional growth.',
      logo: 'assets/images/QMC1.svg',
      backTitle: 'Intermediate',
    },
    {
      badge: 'BS',
      title: 'Computer Science',
      subtitle: 'NCBA&E, Lahore | 2023',
      details:
        'Developed strong project management skills during BSCS through team-based projects & capstone work. Collaborated across disciplines, managed timelines, & built strengths in communication & problem-solving.',
      logo: 'assets/images/NCBAE.svg',
      backTitle: 'Bachelors',
    },
  ]

  return (
    <section
      style={{
        background: 'radial-gradient(circle at 50% top, #0b0b0b 0%, #000 100%)',
        padding: '100px 0',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '80px' }}>
        <h2
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '2.5rem',
            color: '#d29889',
            marginBottom: '8px',
          }}
        >
          The Path to Knowledge
        </h2>
        <p
          style={{
            fontFamily: "'Poiret One', cursive",
            letterSpacing: '2px',
            fontSize: '.9rem',
            color: '#ccc',
          }}
        >
          EXPERIENCE GAINED IN KNOWLEDGE & CHAOS
        </p>
      </div>

      {/* Card Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '60px',
        }}
      >
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <div className="content">
              {/* BACK SIDE */}
              <div className="back">
                <div className="back-content">
                  <img src={card.logo} alt={card.title} width="50" height="50" />
                  <strong>{card.backTitle}</strong>
                </div>
              </div>

              {/* FRONT SIDE */}
              <div className="front">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>

                <div className="front-content">
                  <small className="badge">{card.badge}</small>
                  <div className="description">
                    <div className="title">
                      <p>
                        <strong>{card.title}</strong>
                      </p>
                      <svg
                        fillRule="nonzero"
                        height="15px"
                        width="15px"
                        viewBox="0,0,256,256"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#20c997">
                          <g transform="scale(8,8)">
                            <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className="card-footer">{card.subtitle}</p>
                    <p style={{ color: 'white', fontSize: '10px', marginTop: '10px' }}>{card.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* STYLE */}
<style>{`
  .card {
    overflow: visible;
    width: 230px;
    height: 300px;
    perspective: 1000px;
  }

  /* ✅ gap between cards */
  .card:not(:last-child) {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 500ms;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 1px #000000ee;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(0deg);
  }

  .back::before {
    position: absolute;
    content: '';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #DE907C, #DE907C, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 96%;
    height: 96%;
    background-color: #151515;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  @keyframes rotation_481 {
    0% { transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); }
  }

  /* FRONT SIDE */
  .front {
    transform: rotateY(180deg);
    position: relative;
    color: white;
  }

  /* glowing circles bg */
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #CA997F;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #DE907C;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0px); }
  }

  /* CONTENT AREA FIX */
  .front .front-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    align-self: flex-start;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 12px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 6px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    line-height: 1.6;
  }

  /* ✅ Title and footer remain the same */
  .title {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 2px;
    font-size: 10px;
  }

  /* ✅ Increased font size of paragraph (details text) */
  .description p {
    font-size: 12px;
    color: #fff;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .card {
      width: 80%;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`}</style>


    </section>
  )
}
