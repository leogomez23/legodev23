import React, { useEffect, useRef, useState } from "react";

const ScrollVertical = ({ children }) => {
  const [position, setPosition] = useState(0);

  const [beforeTimeout, setBeforeTimeout] = useState(0);
  const [beforeWheelTimeout, setBeforeWheelTimeout] = useState(0);

  const [touchMove, setTouchMove] = useState({
    initial: 0,
    end: 0,
  });

  const [wheelMovement, setWheelMovement] = useState(0);

  const container = useRef(null);

  useEffect(() => {}, []);

  function movementPage(newPosition, newStep) {
    clearTimeout(beforeTimeout);

    let itemsLength = children.length - 1;

    let newMovement;

    if (newPosition !== position || newStep) {
      container.current.firstChild.style.animation = "leave-page 0.3s forwards";
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
    newMovement.initial = e.pageY || e.changedTouches[0].pageY;
    setTouchMove(newMovement);
  }

  function handleEndMovement(e) {
    let newTouch = touchMove;

    newTouch.end = e.pageY || e.changedTouches[0].pageY;

    setTouchMove(newTouch);

    let movement = touchMove.end - touchMove.initial;

    if (movement < -80) {
      movementPage(null, "previous");
    } else if (movement > 80) {
      movementPage(null, "next");
    }
  }

  function handleWheel(e) {
    clearTimeout(beforeWheelTimeout);

    setWheelMovement(wheelMovement + e.deltaY);

    let newTimeout = setTimeout(() => {
      if (wheelMovement > 0) {
        movementPage(null, "previous");
      } else if (wheelMovement < 0) {
        movementPage(null, "next");
      }
      setWheelMovement(0);
    }, 100);

    setBeforeWheelTimeout(newTimeout);
  }

  return (
    <div
      ref={container}
      onTouchStart={handleMovement}
      onTouchEnd={handleEndMovement}
      onMouseDown={handleMovement}
      onMouseUp={handleEndMovement}
      onWheel={handleWheel}
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
