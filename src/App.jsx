import React from "react";
import Header from "./Header";
import SelfInfo from "./SelfInfo";
import styles from "./App.module.css";
import About from "./About";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <SelfInfo />
            <About />
        </div>
    );
}

export default App;
