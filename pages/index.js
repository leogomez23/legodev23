import Head from "next/head";
import { useEffect, useState } from "react";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe/AboutMe";

import styles from "../styles/Home.module.css";
import Projects from "../components/Projects/Projects";

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
          {tab === tabHome ? (
            <Home />
          ) : tab === tabAboutMe ? (
            <AboutMe />
          ) : (
            <Projects />
          )}
          <NavBar
            tab={tab}
            setTab={setTab}
            tabs={{
              home: tabHome,
              about: tabAboutMe,
              projects: tabProjects,
            }}
          />
        </>
      )}
    </div>
  );
}
