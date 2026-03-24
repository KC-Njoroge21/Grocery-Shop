import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between p-4 shadow-sm fixed w-full z-10 backdrop-blur-xl border border-gray-300 bg-white opacity-95  '>
      <div className='flex gap-2 items-center'>
        <IoCartOutline className='text-green-500' size={35}/>
        <h3 className='sm:text-3xl text-xl font-bold'>Grocery Shop</h3>
      </div>

    <Link to={'/products'}>
      <button className='p-2 text-white font-semibold rounded-lg bg-black'>Get Started</button>
    </Link>
    </header>
  )
}

export default Header