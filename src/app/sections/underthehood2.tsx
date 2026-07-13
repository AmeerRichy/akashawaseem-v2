'use client'

import React, { useEffect, useRef } from 'react'

export default function UnderTheHood2() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const hasPlayedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current

    if (!section || !video) return

    // Increase video playback speed
    video.playbackRate = 1.5
    video.defaultPlaybackRate = 1.5

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true
          video.currentTime = 0
          video.playbackRate = 1.5

          video.play().catch(() => {
            hasPlayedRef.current = false
          })
        }

        if (!entry.isIntersecting && !video.ended) {
          video.pause()
        }
      },
      {
        threshold: 0.3,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      video.pause()
    }
  }, [])

  return (
    <section
      className="under-the-hood-section"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 20,
        isolation: 'isolate',
        width: '100%',
        overflow: 'hidden',
        padding: '100px 20px 90px',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#000',
      }}
    >
      {/* HEADER */}
      <div
        className="under-the-hood-header"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          marginBottom: '50px',
          textAlign: 'center',
        }}
      >
        <h2
          className="under-the-hood-title"
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
          Under the Hood
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
          THINGS I BREAK (AND THEN FIX EVEN BETTER)
        </p>
      </div>

      {/* VIDEO */}
      <div className="under-the-hood-video-wrapper">
        <video
          ref={videoRef}
          className="under-the-hood-video"
          src="/assets/vids/underhood.mp4"
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = 1.5
            event.currentTarget.defaultPlaybackRate = 1.5
          }}
          onEnded={(event) => {
            event.currentTarget.pause()
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* MODES I USE */}
      <div className="modes-section">
        <div className="modes-title-row" aria-label="Modes I use">
          <span className="modes-star">✦</span>
          <h3>MODES I USE</h3>
          <span className="modes-star">✦</span>
        </div>

        <p className="modes-list">
          <span>STRATEGY</span>
          <i>|</i>
          <span>DESIGN</span>
          <i>|</i>
          <span>DIRECTION</span>
          <i>|</i>
          <span>PROBLEM-SOLVING</span>
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap');

        .under-the-hood-video-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
          background: #000000;
        }

        .under-the-hood-video {
          display: block;
          width: 100%;
          height: auto;
          margin: 0 auto;
          background: #000000;
          object-fit: contain;
        }

        .modes-section {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 60px auto 0;
          text-align: center;
        }

        .modes-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin-bottom: 16px;
        }

        .modes-title-row h3 {
          margin: 0;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: clamp(17px, 1.65vw, 25px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 8px;
          white-space: nowrap;
        }

        .modes-star {
          display: inline-block;
          color: #ffffff;
          font-size: clamp(16px, 1.5vw, 22px);
          line-height: 1;
        }

        .modes-list {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin: 0;
          color: #ffffff;
          font-family: 'Halant', serif;
          font-size: clamp(13px, 1.65vw, 23px);
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: clamp(3px, 0.55vw, 8px);
          text-transform: uppercase;
        }

        .modes-list span {
          white-space: nowrap;
        }

        .modes-list i {
          color: rgba(255, 255, 255, 0.7);
          font-style: normal;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .under-the-hood-section {
            padding: 68px 14px 62px !important;
          }

          .under-the-hood-header {
            margin-bottom: 32px !important;
          }

          .under-the-hood-title {
            font-size: clamp(55px, 15vw, 75px) !important;
          }

          .under-the-hood-video-wrapper {
            width: 100%;
            border-radius: 2px;
          }

          .modes-section {
            margin-top: 42px;
          }

          .modes-title-row {
            gap: 15px;
            margin-bottom: 18px;
          }

          .modes-title-row h3 {
            letter-spacing: 5px;
          }

          .modes-list {
            gap: 7px 10px;
            letter-spacing: 3px;
          }
        }

        @media (max-width: 520px) {
          .under-the-hood-section {
            padding: 56px 12px 50px !important;
          }

          .under-the-hood-title {
            font-size: 55px !important;
          }

          .modes-section {
            margin-top: 35px;
          }

          .modes-title-row {
            gap: 12px;
          }

          .modes-title-row h3 {
            font-size: 15px;
            letter-spacing: 4px;
          }

          .modes-star {
            font-size: 14px;
          }

          .modes-list {
            max-width: 360px;
            margin-inline: auto;
            gap: 5px 8px;
            font-size: 11px;
            line-height: 1.7;
            letter-spacing: 2px;
          }
        }
      `}</style>
    </section>
  )
}
