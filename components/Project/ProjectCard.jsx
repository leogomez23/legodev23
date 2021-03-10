import React, { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ img, description, stack, bgPosition, id }) => {
  const [modal, setModal] = useState(false);

  function handleClick() {
    setModal(true);
  }

  return (
    <>
      <section onClick={handleClick}>
        <div style={{ backgroundPositionY: bgPosition }}></div>
        <p>{description}</p>
        <div>
          {stack.map((element, index) => {
            return (
              <span style={element.style} key={index}>
                {element.name}
              </span>
            );
          })}
        </div>
        <style jsx>{`
          section {
            position: relative;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            height: 100%;
            max-width: 563px;
            max-height: 228px;
            margin: auto;
            border-radius: 15px;
            overflow: hidden;
            padding-bottom: 15px;
            cursor: pointer;
            transition: 300ms;
            color: var(--main-color);
          }
          section::before {
            content: "";
            position: absolute;
            background-color: var(--second-color);
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.3;
            transition: 300ms;
          }
          section:hover::before {
            opacity: 1;
          }
          div:first-child {
            width: 100%;
            height: 50%;
            background: ${img ? `url(${img})` : "#555"};
            background-size: cover;
            background-repeat: no-repeat;
          }
          p {
            width: 100%;
            padding: 0 1rem;
          }
          div:last-child {
            padding: 0 1rem;
          }
          span {
            padding: 0.2rem;
            margin: 0.2rem;
            border-radius: 4px;
            font-weight: 600;
          }
        `}</style>
      </section>
      {modal ? <ProjectModal id={id} setModal={setModal} /> : ""}
    </>
  );
};

export default ProjectCard;
