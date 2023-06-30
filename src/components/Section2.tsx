import Link from 'next/link'
import React from 'react'

const Section2 = () => {
    return (
        <div>
            <div className='grid grid-cols-2 px-20 mt-60 bg-[#fbfcff]'>
                <div className='relative mt-32'>
                    <div className='font-[800] text-[5.87rem] h-32 absolute text-[#212121] opacity-[0.07] z-10'>
                        <h1>Different from others</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-y-10'>
                        <div className='w-40'>
                            <h1 className='font-semibold '>Using Good Quality Materials</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className='w-40'>
                            <h1 className='font-semibold'>100% Handmade Products</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className='w-40'>
                            <h1 className='font-semibold'>Modern Fashion Design</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className='w-40'>
                            <h1 className='font-semibold'>Discount for Bulk Orders</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='absolute mt-[-7%] w-[40vw] ml-20 text-5xl font-bold text-[#212121]'>Unique and Authentic Vintage Designer Jewellery</h1>

                    <span className='flex mt-32 gap-10 mx-10'>

                        <img  className="w-[300px] h-[282px]" src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature.1118a2f3.png&w=384&q=75' />

                        <span>
                            <p className='text-md'>This piece is ethically crafted in our small family-owned workshop
                                in Peru with unmatched attention to detail and care.
                                The Natural color is the actua0
                                l natural color of the fiber, undyed and 100% traceable.</p>
                            <button className='bg-gray-950 text-white text-sm font-semibold tablet:justify-evenly justify-center flex  py-1 mt-5 w-60 tablet:w-32 px-2'>
                                <Link href="#">See All <br/>product</Link>
                            </button>
                        </span>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Section2
