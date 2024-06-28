import React, { useState } from "react";
import styles from "../styles/SliderButton.module.css";
import Toolip from "./Toolip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToolip } from "../hooks/visibility";
const SliderButton = ({ name, icon, isActive, onClick }) => {
    const { isToolipVisible, showToolip, hideToolip } = useToolip();
    return (
        <div className={styles.buttonContainer}>
            <button 
                className={`${styles.button} ${styles[isActive ? "active" : "deactive"]}`} 
                onClick={onClick} 
                onMouseEnter={showToolip} 
                onMouseLeave={hideToolip}
            >
                <FontAwesomeIcon icon={icon} className={styles.icon} />
            </button>
            <Toolip isVisible={isToolipVisible} text={name} />
        </div>
    );
};
export default SliderButton;