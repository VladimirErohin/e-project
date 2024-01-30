import React from 'react';
import styles from "./Header.module.scss";
import Button from "../button/Button";
import Popup from "../popup/Popup";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div>Icon</div>
                    <div className={styles.menu}>
                        <ul>
                            <li>Info</li>
                            <li>Projects</li>
                            <li>Weather</li>
                            <li>Language</li>
                        </ul>
                    </div>
                    <Button name="Login"/>
                    <Popup/>
                </nav>
            </div>
        </div>
    );
};

export default Header;