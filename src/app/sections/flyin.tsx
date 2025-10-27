'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FlyinWidget() {
  const jobs = [
    {
      key: 'digitt',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Digitt-W.png',
      title: 'Design Executive',
      desc: 'Leading strategic visual solutions & driving creative excellence across digital & traditional platforms. Proven expertise in concept development, team leadership, & delivering impactful designs that elevate brand presence.',
      eyebrow: 'Lahore | 2023 – Present',
      color: '#5b8cff',
      dot: '#018175',
    },
    {
      key: 'corvit',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Corvit-W.png',
      title: 'GFX & BD Trainee',
      desc: 'Gained hands-on experience in both creative design & business development strategies. Contributed to multiple projects, refining my skills while assisting in various design & business development tasks.',
      eyebrow: 'CORVIT Networks, Lahore | 2023',
      color: '#ffd166',
      dot: '#ff3b30',
    },
    {
      key: '4square',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/4Sq-Web.png',
      title: 'Web Designer',
      desc: 'Designed & developed visually appealing, functional websites using WordPress during my contract. Managed the full design process from conception to completion, ensuring responsive & engaging digital experiences.',
      eyebrow: '4Square Web, Lahore | 2023',
      color: '#f6a5ff',
      dot: '#023d7b',
    },
    {
      key: 'yashfeen',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/YES2-scaled.png',
      title: 'Graphics Designer',
      desc: 'Consistently delivered creative design solutions that contributed to project success. Applied a strong background in graphic design to provide innovative & visually striking designs for the company.',
      eyebrow: 'Yashfeen Education System, Lahore | 2022',
      color: '#9b59b6',
      dot: '#2ecc71',
    },
    {
      key: 'frescominc',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Frescominc.png',
      title: 'Sr. GFX & SMM',
      desc: 'Delivered innovative design solutions across various platforms. Managed design projects while overseeing social media content creation & brand identity development.',
      eyebrow: 'Frescominc, Lahore | 2020 – 2022',
      color: '#44e2b5',
      dot: '#016584',
    },
    {
      key: 'healing',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Healing-Minds-e1756716706191.png',
      title: 'Graphics Designer',
      desc: 'Contributed remotely to the design team by creating impactful visual designs. Focused on visual excellence & innovation to develop compelling design solutions.',
      eyebrow: 'Healing Minds, Lahore | 2019 – 2020',
      color: '#00c2ff',
      dot: '#00c2ff',
    },
    {
      key: 'tzone',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/T-zone-scaled.png',
      title: 'Graphics Designer',
      desc: 'Designed engaging visuals remotely, playing a key role in creating impactful designs that contributed to the company’s projects & initiatives.',
      eyebrow: 'Trainings Zone, Lahore | 2019',
      color: '#ffa600',
      dot: '#037700',
    },
    {
      key: 'usa',
      logo: 'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/USA.png',
      title: 'Administrator',
      desc: 'Handled various administrative tasks, including data entry, accounts management, and admissions. Gained valuable organizational skills while supporting the academy’s daily operations.',
      eyebrow: 'Unique Science Academy, Lahore | 2018',
      color: '#35378c',
      dot: '#35378c',
    },
  ]

  const [active, setActive] = useState(jobs[0])

  return (
    <section
      style={{
        position: 'relative',
background: 'linear-gradient(to top, #050505 80%, #2b1f18 100%)',
        color: '#d29889',
        fontFamily: "'Laila', serif",
        padding: '80px 1rem 120px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '2.5rem', position: 'relative', zIndex: 2 }}>
        <h2
          style={{
              fontFamily: "'Laila', serif",
            fontSize: '2.6rem',
             fontWeight: '400',
            marginBottom: '.5rem',
            color: '#D29889',
           letterSpacing: '1px',
          }}
        >
          My Professional Journey
        </h2>
        <p
         style={{
              fontFamily: "'Laila', serif",
            fontSize: '.9rem',
            color: '#D1B3A4',
            letterSpacing: '2px',
            marginBottom: 'rem',
          }}
        >
          CORPORATE FIGHTS. BIG WINS. REAL GROWTH.
        </p>

        {/* Logo Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          {jobs.map((job) => (
            <button
              key={job.key}
              onClick={() => setActive(job)}
              style={{
                border: 'none',
                background:
                  active.key === job.key
                    ? 'rgba(255,255,255,.05)'
                    : 'transparent',
                borderRadius: '10px',
                padding: '.5rem',
                cursor: 'pointer',
                transition: 'all .3s ease',
                transform: active.key === job.key ? 'scale(1.08)' : 'scale(1)',
              }}
            >
              <img
                src={job.logo}
                alt={job.title}
                style={{
                  width: '36px',
                  height: '36px',
                  objectFit: 'contain',
                  filter:
                    active.key === job.key
                      ? `drop-shadow(0 2px 8px ${job.dot})`
                      : 'drop-shadow(0 2px 6px rgba(0,0,0,.35))',
                }}
              />
            </button>
          ))}
        </div>

        <div
          style={{
            width: '80%',
            height: '1px',
            margin: '0 auto',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          }}
        />
      </div>

      {/* GRID */}
      <div className="journey-grid">
        {/* Left Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.logo}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="left-card"
            style={{
              // boxShadow: `0 0 40px ${active.dot}30 inset, 0 0 20px ${active.dot}10`,
            }}
          >
            <div className="logo-box">
              <img
                src={active.logo}
                alt={active.title}
                style={{
                  width: '78px',
                  height: '78px',
                  objectFit: 'contain',
                  filter: `drop-shadow(0 18px 28px ${active.dot})`,
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="right-card"
          >
            <div className="eyebrow">
              <span
                className="dot"
                style={{
                  background: active.dot,
                  boxShadow: `0 0 16px ${active.dot}`,
                }}
              ></span>
              <span>{active.eyebrow}</span>
            </div>

            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <h3>{active.title}</h3>
              <p>{active.desc}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RESPONSIVE STYLES */}
      <style>{`
        .journey-grid {
          display: grid;
          grid-template-columns: 35% 65%;
          gap: 2.5rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          align-items: center;
          min-height: 400px;
        }

        .left-card {
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          display: grid;
          place-items: center;
          padding: 2.5rem;
          min-height: 450px;
        }

        .logo-box {
          width: 130px;
          height: 130px;
          border-radius: 28px;
          background: linear-gradient(145deg, rgba(255,255,255,.14), rgba(255,255,255,.04));
          display: grid;
          place-items: center;
          box-shadow: 0 10px 40px rgba(0,0,0,.4), 0 0 0 8px rgba(255,255,255,.02) inset;
        }

        .right-card {
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
          border: 1px solid rgba(255,255,255,.08);
          padding: 3rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          min-height: 450px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: .5rem;
          text-transform: uppercase;
          font-family: 'Poiret One', cursive;
          font-size: .8rem;
          color: #fff;
        }

        .dot {
          width: .5rem;
          height: .5rem;
          border-radius: 50%;
        }

        .right-card h3 {
          font-family: 'Laila', serif;
          font-size: 2rem;
          color: #d29889;
          margin-bottom: 1rem;
        }

        .right-card p {
          font-family: 'Poiret One', cursive;
          color: #fff;
          line-height: 1.6;
          font-size: 1rem;
        }

        /* 📱 Mobile Responsive */
        @media (max-width: 900px) {
          .journey-grid {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 0 1rem;
          }

          .left-card {
            min-height: 280px;
            padding: 2rem;
          }

          .logo-box {
            width: 110px;
            height: 110px;
          }

          .right-card {
            text-align: center;
            padding: 2rem;
            min-height: auto;
          }

          .eyebrow {
            justify-content: center;
          }

          .right-card h3 {
            font-size: 1.6rem;
          }

          .right-card p {
            font-size: .95rem;
          }
        }

        /* 🧠 Extra Small Screens */
        @media (max-width: 500px) {
          .right-card {
            padding: 1.5rem;
          }

          .left-card {
            padding: 1.5rem;
          }

          .logo-box {
            width: 90px;
            height: 90px;
          }

          .right-card h3 {
            font-size: 1.4rem;
          }

          .right-card p {
            font-size: .9rem;
          }
        }
      `}</style>
    </section>
  )
}
