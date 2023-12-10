import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.wrapper}>
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
