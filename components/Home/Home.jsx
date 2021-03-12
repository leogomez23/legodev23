import React from "react";
import ProjectCard from "../Project/ProjectCard";
import ScrollHorizontal from "../Scroll/ScrollHorizontal";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <div>
        <h1>
          I'm a <span>web developer</span>
        </h1>
        <h2>who never stops learning.</h2>
        <p>
          I enjoy <span>working</span> in a team & use agile development
          methodologies.
        </p>
        {/* <span>
          <p>
            Cuando tengo una propuesta de valor para mejorar el producto o
            servicio en el que esté trabajando intento comunicarlo.{" "}
          </p>
        </span> */}
      </div>
      <div>
        <ScrollHorizontal>
          <ProjectCard
            img="https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/pexels-negative-space-160107.jpg?alt=media&token=9971b8fb-79d9-4f10-8c1d-f870e92b65cf"
            bgPosition="80%"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt aliquam dolor vitae suscipit."
            stack={[
              {
                name: "React",
                style: {
                  backgroundColor: "#02b9de",
                  color: "#fff",
                },
              },
              {
                name: "Redux",
                style: {
                  backgroundColor: "#9c50de",
                  color: "#fff",
                },
              },
              {
                name: "Node.js",
                style: {
                  backgroundColor: "#0da33d",
                  color: "#fff",
                },
              },
            ]}
          />
          <ProjectCard
            img="https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/pexels-negative-space-160107.jpg?alt=media&token=9971b8fb-79d9-4f10-8c1d-f870e92b65cf"
            bgPosition="80%"
            description="Atli es una plataforma creada con el fin de ahorrar dinero, y comprar servicios sin necesidad de tarjeta de credito."
            stack={[
              {
                name: "React",
                style: {
                  backgroundColor: "#02b9de",
                  color: "#fff",
                },
              },
              {
                name: "Redux",
                style: {
                  backgroundColor: "#9c50de",
                  color: "#fff",
                },
              },
              {
                name: "Node.js",
                style: {
                  backgroundColor: "#0da33d",
                  color: "#fff",
                },
              },
            ]}
          />
        </ScrollHorizontal>
      </div>
      <div>
        <ScrollHorizontal>
          <Testimonial
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt aliquam dolor vitae suscipit."
            img="https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/avatar.png?alt=media&token=387e8205-fba3-4962-a496-c8fb9923a96b"
            author="Omar Espejel"
            work="CEO & fouder of Atli."
          />
          <Testimonial
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt aliquam dolor vitae suscipit."
            img="https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/avatar.png?alt=media&token=387e8205-fba3-4962-a496-c8fb9923a96b"
            author="Juan Meza"
            work="CEO & fouder of MJEY."
          />
        </ScrollHorizontal>
      </div>

      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          justify-items: center;
          align-items: center;
          height: 100%;
          padding: 50px 1em 1em;
        }

        h1 {
          margin-bottom: 0;
        }
        h2 {
          margin-top: 0;
        }

        h1 span,
        p span {
          color: var(--purple-color);
        }

        p {
          font-size: 1.5rem;
        }
        p span {
          font-size: 2rem;
          font-weight: 600;
        }

        div {
          width: 80%;
          height: 80%;
          position: relative;
        }

        div:first-child {
          grid-row-end: span 2;
          width: 90%;
          max-width: 320px;
          height: auto;
          animation: left-in 500ms;
        }
        div:nth-child(2n) {
          animation: right-in 500ms 300ms forwards;
          transform: translateX(50%);
          opacity: 0;
        }
        div:last-child {
          animation: right-in 500ms 500ms forwards;
          transform: translateX(50%);
          opacity: 0;
        }

        @keyframes left-in {
          from {
            opacity: 0;
            transform: translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translate(0);
          }
        }

        @keyframes right-in {
          from {
            opacity: 0;
            transform: translateX(50%);
          }
          to {
            opacity: 1;
            transform: translate(0);
          }
        }

        @media screen and (max-width: 760px) {
          main {
            grid-template-columns: 1fr 1fr;
          }
          div:last-child {
            display: none;
          }
          div:nth-child(2n) {
            grid-row-end: span 2;
          }
        }

        @media screen and (max-width: 500px) {
          main {
            grid-template-columns: 1fr;
            padding: 1em 1em 50px;
          }

          div {
            text-align: center;
          }

          div:nth-child(2n) {
            display: none;
          }

          div > span {
            display: none;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
