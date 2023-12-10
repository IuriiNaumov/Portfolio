import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment className={styles.App}>
      <Header />
      <main className={styles.wrapper}>
        <Home />
        <About />
        <Projects />
      </main>
    </React.Fragment>
  );
}

export default App;
