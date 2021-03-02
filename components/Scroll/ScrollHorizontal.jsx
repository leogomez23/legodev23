import React, { useEffect, useRef, useState } from "react";

// transform: translate(-50%) scale(0.5);

const ScrollHorizontal = ({ children }) => {
  const [position, setPosition] = useState(0);

  const [beforeTimeout, setBeforeTimeout] = useState(0);

  const [touchMove, setTouchMove] = useState({
    initial: 0,
    end: 0,
  });

  const container = useRef(null);

  function movementPage(newPosition, newStep) {
    clearTimeout(beforeTimeout);

    let itemsLength = children.length - 1;

    let newMovement;

    if (newPosition !== position || newStep) {
      container.current.firstChild.style.animation =
        "in-out-element 0.3s forwards";
    }

    let newTimeout = setTimeout(() => {
      if (newPosition || newPosition === 0) {
        setPosition(newPosition);
      } else if (newStep === "next") {
        newMovement = position === 0 ? itemsLength : position - 1;
        setPosition(newMovement);
      } else if (newStep === "previous") {
        newMovement = position === itemsLength ? 0 : position + 1;
        setPosition(newMovement);
      }
      container.current.firstChild.style.animation = "";
    }, 300);
    setBeforeTimeout(newTimeout);
  }

  function handleMovement(e) {
    let newMovement = touchMove;
    newMovement.initial = e.pageX || e.changedTouches[0].pageX;
    setTouchMove(newMovement);
  }

  function handleEndMovement(e) {
    let newTouch = touchMove;

    newTouch.end = e.pageX || e.changedTouches[0].pageX;

    setTouchMove(newTouch);

    let movement = touchMove.end - touchMove.initial;

    if (movement < -80) {
      movementPage(null, "previous");
    } else if (movement > 80) {
      movementPage(null, "next");
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
            onClick={() => movementPage(index)}
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
          bottom: 0;
          width: 100%;
          animation-name: intro;
          animation-duration: 500ms;
        }
        span {
          display: block;
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
            bottom: -20px;
            opacity: 0;
          }
          to {
            bottom: 0;
            opacity: 1;
          }
        }
      `}</style>
      <style jsx global>{`
        @keyframes in-out-element {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollHorizontal;
