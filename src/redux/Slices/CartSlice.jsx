import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const exisitngItem = state.cart.find(item => item.id === action.payload.id)
            if (exisitngItem) {
                state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                return;
            }
            else {
                state.cart.push(action.payload)
            }

        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        incrementqty: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
        },

        decrementQty: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item)
        }
    }
})

export const { addToCart, removeFromCart, decrementQty, incrementqty } = cartSlice.actions;

export default cartSlice.reducer;