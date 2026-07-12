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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true
          video.currentTime = 0

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
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 20,
        isolation: 'isolate',
        width: '100%',
        overflow: 'hidden',
        padding: '100px 20px 80px',
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#000',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          marginBottom: '50px',
          textAlign: 'center',
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
          onEnded={(event) => {
            event.currentTarget.pause()
          }}
        >
          Your browser does not support the video tag.
        </video>
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

        @media (max-width: 768px) {
          .under-the-hood-video-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}