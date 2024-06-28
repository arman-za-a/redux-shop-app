import React from "react";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import NotFoundPage from "../pages/NotFoundPage";
const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductsPage /> },
    { path: "/products/:productId", element: <ProductDetailsPage /> },
    { path: "/cart", element: <ShoppingCartPage /> },
    { path: "*", element: <NotFoundPage /> },
];
export default routes;