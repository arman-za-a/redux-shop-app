import logger from "redux-logger";
import productsReducer from "../toolkits/products";
import cartReducer from "../toolkits/cart";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: { 
        products: productsReducer, 
        cart: cartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});
export default store;