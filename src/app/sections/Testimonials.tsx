'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Khan',
      text: 'Banner for my business was perfect and delivered on time — really good work, highly recommended! Professional, creative and detail-oriented throughout the process.',
    },
    {
      name: 'Alice',
      text: 'Wonderful collaboration! She understood the vision immediately and executed it beautifully. Every step was clear, creative and enjoyable.',
    },
    {
      name: 'Ameer',
      text: 'Extremely professional and dedicated. The result exceeded expectations — polished, elegant, and perfectly aligned with my brief.',
    },
    {
      name: 'Noor',
      text: 'From design to delivery — everything was handled with finesse. Communication was seamless, and the quality was unmatched.',
    },
    {
      name: 'David',
      text: 'A true creative! Every project turns out better than imagined. Excellent attention to design language, and fast delivery!',
    },
    {
      name: 'Sana',
      text: 'Highly skilled and reliable. My brand identity came out cohesive, timeless, and absolutely stunning!',
    },
  ]

  const truncate = (text: string) =>
    text.length > 200 ? text.slice(0, 197).trim() + '…' : text

  return (
    <section
      style={{
        background: 'radial-gradient(circle at 50% top, #0b0b0b 0%, #000 100%)',
        color: '#fff',
        textAlign: 'center',
        padding: '100px 1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '70px' }}>
        <h2
          style={{
            fontFamily: "'Laila', serif",
            fontSize: '2.5rem',
            color: '#D29889',
 fontWeight: '400',
            marginBottom: '10px',
            letterSpacing: '1px',
          }}
        >
          Nice Things People Say
        </h2>
        <p
          style={{
              fontFamily: "'Laila', serif",
            fontSize: '.9rem',
            color: '#D1B3A4',
            letterSpacing: '2px',
          }}
        >
          UNPAID. UNSCRIPTED. UNBELIEVABLY KIND.
        </p>
      </div>

      {/* Swiper */}
      <div className="slider-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 18 },
            600: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 28 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card">
                <div className="testimonial-body">
                  <p className="testimonial-text">“{truncate(t.text)}”</p>
                </div>
                <div className="testimonial-footer">– {t.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* fade edges */}
        <div className="fade fade-left"></div>
        <div className="fade fade-right"></div>
      </div>

      <style>{`
        .slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(145deg, rgba(25,25,25,0.9), rgba(15,15,15,0.95));
          border: 1px solid rgba(210,152,137,0.15);
          border-radius: 20px;
          box-shadow: 0 0 30px rgba(210,152,137,0.08);
          backdrop-filter: blur(8px);
          padding: 35px 28px;
          height: 240px;
          text-align: left;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        .testimonial-body {
          flex: 1;
        }

        .testimonial-text {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: #f2f2f2;
          font-style: italic;
        }

        .testimonial-footer {
          font-family: 'Laila', serif;
          font-size: 14px;
          color: #d29889;
          text-align: right;
          margin-top: 15px;
          letter-spacing: 1px;
        }

        /* fade edges */
        .fade {
          position: absolute;
          top: 0;
          width: 140px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, #000 0%, transparent 100%);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, #000 0%, transparent 100%);
        }

        /* 🧠 Tablet */
        @media (max-width: 1024px) {
          .testimonial-card {
            height: 220px;
          }
        }

        /* 📱 Mobile */
        @media (max-width: 768px) {
          section {
            padding: 80px 1rem;
          }
          .testimonial-card {
            height: auto;
            min-height: 200px;
            padding: 26px 22px;
          }
          .testimonial-text {
            font-size: 14px;
            line-height: 1.7;
          }
          .testimonial-footer {
            text-align: center;
            margin-top: 12px;
            font-size: 13px;
          }
          .fade {
            width: 90px;
          }
        }

        /* 📲 Small Phones */
        @media (max-width: 480px) {
          .testimonial-card {
            padding: 22px 18px;
            border-radius: 16px;
          }
          .testimonial-text {
            font-size: 13px;
            line-height: 1.65;
          }
          .fade {
            width: 60px;
          }
        }
      `}</style>
    </section>
  )
}
