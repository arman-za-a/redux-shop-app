const countCartProductQuantity = (products, id) => products.find(product => product.id === id)?.quantity || 0;
const calculateCartTotalQuantity = products =>  products.reduce((total, product) => total + product.quantity, 0);
const calculateCartTotalPrice = products => products.reduce((total, product) => total + product.quantity * product.price, 0);
export { countCartProductQuantity, calculateCartTotalQuantity, calculateCartTotalPrice };