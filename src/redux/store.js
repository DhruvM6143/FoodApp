import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices/CartSlice';
import categorySlice from './Slices/categorySlice';
import SearchSlice from './Slices/SearchSlice';


const store = configureStore({
    reducer: {
        cart: CartSlice,
        category: categorySlice,
        search: SearchSlice
    }
})

export default store;