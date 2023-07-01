"use client"
import React from 'react'
import { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri"
const cart = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className='tablet:flex justify-between  w-[1000px] mx-auto mt-20'>
        <div>
          <h1 className='text-3xl text-black font-bold'>Shopping Cart</h1>
          <div className=' flex hover:shadow-lg tablet:w-[800px] mobile:w-[600px] gap-5 mt-5 '>
            <div>
              <img className='w-[200px]' src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png" />
            </div>

            <div className='space-y-2'>
              <h1 className='text-xl '>Brushed Raglan Sweatshirt</h1>
              <p className='text-gray-400 text-xl'>Sweater</p>
              <h2 className='text-lg text-gray-500  '>XS Size</h2>
              <h1 className='font-bold'>Delivery Estimation</h1>


              <h1 className='text-yellow-500 font-bold mt-2'>5 Working Days</h1>
              <h1 className='font-bold text-xl mt-3'>$195.00</h1>
            </div>
            <div> <RiDeleteBin6Line className="text-2xl ml-44 " />
              <div className='flex space-x-4 ml-16 mt-32'>
                <button onClick={increment} className='text-2xl  rounded-full w-10 h-10 shadow-lg'>+</button>
                <p className='text-xl mt-2'> {count}</p>
                <button onClick={decrement} className='text-2xl  rounded-full w-10 h-10 shadow-lg'>-</button>
              </div>
            </div>
          </div>
        </div>
        <div className=' mobile:w-[230px]'>
          <h1 className='text-2xl font-bold'>Order Summary</h1>

          <div className='flex justify-between mt-5' >
            <p>Quantity</p>
            <p>1 Product/s</p>
          </div>
          <div className='flex justify-between mt-3'  >
            <p>Price</p>
            <p>$75</p>
          </div>
          <button className='bg-black text-white w-[240px] text-center py-2 font-semibold mt-5'> Process to Checkout</button>
        </div>
      </div> 
    </>
  )
}
export default cart