import Head from "next/head";
import { useEffect, useState } from "react";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [closeIntro, setCloseIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCloseIntro(true);
    }, 8500);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Legodev23</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!closeIntro ? (
        <Intro />
      ) : (
        <>
          <NavBar />
        </>
      )}
    </div>
  );
}
