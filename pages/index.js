import Head from "next/head";
import { useEffect, useState } from "react";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";

import styles from "../styles/Home.module.css";

export default function Index() {
  const tabHome = "home";
  const tabAboutMe = "aboutMe";
  const tabProjects = "projects";

  const [tab, setTab] = useState(tabHome);
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
          <NavBar
            tab={tab}
            setTab={setTab}
            tabs={{
              home: tabHome,
              about: tabAboutMe,
              projects: tabProjects,
            }}
          />
          {tab === tabHome ? (
            <Home />
          ) : tab === tabAboutMe ? (
            <h1>About Me</h1>
          ) : (
            <h1>Projects</h1>
          )}
        </>
      )}
    </div>
  );
}
