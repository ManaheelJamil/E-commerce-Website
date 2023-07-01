"use client"
import React, { FC } from 'react'
import { urlForImage } from '../../lib/image'
const kids: FC<{ item: any }> = ({ item }) => {
  return (
    <>
    <div>
      <img
        width={250}
        height={350}
        alt='product' src={urlForImage(item.image).url()} />
      <h1 className='font-bold text-lg'>{item.description}</h1>
      <h2 className='text-gray-500'>{item.title}</h2>
      <h1 className='font-bold text-lg'> ${item.price}</h1>
      <button  className='px-6 py-2 rounded-xl bg-pink-600 border-none text-white'>Add to Cart</button>
    </div>
    </>
  )
}

export default kids