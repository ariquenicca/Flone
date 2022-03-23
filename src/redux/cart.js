import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            var foundItem = state.cartItems.find(
                (cartItem) => cartItem.id === item.id
            );
            if (foundItem) {
                const existingItems = state.cartItems.filter(
                    (item) => item.id !== foundItem.id
                );
                const incrementedItem = {
                    ...foundItem,
                    count: foundItem.count + 1,
                };
                state.cartItems = [...existingItems, incrementedItem];
            } else {
                state.cartItems = [...state.cartItems, { ...item, count: 1 }];
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        updateCartCount: (state, action) => {
            let id = action.payload.id;
            let value = parseInt(action.payload.value);
            console.log(value);

            state.cartItems = state.cartItems.map((item) =>
                item.id == id ? { ...item, count: value } : item
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart, updateCartCount } =
    cartSlice.actions;

export default cartSlice.reducer;
