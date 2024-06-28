import React from "react";
import Cart from "../templates/Cart";
import BackToProducts from "../templates/BackToProducts";
import useCart from "../hooks/cart";
const ShoppingCartPage = () => {
    const { cart } = useCart();
    return (
        <main>
            {cart.isEmpty ? <BackToProducts /> : <Cart />}
        </main>
    );
};
export default ShoppingCartPage;