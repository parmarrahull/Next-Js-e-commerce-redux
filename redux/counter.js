import { createSlice } from "@reduxjs/toolkit";

const cartData =
  typeof window !== "undefined" && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const cartCount =
  typeof window !== "undefined" &&
  localStorage.setItem(
    "cartCount",
    JSON.stringify(
      cartData.reduce(function (sum, current) {
        return sum + current.quantity;
      }, 0)
    )
  );

const cartTotal =
  typeof window !== "undefined" &&
  localStorage.setItem(
    "cartTotal",
    JSON.stringify(
      cartData.reduce(function (sum, current) {
        return sum + current.total;
      }, 0)
    )
  );

const initialCounterState = {
  counter: 0,
  cartItems: cartData,
  total: cartTotal,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,

  reducers: {
    addCartdata: (state, action) => {
      let cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex >= 0) {
        let qty = (state.cartItems[cartIndex].quantity += 1);
        state.cartItems[cartIndex].total *= qty;
      } else {
        let tempProduct = {
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        };
        state.cartItems.push(tempProduct);
      }
    },

    increment(state, action) {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[index].quantity += 1;
      state.cartItems[index].total =
        state.cartItems[index].quantity * state.cartItems[index].price;
    },

    decrement(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity -= 1;
        state.cartItems[index].total =
          state.cartItems[index].price * state.cartItems[index].quantity;
      }
    },

    removeCartItem: (state, action) => {
      let nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
