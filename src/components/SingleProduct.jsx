import React from 'react'

const SingleProduct = (props) => {
  return (
    <div className='flex w-1/4 min-w-75 border rounded-xl border-gray-300 flex-col gap-8 p-6'>

      <div className='flex gap-6'>
        <div className='w-20 h-20 border border-gray-200 rounded-xl bg-gray-200 p-2'><img className='object-cover w-full h-full'  src={props.item.image} alt={props.item.name}  /></div>

        <div className='flex flex-col gap-3'>
          <div className='flex flex-col'>
            <h3 className='text-2xl font-semibold'>{props.item.name}</h3>
            <h6 className='text-gray-500'>{props.item.source}</h6>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-green-500 font-semibold'>Ksh {props.item.price} /=</h2>
            <h6 className='px-2 rounded-lg w-fit border border-gray-300'>{props.item.category}</h6>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='p-2 w-3/4 bg-black text-white rounded-lg font-semibold'>Add to Cart</button>
      </div>

    </div>
  )
}

export default SingleProduct