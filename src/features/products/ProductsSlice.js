import { createSlice } from "@reduxjs/toolkit";
import {products} from "../../products.js"

const initialState = {
    items: products,
    filterItems: products,
    searchTerm: "",
    selectedCategory: "All",
};

// Search products and Search category
const filterProducts = (state) =>{
    return state.items.filter((product) =>{
        const matchSearch = product.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchCategory = state.selectedCategory === "All" || product.category === state.selectedCategory;
        return matchSearch && matchCategory;
    })
}


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        setSearchTerm: (state, action) =>{
            state.searchTerm = action.payload;
            state.filterItems = filterProducts(state)
        },
        setSelectedCategory: (state, action) =>{
            state.selectedCategory = action.payload;
            state.filterItems = filterProducts(state);
        },

        
    }
});

export  const {setSearchTerm, setSelectedCategory} = productsSlice.actions;
export default productsSlice.reducer;

