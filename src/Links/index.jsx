import React from "react";
import styles from "./component.module.css";
import linkedin from "../img/linkedin.svg";
import github from "../img/github.svg";

function Links() {
    return (
        <div className={styles.wrapper}>
            <a>
                <img src={linkedin}></img>
            </a>
            <a>
                <img src={github}></img>
            </a>
        </div>
    );
}
export default Links;
