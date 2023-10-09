import React, { useState } from "react";
import styles from "./component.module.css";
import acceptanceImg from "../img/acceptance.jpg";
import clientImg from "../img/client.jpg";
import { ArrowCRightIcon32Regular, ArrowCLeftIcon32Regular } from "@skbkontur/icons";
import classNames from "classnames";

function Projects() {
    const [count, setCount] = useState(0);

    function plus() {
        setCount(1);
    }

    function minus() {
        setCount(0);
    }
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.projectsTitle}>PROJECTS</h1>
            <div className={styles.acceptanceBlock}>
                <div className={styles.text}>
                    <span className={styles.title}>Кабинет Застройщика</span>
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lore
                </div>
                <div className={styles.imgCarusel}>
                    <button className={classNames(styles.leftButton, count === 0 && styles.none)} onClick={() => minus()}>
                        <ArrowCLeftIcon32Regular fill="#333" className={styles.arrow} />
                    </button>
                    <img src={count === 0 ? acceptanceImg : clientImg} className={styles.img}></img>
                    <button className={styles.button} onClick={() => plus()}>
                        <ArrowCRightIcon32Regular fill="#333" className={styles.arrow} />
                    </button>
                </div>
            </div>
            <div className={styles.acceptanceBlock}>
                <img src={clientImg} className={styles.img}></img>
                <div className={styles.text}>
                    <span className={styles.title}>Кабинет Дольщика</span>
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsu
                </div>
            </div>
        </div>
    );
}
export default Projects;
