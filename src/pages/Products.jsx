import React from 'react'
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import groceries from '../components/data';
import SingleProduct from '../components/SingleProduct';

const Products = () => {

  const allProducts = groceries.map((item, index) => {
    return (
      <SingleProduct key={index}  item={item} />
    )
  } )

  return (
    <div className='pt-20'>
      <section >
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-bold'>Products</h2>
          <p className='text-gray-500 text-lg'>
            Explore available grocery items, search for what you need, and add products to your cart
          </p>
        </div>

        <div className='flex p-5 flex-wrap gap-5'>

          <div className='flex flex-1 p-6 rounded-2xl border border-gray-200 gap-3'>
            <div><MdProductionQuantityLimits className='text-blue-600 bg-blue-100 p-2 rounded-full' size={40} /></div>
            <div>
              <h5 className='text-gray-500'>Total Products</h5>
              <h3 className='text-2xl font-bold'>5</h3>
            </div>
          </div>

          <div className='flex flex-1 p-6 rounded-2xl border border-gray-200 gap-3'>
            <div><MdOutlinePriceChange size={40} className='text-green-600 bg-green-100 p-2 rounded-full' /></div>
            <div>
              <h5 className='text-gray-500'>Total Price</h5>
              <h3 className='text-2xl font-bold'>5</h3>
            </div>
          </div>

          <div className='flex flex-1 p-6 rounded-2xl border border-gray-200 gap-3'>
            <div><MdDiscount size={40} className='text-amber-400 bg-amber-100 p-2 rounded-full' /></div>
            <div>
              <h5 className='text-gray-500'>Available Coupones</h5>
              <h3 className='text-2xl font-bold'>5</h3>
            </div>
          </div>

        </div>
      </section>

      <section>
        <form className='flex gap-5 p-5' action="">
          <input className='p-2 rounded-lg bg-gray-200 w-full' type="text" placeholder='Search products, brands, or categories...'  />
          <button className='w-[10%] bg-black text-white min-w-20 font-semibold rounded-lg'>Search </button>
        </form>
      </section>

      <section>
        <div className='flex flex-wrap gap-5 justify-center'>
          {allProducts}
        </div>
      </section>
    </div>
  )
}

export default Products