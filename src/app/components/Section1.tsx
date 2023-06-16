import React from 'react'

const Section1 = () => {
    return (
        <>
            <h1 className='text-blue-700 font-bold text-sm text-center mt-32'>PROMOTIONS</h1>
            <h1 className='text-4xl font-bold text-center'>Our Promotions Events</h1>
            <div className='flex justify-center gap-5 mt-10'>
                <div className=''>
                    <div className='bg-[#d6d6d8] w-[40vw] flex justify-between px-8 h-44 '>
                        <span className='pl-5'>
                            <h1 className='font-bold text-2xl mt-14 '>GET UP TO 60%</h1>
                            <h1 className='text-sm'>For the summer season</h1>
                        </span>
                        <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75' />
                    </div>
                    <div className='bg-[#212121] h-48 mt-5  text-white text-center pt-10'>
                        <h1 className='font-bold text-3xl'>GET 30% Off</h1>
                        <h1 className='text-sm mt-3'>USE PROMO CODE</h1>
                        <button className='bg-[#474747] py-1 px-10 rounded-md mt-1'>DINEWEEKEND SALE</button>
                    </div>
                </div>
                <div className='flex justify-between gap-5'>
                    <div className='bg-[#efe1c7] p-5 h-96  w-72'>
                        <p>Flex Sweatshirt</p>
                        <p className='flex '><p className='line-through'>$100.00</p> <h1 className='pl-5 font-bold'>$75.00</h1></p>
                        <img className=" h-72 mt-7 w-60" src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75' />
                    </div>
                    <div className='bg-[#d7d7d9]  p-5 h-96  w-72'>
                        <p>Flex Push Button Bomber</p>
                        <p className='flex '><p className='line-through'>$100.00</p> <h1 className='pl-5 font-bold'>$75.00</h1></p>
                        <img className=" h-72 mt-7 w-60" src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
