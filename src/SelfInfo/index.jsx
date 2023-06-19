import React from "react";
import styles from "./component.module.css";
import Links from "../Links";
import TechStack from "../TechStack";

function SelfInfo() {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>
                Front-End React Developer <span>&#128640;</span>
            </span>
            <span className={styles.subtitle}>Hey I'm Iuri Naumov. A passionate Front-end React Developer based in Astana/Kazakhstan &#128205;</span>
            <React.Fragment>
                <Links />
            </React.Fragment>
            <React.Fragment>
                <TechStack />
            </React.Fragment>
        </div>
    );
}
export default SelfInfo;
