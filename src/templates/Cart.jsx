import React from "react";
import styles from "../styles/Cart.module.css";
import CartProduct from "../components/CartProduct";
import useCart from "../hooks/cart";
const Cart = () => {
    const { cart: { products, totalQuantity, totalPrice }, clearCart, checkoutCart } = useCart();
    return (
        <section className={styles.container}>
            <div>
                {products.map(product => <CartProduct key={product.id} {...product} />)}
            </div>
            <div className={styles.total}>
                <p className={styles.resault}>
                    <span className={styles.title}>Total Items: </span>
                    {totalQuantity}
                </p>
                <p className={styles.resault}>
                    <span className={styles.title}>Total Payments: </span>
                    {totalPrice} $
                </p>
                <div className={styles.buttonsContainer}>
                    <button className={styles.clear} onClick={clearCart}>Clear</button>
                    <button className={styles.checkout} onClick={checkoutCart}>Checkout</button>
                </div>
            </div>
        </section>
    );
};
export default Cart;