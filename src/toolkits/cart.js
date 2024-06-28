import { createSlice } from "@reduxjs/toolkit";
const initialCart = { products: [], isCheckedout: false };
const cartSlice = createSlice({
    name: "cart",
    initialState: initialCart,
    reducers: {
        productAdded: (cart, action) => {
            const { product } = action.payload;
            cart.products.push({ ...product, quantity: 1 });
            cart.isCheckedout = false; 
        },
        productDeleted: (cart, action) => {
            const { id } = action.payload;
            cart.products = cart.products.filter(product => product.id !== id);
        },
        productIncreased: (cart, action) => {
            const { id } = action.payload;
            const product = cart.products.find(product => product.id === id);
            product.quantity += 1;
        },
        productDecreased: (cart, action) => {
            const { id } = action.payload;
            const product = cart.products.find(product => product.id === id);
            product.quantity -= 1;
        },
        cartCleared: cart => {
            cart.products = [];
        },
        cartCheckouted: cart => {
            cart.products = [];
            cart.isCheckedout = true;
        }
    }
});
export default cartSlice.reducer;
export const cartActions = cartSlice.actions;