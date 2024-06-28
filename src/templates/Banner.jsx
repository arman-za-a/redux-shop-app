import React from "react";
import styles from "../styles/Banner.module.css";
import Accordion from "../components/Accordion";
import Offcanvas from "../components/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useOffcanvas } from "../hooks/visibility";
import { categoryOptions } from "../data/products";
const Banner = ({ onChangeCategory }) => {
    const { isOffcanvasVisible, showOffcanvas, hideOffcanvas } = useOffcanvas();
    return (
        <section>
            <Accordion />
            <div className={styles.selectMenuContainer}>
                <div className={styles.selectContainer}>
                    <select className={styles.select} onChange={onChangeCategory}>
                        {categoryOptions.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
                    </select>
                    <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
                </div>
                <button className={styles.button} onClick={showOffcanvas}>Menu</button>
            </div>
            <Offcanvas isVisible={isOffcanvasVisible} onClick={event => event.stopPropagation()} onHide={hideOffcanvas} />
        </section>
    );
};
export default Banner;