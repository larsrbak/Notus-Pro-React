import React from 'react'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container">
        <footer className="footer-footer">
          <img
            alt="logo"
            src="/playground_assets/ronin-karate-1500h.jpg"
            className="footer-image"
          />
          <span className="footer-text">© 2021 Ronin Karate</span>
          <div className="footer-icon-group">
            <a
              href="https://www.facebook.com/groups/147865155374614"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <svg viewBox="0 0 602.2582857142856 1024" className="footer-icon">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-900);
          }
          .footer-footer {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .footer-image {
            height: 2rem;
            object-fit: cover;
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link {
            display: contents;
          }
          .footer-icon {
            width: 16px;
            height: 16px;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: 32px;
              padding-right: 32px;
            }
            .footer-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
