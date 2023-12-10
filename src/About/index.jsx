import React from "react";
import styles from "./component.module.css";
import vector from "../img/vector.svg";

function About() {
    return (
        <div className={styles.wrapper}>
            <img src={vector} className={styles.vector}></img>
            <span className={styles.title}>ABOUT ME</span>
            <div className={styles.blockWrapper}>
                <span className={styles.subtitle}>
                    Привет &#9996; <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passag
                </span>
            </div>
        </div>
    );
}
export default About;
