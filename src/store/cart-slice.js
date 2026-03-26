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
        return (
          item.id === newItem.id
        )
      })

      if (itemExists) {
        itemExists.quantity++;
        itemExists.totalPrice += newItem.price;
      } 
      else {
        state.groceryShoppingList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
          category: newItem.category,
          source: newItem.source
        })
      }

      state.totalQuantity++
    },

    removeFromCart (state, action) {
      const id = action.payload

      const itemExists =  state.groceryShoppingList.find((item) => {
        return (
          item.id === id
        )
      })

      if (itemExists.quantity === 1) {
        state.groceryShoppingList.filter((item) => {
          return (
            item.id !== id 
          )
        })
      } else {
          itemExists.quantity--;
          itemExists.totalPrice -=itemExists.price;
       
      }
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice

