import React from 'react';
import styles from "./Header.module.scss";
import Button from "../button/Button";

const Header = () => {
    return (
        <div className={[styles.header, styles.container].join(' ')}>
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

        </div>
    );
};

export default Header;