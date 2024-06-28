import api from "../configs/axios";
const getProducts = async () => {
    try {
        const response = await api.get("/products");
        return response.data;
    } catch({ response }) {
        throw new Error(response ? `Error : ${response.status}` : "Error in loading products");
    };
};
export { getProducts };