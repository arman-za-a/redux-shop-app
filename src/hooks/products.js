import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGetProducts } from "../toolkits/products";
import { countCartProductQuantity } from "../helpers/cart";
import useCart from "./cart";
const useProducts = (options = { canFetch: false }) => {
    const { canFetch } = options;
    const { data, ...productsState } = useSelector(state => state.products);
    const dispatch = useDispatch();
    const { cart } = useCart();
    useEffect(() => {
        if (canFetch) {
            dispatch(fetchGetProducts());
        };
    }, []);
    const derivedProducts = data?.map(product => ({ ...product, quantity: countCartProductQuantity(cart.products, product.id) }));
    return { ...productsState, products: derivedProducts };
};
const useProduct = () => {
    const { productId } = useParams();
    const { products, ...productsState } = useProducts();
    const product = products?.find(product => product.id === +productId);
    return { ...productsState,  product };
};
export { useProducts, useProduct };