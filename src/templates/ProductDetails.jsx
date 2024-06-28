import React from "react";
import styles from "../styles/ProductDetails.module.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";
const ProductDetails = ({ isLoading, error, product }) => {
    return (
        <section className={styles.container}>
            {isLoading ? <Loading /> : error ? <Error text={error} /> : (() => {
                const { image, title, description, category, price } = product;
                return (
                    <div className={styles.product}>
                        <img className={styles.image} src={image} />
                        <div className={styles.information}>
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.description}>{description}</p>
                            <span className={styles.categoryTitle}>Category: </span>
                            <span className={styles.category}>{category}</span>
                            <div className={styles.buttonsContainer}>
                                <span className={styles.price}>{price} $</span>
                                <Link to="/products" className={styles.back}>Back to Shop</Link>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </section> 
    );
};
export default ProductDetails;