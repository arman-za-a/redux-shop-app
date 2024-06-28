import React from "react";
import styles from "../styles/BackToProducts.module.css";
import useCart from "../hooks/cart";
import { Link } from "react-router-dom";
const BackToProducts = () => {
    const { cart } = useCart();
    let message, linkText;
    if (cart.isCheckedout) {
        message = "Checked out successfully";
        linkText = "Buy More";
    } else {
        message = "Want to Buy";
        linkText = "Go to Shop";
    }
    return (
        <section className={styles.reset}>
            <h3 className={styles.resetTitle}>{message}</h3>
            <Link to="/products" className={styles.resetLink}>{linkText}</Link>
        </section>
    );
};
export default BackToProducts;