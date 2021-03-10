import React from "react";
import { createPortal } from "react-dom";

const ProjectModal = ({ setModal, id }) => {
  return createPortal(
    <>
      <div
        onClick={() => {
          setModal(false);
        }}
      ></div>

      <section>
        <button
          onClick={() => {
            setModal(false);
          }}
        ></button>
      </section>

      <style jsx>{`
        div {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          opacity: 0;
          animation-name: in-opacity;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        section {
          position: absolute;
          top: 0;
          width: 80%;
          height: 80%;
          margin: 5% 10%;
          background: var(--main-color);
          border-radius: 15px;
          animation-name: in-section, in-opacity;
          animation-duration: 300ms;
          animation-fill-mode: forwards;
        }
        button {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 30px;
          border-radius: 100%;
          outline: none;
          cursor: pointer;
          background: transparent;
          padding: 0;
          border: none;
          transform: rotate(45deg);
        }
        button::before,
        button::after {
          content: "";
          position: absolute;
          background: var(--second-color);
        }
        button::before {
          width: 4px;
          height: 26px;
        }
        button::after {
          width: 26px;
          height: 4px;
        }

        @keyframes in-opacity {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes in-section {
          from {
            top: -20px;
          }
          to {
          }
        }
      `}</style>
    </>,
    document.getElementById("modal")
  );
};

export default ProjectModal;
