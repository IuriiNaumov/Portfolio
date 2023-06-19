import React from "react";
import styles from "./component.module.css";
import htmlIcon from "../img/html.svg";
import cssIcon from "../img/css.svg";
import jsIcon from "../img/js.svg";
import tsIcon from "../img/typescript.svg";
import reactIcon from "../img/react.svg";

function TechStack() {
    return (
        <div className={styles.wrapper}>
            <strong>Tech Stack |</strong>
            <img src={htmlIcon}></img>
            <img src={cssIcon}></img>
            <img src={jsIcon}></img>
            <img src={tsIcon}></img>
            <img src={reactIcon}></img>
        </div>
    );
}
export default TechStack;
