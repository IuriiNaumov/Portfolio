import React from "react";
import styles from "./component.module.css";
import { PeopleCircle1Icon32Regular } from "@skbkontur/icons";

function Header() {
    const handleClickScroll = (el) => {
        const element = document.getElementById(el);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                <strong className={styles.title}>Iurii.dev</strong>
                <PeopleCircle1Icon32Regular />
            </span>
            <span className={styles.menu}>
                <span onClick={() => handleClickScroll("home")}>Home</span>
                <span onClick={() => handleClickScroll("about")}>About</span>
                <span onClick={() => handleClickScroll("projects")}>Projects</span>
                <span onClick={() => handleClickScroll("contact")}>Contact</span>
            </span>
        </header>
    );
}
export default Header;
