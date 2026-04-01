import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'

const Cart = () => {

  const shoppingList = useSelector((state) => state.cart.groceryShoppingList)

  const totalQuantity =  useSelector((state) => state.cart.totalQuantity)

  const allItems = shoppingList.map((item, index) => {
    return (
     <CartProduct key={index}  item={item} />
    )
  })

  return (
    <div className='flex flex-col gap-5'>
      <section className='pt-20 flex flex-col gap-4'>
        <div className='flex flex-col p-4'>
          <h2 className='text-3xl font-bold'>Cart List</h2>
          <h6 className='text-gray-500'>Keep track of items you want to buy</h6>
        </div>

        <div className='flex min-w-75 flex-wrap border  rounded-xl border-gray-300 p-4 '>

          <div className='border-r w-20% flex flex-col border-gray-300 p-2 sm:p-4'>
            <h6 className='text-gray-500'>Total Items</h6>
            <h4 className='sm:text-3xl text-xl font-bold'>{totalQuantity}</h4>
          </div>

          <div className='border-r w-20% shrink flex flex-col p-2 border-gray-300 sm:p-4 '>
            <h6 className='text-gray-500'>Cuopon</h6>
            <h4 className='sm:text-3xl text-xl font-bold'>1</h4>
          </div>

          <div className=' w-60% shrink p-2 sm:p-4'>
            <h6 className='text-gray-500'> Total</h6>
            <h4 className='font-bold sm:text-3xl text-xl text-green-500'> 24.77 /=</h4>
          </div>

        </div>
      </section>
      
      <section className=''>
        <div className=' sm:p-8 flex flex-col gap-4'>
          {allItems}
        </div>
      </section>
    </div>
  )
}

export default Cart