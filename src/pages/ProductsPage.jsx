import React from "react";
import Products from "../templates/Products";
import { useProducts } from "../hooks/products";
const ProductsPage = () => {
    const { products } = useProducts();
    return (
        <main> 
            <Products list={products} />
        </main>
    );
};
export default ProductsPage;