'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function DigitalArsenal() {
  const tools = [
    { name: 'After Effects', img: '/assets/images/Ae.png' },
    { name: 'Lightroom', img: '/assets/images/Lr.png' },
    { name: 'XD', img: '/assets/images/Xd.png' },
    { name: 'Premiere Pro', img: '/assets/images/Pr.png' },
    { name: 'InDesign', img: '/assets/images/Id.png' },
    { name: 'Illustrator', img: '/assets/images/Ai.png' },
    { name: 'Photoshop', img: '/assets/images/Ps.png' },
    { name: 'Word', img: '/assets/images/Word.png' },
    { name: 'Excel', img: '/assets/images/X.png' },
    { name: 'PowerPoint', img: '/assets/images/p.png' },
  ]

  return (
    <section
      style={{
        position: 'relative',
        zIndex: 20,
        isolation: 'isolate',
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '100px 0 120px',
        overflow: 'hidden',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          marginBottom: '50px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Island Moments', cursive",
            fontSize: 'clamp(58px, 5vw, 84px)',
            fontWeight: '400',
            lineHeight: '0.82',
            color: '#fff',
            letterSpacing: '1px',
            margin: '0 0 14px',
          }}
        >
          My Digital Arsenal
        </h2>

        <p
          style={{
            fontFamily: "'Halant', serif",
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '1.35',
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '0',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          EVERY DESIGNER &amp; DEV’S SECRET WEAPONS
        </p>
      </div>

      {/* SLIDER */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1300px',
          margin: '0 auto',
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={6}
          spaceBetween={40}
          loop
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          style={{
            padding: '30px 0',
          }}
        >
          {tools.map((tool, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={tool.img}
                  alt={tool.name}
                  style={{
                    width: '90px',
                    height: '90px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 10px rgba(0,0,0,.6))',
                    transition:
                      'transform 0.3s ease, filter 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                    e.currentTarget.style.filter =
                      'drop-shadow(0 0 15px rgba(210,152,137,.8))'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.filter =
                      'drop-shadow(0 0 10px rgba(0,0,0,.6))'
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap');

        .swiper-pagination {
          position: relative;
          bottom: 0;
          margin-top: 30px;
        }

        .custom-bullet {
          width: 5px;
          height: 5px;
          display: inline-block;
          margin: 0 6px !important;
          border-radius: 50%;
          background: #4a3b35;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background: #d29889;
          opacity: 1;
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .digital-arsenal-title {
            font-size: clamp(55px, 15vw, 75px);
          }
        }

        @media (max-width: 420px) {
          .digital-arsenal-title {
            font-size: 55px;
          }
        }
      `}</style>
    </section>
  )
}