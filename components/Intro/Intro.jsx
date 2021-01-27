import React from "react";

const Intro = () => {
  return (
    <div>
      <span>Hello!</span>
      <span>I'm Leonardo Eleazar G&oacute;mez Mart&iacute;nes</span>
      <span>Welcome to My Page</span>
      <style jsx>{`
        div {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        span {
          position: absolute;
          font-size: 2em;
          font-weight: 600;
          text-align: center;
          margin: 1em;
          animation-name: first;
          animation-fill-mode: forwards;
        }
        span:first-child {
          animation-duration: 2s;
        }
        span:nth-child(2n) {
          opacity: 0;
          animation-duration: 4s;
          animation-delay: 1.7s;
        }
        span:last-child {
          opacity: 0;
          animation-duration: 3s;
          animation-delay: 5.5s;
        }
        @keyframes first {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;
