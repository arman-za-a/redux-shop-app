import React from "react";
import styles from "../styles/Toolip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Toolip = ({ isVisible, text }) => (
    <div className={`${styles.toolip} ${styles[isVisible ? "shown" : "hidden"]}`}>
        {text}
        <div className={styles.caretContainer}>
            <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
        </div>
    </div>
);
export default Toolip;