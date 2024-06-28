import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../toolkits/cart";
import { calculateCartTotalQuantity, calculateCartTotalPrice } from "../helpers/cart";
const { productAdded, productDeleted, productIncreased, productDecreased, cartCleared, cartCheckouted } = cartActions;
const useCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const addProduct = product => dispatch(productAdded({ product }));
    const deleteProduct = id => dispatch(productDeleted({ id }));
    const increaseProduct = id => dispatch(productIncreased({ id }));
    const decreaseProduct = id => dispatch(productDecreased({ id }));
    const clearCart = () => dispatch(cartCleared());
    const checkoutCart = () => dispatch(cartCheckouted());
    const { products } = cart;
    const totalQuantity = calculateCartTotalQuantity(products);
    const totalPrice = calculateCartTotalPrice(products).toFixed(2);
    const isEmpty = products.length === 0;
    return { 
        cart: { ...cart, totalQuantity, totalPrice, isEmpty },
        addProduct, 
        deleteProduct, 
        increaseProduct, 
        decreaseProduct, 
        clearCart, 
        checkoutCart 
    };
};
export default useCart;