import React from "react";
import Header from "./Header";
import SelfInfo from "./SelfInfo";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <SelfInfo />
        </div>
    );
}

export default App;
