import React from 'react';
import styles from "./Popup.module.scss";

const Popup = () => {
    return (
        <div className={styles.popup}>
       <ul>
           <li>Linkedin</li>
           <li>Github</li>
           <li>Telegram</li>
           <li>Email</li>
       </ul>
        </div>
    );
};

export default Popup;