const categoriseProducts = (products, category) => products?.filter(product => category === "all" || category === product.category);
export { categoriseProducts };