'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'David',
      text: 'She elevated every project I threw at her. Impeccable taste, fast thinking, and a designer who truly cares about outcomes, not just deliverables.',
    },
    {
      name: 'Sara',
      text: 'Highly skilled and reliable. My brand identity came out cohesive, strategic, and absolutely stunning.',
    },
    {
      name: 'Khan',
      text: 'None of our key launches would’ve landed on time — or nearly this well — without her. Professional, creative, and incredibly thoughtful in her process.',
    },
    {
      name: 'Alex',
      text: 'Understood the vision immediately and elevated it every single time. Detail-driven, easy to work with, and exceptional at what she does.',
    },
    {
      name: 'Ameer',
      text: 'Extremely professional and dedicated. The result exceeded expectations — polished, elegant, and perfectly aligned with my brief.',
    },
    {
      name: 'Noor',
      text: 'From design to delivery, everything was handled with finesse. Communication was seamless, and the quality was unmatched.',
    },
  ]

  return (
    <section className="testimonials-section">
      {/* HEADER */}
      <header className="testimonials-header">
        <h2>Nice Things People Say</h2>

        <p>UNPAID. UNSCRIPTED. UNBELIEVABLY KIND.</p>

        <div className="header-decoration" aria-hidden="true">
          <span className="header-line" />
          <span className="header-star">✦</span>
          <span className="header-line" />
        </div>
      </header>

      {/* TESTIMONIAL SLIDER */}
      <div className="testimonials-slider-wrapper">
        <Swiper
          modules={[Autoplay]}
          className="testimonials-swiper"
          loop
          grabCursor
          speed={900}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            560: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1180: {
              slidesPerView: 4,
              spaceBetween: 14,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.name}-${index}`}>
              <article className="testimonial-card">
                <span className="card-star" aria-hidden="true">
                  ✦
                </span>

                <div className="quote-mark" aria-hidden="true">
                  “
                </div>

                <p className="testimonial-text">{testimonial.text}</p>

                <footer className="testimonial-author">
                  <span className="author-line" />

                  <span className="author-name">— {testimonial.name}</span>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap');

        .testimonials-section {
          position: relative;
          z-index: 20;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          padding: 88px 20px 92px;
          color: #ffffff;
          text-align: center;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(22, 22, 22, 0.78) 0%,
              rgba(5, 5, 5, 0.96) 32%,
              #000000 68%
            ),
            #000000;
        }

        .testimonials-header {
          position: relative;
          z-index: 2;
          width: 100%;
          margin: 0 auto 38px;
          text-align: center;
        }

        .testimonials-header h2 {
          margin: 0;
          color: #ffffff;
          font-family: 'Island Moments', cursive;
          font-size: clamp(58px, 5vw, 84px);
          font-weight: 400;
          line-height: 0.82;
          letter-spacing: 1px;
        }

        .testimonials-header p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.78);
          font-family: 'Halant', serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .header-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          margin: 16px auto 0;
        }

        .header-line {
          width: 62px;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.42)
          );
        }

        .header-line:last-child {
          background: linear-gradient(
            to left,
            transparent,
            rgba(255, 255, 255, 0.42)
          );
        }

        .header-star {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 7px;
          color: #ffffff;
          font-size: 10px;
          line-height: 1;
          text-shadow: 0 0 7px rgba(255, 255, 255, 0.9);
        }

        .testimonials-slider-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1580px;
          margin: 0 auto;
        }

        .testimonials-swiper {
          width: 100%;
          padding: 4px 3px 8px;
          overflow: hidden;
        }

        .testimonials-swiper .swiper-slide {
          height: auto;
        }

        .testimonial-card {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 270px;
          height: 100%;
          flex-direction: column;
          padding: 24px 24px 21px;
          overflow: hidden;
          color: #ffffff;
          text-align: left;
          background:
            radial-gradient(
              circle at 50% -15%,
              rgba(255, 255, 255, 0.085),
              transparent 42%
            ),
            linear-gradient(
              145deg,
              rgba(25, 25, 25, 0.97),
              rgba(5, 5, 5, 0.98)
            );
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 11px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.07),
            inset 0 -1px 0 rgba(255, 255, 255, 0.025),
            0 12px 30px rgba(0, 0, 0, 0.55);
          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease;
        }

        .testimonial-card:hover {
          border-color: rgba(255, 255, 255, 0.34);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 15px 38px rgba(0, 0, 0, 0.72),
            0 0 18px rgba(255, 255, 255, 0.045);
          transform: translateY(-5px);
        }

        .card-star {
          position: absolute;
          top: 18px;
          right: 18px;
          color: #ffffff;
          font-size: 30px;
          line-height: 1;
          opacity: 0.9;
          text-shadow:
            0 0 5px rgba(255, 255, 255, 0.85),
            0 0 12px rgba(255, 255, 255, 0.45);
        }

        .quote-mark {
          height: 38px;
          margin-bottom: 5px;
          color: rgba(255, 255, 255, 0.53);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 49px;
          font-weight: 700;
          line-height: 0.9;
        }

        .testimonial-text {
          display: -webkit-box;
          flex: 1;
          overflow: hidden;
          margin: 0;
          color: rgba(255, 255, 255, 0.83);
          font-family: 'Halant', serif;
          font-size: 30px;
          font-weight: 300;
          line-height: 1.68;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 13px;
          margin-top: 18px;
        }

        .author-line {
          display: block;
          width: 48px;
          height: 1px;
          background: rgba(255, 255, 255, 0.28);
        }

        .author-name {
          margin-left: auto;
          color: rgba(255, 255, 255, 0.65);
          font-family: 'Halant', serif;
          font-size: 24px;
          font-style: italic;
          font-weight: 300;
          line-height: 1;
          white-space: nowrap;
        }

        @media (max-width: 1179px) {
          .testimonials-slider-wrapper {
            max-width: 790px;
          }
        }

        @media (max-width: 899px) {
          .testimonials-slider-wrapper {
            max-width: 620px;
          }

          .testimonial-card {
            min-height: 260px;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 75px 16px 70px;
          }

          .testimonials-header {
            margin-bottom: 32px;
          }

          .testimonials-header h2 {
            font-size: clamp(55px, 15vw, 75px);
          }

          .testimonials-header p {
            max-width: 360px;
            margin-right: auto;
            margin-left: auto;
            font-size: 10px;
            line-height: 1.45;
          }

          .testimonial-card {
            min-height: 250px;
            padding: 23px 22px 20px;
          }

          .testimonial-text {
            font-size: 14px;
          }
        }

        @media (max-width: 559px) {
          .testimonials-slider-wrapper {
            max-width: 310px;
          }

          .testimonial-card {
            min-height: 280px;
          }
        }

        @media (max-width: 420px) {
          .testimonials-section {
            padding: 65px 14px 62px;
          }

          .testimonials-header h2 {
            font-size: 55px;
          }

          .testimonials-header p {
            font-size: 9px;
          }

          .testimonials-slider-wrapper {
            max-width: 290px;
          }

          .testimonial-card {
            min-height: 270px;
            padding: 22px 20px 19px;
          }

          .testimonial-text {
            font-size: 13.5px;
            line-height: 1.65;
          }
        }
      `}</style>
    </section>
  )
}