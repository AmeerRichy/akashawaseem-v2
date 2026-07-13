"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Halant, Island_Moments } from "next/font/google";
import type { CSSProperties } from "react";

type ShapeOutsideStyle = CSSProperties & {
  WebkitShapeOutside?: string;
};

const islandMoments = Island_Moments({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const halant = Halant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Hero2() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#000",
      }}
    >
      {/* =====================================================
          FIXED HERO
      ===================================================== */}
      <section
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <Image
          src="/assets/images/hero200.png"
          alt="Akasha Waseem portfolio banner"
          fill
          priority
          unoptimized
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              transform: "translate(200px, -150px)",
            }}
          >
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/assets/images/bnrakasha.png"
                alt="Akasha"
                width={320}
                height={100}
                priority
                unoptimized
                draggable={false}
                style={{
                  display: "block",
                  width: "320px",
                  height: "auto",
                }}
              />
            </motion.div>

            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                marginTop: "12px",
              }}
            >
              <Image
                src="/assets/images/bnrwaseem.png"
                alt="Waseem"
                width={320}
                height={100}
                priority
                unoptimized
                draggable={false}
                style={{
                  display: "block",
                  width: "320px",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fixed hero space */}
      <div
        aria-hidden="true"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          THE STORY SO FAR
      ===================================================== */}
      <motion.section
        initial={{
          y: 120,
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.04,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          boxSizing: "border-box",
          padding: "46px 3% 36px",
          color: "#fff",
          backgroundColor: "#000",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            marginBottom: "22px",
            textAlign: "center",
          }}
        >
          <h2
            className={islandMoments.className}
            style={{
              margin: 0,
              color: "#f4f4f4",
              fontSize: "clamp(64px, 7vw, 110px)",
              fontWeight: 400,
              lineHeight: 0.85,
              letterSpacing: 0,
            }}
          >
            The Story So Far
          </h2>

          <p
            className={halant.className}
            style={{
              margin: "14px 0 0",
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: "clamp(13px, 1vw, 17px)",
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: "0.01em",
            }}
          >
            One Pixel, One Page, One Frame At A Time!
          </p>
        </motion.div>

        {/* Main content */}
        <div
          className="story-content"
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            maxWidth: "1580px",
            minHeight: "600px",
            margin: "0 auto",
          }}
        >
          {/* Image collage stays in original position */}
          <motion.div
            className="story-collage"
            initial={{
              opacity: 0,
              x: 90,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "relative",
              float: "right",
              zIndex: 4,
              width: "590px",
              height: "600px",

              shapeOutside:
                "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 45%, 30% 45%)",

              WebkitShapeOutside:
                "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 45%, 30% 45%)",

              shapeMargin: "30px",
              marginLeft: "22px",
              marginBottom: "10px",
            } as ShapeOutsideStyle}
          >
            {/* Main portrait */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 3,
                width: "78%",
                height: "91%",
                overflow: "visible",
              }}
            >
              <Image
                src="/assets/images/story-main.png"
                alt="Akasha Waseem portrait"
                fill
                unoptimized
                sizes="590px"
                style={{
                  objectFit: "contain",
                  objectPosition: "right bottom",
                }}
              />
            </div>

            {/* Chair portrait */}
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "absolute",
                left: "-2%",
                bottom: 0,
                zIndex: 5,
                width: "67%",
                height: "58%",
                overflow: "visible",
                backgroundColor: "transparent",
              }}
            >
              <Image
                src="/assets/images/story-chair.png"
                alt="Akasha Waseem seated portrait"
                fill
                unoptimized
                sizes="395px"
                style={{
                  objectFit: "contain",
                  objectPosition: "center bottom",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text wraps around collage outline */}
          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`${halant.className} story-text`}
            style={{
              position: "relative",
              zIndex: 6,
              width: "100%",
              paddingTop: "70px",
              boxSizing: "border-box",
            }}
          >
            <p style={paragraphStyle}>
              I design with purpose, think in concepts &amp; occasionally argue
              with pixels until they behave. With roots in graphic design &amp;
              a growing obsession with technology, I live somewhere between
              color palettes, UI screens, creative direction &amp; far too many
              open tabs. I love turning rough ideas into visual experiences
              that feel clear, clever &amp; actually worth looking at.
            </p>

            <p style={paragraphStyle}>
              My work blends graphic design, branding, UI/UX, visual
              storytelling, front-end creativity, motion &amp; design systems.
              Basically, I like making things look good, work better &amp; make
              sense. I’m detail-obsessed, challenge-driven, powered by coffee
              &amp; curiosity &amp; always asking the dangerous question:{" "}
              <strong
                style={{
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                “What if we try something different?”
              </strong>
            </p>

            <p
              style={{
                ...paragraphStyle,
                marginBottom: 0,
              }}
            >
              Lately, I’ve also been exploring AI, 3D, animation &amp; emerging
              creative technologies because apparently having enough interests
              was never part of the plan. But at my core, I’m still a designer,
              someone who loves bold ideas, thoughtful details, strong visual
              direction &amp; creating experiences that people actually
              remember.
            </p>
          </motion.div>

          <div
            style={{
              clear: "both",
            }}
          />
        </div>

        <style jsx>{`
          @media (max-width: 1100px) {
            .story-collage {
              width: 500px !important;
              height: 540px !important;
              margin-left: 18px !important;
              shape-margin: 24px !important;

              shape-outside: polygon(
                32% 0%,
                100% 0%,
                100% 100%,
                0% 100%,
                0% 45%,
                32% 45%
              ) !important;

              -webkit-shape-outside: polygon(
                32% 0%,
                100% 0%,
                100% 100%,
                0% 100%,
                0% 45%,
                32% 45%
              ) !important;
            }

            .story-text {
              padding-top: 58px !important;
            }
          }

          @media (max-width: 850px) {
            .story-content {
              display: flex !important;
              flex-direction: column !important;
            }

            .story-collage {
              order: 2;
              float: none !important;
              width: 100% !important;
              max-width: 590px !important;
              height: 560px !important;
              margin: 28px auto 0 !important;
              shape-outside: none !important;
              -webkit-shape-outside: none !important;
            }

            .story-text {
              order: 1;
              padding-top: 24px !important;
            }
          }

          @media (max-width: 560px) {
            .story-collage {
              height: 450px !important;
              margin-top: 20px !important;
            }

            .story-text {
              padding-top: 16px !important;
            }
          }
        `}</style>
      </motion.section>
    </main>
  );
}

const paragraphStyle = {
  margin: "0 0 24px",
  color: "rgba(255, 255, 255, 0.84)",
  fontSize: "clamp(17px, 1.22vw, 21px)",
  fontWeight: 400,
  lineHeight: 1.55,
  letterSpacing: "0.005em",
  textAlign: "justify" as const,
};
