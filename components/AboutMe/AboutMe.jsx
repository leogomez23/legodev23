import React from "react";
import ScrollVertical from "../Scroll/ScrollVertical";
import AboutMeTabs from "./AboutMeTabs";

const AboutMe = () => {
  return (
    <ScrollVertical>
      <AboutMeTabs img="https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/AboutMe%2Foffice-1209640_1920.jpg?alt=media&token=837fda3e-77ba-4f97-a615-7449134a2191">
        <p>
          Para mí es muy importante compartir lo que aprendo con mi equipo, y
          siempre mejorar nuestras habilidades.
        </p>
        <p>
          Intento ser lo más empático con los que están a mi alrededor, para
          siempre mantener un buen ambiente laboral.
        </p>
        <p>
          Busco mejorar mi productividad cada vez más y crear software de la
          mejor calidad posible.
        </p>
      </AboutMeTabs>
      <AboutMeTabs img="https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/AboutMe%2Fswimmers-79592_1920.jpg?alt=media&token=b4ae9a8a-e854-4bf5-9436-3b2ce01eaff0">
        <p>
          Utilizo mis tiempos libres para estudiar y hacer alguna actividad
          física.
        </p>
        <p>
          Mis principales temas de estudios son ciencias, tecnologías y
          crecimiento personal. Ver más{" "}
        </p>
        <p>
          Las actividades físicas que más me gustan practicar son deportes y
          ejercicios. Ver más
        </p>
      </AboutMeTabs>
      <AboutMeTabs img="https://firebasestorage.googleapis.com/v0/b/portafolio-8f8c4.appspot.com/o/AboutMe%2Fmaldives-1993704_1920.jpg?alt=media&token=eead2cb1-a307-496a-be8e-727c56e1755c">
        <p>
          Creo que las cosas que más resaltan de mi personalidad son mis ganas
          de aprender y enseñar, mi gusto por la música y mi acercamiento con la
          naturaleza.
        </p>
        <p>
          Cada cosa que aprendo me gusta compartirla con mis compañeros, amigos
          y familiares, esto me ayuda aprender más fácil y ayudó a los demás a
          aprender cosas nuevas que nos ayude a mejorar tanto a nivel personal
          como profesional.
        </p>
        <p>
          La mayoría de las actividades que hago al día las hago escuchando
          música, siento que la música es el mejor acompañante para un día
          productivo, si tuviera que definir mis gustos musicales es un poco
          difícil, ya que me gusta escuchar de todo.
        </p>
      </AboutMeTabs>
    </ScrollVertical>
  );
};

export default AboutMe;
