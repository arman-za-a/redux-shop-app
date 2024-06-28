import React, { useRef } from "react";
import styles from "../styles/Accordion.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useAccordion } from "../hooks/visibility";
const Accordion = () => {
    const { isAccordionVisible, toggleAccordion } = useAccordion();
    const accordianBodyRef = useRef(null);
    let iconStyle, maxHeight;
    if (isAccordionVisible) {
        iconStyle = "up";
        maxHeight = accordianBodyRef.current.scrollHeight;
    } else {
        iconStyle = "down";
        maxHeight = 0;
    }
    return (
        <section className={styles.accordian}>
            <div className={styles.header}>
                <h3 className={styles.title}>About us</h3>
                <FontAwesomeIcon icon={faCaretDown} className={`${styles.icon} ${styles[iconStyle]}`} onClick={toggleAccordion} />
            </div>
            <div className={styles.body} style={{maxHeight: `${maxHeight}px`}} ref={accordianBodyRef}>
                <div className={styles.describe}>This is a fake shop with using fake API</div>
            </div>
        </section>
    );
};
export default Accordion; 