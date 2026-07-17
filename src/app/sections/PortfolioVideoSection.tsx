'use client'

// app/sections/PortfolioVideoSection.tsx

import React, { useEffect, useRef, useState } from 'react'

type PortfolioVideo = {
  id: number
  title: string
  category: string
  video: string
  poster: string
}

const portfolioVideos: PortfolioVideo[] = [
  {
    id: 1,
    title: 'Nescafé',
    category: 'AI-ASSISTED PRODUCT FILM Nescafé — The Morning Ritual',
    video: '/assets/vids/2.mp4',
    poster: '/assets/images/nes.png',
  },
  {
    id: 2,
    title: 'Magnum',
    category: 'AI-ASSISTED BRAND FILM Magnum — A Taste of Connection',
    video: '/assets/vids/1.mp4',
    poster: '/assets/images/magnum.png',
  },
  {
    id: 3,
    title: 'Hico',
    category: 'AI-ASSISTED COMMERCIAL FILM Hico — Sharing Sweet Moments',
    video: '/assets/vids/3.mp4',
    poster: '/assets/images/hico.png',
  },
//   {
//     id: 4,
//     title: 'Product Experience',
//     category: 'Product Design',
//     video: '/assets/vids/portfolio-video-4.mp4',
//     poster: '/assets/images/portfolio-video-4.jpg',
//   },
//   {
//     id: 5,
//     title: 'Campaign Direction',
//     category: 'Creative Campaign',
//     video: '/assets/vids/portfolio-video-5.mp4',
//     poster: '/assets/images/portfolio-video-5.jpg',
//   },
]

export default function PortfolioVideoSection() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [selectedVideo, setSelectedVideo] =
    useState<PortfolioVideo | null>(null)

  const popupVideoRef = useRef<HTMLVideoElement | null>(null)
  const touchStartXRef = useRef<number | null>(null)
  const touchEndXRef = useRef<number | null>(null)

  const getRelativePosition = (index: number) => {
    const total = portfolioVideos.length
    let difference = index - activeIndex

    if (difference > total / 2) {
      difference -= total
    }

    if (difference < -total / 2) {
      difference += total
    }

    return difference
  }

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? portfolioVideos.length - 1
        : currentIndex - 1,
    )
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === portfolioVideos.length - 1
        ? 0
        : currentIndex + 1,
    )
  }

  const openVideo = (video: PortfolioVideo) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    if (popupVideoRef.current) {
      popupVideoRef.current.pause()
      popupVideoRef.current.currentTime = 0
    }

    setSelectedVideo(null)
  }

  const handleCardClick = (
    video: PortfolioVideo,
    index: number,
    relativePosition: number,
  ) => {
    if (relativePosition === 0) {
      openVideo(video)
      return
    }

    setActiveIndex(index)
  }

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    touchEndXRef.current = null
    touchStartXRef.current = event.targetTouches[0].clientX
  }

  const handleTouchMove = (
    event: React.TouchEvent<HTMLDivElement>,
  ) => {
    touchEndXRef.current = event.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (
      touchStartXRef.current === null ||
      touchEndXRef.current === null
    ) {
      return
    }

    const swipeDistance =
      touchStartXRef.current - touchEndXRef.current

    if (swipeDistance > 45) {
      goToNext()
    }

    if (swipeDistance < -45) {
      goToPrevious()
    }

    touchStartXRef.current = null
    touchEndXRef.current = null
  }

  useEffect(() => {
    if (!selectedVideo) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideo()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    const playTimeout = window.setTimeout(() => {
      popupVideoRef.current?.play().catch(() => {
        // Browser controls remain available if autoplay is blocked.
      })
    }, 100)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      window.clearTimeout(playTimeout)
    }
  }, [selectedVideo])

  return (
    <>
      <section className="portfolio-video-section">
        <div className="portfolio-video-header">
          <h2>AI powered Animations & Videos</h2>

          <p>CLICK A PROJECT TO WATCH THE FULL EXPERIENCE</p>
        </div>

        <div
          className="portfolio-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="portfolio-arrow portfolio-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous project"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>

          <div className="portfolio-carousel-stage">
           {portfolioVideos.map((item, index) => {
  const relativePosition = getRelativePosition(index)

  const isVisible =
    relativePosition >= -2 && relativePosition <= 2

  const isActive = relativePosition === 0

  // Active card always stays above every other card
  const cardZIndex = isActive
    ? 30
    : Math.abs(relativePosition) === 1
      ? 20
      : Math.abs(relativePosition) === 2
        ? 10
        : 0

  return (
    <button
      type="button"
      key={item.id}
      className={`portfolio-card ${
        isActive ? 'portfolio-card-active' : ''
      } ${!isVisible ? 'portfolio-card-hidden' : ''}`}
      style={
        {
          '--card-position': relativePosition,
          zIndex: cardZIndex,
        } as React.CSSProperties
      }
      onClick={() =>
        handleCardClick(item, index, relativePosition)
      }
      aria-label={
        isActive
          ? `Play ${item.title}`
          : `Show ${item.title}`
      }
    >
      <span className="portfolio-card-media">
        <img
          src={item.poster}
          alt=""
          draggable={false}
        />

        <span className="portfolio-card-overlay" />

        <span className="portfolio-card-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="portfolio-play-button">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 7 8 5-8 5V7Z" />
          </svg>
        </span>

        <span className="portfolio-card-content">
          <small>{item.category}</small>
          <strong>{item.title}</strong>
        </span>
      </span>
    </button>
  )
})}
          </div>

          <button
            type="button"
            className="portfolio-arrow portfolio-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="portfolio-carousel-footer">
          <div className="portfolio-dots">
            {portfolioVideos.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`portfolio-dot ${
                  index === activeIndex
                    ? 'portfolio-dot-active'
                    : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* <p>
            <span>
              {String(activeIndex + 1).padStart(2, '0')}
            </span>

            <i />

            <span>
              {String(portfolioVideos.length).padStart(
                2,
                '0',
              )}
            </span>
          </p> */}
        </div>
      </section>

      {selectedVideo && (
        <div
          className="portfolio-video-popup"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeVideo()
            }
          }}
        >
          <button
            type="button"
            className="portfolio-popup-close"
            onClick={closeVideo}
            aria-label="Close video"
          >
            <span />
            <span />
          </button>

          <div className="portfolio-popup-container">
            <div className="portfolio-popup-video-wrapper">
              <video
                ref={popupVideoRef}
                key={selectedVideo.video}
                src={selectedVideo.video}
                poster={selectedVideo.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="portfolio-popup-content">
              <p>{selectedVideo.category}</p>
              <h3>{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap');

        .portfolio-video-section {
          position: relative;
          z-index: 20;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          padding: 110px 20px 100px;
          color: #ffffff;
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(255, 255, 255, 0.055),
              transparent 40%
            ),
            #000000;
        }

        .portfolio-video-header {
          position: relative;
          z-index: 5;
          width: 100%;
          margin: 0 auto 55px;
          text-align: center;
        }

        .portfolio-video-header h2 {
          margin: 0 0 15px;
          color: #ffffff;
          font-family: 'Island Moments', cursive;
          font-size: clamp(64px, 6vw, 96px);
          font-weight: 400;
          line-height: 0.8;
          letter-spacing: 1px;
        }

        .portfolio-video-header p {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-family: 'Halant', serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .portfolio-carousel {
          position: relative;
          width: 100%;
          max-width: 1500px;
          height: clamp(420px, 45vw, 650px);
          margin: 0 auto;
          user-select: none;
          touch-action: pan-y;
        }

        .portfolio-carousel-stage {
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 1600px;
        }

        .portfolio-card {
          --card-position: 0;

          position: absolute;
          top: 50%;
          left: 50%;
        //   z-index: calc(10 - var(--card-position));
          display: block;
      width: clamp(390px, 51vw, 790px);
aspect-ratio: 16 / 9;
height: auto;
          padding: 0;
          overflow: hidden;
          border: 0;
          border-radius: 4px;
          outline: none;
          background: #111111;
          cursor: pointer;
          opacity: 1;
          transform:
            translate(
              calc(
                -50% + (var(--card-position) * 58%)
              ),
              -50%
            )
            scale(
              calc(
                1 - (
                  abs(var(--card-position)) * 0.29
                )
              )
            )
            rotateY(
              calc(var(--card-position) * -7deg)
            );
          transform-origin: center;
          transition:
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 450ms ease,
            filter 450ms ease;
          filter:
            brightness(
              calc(
                1 - (
                  abs(var(--card-position)) * 0.32
                )
              )
            )
            saturate(
              calc(
                1 - (
                  abs(var(--card-position)) * 0.28
                )
              )
            );
          -webkit-tap-highlight-color: transparent;
        }

        // .portfolio-card:nth-child(1) {
        //   z-index: 1;
        // }

        .portfolio-card-hidden {
          pointer-events: none;
          opacity: 0;
        }

        .portfolio-card-active {
          z-index: 20;
          box-shadow:
            0 38px 100px rgba(0, 0, 0, 0.68),
            0 0 0 1px rgba(255, 255, 255, 0.12);
          filter: brightness(1) saturate(1);
        }

        .portfolio-card-media {
          position: relative;
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .portfolio-card-media img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .portfolio-card-active:hover
          .portfolio-card-media
          img {
          transform: scale(1.075);
        }

        .portfolio-card-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.04) 30%,
              rgba(0, 0, 0, 0.82) 100%
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.25),
              transparent 55%
            );
          pointer-events: none;
        }


        .portfolio-card-content {
          position: absolute;
          right: 26px;
          bottom: 25px;
          left: 26px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          pointer-events: none;
        }

        .portfolio-card-content small {
          margin-bottom: 6px;
          color: rgba(255, 255, 255, 0.68);
          font-family: 'Halant', serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .portfolio-card-content strong {
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: clamp(23px, 2.2vw, 36px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.5px;
        }

        .portfolio-play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 74px;
          height: 74px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          color: #000000;
          background: rgba(255, 255, 255, 0.92);
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.7);
          transition:
            opacity 350ms ease,
            transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
            background 250ms ease;
          pointer-events: none;
        }

        .portfolio-play-button svg {
          width: 28px;
          height: 28px;
          margin-left: 3px;
          fill: currentColor;
        }

        .portfolio-card-active
          .portfolio-play-button {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .portfolio-card-active:hover
          .portfolio-play-button {
          color: #ffffff;
          background: rgba(0, 0, 0, 0.72);
          transform: translate(-50%, -50%) scale(1.08);
        }

        .portfolio-arrow {
          position: absolute;
          top: 50%;
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 50%;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.52);
          backdrop-filter: blur(14px);
          cursor: pointer;
          transform: translateY(-50%);
          transition:
            background 250ms ease,
            border-color 250ms ease,
            transform 250ms ease;
        }

        .portfolio-arrow:hover {
          border-color: rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.13);
        }

        .portfolio-arrow-left {
          left: max(15px, 3vw);
        }

        .portfolio-arrow-right {
          right: max(15px, 3vw);
        }

        .portfolio-arrow svg {
          width: 22px;
          height: 22px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .portfolio-carousel-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          width: 100%;
          margin-top: 20px;
        }

        .portfolio-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }

        .portfolio-dot {
          width: 6px;
          height: 6px;
          padding: 0;
          border: 0;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.28);
          cursor: pointer;
          transition:
            width 300ms ease,
            background 300ms ease;
        }

        .portfolio-dot-active {
          width: 30px;
          background: #ffffff;
        }

        .portfolio-carousel-footer p {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
          color: rgba(255, 255, 255, 0.65);
          font-family: 'Halant', serif;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .portfolio-carousel-footer p i {
          display: block;
          width: 35px;
          height: 1px;
          background: rgba(255, 255, 255, 0.38);
        }

        .portfolio-video-popup {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 70px 25px 35px;
          background: rgba(0, 0, 0, 0.93);
          backdrop-filter: blur(18px);
          animation: portfolioPopupFade 300ms ease both;
        }

        .portfolio-popup-container {
          width: 100%;
          max-width: 1250px;
          animation: portfolioPopupScale 500ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .portfolio-popup-video-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 5px;
          background: #000000;
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.85);
        }

        .portfolio-popup-video-wrapper video {
          display: block;
          width: 100%;
          max-height: 76vh;
          margin: 0 auto;
          background: #000000;
          object-fit: contain;
        }

        .portfolio-popup-content {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          padding-top: 20px;
        }

        .portfolio-popup-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.58);
          font-family: 'Halant', serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .portfolio-popup-content h3 {
          margin: 0;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: clamp(23px, 3vw, 42px);
          font-weight: 400;
          line-height: 1;
        }

        .portfolio-popup-close {
          position: fixed;
          top: 25px;
          right: 28px;
          z-index: 10;
          width: 46px;
          height: 46px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.45);
          cursor: pointer;
          transition:
            transform 300ms ease,
            border-color 300ms ease;
        }

        .portfolio-popup-close:hover {
          border-color: rgba(255, 255, 255, 0.9);
          transform: rotate(90deg);
        }

        .portfolio-popup-close span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 19px;
          height: 1px;
          background: #ffffff;
        }

        .portfolio-popup-close span:first-child {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .portfolio-popup-close span:last-child {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        @keyframes portfolioPopupFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes portfolioPopupScale {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 900px) {
          .portfolio-video-section {
            padding: 85px 15px 75px;
          }

          .portfolio-video-header {
            margin-bottom: 40px;
          }

          .portfolio-carousel {
            height: 440px;
          }

          .portfolio-card {
            width: min(72vw, 600px);
            height: min(48vw, 400px);
            transform:
              translate(
                calc(
                  -50% + (var(--card-position) * 60%)
                ),
                -50%
              )
              scale(
                calc(
                  1 - (
                    abs(var(--card-position)) * 0.32
                  )
                )
              );
          }

          .portfolio-arrow-left {
            left: 5px;
          }

          .portfolio-arrow-right {
            right: 5px;
          }
        }

        @media (max-width: 600px) {
          .portfolio-video-section {
            padding: 65px 0 60px;
          }

          .portfolio-video-header {
            padding-inline: 18px;
            margin-bottom: 28px;
          }

          .portfolio-video-header h2 {
            font-size: 58px;
          }

          .portfolio-video-header p {
            max-width: 300px;
            margin-inline: auto;
            font-size: 9px;
            line-height: 1.7;
            letter-spacing: 2px;
          }

          .portfolio-carousel {
            height: 290px;
          }

       .portfolio-card {
  width: 86vw;
  height: auto;
  min-height: 0;
  max-height: none;
  aspect-ratio: 16 / 9;

  transform:
    translate(
      calc(
        -50% + (var(--card-position) * 70%)
      ),
      -50%
    )
    scale(
      calc(
        1 - (
          abs(var(--card-position)) * 0.38
        )
      )
    );
}

          .portfolio-card-number {
            top: 15px;
            left: 16px;
            font-size: 9px;
          }

          .portfolio-card-content {
            right: 17px;
            bottom: 17px;
            left: 17px;
          }

          .portfolio-card-content small {
            margin-bottom: 4px;
            font-size: 8px;
            letter-spacing: 2px;
          }

          .portfolio-card-content strong {
            font-size: 21px;
          }

          .portfolio-play-button {
            width: 58px;
            height: 58px;
          }

          .portfolio-play-button svg {
            width: 22px;
            height: 22px;
          }

          .portfolio-arrow {
            display: none;
          }

          .portfolio-carousel-footer {
            margin-top: 0;
          }

          .portfolio-video-popup {
            padding: 65px 12px 25px;
          }

          .portfolio-popup-close {
            top: 15px;
            right: 15px;
            width: 42px;
            height: 42px;
          }

          .portfolio-popup-content {
            align-items: flex-start;
            flex-direction: column-reverse;
            gap: 8px;
            padding: 16px 4px 0;
          }

          .portfolio-popup-content h3 {
            font-size: 25px;
          }

          .portfolio-popup-video-wrapper video {
            max-height: 70vh;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-card,
          .portfolio-card-media img,
          .portfolio-play-button,
          .portfolio-video-popup,
          .portfolio-popup-container {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  )
}