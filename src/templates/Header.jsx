import React from "react";
import styles from "../styles/Header.module.css";
import shopCartLogo from "../assets/shop.svg";
import { Link } from "react-router-dom";
import useCart from "../hooks/cart";
const Header = () => {
    const { cart } = useCart();
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div>
                    <Link className={styles.productsLink} to="/">Home</Link>
                    <Link className={styles.productsLink} to="/products">Products</Link>
                </div>
                <div className={styles.logoContainer}>
                    <Link to="/cart" style={{height: "40px"}}>
                        <img src={shopCartLogo} />
                    </Link>
                    <span className={styles.counter}>{cart.totalQuantity}</span>
                </div>
            </nav>
        </header>
    );
};
export default Header;