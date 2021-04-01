import React from "react";
import ProjectCard from "../Project/ProjectCard";

const ProjectsTabs = ({ title, description, projects }) => {
  return (
    <div>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
      <section>
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            img={item.img}
            bgPosition={item.bgPosition}
            description={item.description}
            stack={item.stack}
          />
        ))}
      </section>
      <style jsx>{`
        div {
          display: flex;
          height: 100%;
          padding: 50px 25px 0 0;
          ${title}
        }
        article,
        section {
          display: flex;
          flex-flow: column;
          width: 50%;
          height: 100%;
        }
        article {
          justify-content: center;
          padding: 0 2.5rem;
        }
        p {
          margin-top: 0;
        }

        h1,
        p {
          animation: in-text 300ms;
        }

        section :global(section) {
          animation: in-projects 500ms;
        }

        section :global(section:last-child) {
          animation: in-projects 700ms;
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

        @keyframes in-projects {
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
            padding: 0 1rem 50px;
          }
          article {
            display: none;
          }
          section {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsTabs;
