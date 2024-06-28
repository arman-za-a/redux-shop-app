import React from "react";
import styles from "../styles/Offcanvas.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Offcanvas = ({ isVisible, onClick, onHide }) => {
    let screenStyle, offcanvasStyle;
    if (isVisible) {
        screenStyle = "dark"; 
        offcanvasStyle = "shown"; 
    }
    else {
        screenStyle = "light"; 
        offcanvasStyle = "hidden"; 
    }
    return (
        <section className={`${styles.screen} ${styles[screenStyle]}`} onClick={onHide}>
            <div className={`${styles.offcanvas} ${styles[offcanvasStyle]}`} onClick={onClick}>
                    <div className={styles.titleContainer}>
                        <h2 >Fake Shop</h2>
                        <FontAwesomeIcon icon={faTimes} className={styles.icon} onClick={onHide} />
                    </div>
                    <ul>
                        <li className={styles.item}>
                            <Link to="/products">Products</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/cart">Shopping Cart</Link>
                        </li>
                    </ul>
            </div>
        </section>
    );
};
export default Offcanvas;