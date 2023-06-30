import React from 'react'
import { TiTick } from "react-icons/ti"
import { RiDeleteBin7Line } from "react-icons/ri"
const page = () => {
    return (
        <>
            <div className='tablet:w-[900px]  small:w-[700px] mx-auto tablet:flex small:flex mt-10'>
            <div>
<img src='emoji.jpg' className='w-[600px]'/>
                </div>
                <div className='mt-32'>
                    <h1 className='text-3xl text-gray-600 font-bold'>
                        Payment Successfull
                    </h1>
                    <p className='text-xs py-3'>Thank you for chosing Croply. Your custom reports will be generated within two business days</p>
                    <div className='flex py-5'>
                        <div className='w-40 h-2 bg-green-900 relative  '>
                            <button className='w-5 h-5 absolute top-[-6px] bg-green-900 rounded-full text-lg text-white pl-[2px]'><TiTick /></button>
                            <h1 className='text-xs mt-7'>Sites Selected</h1>
                        </div>
                        <div className='w-40 h-2 bg-green-100 relative  '>
                            <button className='w-5 h-5 absolute top-[-6px] bg-green-900 rounded-full text-lg text-white pl-[2px]'><TiTick /></button>
                            <h1 className='text-xs mt-7'>Payment Received</h1>
                        </div>
                        <div className=' relative  '>
                            <button className='w-5 h-5 absolute top-[-6px] bg-green-200 rounded-full text-sm text-white pl-[4px]'><RiDeleteBin7Line /></button>
                            <h1 className='text-xs mt-7'>Processing Report</h1>
                        </div>
                    </div>
                   <div className='mt-10'>
                    <button className='bg-green-800 font-semibold rounded-lg w-40 h-10 text-white'>New Site</button>
                    <button className='border-green-800 tablet:ml-5 font-semibold border-2 rounded-lg w-40 h-10 text-green-800'> Back Home</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default page