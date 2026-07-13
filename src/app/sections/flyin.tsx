'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Job = {
  key: string
  logo: string
  title: string
  desc: string
  eyebrow: string
  dot: string
}

const jobs: Job[] = [
  {
    key: 'digitt',
    logo:
      '/assets/images/flyinlogos/digitt.png',
    title: 'Design Executive',
    desc:
      'Leading strategic visual solutions & driving creative excellence across digital & traditional platforms. Proven expertise in concept development, team leadership, & delivering impactful designs that elevate brand presence.',
    eyebrow: 'Lahore | 2023 – Present',
    dot: '#018175',
  },
  {
    key: 'corvit',
    logo:
      '/assets/images/flyinlogos/corvit.png',
    title: 'GFX & BD Trainee',
    desc:
      'Gained hands-on experience in both creative design & business development strategies. Contributed to multiple projects, refining my skills while assisting in various design & business development tasks.',
    eyebrow: 'CORVIT Networks, Lahore | 2023',
    dot: '#ff3b30',
  },
  {
    key: '4square',
    logo:
      '/assets/images/flyinlogos/4sq.png',
    title: 'Web Designer',
    desc:
      'Designed & developed visually appealing, functional websites using WordPress during my contract. Managed the full design process from conception to completion, ensuring responsive & engaging digital experiences.',
    eyebrow: '4Square Web, Lahore | 2023',
    dot: '#023d7b',
  },
  {
    key: 'yashfeen',
    logo:
      '/assets/images/flyinlogos/yes.png',
    title: 'Graphics Designer',
    desc:
      'Consistently delivered creative design solutions that contributed to project success. Applied a strong background in graphic design to provide innovative & visually striking designs for the company.',
    eyebrow: 'Yashfeen Education System, Lahore | 2022',
    dot: '#2ecc71',
  },
  {
    key: 'frescominc',
    logo:
      '/assets/images/flyinlogos/frescominc.png',
    title: 'Sr. GFX & SMM',
    desc:
      'Delivered innovative design solutions across various platforms. Managed design projects while overseeing social media content creation & brand identity development.',
    eyebrow: 'Frescominc, Lahore | 2020 – 2022',
    dot: '#016584',
  },
  {
    key: 'healing',
    logo:
      '/assets/images/flyinlogos/healing.png',
    title: 'Graphics Designer',
    desc:
      'Contributed remotely to the design team by creating impactful visual designs. Focused on visual excellence & innovation to develop compelling design solutions.',
    eyebrow: 'Healing Minds, Lahore | 2019 – 2020',
    dot: '#00c2ff',
  },
  {
    key: 'tzone',
    logo:
      '/assets/images/flyinlogos/treainingzone.png',
    title: 'Graphics Designer',
    desc:
      'Designed engaging visuals remotely, playing a key role in creating impactful designs that contributed to the company’s projects & initiatives.',
    eyebrow: 'Trainings Zone, Lahore | 2019',
    dot: '#037700',
  },
  {
    key: 'usa',
    logo:
      '/assets/images/flyinlogos/unique.png',
    title: 'Administrator',
    desc:
      'Handled various administrative tasks, including data entry, accounts management, and admissions. Gained valuable organizational skills while supporting the academy’s daily operations.',
    eyebrow: 'Unique Science Academy, Lahore | 2018',
    dot: '#35378c',
  },
]

export default function FlyinWidget() {
  const [active, setActive] = useState<Job>(jobs[0])

  return (
    <section className="journey-section">
      <div className="journey-black-background" />

      <div className="journey-container">
        <motion.div
          className="profile-column"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="profile-image-wrapper">
            <img
              src="/assets/images/professional-profile.png"
              alt="Professional profile"
              className="profile-image"
            />
          </div>
        </motion.div>

        <div className="content-column">
          <motion.div
            className="journey-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2>My Professional Journey</h2>

            <p className="subtitle">
              Corporate Fights. Big Wins. Real Growth.
            </p>
          </motion.div>

          <motion.p
            className="intro-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: 'easeOut',
            }}
          >
            A collection of roles, lessons, unexpected responsibilities, bold
            decisions, creative breakthroughs & the occasional corporate plot
            twist, all shaping how I design, think & lead!
          </motion.p>

          <div className="jobs-navigation">
            {jobs.map((job) => {
              const isActive = active.key === job.key

              return (
                <button
                  key={job.key}
                  type="button"
                  onClick={() => setActive(job)}
                  className={`job-tab ${
                    isActive ? 'job-tab-active' : ''
                  }`}
                  aria-label={`View ${job.title}`}
                >
                  <img src={job.logo} alt={job.title} />

                  <span>{job.title}</span>

                  {isActive && (
                    <motion.div
                      layoutId="active-job-line"
                      className="active-job-line"
                      style={{ background: job.dot }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="cards-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.key}-logo`}
                className="logo-card"
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 25 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className="logo-glass-box"
                  style={{
                    boxShadow: `0 10px 35px rgba(0,0,0,.65), 0 0 25px ${active.dot}20`,
                  }}
                >
                  <img src={active.logo} alt={active.title} />
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.key}-content`}
                className="details-card"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{
                  duration: 0.45,
                  ease: 'easeInOut',
                }}
              >
                <div className="job-eyebrow">
                  <span
                    className="job-dot"
                    style={{
                      background: active.dot,
                      boxShadow: `0 0 12px ${active.dot}`,
                    }}
                  />

                  <span>{active.eyebrow}</span>
                </div>

                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.08,
                  }}
                >
                  <h3>{active.title}</h3>
                  <p>{active.desc}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&family=Island+Moments&display=swap');

        * {
          box-sizing: border-box;
        }

        .journey-section {
          position: relative;
          z-index: 20;
          isolation: isolate;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #000000 !important;
          color: #ffffff;
          padding: 90px 42px 75px;
          font-family: 'Halant', serif;
        }

        .journey-black-background {
          position: absolute;
          z-index: 0;
          inset: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          pointer-events: none;
        }

        .journey-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          align-items: end;
          gap: 28px;
          width: 100%;
          max-width: 1400px;
          min-height: 760px;
          margin: 0 auto;
        }

        .profile-column {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: flex-end;
          width: 100%;
          height: 100%;
        }

        .profile-image-wrapper {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 520px;
          overflow: hidden;
          background: #111111;
        }

        .profile-image {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(100%);
        }

        .profile-image-wrapper::after {
          content: '';
          position: absolute;
          z-index: 2;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.08),
            transparent
          );
        }

        .content-column {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-width: 0;
          padding-bottom: 2px;
        }

        .journey-header {
          position: relative;
          z-index: 3;
          margin-bottom: 62px;
          text-align: center;
        }

        .journey-header h2 {
          margin: 0;
          color: #ffffff;
          font-family: 'Island Moments', cursive;
          font-size: clamp(64px, 6vw, 92px);
          font-weight: 400;
          line-height: 0.8;
        }

        .subtitle {
          margin: 20px 0 0;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1;
        }

        .intro-description {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 900px;
          margin: 0 auto 48px;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.45;
          text-align: center;
        }

        .jobs-navigation {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: stretch;
          width: 100%;
          min-height: 64px;
          overflow-x: auto;
          overflow-y: hidden;
          background: #070707;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          scrollbar-width: none;
        }

        .jobs-navigation::-webkit-scrollbar {
          display: none;
        }

        .job-tab {
          position: relative;
          display: flex;
          flex: 1 0 auto;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-width: 125px;
          height: 64px;
          padding: 10px 12px;
          border: 0;
          outline: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.72);
          font-family: 'Halant', serif;
          cursor: pointer;
          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .job-tab:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
        }

        .job-tab-active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.035);
        }

        .job-tab img {
          display: block;
          width: 23px;
          height: 23px;
          flex-shrink: 0;
          object-fit: contain;
        }

        .job-tab span {
          max-width: 120px;
          overflow: hidden;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.15;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .active-job-line {
          position: absolute;
          right: 8px;
          bottom: 0;
          left: 8px;
          height: 2px;
        }

        .cards-wrapper {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 230px minmax(0, 1fr);
          gap: 14px;
          min-height: 300px;
          margin-top: 18px;
        }

        .logo-card,
        .details-card {
          position: relative;
          z-index: 3;
          min-width: 0;
          min-height: 300px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 15px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.018)
          );
        }

        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .logo-glass-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 92px;
          height: 92px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.03)
          );
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .logo-glass-box img {
          display: block;
          width: 58px;
          height: 58px;
          object-fit: contain;
        }

        .details-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 54px 48px;
          text-align: left;
        }

        .job-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          text-transform: uppercase;
        }

        .job-dot {
          display: block;
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .details-card h3 {
          margin: 0 0 16px;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: 30px;
          font-weight: 600;
          line-height: 1.1;
        }

        .details-card p {
          max-width: 850px;
          margin: 0;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.65;
        }

        @media (max-width: 1200px) {
          .journey-section {
            padding: 80px 28px 65px;
          }

          .journey-container {
            grid-template-columns: 255px minmax(0, 1fr);
            min-height: 700px;
          }

          .profile-image-wrapper {
            height: 470px;
          }

          .journey-header {
            margin-bottom: 50px;
          }

          .intro-description {
            margin-bottom: 40px;
            font-size: 20px;
          }

          .job-tab {
            min-width: 112px;
          }

          .job-tab span {
            font-size: 11px;
          }

          .cards-wrapper {
            grid-template-columns: 205px minmax(0, 1fr);
            min-height: 275px;
          }

          .logo-card,
          .details-card {
            min-height: 275px;
          }

          .details-card {
            padding: 45px 38px;
          }

          .details-card h3 {
            font-size: 27px;
          }

          .details-card p {
            font-size: 15px;
          }
        }

        @media (max-width: 820px) {
          .journey-section {
            min-height: auto;
            padding: 60px 18px;
          }

          .journey-container {
            grid-template-columns: 1fr;
            gap: 45px;
            min-height: auto;
          }

          .profile-column {
            justify-content: center;
            order: 2;
          }

          .profile-image-wrapper {
            width: min(100%, 390px);
            height: 510px;
          }

          .content-column {
            order: 1;
          }

          .journey-header {
            margin-bottom: 40px;
          }

          .journey-header h2 {
            font-size: clamp(58px, 13vw, 82px);
          }

          .intro-description {
            max-width: 680px;
            margin-bottom: 35px;
            font-size: 18px;
          }

          .jobs-navigation {
            justify-content: flex-start;
          }

          .job-tab {
            min-width: 130px;
            height: 62px;
          }

          .job-tab span {
            font-size: 12px;
          }
        }

        @media (max-width: 600px) {
          .journey-section {
            padding: 50px 14px;
          }

          .journey-header {
            margin-bottom: 32px;
          }

          .journey-header h2 {
            line-height: 0.86;
          }

          .subtitle {
            margin-top: 15px;
            font-size: 14px;
          }

          .intro-description {
            margin-bottom: 30px;
            font-size: 17px;
            line-height: 1.5;
          }

          .jobs-navigation {
            min-height: 58px;
          }

          .job-tab {
            min-width: 125px;
            height: 58px;
            gap: 7px;
            padding: 8px 10px;
          }

          .job-tab img {
            width: 20px;
            height: 20px;
          }

          .job-tab span {
            font-size: 11px;
          }

          .cards-wrapper {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .logo-card {
            min-height: 175px;
          }

          .details-card {
            min-height: 250px;
            padding: 34px 24px;
            text-align: center;
          }

          .job-eyebrow {
            justify-content: center;
            font-size: 11px;
          }

          .details-card h3 {
            font-size: 26px;
          }

          .details-card p {
            font-size: 15px;
            line-height: 1.6;
          }

          .profile-image-wrapper {
            height: 455px;
          }
        }

        @media (max-width: 400px) {
          .journey-section {
            padding-right: 10px;
            padding-left: 10px;
          }

          .journey-header h2 {
            font-size: 58px;
          }

          .intro-description {
            font-size: 16px;
          }

          .details-card {
            padding: 30px 18px;
          }

          .details-card h3 {
            font-size: 24px;
          }

          .details-card p {
            font-size: 14px;
          }

          .profile-image-wrapper {
            height: 415px;
          }
        }
      `}</style>
    </section>
  )
}



// 'use client'

// import React, { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'

// type Job = {
//   key: string
//   logo: string
//   title: string
//   desc: string
//   eyebrow: string
//   dot: string
// }

// const jobs: Job[] = [
//   {
//     key: 'digitt',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Digitt-W.png',
//     title: 'Design Executive',
//     desc:
//       'Leading strategic visual solutions & driving creative excellence across digital & traditional platforms. Proven expertise in concept development, team leadership, & delivering impactful designs that elevate brand presence.',
//     eyebrow: 'Lahore | 2023 – Present',
//     dot: '#018175',
//   },
//   {
//     key: 'corvit',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Corvit-W.png',
//     title: 'GFX & BD Trainee',
//     desc:
//       'Gained hands-on experience in both creative design & business development strategies. Contributed to multiple projects, refining my skills while assisting in various design & business development tasks.',
//     eyebrow: 'CORVIT Networks, Lahore | 2023',
//     dot: '#ff3b30',
//   },
//   {
//     key: '4square',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/4Sq-Web.png',
//     title: 'Web Designer',
//     desc:
//       'Designed & developed visually appealing, functional websites using WordPress during my contract. Managed the full design process from conception to completion, ensuring responsive & engaging digital experiences.',
//     eyebrow: '4Square Web, Lahore | 2023',
//     dot: '#023d7b',
//   },
//   {
//     key: 'yashfeen',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/YES2-scaled.png',
//     title: 'Graphics Designer',
//     desc:
//       'Consistently delivered creative design solutions that contributed to project success. Applied a strong background in graphic design to provide innovative & visually striking designs for the company.',
//     eyebrow: 'Yashfeen Education System, Lahore | 2022',
//     dot: '#2ecc71',
//   },
//   {
//     key: 'frescominc',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Frescominc.png',
//     title: 'Sr. GFX & SMM',
//     desc:
//       'Delivered innovative design solutions across various platforms. Managed design projects while overseeing social media content creation & brand identity development.',
//     eyebrow: 'Frescominc, Lahore | 2020 – 2022',
//     dot: '#016584',
//   },
//   {
//     key: 'healing',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/Healing-Minds-e1756716706191.png',
//     title: 'Graphics Designer',
//     desc:
//       'Contributed remotely to the design team by creating impactful visual designs. Focused on visual excellence & innovation to develop compelling design solutions.',
//     eyebrow: 'Healing Minds, Lahore | 2019 – 2020',
//     dot: '#00c2ff',
//   },
//   {
//     key: 'tzone',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/T-zone-scaled.png',
//     title: 'Graphics Designer',
//     desc:
//       'Designed engaging visuals remotely, playing a key role in creating impactful designs that contributed to the company’s projects & initiatives.',
//     eyebrow: 'Trainings Zone, Lahore | 2019',
//     dot: '#037700',
//   },
//   {
//     key: 'usa',
//     logo:
//       'https://akashawaseem.thegraphicshub.org/wp-content/uploads/2025/08/USA.png',
//     title: 'Administrator',
//     desc:
//       'Handled various administrative tasks, including data entry, accounts management, and admissions. Gained valuable organizational skills while supporting the academy’s daily operations.',
//     eyebrow: 'Unique Science Academy, Lahore | 2018',
//     dot: '#35378c',
//   },
// ]

// export default function FlyinWidget() {
//   const [active, setActive] = useState<Job>(jobs[0])

//   return (
//     <section className="journey-section">
//       <div className="journey-black-background" />

//       <div className="journey-container">
//         <motion.div
//           className="profile-column"
//           initial={{ opacity: 0, x: -35 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//         >
//           <div className="profile-image-wrapper">
//             <img
//               src="/assets/images/professional-profile.png"
//               alt="Professional profile"
//               className="profile-image"
//             />
//           </div>
//         </motion.div>

//         <div className="content-column">
//           <motion.div
//             className="journey-header"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7, ease: 'easeOut' }}
//           >
//             <h2>My Professional Journey</h2>

//             <p className="subtitle">
//               Corporate Fights. Big Wins. Real Growth.
//             </p>
//           </motion.div>

//           <motion.p
//             className="intro-description"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{
//               duration: 0.7,
//               delay: 0.12,
//               ease: 'easeOut',
//             }}
//           >
//             A collection of roles, lessons, unexpected responsibilities, bold
//             decisions, creative breakthroughs & the occasional corporate plot
//             twist, all shaping how I design, think & lead!
//           </motion.p>

//           <div className="jobs-navigation">
//             {jobs.map((job) => {
//               const isActive = active.key === job.key

//               return (
//                 <button
//                   key={job.key}
//                   type="button"
//                   onClick={() => setActive(job)}
//                   className={`job-tab ${
//                     isActive ? 'job-tab-active' : ''
//                   }`}
//                   aria-label={`View ${job.title}`}
//                 >
//                   <img src={job.logo} alt={job.title} />

//                   <span>{job.title}</span>

//                   {isActive && (
//                     <motion.div
//                       layoutId="active-job-line"
//                       className="active-job-line"
//                       style={{ background: job.dot }}
//                       transition={{
//                         type: 'spring',
//                         stiffness: 350,
//                         damping: 30,
//                       }}
//                     />
//                   )}
//                 </button>
//               )
//             })}
//           </div>

//           <div className="cards-wrapper">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`${active.key}-logo`}
//                 className="logo-card"
//                 initial={{ opacity: 0, x: -25 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 25 }}
//                 transition={{
//                   duration: 0.4,
//                   ease: 'easeInOut',
//                 }}
//               >
//                 <div
//                   className="logo-glass-box"
//                   style={{
//                     boxShadow: `0 10px 35px rgba(0,0,0,.65), 0 0 25px ${active.dot}20`,
//                   }}
//                 >
//                   <img src={active.logo} alt={active.title} />
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`${active.key}-content`}
//                 className="details-card"
//                 initial={{ opacity: 0, x: 25 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -25 }}
//                 transition={{
//                   duration: 0.45,
//                   ease: 'easeInOut',
//                 }}
//               >
//                 <div className="job-eyebrow">
//                   <span
//                     className="job-dot"
//                     style={{
//                       background: active.dot,
//                       boxShadow: `0 0 12px ${active.dot}`,
//                     }}
//                   />

//                   <span>{active.eyebrow}</span>
//                 </div>

//                 <motion.div
//                   key={active.title}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.35,
//                     delay: 0.08,
//                   }}
//                 >
//                   <h3>{active.title}</h3>
//                   <p>{active.desc}</p>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&family=Island+Moments&display=swap');

//         * {
//           box-sizing: border-box;
//         }

//         .journey-section {
//           position: relative;
//           z-index: 20;
//           isolation: isolate;
//           width: 100%;
//           min-height: 100vh;
//           overflow: hidden;
//           background: #000000 !important;
//           color: #ffffff;
//           padding: 90px 42px 75px;
//           font-family: 'Halant', serif;
//         }

//         .journey-black-background {
//           position: absolute;
//           z-index: 0;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           background: #000000;
//           pointer-events: none;
//         }

//         .journey-container {
//           position: relative;
//           z-index: 2;
//           display: grid;
//           grid-template-columns: 290px minmax(0, 1fr);
//           align-items: end;
//           gap: 28px;
//           width: 100%;
//           max-width: 1580px;
//           min-height: 760px;
//           margin: 0 auto;
//         }

//         .profile-column {
//           position: relative;
//           z-index: 3;
//           display: flex;
//           align-items: flex-end;
//           width: 100%;
//           height: 100%;
//         }

//         .profile-image-wrapper {
//           position: relative;
//           z-index: 3;
//           width: 100%;
//           height: 520px;
//           overflow: hidden;
//           background: #111111;
//         }

//         .profile-image {
//           position: relative;
//           z-index: 1;
//           display: block;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           filter: grayscale(100%);
//         }

//         .profile-image-wrapper::after {
//           content: '';
//           position: absolute;
//           z-index: 2;
//           inset: 0;
//           pointer-events: none;
//           background: linear-gradient(
//             90deg,
//             rgba(0, 0, 0, 0.08),
//             transparent
//           );
//         }

//         .content-column {
//           position: relative;
//           z-index: 3;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-end;
//           min-width: 0;
//           padding-bottom: 2px;
//         }

//        .journey-header {
//   position: relative;
//   z-index: 3;
//   width: calc(100% + 318px);
//   margin-left: -318px;
//   margin-bottom: 62px;
//   text-align: center;
// }

//      .journey-header h2 {
//   margin: 0;
//   color: #ffffff;
//   font-family: 'Island Moments', cursive;
//   font-size: clamp(64px, 6vw, 92px);
//   font-weight: 400;
//   line-height: 0.8;
// }

// .subtitle {
//   margin: 20px 0 0;
//   color: #ffffff;
//   font-family: 'Halant', serif;
//   font-size: 17px;
//   font-weight: 500;
//   line-height: 1;
// }

//         .intro-description {
//           position: relative;
//           z-index: 3;
//           width: 100%;
//           max-width: 900px;
//           margin: 0 auto 48px;
//           color: #ffffff;
//           font-family: 'Halant', serif;
//           font-size: 22px;
//           font-weight: 400;
//           line-height: 1.45;
//           text-align: center;
//         }

//         .jobs-navigation {
//           position: relative;
//           z-index: 3;
//           display: flex;
//           align-items: stretch;
//           width: 100%;
//           min-height: 64px;
//           overflow-x: auto;
//           overflow-y: hidden;
//           background: #070707;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.06);
//           scrollbar-width: none;
//         }

//         .jobs-navigation::-webkit-scrollbar {
//           display: none;
//         }

//         .job-tab {
//           position: relative;
//           display: flex;
//           flex: 1 0 auto;
//           align-items: center;
//           justify-content: center;
//           gap: 9px;
//           min-width: 125px;
//           height: 64px;
//           padding: 10px 12px;
//           border: 0;
//           outline: 0;
//           background: transparent;
//           color: rgba(255, 255, 255, 0.72);
//           font-family: 'Halant', serif;
//           cursor: pointer;
//           transition:
//             background 0.25s ease,
//             color 0.25s ease;
//         }

//         .job-tab:hover {
//           color: #ffffff;
//           background: rgba(255, 255, 255, 0.04);
//         }

//         .job-tab-active {
//           color: #ffffff;
//           background: rgba(255, 255, 255, 0.035);
//         }

//         .job-tab img {
//           display: block;
//           width: 23px;
//           height: 23px;
//           flex-shrink: 0;
//           object-fit: contain;
//         }

//         .job-tab span {
//           max-width: 120px;
//           overflow: hidden;
//           color: #ffffff;
//           font-family: 'Halant', serif;
//           font-size: 12px;
//           font-weight: 500;
//           line-height: 1.15;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }

//         .active-job-line {
//           position: absolute;
//           right: 8px;
//           bottom: 0;
//           left: 8px;
//           height: 2px;
//         }

//         .cards-wrapper {
//           position: relative;
//           z-index: 3;
//           display: grid;
//           grid-template-columns: 230px minmax(0, 1fr);
//           gap: 14px;
//           min-height: 300px;
//           margin-top: 18px;
//         }

//         .logo-card,
//         .details-card {
//           position: relative;
//           z-index: 3;
//           min-width: 0;
//           min-height: 300px;
//           overflow: hidden;
//           border: 1px solid rgba(255, 255, 255, 0.07);
//           border-radius: 15px;
//           background: linear-gradient(
//             145deg,
//             rgba(255, 255, 255, 0.06),
//             rgba(255, 255, 255, 0.018)
//           );
//         }

//         .logo-card {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 30px;
//         }

//         .logo-glass-box {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 92px;
//           height: 92px;
//           overflow: hidden;
//           border: 1px solid rgba(255, 255, 255, 0.07);
//           border-radius: 20px;
//           background: linear-gradient(
//             145deg,
//             rgba(255, 255, 255, 0.12),
//             rgba(255, 255, 255, 0.03)
//           );
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//         }

//         .logo-glass-box img {
//           display: block;
//           width: 58px;
//           height: 58px;
//           object-fit: contain;
//         }

//         .details-card {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           padding: 54px 48px;
//           text-align: left;
//         }

//         .job-eyebrow {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 15px;
//           color: #ffffff;
//           font-family: 'Halant', serif;
//           font-size: 12px;
//           font-weight: 500;
//           line-height: 1;
//           text-transform: uppercase;
//         }

//         .job-dot {
//           display: block;
//           width: 7px;
//           height: 7px;
//           flex-shrink: 0;
//           border-radius: 50%;
//         }

//         .details-card h3 {
//           margin: 0 0 16px;
//           color: #ffffff;
//           font-family: 'Halant', serif;
//           font-size: 30px;
//           font-weight: 600;
//           line-height: 1.1;
//         }

//         .details-card p {
//           max-width: 850px;
//           margin: 0;
//           color: #ffffff;
//           font-family: 'Halant', serif;
//           font-size: 16px;
//           font-weight: 300;
//           line-height: 1.65;
//         }

//         @media (max-width: 1200px) {
//           .journey-section {
//             padding: 80px 28px 65px;
//           }

//           .journey-container {
//             grid-template-columns: 255px minmax(0, 1fr);
//             min-height: 700px;
//           }

//           .profile-image-wrapper {
//             height: 470px;
//           }

//           .journey-header {
//             margin-bottom: 50px;
//           }

//           .intro-description {
//             margin-bottom: 40px;
//             font-size: 20px;
//           }

//           .job-tab {
//             min-width: 112px;
//           }

//           .job-tab span {
//             font-size: 11px;
//           }

//           .cards-wrapper {
//             grid-template-columns: 205px minmax(0, 1fr);
//             min-height: 275px;
//           }

//           .logo-card,
//           .details-card {
//             min-height: 275px;
//           }

//           .details-card {
//             padding: 45px 38px;
//           }

//           .details-card h3 {
//             font-size: 27px;
//           }

//           .details-card p {
//             font-size: 15px;
//           }
//         }

//         @media (max-width: 820px) {
//           .journey-section {
//             min-height: auto;
//             padding: 60px 18px;
//           }

//           .journey-container {
//             grid-template-columns: 1fr;
//             gap: 45px;
//             min-height: auto;
//           }

//           .profile-column {
//             justify-content: center;
//             order: 2;
//           }

//           .profile-image-wrapper {
//             width: min(100%, 390px);
//             height: 510px;
//           }

//           .content-column {
//             order: 1;
//           }

//          .journey-header {
//   width: 100%;
//   margin-left: 0;
//   margin-bottom: 40px;
// }

//           .journey-header h2 {
//             font-size: clamp(58px, 13vw, 82px);
//           }

//           .intro-description {
//             max-width: 680px;
//             margin-bottom: 35px;
//             font-size: 18px;
//           }

//           .jobs-navigation {
//             justify-content: flex-start;
//           }

//           .job-tab {
//             min-width: 130px;
//             height: 62px;
//           }

//           .job-tab span {
//             font-size: 12px;
//           }
//         }

//         @media (max-width: 600px) {
//           .journey-section {
//             padding: 50px 14px;
//           }

//           .journey-header {
//             margin-bottom: 32px;
//           }

//           .journey-header h2 {
//             line-height: 0.86;
//           }

//           .subtitle {
//             margin-top: 15px;
//             font-size: 14px;
//           }

//           .intro-description {
//             margin-bottom: 30px;
//             font-size: 17px;
//             line-height: 1.5;
//           }

//           .jobs-navigation {
//             min-height: 58px;
//           }

//           .job-tab {
//             min-width: 125px;
//             height: 58px;
//             gap: 7px;
//             padding: 8px 10px;
//           }

//           .job-tab img {
//             width: 20px;
//             height: 20px;
//           }

//           .job-tab span {
//             font-size: 11px;
//           }

//           .cards-wrapper {
//             grid-template-columns: 1fr;
//             gap: 12px;
//           }

//           .logo-card {
//             min-height: 175px;
//           }

//           .details-card {
//             min-height: 250px;
//             padding: 34px 24px;
//             text-align: center;
//           }

//           .job-eyebrow {
//             justify-content: center;
//             font-size: 11px;
//           }

//           .details-card h3 {
//             font-size: 26px;
//           }

//           .details-card p {
//             font-size: 15px;
//             line-height: 1.6;
//           }

//           .profile-image-wrapper {
//             height: 455px;
//           }
//         }

//         @media (max-width: 400px) {
//           .journey-section {
//             padding-right: 10px;
//             padding-left: 10px;
//           }

//           .journey-header h2 {
//             font-size: 58px;
//           }

//           .intro-description {
//             font-size: 16px;
//           }

//           .details-card {
//             padding: 30px 18px;
//           }

//           .details-card h3 {
//             font-size: 24px;
//           }

//           .details-card p {
//             font-size: 14px;
//           }

//           .profile-image-wrapper {
//             height: 415px;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }
