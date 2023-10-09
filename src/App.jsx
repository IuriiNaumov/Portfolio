import React from "react";
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.wrapper}>
                <Home />
                <AboutMe />
                <Projects />
            </div>
        </div>
    );
}

export default App;
