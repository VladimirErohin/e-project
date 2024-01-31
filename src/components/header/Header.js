import React from 'react';
import styles from "./Header.module.scss";
import Button from "../button/Button";
import Popup from "../popup/Popup";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div>Logo</div>
                    <div className={styles.menu}>
                        <ul>
                            <li>Info + <Popup/></li>
                            <li>Projects</li>
                            <li>Weather</li>
                            <li>Language</li>
                        </ul>
                    </div>
                    <Button name="Login"/>
                </nav>
            </div>
        </header>
    );
};

export default Header;