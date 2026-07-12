'use client'

import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com/akashawaseem786',
      className: 'pinterest',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.372 0 0 5.373 0 12c0 4.991 3.657 9.128 8.438 10.033-.117-.85-.222-2.157.046-3.09.242-.835 1.556-5.318 1.556-5.318s-.397-.794-.397-1.968c0-1.843 1.07-3.22 2.403-3.22 1.134 0 1.68.852 1.68 1.872 0 1.141-.727 2.848-1.102 4.431-.314 1.331.666 2.418 1.976 2.418 2.371 0 3.966-3.04 3.966-6.633 0-2.732-1.845-4.783-5.205-4.783-3.793 0-6.166 2.832-6.166 5.998 0 1.089.417 2.259.937 2.894.104.127.118.238.088.366-.096.402-.312 1.278-.354 1.453-.055.23-.182.28-.422.169-1.577-.732-2.563-3.029-2.563-4.875 0-3.974 2.889-7.623 8.335-7.623 4.373 0 7.772 3.118 7.772 7.285 0 4.344-2.739 7.837-6.547 7.837-1.279 0-2.478-.663-2.889-1.445l-.786 2.997c-.285 1.083-1.06 2.44-1.579 3.27C9.414 23.765 10.683 24 12 24c6.628 0 12-5.373 12-12S18.628 0 12 0z" />
        </svg>
      ),
    },
    {
      name: 'Behance',
      href: 'https://www.behance.net/akashawaseem',
      className: 'behance',
      icon: (
        <svg viewBox="0 0 576 512" fill="currentColor" aria-hidden="true">
          <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/923034303997',
      className: 'whatsapp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.4145 14.3822C17.1173 14.2334 15.6564 13.5147 15.384 13.4153C15.1117 13.3162 14.9136 13.2667 14.7154 13.5641C14.5173 13.8615 13.9478 14.5309 13.7745 14.7293C13.6012 14.9275 13.4278 14.9524 13.1307 14.8036C12.8335 14.6549 11.876 14.3411 10.7411 13.3287C9.85769 12.5407 9.26129 11.5677 9.08799 11.2702C8.91461 10.9727 9.06943 10.8119 9.21822 10.6637C9.35195 10.5306 9.51546 10.3166 9.66399 10.1431C9.81257 9.96961 9.86209 9.84558 9.96114 9.6474C10.0602 9.44899 10.0107 9.27553 9.93634 9.12682C9.86209 8.97808 9.26779 7.51537 9.02016 6.92034C8.77895 6.34096 8.53397 6.41944 8.35157 6.41024C8.17844 6.40165 7.98013 6.39981 7.78207 6.39981C7.58397 6.39981 7.26201 6.47418 6.98958 6.77159C6.71727 7.06908 5.94959 7.78806 5.94959 9.25059C5.94959 10.7133 7.01434 12.1263 7.16296 12.3246C7.31158 12.523 9.25829 15.5244 12.2393 16.8116C12.9482 17.1178 13.5017 17.3006 13.9333 17.4375C14.6451 17.6637 15.2929 17.6318 15.805 17.5552C16.3759 17.47 17.5631 16.8364 17.8107 16.1424C18.0583 15.4481 18.0583 14.8532 17.984 14.7293C17.9097 14.6053 17.7116 14.5309 17.4145 14.3822ZM11.9925 21.7853H11.9886C10.2148 21.7846 8.47517 21.3081 6.9575 20.4075L6.59654 20.1932L2.85541 21.1746L3.85395 17.527L3.61899 17.153C2.62951 15.5792 2.10688 13.7603 2.10765 11.8925C2.10983 6.44257 6.54415 2.0086 11.9965 2.0086C14.6367 2.00954 17.1185 3.03905 18.9849 4.9075C20.8511 6.77582 21.8782 9.25932 21.8772 11.9005C21.875 17.3509 17.4408 21.7853 11.9925 21.7853ZM20.4052 3.48773C18.1599 1.2398 15.1739 0.00128304 11.9925 0C5.43736 0 0.102301 5.33471 0.0996495 11.8918C0.0987941 13.9879 0.646396 16.0337 1.68711 17.8373L0 24L6.30443 22.3462C8.04154 23.2937 9.99728 23.7931 11.9877 23.7937H11.9926C18.547 23.7937 23.8825 18.4585 23.8852 11.9013C23.8864 8.72361 22.6505 5.73566 20.4052 3.48777" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/akashawaseem',
      className: 'linkedin',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452H17.2V14.8c0-1.345-.027-3.077-1.879-3.077-1.88 0-2.168 1.466-2.168 2.976v5.753h-3.248V9h3.12v1.561h.044c.435-.824 1.498-1.688 3.083-1.688 3.296 0 3.903 2.169 3.903 4.987v6.592zM5.337 7.433a1.884 1.884 0 1 1 0-3.768 1.884 1.884 0 0 1 0 3.768zM6.78 20.452H3.893V9h2.888v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.729C24 .771 23.2 0 22.222 0z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:akasha.waseem786@gmail.com',
      className: 'email',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V6c0-1.103-.896-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l8 5.333 8-5.333V18H4z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="portfolio-footer">
      {/* HEADER */}
      <div className="footer-header">
        <h2>Reach Out, Say Hi!</h2>
        <p>PING ME, I DON’T BYTE (MUCH)</p>
      </div>

      {/* SOCIAL ICONS */}
      <div className="social-container">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={
              social.href.startsWith('mailto:')
                ? undefined
                : 'noopener noreferrer'
            }
            className={`social-link ${social.className}`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* COPYRIGHT */}
      <p className="footer-copyright">
        © {currentYear} Akasha <span>|</span> Graphics Hub. All rights reserved.
      </p>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600&family=Island+Moments&display=swap');

        .portfolio-footer {
          position: relative;
          z-index: 20;
          isolation: isolate;
          width: 100%;
          min-height: 430px;
          overflow: hidden;
          padding: 72px 20px 42px;
          color: #ffffff;
          text-align: center;
          background: #000000;
        }

        .footer-header {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: center;
        }

        .footer-header h2 {
          margin: 0 0 14px;
          color: #ffffff;
          font-family: 'Island Moments', cursive;
          font-size: clamp(58px, 5vw, 84px);
          font-weight: 400;
          line-height: 0.82;
          letter-spacing: 1px;
        }

        .footer-header p {
          margin: 0;
          color: rgba(255, 255, 255, 0.88);
          font-family: 'Halant', serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .social-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          margin-top: 55px;
        }

        .social-link {
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          opacity: 0.95;
          transform: translateY(0);
          transition:
            color 0.3s ease,
            opacity 0.3s ease,
            filter 0.3s ease,
            transform 0.3s ease;
        }

        .social-link svg {
          display: block;
          width: 34px;
          height: 34px;
        }

        .social-link.behance svg {
          width: 38px;
          height: 34px;
        }

        .social-link:hover {
          opacity: 1;
          transform: translateY(-4px);
        }

        .social-link.pinterest:hover {
          color: #e60023;
          filter: drop-shadow(0 0 10px rgba(230, 0, 35, 0.65));
        }

        .social-link.behance:hover {
          color: #1769ff;
          filter: drop-shadow(0 0 10px rgba(23, 105, 255, 0.65));
        }

        .social-link.whatsapp:hover {
          color: #25d366;
          filter: drop-shadow(0 0 10px rgba(37, 211, 102, 0.65));
        }

        .social-link.linkedin:hover {
          color: #0a66c2;
          filter: drop-shadow(0 0 10px rgba(10, 102, 194, 0.65));
        }

        .social-link.email:hover {
          color: #ea4335;
          filter: drop-shadow(0 0 10px rgba(234, 67, 53, 0.65));
        }

        .footer-copyright {
          position: relative;
          z-index: 2;
          margin: 92px 0 0;
          color: rgba(255, 255, 255, 0.38);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
        }

        .footer-copyright span {
          margin: 0 5px;
          color: rgba(210, 152, 137, 0.55);
        }

        @media (max-width: 768px) {
          .portfolio-footer {
            min-height: 400px;
            padding: 70px 16px 36px;
          }

          .footer-header h2 {
            font-size: clamp(55px, 15vw, 75px);
          }

          .footer-header p {
            font-size: 10px;
          }

          .social-container {
            gap: 32px;
            margin-top: 48px;
          }

          .social-link {
            width: 34px;
            height: 34px;
          }

          .social-link svg {
            width: 29px;
            height: 29px;
          }

          .social-link.behance svg {
            width: 34px;
            height: 29px;
          }

          .footer-copyright {
            margin-top: 82px;
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .portfolio-footer {
            min-height: 380px;
            padding-top: 62px;
          }

          .footer-header h2 {
            font-size: 55px;
          }

          .footer-header p {
            font-size: 9px;
          }

          .social-container {
            gap: 22px;
            margin-top: 44px;
          }

          .social-link {
            width: 30px;
            height: 30px;
          }

          .social-link svg {
            width: 26px;
            height: 26px;
          }

          .social-link.behance svg {
            width: 30px;
            height: 26px;
          }

          .footer-copyright {
            margin-top: 75px;
            padding: 0 10px;
            font-size: 13px;
          }
        }
      `}</style>
    </footer>
  )
}