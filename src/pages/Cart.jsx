import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const shoppingList = useSelector((state) => state.cart.groceryShoppingList)

  const allItems = shoppingList.map(() => {
    return (
      <div>u</div>
    )
  })

  return (
    <div>
      <section>
        <div>
          <h2>Cart List</h2>
          <h6>Keep track of items you want to buy</h6>
        </div>

        <div>

          <div>
            <h6>Total Items</h6>
            <h4>3</h4>
          </div>

          <div>
            <h6>Checked</h6>
            <h4>0</h4>
          </div>

          <div>
            <h6>Estimated Total</h6>
            <h4>24.77</h4>
          </div>

        </div>
      </section>
      
      <section>
        {allItems}
      </section>
    </div>
  )
}

export default Cart