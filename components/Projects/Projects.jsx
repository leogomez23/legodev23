import React from "react";
import ScrollVertical from "../Scroll/ScrollVertical";
import ProjectsTabs from "./ProjectsTabs";

const Projects = () => {
  const PROJECTS = [
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/pexels-negative-space-160107.jpg?alt=media&token=9971b8fb-79d9-4f10-8c1d-f870e92b65cf",
      bgPosition: "80%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt aliquam dolor vitae suscipit.",
      stack: [
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
      ],
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/pexels-negative-space-160107.jpg?alt=media&token=9971b8fb-79d9-4f10-8c1d-f870e92b65cf",
      bgPosition: "80%",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt aliquam dolor vitae suscipit.",
      stack: [
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
      ],
    },
  ];
  return (
    <ScrollVertical>
      <ProjectsTabs
        title="Proyectos privados"
        description="Aca estan los proyectos en los que le e trabajado a terceros."
        projects={PROJECTS}
      />
      <ProjectsTabs
        title="Proyectos OpenSource"
        description="Crear y aportar a proyectos open source es util para seguir apoyando
            esta hermosa industria."
        projects={PROJECTS}
      />
      <ProjectsTabs
        title="Proyectos propios"
        description="Estos son peque&ntilde;os proyectos personales que e creado, algunos
            OpenSource otros privados."
        projects={PROJECTS}
      />
    </ScrollVertical>
  );
};

export default Projects;
