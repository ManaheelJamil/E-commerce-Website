"use client"
import React from 'react'
import { useState } from 'react';
const page = () => {
  const [count, setCount] = useState(1);
  const xs = () =>{
    alert("XS SIZE IS SELECTED")
  }
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className=' tablet:flex small:flex gap-5 tablet:justify-center mobile:ml-10 table:ml-0 py-20 '>
        <div>
          <img className='tablet:w-[100px] mobile:hidden small:hidden small:w-[50px]' src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png" />
        </div>
        <div>
          <img className='tablet:w-[500px] mobile:w-[200px]' src="https://cdn.sanity.io/images/dow10h3v/production/a6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png" />
        </div>
        <div>
          <h1 className='tablet:text-3xl small:text-2xl mobile:text-lg mobile:mt-0 tablet:mt-20'>Brushed Raglan Sweatshirt</h1>
          <p className='text-gray-400 text-xl'>Sweater</p>
          <h2 className='text-sm tablet:pt-5 font-bold'>SELECT SIZE</h2>
          <div className='flex justify-around w-56 tablet:py-4'>
            <div className='font-bold text-gray-600 w-8 h-8 text-xs rounded-full text-center cursor-pointer pt-2 hover:scale-125 duration-1000 hover:shadow-lg bg-white ' onClick={xs}>XS</div>
            <div className='font-bold text-gray-600 w-7 h-7 text-xs rounded-full text-center cursor-pointer pt-2 hover:scale-125 duration-1000 hover:shadow-lg bg-white onClick={s()}'>S</div>
            <div className='font-bold text-gray-600 w-7 h-7 text-xs rounded-full text-center cursor-pointer pt-2 hover:scale-125 duration-1000 hover:shadow-lg bg-white onClick={m()}'>M</div>
            <div className='font-bold text-gray-600 w-7 h-7 text-xs rounded-full text-center cursor-pointer pt-2 hover:scale-125 duration-1000 hover:shadow-lg bg-white onClick={l()}'>L</div>
            <div className='font-bold text-gray-600 w-7 h-7 text-xs rounded-full text-center cursor-pointer pt-2 hover:scale-125 duration-1000 hover:shadow-lg bg-white onClick={xl()}'>XL</div>
          </div>
          <div className='flex'>
            <h1 className='font-bold mt-4 '>Quantity:</h1>
            <div className='flex space-x-4 ml-5 '>
              <button onClick={increment} className='text-2xl  rounded-full w-10 h-10 shadow-lg'>+</button>
              <p className='text-xl mt-2'> {count}</p>
              <button onClick={decrement} className='text-2xl  rounded-full w-10 h-10 shadow-lg'>-</button>
            </div>
          </div>

          <div className='flex tablet:mt-10 mobile:mt-3 '>
            <button className='bg-black tablet:w-44 mobile:w-36  h-10 text-white text-center font-bold '> Add to Cart </button>
            <h1 className='font-bold tablet:text-2xl mobile:text-lg pl-5 '>$195.00</h1>
          </div>
        </div>

      </div>
      <div className='relative mt-10 tablet:ml-40 mobile:ml-5 tablet:w-[1000px] mobile:w-[80vw] '>
        <p className='tablet:text-9xl small:text-8xl mobile:text-6xl text-[#f2f3f7] font-extrabold '>Overview</p>
        <p className='absolute tablet:text-2xl mobile:text-lg font-bold top-[45%] '>Product Information</p>
        <br />
        <hr />
      </div>
      <div className='tablet:w-[900px] mobile:w-[400px] tablet:mx-auto mobile:ml-10 small:mx-auto'>
        <div className='tablet:flex small:flex  justify-between mt-10'>
          <h1 className='text-xl text-gray-500 font-bold'>PRODUCT DETAILS</h1>
          <p className='tablet:w-[550px] small:w-[500px]  mobile:text-sm mobile:w-[80vw] tracking-wide small:text-sm tablet:text-lg text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='tablet:flex small:flex mt-10'>
          <div>
            <h1 className='text-xl text-gray-500 font-bold'>PRODUCT CARE</h1>
          </div>
          <div className='tracking-wide tablet:ml-56 mobile:ml-10'>
            <ul className=' list-disc	'>
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default page
