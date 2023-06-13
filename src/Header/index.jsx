import React from "react";
import styles from "./component.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <strong>Iurii.dev</strong>
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
