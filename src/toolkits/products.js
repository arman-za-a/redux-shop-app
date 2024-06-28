import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../services/products";
const initialProducts = { isLoading: true, data: null, error: "" };
export const fetchGetProducts = createAsyncThunk("products/fetchGetProducts", getProducts);
const productsSlice = createSlice({
    name: "products",
    initialState: initialProducts,
    extraReducers: builder => {
        builder.addCase(fetchGetProducts.pending, products => {
            products.isLoading = true;
        });
        builder.addCase(fetchGetProducts.fulfilled, (products, action) => {
            products.isLoading = false;
            products.data = action.payload;
        });
        builder.addCase(fetchGetProducts.rejected, (products, action) => {
            products.isLoading = false;
            products.error = action.error.message;
        });
    }
});
export default productsSlice.reducer;