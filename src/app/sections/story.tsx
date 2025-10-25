'use client'

import React from 'react'

const StorySection: React.FC = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom, #050505 80%, #2b1f18 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 5vw', // 👈 added viewport-based side padding (responsive)
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '960px', // 👈 slightly wider container
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Title */}
        <h2
          style={{
            color: '#e9c5b3',
            fontFamily: 'var(--font-playfair)',
            fontWeight: 500,
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            marginBottom: '0.5rem',
          }}
        >
          The Story So Far
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '0.85rem',
            color: '#c8a890',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '4rem',
          }}
        >
          One Pixel, One Page, One Frame At A Time!
        </p>

        {/* Body */}
        <div
          style={{
            fontFamily: 'var(--font-quicksand)',
            fontWeight: 300,
            fontSize: '1.05rem',
            color: '#e5e5e5',
            textAlign: 'left',
            lineHeight: 1.9,
            maxWidth: '1000px',
            margin: '0 auto',
            // padding: '0 0.75rem', 
          }}
        >
          <p style={{ marginBottom: '2rem' }}>
            I’m a web developer with the soul of a designer & the mindset of a strategist. With roots in graphic design &
            a sharp eye for detail, I don’t just build stuff — I craft experiences. Blending artistic vision with technical
            precision, I thrive on bringing bold ideas to life through clean code, intuitive interfaces, & thoughtful
            solutions.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            My journey has been a fusion of color palettes & code editors. I’m obsessed with detail, driven by challenges,
            & <span style={{ fontStyle: 'italic', color: '#d2b09b' }}>powered by coffee & curiosity.</span> I bring to the
            table a unique blend of visual creativity, technical expertise, & project leadership. Whether it’s refining
            user journeys or building scalable systems, I approach every challenge with a problem-solving lens & a passion
            for innovation. My background in design taught me empathy, aesthetics, & the power of storytelling — lessons I
            carry into every line of code I write.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            From wireframes to responsive layouts, motion graphics to micro-interactions, I thrive at the intersection of
            design, technology, & visual storytelling. I specialize in creating clean, intuitive interfaces that not only
            work — but connect.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            While I’m starting to explore 3D, animation, & AI, my core strength remains in design, UI/UX, & front-end
            creativity. I’m endlessly curious, detail-obsessed, & driven by the challenge of crafting experiences that look
            great, feel effortless, & leave a lasting impression.
          </p>

          <p>
            I’m looking to contribute to a forward-thinking, growth-focused team where innovation isn’t a buzzword — it’s
            the baseline. So, let’s build something memorable together — one pixel-perfect page at a time.
          </p>
        </div>
      </div>

      {/* Subtle star texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(white 0.5px, transparent 0.5px)',
          backgroundSize: '3px 3px',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      ></div>
    </section>
  )
}

export default StorySection
