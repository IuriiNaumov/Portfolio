import React from "react";
import styles from "./component.module.css";
import { PeopleCircle1Icon32Regular } from "@skbkontur/icons";

function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.logo}>
                <strong className={styles.title}>Iurii.dev</strong>
                <PeopleCircle1Icon32Regular />
            </span>
            <span className={styles.menu}>
                <span>Home</span>
                <span>About</span>
                <span>Projects</span>
                <span>Contact</span>
            </span>
        </header>
    );
}
export default Header;
