"use client";

import React, {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import HTMLFlipBook from "react-pageflip";

type MagazinePageProps = {
  image: string;
  alt: string;
};

type PageFlipApi = {
  getCurrentPageIndex: () => number;
};

type FlipBookRef = {
  pageFlip: () => PageFlipApi;
};

type BookSize = {
  pageWidth: number;
  pageHeight: number;
  portrait: boolean;
};

const SOURCE_WIDTH = 837;
const SOURCE_HEIGHT = 941;
const PAGE_RATIO = SOURCE_WIDTH / SOURCE_HEIGHT;

const magazineSpreads = [
  {
    left: "/assets/images/magazine/spread-01-left.png",
    right: "/assets/images/magazine/spread-01-right.png",
  },
  {
    left: "/assets/images/magazine/spread-02-left.png",
    right: "/assets/images/magazine/spread-02-right.png",
  },
  {
    left: "/assets/images/magazine/spread-03-left.png",
    right: "/assets/images/magazine/spread-03-right.png",
  },
  {
    left: "/assets/images/magazine/spread-04-left.png",
    right: "/assets/images/magazine/spread-04-right.png",
  },
  {
    left: "/assets/images/magazine/spread-05-left.png",
    right: "/assets/images/magazine/spread-05-right.png",
  },
  {
    left: "/assets/images/magazine/spread-06-left.png",
    right: "/assets/images/magazine/spread-06-right.png",
  },
  {
    left: "/assets/images/magazine/spread-07-left.png",
    right: "/assets/images/magazine/spread-07-right.png",
  },
  {
    left: "/assets/images/magazine/spread-08-left.png",
    right: "/assets/images/magazine/spread-08-right.png",
  },
  {
    left: "/assets/images/magazine/spread-09-left.png",
    right: "/assets/images/magazine/spread-09-right.png",
  },
  {
    left: "/assets/images/magazine/spread-10-left.png",
    right: "/assets/images/magazine/spread-10-right.png",
  },
  {
    left: "/assets/images/magazine/spread-11-left.png",
    right: "/assets/images/magazine/spread-11-right.png",
  },
  {
    left: "/assets/images/magazine/spread-12-left.png",
    right: "/assets/images/magazine/spread-12-right.png",
  },
  {
    left: "/assets/images/magazine/spread-13-left.png",
    right: "/assets/images/magazine/spread-13-right.png",
  },
  {
    left: "/assets/images/magazine/spread-14-left.png",
    right: "/assets/images/magazine/spread-14-right.png",
  },
];

const MagazinePage = forwardRef<HTMLDivElement, MagazinePageProps>(
  ({ image, alt }, ref) => {
    return (
      <div ref={ref} className="magazine-page" data-density="soft">
        <div className="magazine-page-surface">
          <img
            src={image}
            alt={alt}
            draggable={false}
            className="magazine-page-image"
            loading="eager"
            decoding="sync"
          />
          <div className="magazine-paper-overlay" />
        </div>
      </div>
    );
  },
);

MagazinePage.displayName = "MagazinePage";

function calculateBookSize(): BookSize {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const portrait = viewportWidth <= 768;

  if (portrait) {
    const horizontalSpace = Math.max(260, viewportWidth - 24);
    const verticalSpace = Math.max(350, viewportHeight - 170);

    let pageWidth = Math.min(horizontalSpace, 520);
    let pageHeight = pageWidth / PAGE_RATIO;

    if (pageHeight > verticalSpace) {
      pageHeight = verticalSpace;
      pageWidth = pageHeight * PAGE_RATIO;
    }

    return {
      pageWidth: Math.floor(pageWidth),
      pageHeight: Math.floor(pageHeight),
      portrait: true,
    };
  }

  const horizontalSpace = Math.min(viewportWidth - 100, 1380);
  const verticalSpace = Math.min(viewportHeight - 175, 720);

  let pageWidth = horizontalSpace / 2;
  let pageHeight = pageWidth / PAGE_RATIO;

  if (pageHeight > verticalSpace) {
    pageHeight = verticalSpace;
    pageWidth = pageHeight * PAGE_RATIO;
  }

  pageWidth = Math.min(pageWidth, 620);
  // keep width/height derived from the same floored value so they never
  // disagree by a sub-pixel amount with the library's own size calc
  pageWidth = Math.floor(pageWidth);
  pageHeight = Math.floor(pageWidth / PAGE_RATIO);

  return {
    pageWidth,
    pageHeight,
    portrait: false,
  };
}

export default function PortfolioMagazine() {
  const bookRef = useRef<FlipBookRef | null>(null);
  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragHintRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false);
  const [bookSize, setBookSize] = useState<BookSize | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const allMagazinePages = useMemo(
    () =>
      magazineSpreads.flatMap((spread, index) => [
        {
          key: `spread-${index + 1}-left`,
          image: spread.left,
          alt: `Magazine spread ${index + 1} left page`,
        },
        {
          key: `spread-${index + 1}-right`,
          image: spread.right,
          alt: `Magazine spread ${index + 1} right page`,
        },
      ]),
    [],
  );

  // preload every page image so nothing is still decoding when a page
  // rotates into view
  useEffect(() => {
    const urls = [
      "/assets/images/magazine/front-cover.png",
      ...magazineSpreads.flatMap((s) => [s.left, s.right]),
      "/assets/images/magazine/back-cover.png",
    ];

    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    setMounted(true);

    const updateBookSize = () => {
      const nextSize = calculateBookSize();

      setBookSize((previousSize) => {
        if (
          previousSize &&
          previousSize.pageWidth === nextSize.pageWidth &&
          previousSize.pageHeight === nextSize.pageHeight &&
          previousSize.portrait === nextSize.portrait
        ) {
          return previousSize;
        }

        return nextSize;
      });
    };

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(updateBookSize, 250);
    };

    updateBookSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  const bookKey = bookSize
    ? `${bookSize.pageWidth}-${bookSize.pageHeight}-${bookSize.portrait ? "portrait" : "landscape"}`
    : "magazine-placeholder";

  const totalPages = allMagazinePages.length + 2;
  const isFrontCover = currentPage === 0;
  const isBackCover = currentPage === totalPages - 1;

  // The library draws a lone showCover page flush to one side (front
  // cover = right page with no left page; back cover = left page with
  // no right page) to simulate a closed book. We shift it visually with
  // a transform (not a width/size change) so it reads as centered.
  // transform never touches offsetWidth, so it can't fool the library's
  // own orientation/width detection the way resizing the wrapper did.
  let bookOffset = 0;

  if (bookSize && !bookSize.portrait) {
    if (isFrontCover) {
      bookOffset = -bookSize.pageWidth / 2;
    } else if (isBackCover) {
      bookOffset = bookSize.pageWidth / 2;
    }
  }

  return (
    <section className="portfolio-magazine-section">
      <header className="portfolio-magazine-header">
        <h2>The Pixel Playground</h2>

        <p>
          Where ideas got messy, designs got better &amp; sleep got
          questionable.
        </p>
      </header>

      <div
        className="portfolio-magazine-stage"
        style={
          {
            "--magazine-page-width": `${bookSize?.pageWidth ?? 500}px`,
            "--magazine-page-height": `${bookSize?.pageHeight ?? 562}px`,
          } as React.CSSProperties
        }
      >
        {mounted && bookSize ? (
          <div
            className="portfolio-magazine-book-wrapper"
            style={
              {
                "--magazine-book-offset": `${bookOffset}px`,
              } as React.CSSProperties
            }
          >
            <HTMLFlipBook
              key={bookKey}
              ref={bookRef as React.Ref<never>}
              width={bookSize.pageWidth}
              height={bookSize.pageHeight}
              size="fixed"
              minWidth={bookSize.pageWidth}
              maxWidth={bookSize.pageWidth}
              minHeight={bookSize.pageHeight}
              maxHeight={bookSize.pageHeight}
              // Front/back cover render single-width (not part of a
              // 2-page spread). They still flip like inner pages because
              // MagazinePage sets data-density="soft" on every page —
              // showCover only affects layout width, not flip stiffness.
              showCover
              usePortrait={bookSize.portrait}
              startPage={0}
              drawShadow
              maxShadowOpacity={0.48}
              flippingTime={1000}
              startZIndex={10}
              autoSize={false}
              showPageCorners
              useMouseEvents
              mobileScrollSupport={false}
              clickEventForward={false}
              disableFlipByClick
              swipeDistance={15}
              style={{ margin: "0 auto" }}
              className="portfolio-flipbook"
              onFlip={(event: { data: number }) => {
                const pageIndex = Number(event.data);

                setCurrentPage(pageIndex);

                if (dragHintRef.current) {
                  dragHintRef.current.style.opacity =
                    pageIndex === 0 ? "1" : "0";
                  dragHintRef.current.style.visibility =
                    pageIndex === 0 ? "visible" : "hidden";
                }
              }}
            >
              <MagazinePage
                image="/assets/images/magazine/front-cover.png"
                alt="Portfolio magazine front cover"
              />

              {allMagazinePages.map((page) => (
                <MagazinePage
                  key={page.key}
                  image={page.image}
                  alt={page.alt}
                />
              ))}

              <MagazinePage
                image="/assets/images/magazine/back-cover.png"
                alt="Portfolio magazine back cover"
              />
            </HTMLFlipBook>
          </div>
        ) : (
          <div className="portfolio-magazine-placeholder" />
        )}

        {mounted && bookSize && !bookSize.portrait && (
          <div ref={dragHintRef} className="magazine-drag-instruction">
            <span>Drag Here</span>

            <svg viewBox="0 0 190 115" fill="none" aria-hidden="true">
              <path
                d="M171 10C163 42 143 65 118 66C102 67 104 44 93 45C82 46 87 75 62 81C45 85 30 82 15 78"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M33 62L14 78L37 88"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap");

        * {
          box-sizing: border-box;
        }

        html,
        body {
          overflow-x: hidden;
        }

        .portfolio-magazine-section {
          position: relative;
          z-index: 20;
          isolation: isolate;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          padding: 34px 20px 45px;
          background: #000000;
          color: #ffffff;
          font-family: "Halant", serif;
        }

        .portfolio-magazine-header {
          position: relative;
          z-index: 10;
          width: 100%;
          margin: 0 0 22px;
          text-align: center;
        }

        .portfolio-magazine-header h2 {
          margin: 0;
          color: #ffffff;
          font-family: "Island Moments", cursive;
          font-size: clamp(58px, 5vw, 84px);
          font-weight: 400;
          line-height: 0.82;
        }

        .portfolio-magazine-header p {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.88);
          font-family: "Halant", serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .portfolio-magazine-stage {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          height: var(--magazine-page-height);
          min-height: var(--magazine-page-height);
          margin: 0 auto;
          overflow: visible;
        }

        .portfolio-magazine-book-wrapper {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: calc(var(--magazine-page-width) * 2);
          height: var(--magazine-page-height);
          margin: 0 auto;
          transform: translate3d(var(--magazine-book-offset, 0px), 0, 0);
          transition: transform 400ms ease;
        }

        .portfolio-magazine-placeholder {
          width: calc(var(--magazine-page-width) * 2);
          height: var(--magazine-page-height);
        }

        .portfolio-flipbook {
          position: relative !important;
          margin: 0 auto !important;
          filter: drop-shadow(0 28px 38px rgba(0, 0, 0, 0.85));
          touch-action: none;
          will-change: transform;
        }

        /*
         * REMOVED: ".portfolio-flipbook > .magazine-page { position:
         * absolute !important; inset: 0 auto auto 0 !important; }"
         *
         * react-pageflip sets position/transform inline styles on this
         * exact element via JS as part of its own flip math. Forcing it
         * with !important from our CSS overrides those inline styles
         * and fights the library — this was the most likely cause of
         * pages rendering in the wrong place. Do not re-add a position
         * override on .magazine-page itself; only style its children.
         */

        .magazine-page {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #e8e8e5;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .magazine-page-surface {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #e8e8e5;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .magazine-page-image {
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          user-select: none;
          pointer-events: none;
          -webkit-user-drag: none;
        }

        .magazine-paper-overlay {
          position: absolute;
          z-index: 2;
          inset: 0;
          pointer-events: none;
          background:
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.018) 0,
              rgba(255, 255, 255, 0.018) 1px,
              rgba(0, 0, 0, 0.012) 1px,
              rgba(0, 0, 0, 0.012) 2px
            ),
            linear-gradient(
              100deg,
              rgba(255, 255, 255, 0.045),
              transparent 22%,
              transparent 78%,
              rgba(0, 0, 0, 0.045)
            );
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.08),
            inset 0 0 15px rgba(0, 0, 0, 0.06);
          opacity: 0.65;
          mix-blend-mode: soft-light;
        }

        .magazine-drag-instruction {
          position: absolute;
          z-index: 10;
          top: 25%;
          left: calc(50% + (var(--magazine-page-width) / 2) + 55px);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 190px;
          color: rgba(255, 255, 255, 0.82);
          font-family: "Halant", serif;
          pointer-events: none;
          user-select: none;
        }

        .magazine-drag-instruction span {
          align-self: flex-end;
          margin-right: 3px;
          font-size: 29px;
          font-weight: 300;
          line-height: 1;
          white-space: nowrap;
        }

        .magazine-drag-instruction svg {
          display: block;
          width: 190px;
          height: 115px;
          margin-top: 3px;
          opacity: 0.5;
          transform: rotate(-4deg);
          animation: magazine-drag-motion 2.2s ease-in-out infinite;
        }

        @keyframes magazine-drag-motion {
          0%,
          100% {
            transform: rotate(-4deg) translateX(0);
          }

          50% {
            transform: rotate(-4deg) translateX(-9px);
          }
        }

        @media (max-width: 1100px) {
          .magazine-drag-instruction {
            left: calc(50% + (var(--magazine-page-width) / 2) + 15px);
            width: 145px;
          }

          .magazine-drag-instruction span {
            font-size: 24px;
          }

          .magazine-drag-instruction svg {
            width: 145px;
            height: 95px;
          }
        }

        @media (max-width: 850px) {
          .magazine-drag-instruction {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .portfolio-magazine-section {
            min-height: auto;
            padding: 44px 6px 38px;
          }

          .portfolio-magazine-header {
            margin-bottom: 24px;
          }

          .portfolio-magazine-header h2 {
            font-size: clamp(55px, 15vw, 75px);
          }

          .portfolio-magazine-header p {
            max-width: 360px;
            margin-right: auto;
            margin-left: auto;
            padding: 0 12px;
            font-size: 10px;
            line-height: 1.45;
          }

          .portfolio-magazine-book-wrapper,
          .portfolio-magazine-placeholder {
            width: var(--magazine-page-width);
          }
        }

        @media (max-width: 420px) {
          .portfolio-magazine-section {
            padding-top: 38px;
          }

          .portfolio-magazine-header h2 {
            font-size: 55px;
          }

          .portfolio-magazine-header p {
            font-size: 9px;
          }
        }
      `}</style>
    </section>
  );
}