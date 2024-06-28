import React, { memo } from "react";
import styles from "../styles/Product.module.css";
import trash from "../assets/trash.svg";
import useCart from "../hooks/cart";
import { Link } from "react-router-dom";
import { shortenText } from "../utils/string";
const Product = ({ product }) => {
    const { id, image, title, price, quantity } = product;
    const { addProduct, deleteProduct, decreaseProduct, increaseProduct } = useCart();
    let buttons;
    if (quantity > 0) {
        let onDecrease, buttonInnerJSX;
        if (quantity > 1) {
            onDecrease = () => decreaseProduct(id); 
            buttonInnerJSX = "-";
        } else {
            onDecrease = () => deleteProduct(id); 
            buttonInnerJSX = <img className={styles.trash} src={trash} />;
        } 
        buttons = (
            <div className={styles.buttonsContainer}>
                <button className={styles.changeCart} onClick={onDecrease}>{buttonInnerJSX}</button>
                <span className={styles.count}>{quantity}</span>
                <button className={styles.changeCart} onClick={() => increaseProduct(id)}>+</button>
            </div>
        );            
    } else {
        buttons = <button className={styles.addCart} onClick={() => addProduct(product)}>Add to Cart</button>;
    }
    return (
        <div className={styles.product}>
            <img className={styles.image} src={image} />
            <div className={styles.information}>
                <h3 className={styles.title}>{shortenText(title)}</h3>
                <p className={styles.price}>{price} $</p>
                <div className={styles.linkContainer}>
                    <Link className={styles.link} to={`/products/${id}`}>Details</Link>
                    {buttons}
                </div>
            </div>
        </div>
    );
};
export default memo(Product);