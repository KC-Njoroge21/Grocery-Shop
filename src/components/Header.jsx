import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggle = () => {
    setIsLoggedIn((prevState) => {
      return !prevState
    })
  }

  return (
    <header className='flex justify-between p-4 shadow-sm fixed w-full z-10 backdrop-blur-xl border border-gray-300 bg-white opacity-95  '>
      <div className='flex gap-2 items-center'>
        <IoCartOutline className='text-green-500' size={35}/>
        <h3 className='sm:text-3xl text-xl font-bold'>Grocery Shop</h3>
      </div>

      {
        isLoggedIn ? <Link to={'/cart'}>
         <button className='p-2 text-white font-semibold rounded-lg bg-black'>Cart</button>
      </Link> : null
      }

   
     
     <Link to={'/products'}>
      <button onClick={toggle} className='p-2 text-white cursor-pointer font-semibold rounded-lg bg-black'>{isLoggedIn ? "Exit" : "Shop"}</button>
    </Link>
    
  
    </header>
  )
}

export default Header