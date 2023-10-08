import React from "react";
import styles from "./component.module.css";
import { PeopleCircle1Icon32Regular } from "@skbkontur/icons";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <strong className={styles.title}>Iurii.dev</strong>
                <PeopleCircle1Icon32Regular />
            </div>
            <div className={styles.menu}>
                <span>Home</span>
                <span>About</span>
                <span>Projects</span>
                <span>Contact</span>
            </div>
        </div>
    );
}
export default Header;
