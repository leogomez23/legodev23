import React from "react";

const SeeMore = ({ children, content }) => {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          background: none;
          border: none;
          padding: 0;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          cursor: pointer;
          outline: none;
          color: var(--pink-color);
        }
        button:hover::before {
          content: "${content}";
          display: block;
          font-size: 1rem;
          font-weight: 400;
          color: var(--second-color);
          position: absolute;
          opacity: 1;
          top: 30%;
          left: 20%;
          min-width: 280px;
          max-width: 60vw;
          background-color: var(--main-color);
          border-radius: 7px;
          padding: 1rem;
          box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.6);
        }

        @media screen and (max-width: 500px) {
          button:hover::before {
            max-width: 100%;
            top: 0;
            left: 0;
          }
        }
      `}</style>
    </button>
  );
};

export default SeeMore;
