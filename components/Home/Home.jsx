import React from "react";
import ScrollVertical from "../Scroll/ScrollVertical";
import ScrollHorizontal from "../Scroll/ScrollHorizontal";

const Home = () => {
  return (
    <main>
      <ScrollVertical>
        <h1>Home</h1>
        <div>
          <ScrollHorizontal>
            <h1>Prueba horizontal</h1>
            <h1>Prueba horizontal 2</h1>
            <h1>Prueba horizontal 3</h1>
          </ScrollHorizontal>
        </div>
        <h2>Home 3</h2>
      </ScrollVertical>
      <style jsx>{`
        main {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        div {
          position: relative;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid red;
        }
      `}</style>
    </main>
  );
};

export default Home;
