import React from "react";

const AboutMeTabs = ({ children, img }) => {
  return (
    <div>
      <section>{children}</section>
      <style jsx>{`
        div {
          height: 100%;
          padding: 50px 0 0;
          position: relative;
        }
        div::before {
          content: "";
          display: block;
          position: absolute;
          z-index: -1;
          width: 60vw;
          height: 100vh;
          top: 0;
          right: 0;
          background: linear-gradient(to right, var(--main-color), transparent),
            url(${img});
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0;
          animation: in-img 300ms 150ms forwards;
        }
        section {
          display: flex;
          flex-flow: column;
          justify-content: center;
          width: 50%;
          min-width: 320px;
          height: 100%;
          padding: 1rem;
          font-weight: 600;
          font-size: 1.3rem;
          animation: in-text 300ms;
        }

        @keyframes in-text {
          from {
            opacity: 0;
            transform: translateX(-60%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes in-img {
          from {
            opacity: 0;
            transform: translateX(60%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media screen and (max-width: 500px) {
          div {
            padding: 0 0 50px;
            background-color: rgba(255, 255, 255, 0.7);
          }
          div::before {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMeTabs;
