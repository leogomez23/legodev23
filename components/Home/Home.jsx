import React from "react";
import ScrollVertical from "../Scroll/ScrollVertical";

const Home = () => {
  return (
    <main>
      <ScrollVertical>
        <h1>Home</h1>
        <p>Home 2</p>
        <h2>Home 3</h2>
      </ScrollVertical>
      <style jsx>{`
        main {
          display: flex;
          height: 100%;
        }
      `}</style>
    </main>
  );
};

export default Home;
