import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    groceryShoppingList : [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart (state, action) {
      const newItem = action.payload

      const itemExists = state.groceryShoppingList.find((item) => {
        item.id === newItem.id
      })

      if (itemExists) {
        state.groceryShoppingList.quantity++;
        state.groceryShoppingList.price +=state.groceryShoppingList.totalPrice;
      } 
      else {
        state.groceryShoppingList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity
        })
      }
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice

