import React, { useState } from "react";
import Banner from "../templates/Banner";
import Products from "../templates/Products";
import Carousel from "../templates/Carousel";
import Modal from "../components/Modal";
import { useProducts } from "../hooks/products";
import { useModal } from "../hooks/visibility";
import { categoriseProducts } from "../helpers/products";
const HomePage = () => {
    const { products } = useProducts();
    const { isModalVisible, hideModal } = useModal();
    const [category, setCategory] = useState("all");
    return (
        <>
            <main>
                <Banner onChangeCategory={({ target }) => setCategory(target.value)} />
                <Products list={categoriseProducts(products, category)} />
                {products && <Carousel images={products.map(product => product.image)} />}
            </main>
            <Modal isVisible={isModalVisible} onClick={event => event.stopPropagation()} onHide={hideModal} />
        </>
    );
};
export default HomePage;