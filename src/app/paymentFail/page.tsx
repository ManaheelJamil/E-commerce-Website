import React from 'react'

const page = () => {
    return (
        <>

            <div className='paymentFail w-[950px] justify-between mx-auto mt-20 grid grid-cols-2'>
                <div>
                    <img src='edit.jpg' className='failImage w-96 rounded-xl' />
                </div>
                <div className='w-[480px] mt-44 '>
                    <h1 className='oops text-5xl text-gray-400 font-semibold'>Oops! Payment Failed</h1>
                    <p className='p text-xl py-2 text-gray-500 text-center'>Not Enough Credit To Pay</p>
                    <button className=' button text-center mt-10 text-white  ml-36 w-44 h-12 rounded-full bg-green-600'><a href='#'>Go Back</a></button>
                </div>

            </div>
        </>
    )
}
export default page