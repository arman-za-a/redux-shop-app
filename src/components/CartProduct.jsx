import React, { memo } from "react";
import styles from "../styles/CartProduct.module.css";
import trash from "../assets/trash.svg";
import useCart from "../hooks/cart";
import { shortenText } from "../utils/string";
const CartProduct = ({ id, image, title, price, quantity }) => {
    const { deleteProduct, decreaseProduct, increaseProduct } = useCart();
    let onDecrease, buttonInnerJSX;
    if (quantity > 1) {
        onDecrease = () => decreaseProduct(id);
        buttonInnerJSX = "-";
    } else {
        onDecrease = () => deleteProduct(id);
        buttonInnerJSX = <img className={styles.trash} src={trash} />;
    };
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            <div className={styles.info}>
                <h3 className={styles.title}>{shortenText(title)}</h3>
                <span className={styles.price}>{price} $</span>
            </div>
            <span className={styles.count}>{quantity}</span>
            <div className={styles.buttonsContainer}>
                <button className={styles.changeCart} onClick={onDecrease}>{buttonInnerJSX}</button>
                <button className={styles.changeCart} onClick={() => increaseProduct(id)}>+</button>
            </div>
        </div>
    );
};
export default memo(CartProduct);