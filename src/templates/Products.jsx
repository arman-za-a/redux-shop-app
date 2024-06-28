import React from "react";
import styles from "../styles/Products.module.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Product from "../components/Product";
import { useProducts } from "../hooks/products";
const Products = ({ list }) => {
    const { isLoading, error } = useProducts();
    return (
        <section className={styles.container}>
            {isLoading ? <Loading /> : error ? <Error text={error} />: (
                <div className={styles.products}>
                    {list.map(product => <Product key={product.id} product={product} />)}
                </div>
            )}
        </section>   
    );
};
export default Products;