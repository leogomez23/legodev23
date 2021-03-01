import React, { useEffect, useRef, useState } from "react";

const ScrollVertical = ({ children }) => {
  const [position, setPosition] = useState(0);

  const [beforeTimeout, setBeforeTimeout] = useState(0);

  const [touchMove, setTouchMove] = useState({
    initial: 0,
    end: 0,
  });

  const container = useRef(null);

  useEffect(() => {}, []);

  function leavePage(newPosition) {
    clearTimeout(beforeTimeout);

    container.current.firstChild.style.animation = "leave-page 0.5s forwards";

    let newTimeout = setTimeout(() => {
      setPosition(newPosition);
      container.current.firstChild.style.animation = "";
    }, 500);
    setBeforeTimeout(newTimeout);
  }

  function handleMovement(e) {
    let newMovement = touchMove;
    newMovement.initial = e.pageY || e.changedTouches[0].pageY;
    setTouchMove(newMovement);
  }

  function handleEndMovement(e) {
    let newTouch = touchMove;

    let newMovement;

    newTouch.end = e.pageY || e.changedTouches[0].pageY;

    setTouchMove(newTouch);

    let movement = touchMove.end - touchMove.initial;

    if (movement < -80) {
      newMovement = position === children.length - 1 ? 0 : position + 1;
      leavePage(newMovement);
    } else if (movement > 80) {
      newMovement = position === 0 ? children.length - 1 : position - 1;
      leavePage(newMovement);
    }
  }

  return (
    <div
      ref={container}
      onTouchStart={handleMovement}
      onTouchEnd={handleEndMovement}
      onMouseDown={handleMovement}
      onMouseUp={handleEndMovement}
    >
      {children[position]}

      <section>
        {children.map((element, index) => (
          <span
            style={position === index ? { opacity: 1 } : {}}
            onClick={() => leavePage(index)}
            key={index}
          />
        ))}
      </section>

      <style jsx>{`
        div {
          width: 100%;
          height: 100%;
        }
        section {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          top: 0;
          right: 0;
          height: 100%;
          animation-name: intro;
          animation-duration: 500ms;
        }
        span {
          width: 10px;
          height: 10px;
          background-color: var(--blue-color);
          border-radius: 100%;
          cursor: pointer;
          margin: 1rem;
          opacity: 0.5;
          transition: all 300ms;
        }
        span:hover {
          opacity: 1;
        }

        @keyframes intro {
          from {
            right: -20px;
          }
          to {
            right: 0;
          }
        }

        @media screen and (max-width: 500px) {
          section {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollVertical;
