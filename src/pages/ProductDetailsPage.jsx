import React from "react";
import NotFoundPage from "./NotFoundPage";
import ProductDetails from "../templates/ProductDetails";
import { useProduct } from "../hooks/products";
const ProductDetailPage = () => {
    const { isLoading, error, product } = useProduct();
    if (!isLoading && !error && !product) {
        return <NotFoundPage />;
    };
    return (
        <main> 
            <ProductDetails isLoading={isLoading} error={error} product={product} />
        </main>
    ); 
};
export default ProductDetailPage;