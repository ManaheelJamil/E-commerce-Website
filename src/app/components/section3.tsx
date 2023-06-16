import React from 'react'

const section3 = () => {
    return (
        <div className='relative mt-40 text-center align-item-center justify-center '>
                <h1 className='font-[800] w-60 mx-[26vw] text-[7.87rem]  absolute text-[#212121] opacity-[0.07] '>Newsletter</h1>
            <div className='pt-5'>
                <h1 className='font-bold text-3xl'>Subscribe Our Newsletter</h1>
                <p className='text-gray-500 text-sm mt-5'>Get the latest information and promo offers directly</p>
            <div className='mt-8'>
                <input type='text ' placeholder='inut email address' className='border px-5 py-2 w-64 text-xs border-gray-500'/>
                <button className='bg-black text-white px-4 py-2 mt-1 ml-3 text-sm'>Get Started</button>
            </div>
            </div>
        </div>
    )
}

export default section3
