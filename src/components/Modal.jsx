import React from "react";
import styles from "../styles/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ isVisible, onClick, onHide }) => {
    let screenStyle, modalStyle;
    if (isVisible) {
        screenStyle = "dark"; 
        modalStyle = "shown";
    }
    else {
        screenStyle = "light"; 
        modalStyle = "hidden";
    }
    return (
        <section className={`${styles.screen} ${styles[screenStyle]}`} onClick={onHide}>
            <div className={`${styles.modal} ${styles[modalStyle]}`} onClick={onClick}>
                <FontAwesomeIcon icon={faTimes} className={styles.icon} onClick={onHide} />
                <h2>Wellcome to Shop</h2>
                <button className={styles.button} onClick={onHide}>close</button>
            </div>    
        </section>
    );
};
export default Modal;