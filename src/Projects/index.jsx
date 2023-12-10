import React, { useState } from "react";
import styles from "./component.module.css";
import acceptanceImgOne from "../img/acceptanceOne.jpg";
import acceptanceImgTwo from "../img/acceptanceTwo.jpg";
import acceptanceImgThree from "../img/acceptanceThree.jpg";
import clientImgOne from "../img/clientOne.jpg";
import clientImgTwo from "../img/clientTwo.jpg";
import Slider from "../Slider";

const builderImgList = [acceptanceImgOne, acceptanceImgTwo, acceptanceImgThree];
const customerImgList = [clientImgOne, clientImgTwo];

function Projects() {
    return (
        <section className={styles.wrapper}>
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
                <Slider imgList={builderImgList} />
            </div>
            <div className={styles.acceptanceBlock}>
                <Slider imgList={customerImgList} />
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
        </section>
    );
}
export default Projects;
