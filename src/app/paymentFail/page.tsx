import React from 'react'

const page = () => {
    return (
        <>

            <div className=' laptop:w-[950px] tablet:w-[300px] laptop:justify-between small:justify-center mx-auto mt-20 grid laptop:grid-cols-2 tablet:justify-center tablet:grid-cols-1'>
                <div>
                    <img src='edit.jpg' className=' tablet:w-96 mobile:ml-5  mobile:w-72 rounded-xl' />
                </div>
                <div className=' tablet:ml-[-20%] laptop:ml-0 mobile:w-[300px] tablet:w-[500px] mobile:mt-5 tablet:mt-0 tablet:mt-20 laptop:mt-44 '>
                    <h1 className=' tablet:text-5xl mobile:text-3xl mobile:ml-5  text-gray-400 font-semibold'>Oops! Payment Failed</h1>
                    <p className='text-xl py-2 text-gray-500 mobile:ml-5 tablet:text-center'>Not Enough Credit To Pay</p>
                    <button className='  text-center mt-10 text-white mobile:ml-5  tablet:ml-32 w-44 h-12 rounded-full bg-green-600'><a href='#'>Go Back</a></button>
                </div>

            </div>
        </>
    )
}
export default page