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
    { name: 'PowerPoint', img: '/assets/images/P.png' },
  ]

  return (
    <section
      style={{
        background: '#050505',
        color: '#fff',
        textAlign: 'center',
        padding: '100px 0 120px',
        overflow: 'hidden',
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: '50px' }}>
        <h2
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '2.5rem',
            color: '#d29889',
            letterSpacing: '1px',
            marginBottom: '10px',
          }}
        >
          My Digital Arsenal
        </h2>
        <p
          style={{
            fontFamily: "'Poiret One', cursive",
            fontSize: '.9rem',
            color: '#fff',
            letterSpacing: '2px',
          }}
        >
          EVERY DESIGNER & DEV’S SECRET WEAPONS
        </p>
      </div>

      {/* SLIDER */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={5}
          spaceBetween={40}
          loop={true}
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
            320: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          style={{ padding: '30px 0' }}
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
                    transition: 'transform 0.3s ease, filter 0.3s ease',
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

      {/* Custom Pagination Style */}
      <style>{`
        .swiper-pagination {
          position: relative;
          bottom: 0;
          margin-top: 30px;
        }

        .custom-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #4a3b35;
          opacity: 0.7;
          margin: 0 6px !important;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background: #d29889;
          transform: scale(1.3);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
