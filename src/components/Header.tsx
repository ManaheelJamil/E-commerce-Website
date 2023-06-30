import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Header = () => {
    return (
        <>
            <div className='main-div grid tablet:grid-cols-2 grid-cols-1 mobile:ml-10 tablet:mx-28 mobile:mt-5 tablet:mt-14  m-auto '>
                <div className="left-side mt-16">
                    <button className='bg-[#e1edff] text-blue-600 font-bold py-2 px-4 rounded-md'>Sale 70%</button>
                    <h1 className='tablet:text-6xl mobile:text-4xl font-bold text-gray-950 mobile:mt-5 tablet:mt-14 '>An Industrial Take on Streetwear</h1>
                    <p className='text-gray-500 mobile:text-xs tablet:w-[50vw] mobile:mt-5 tablet:mt-10'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                    <button className='bg-gray-950 text-white font-semibold tablet:justify-evenly justify-center flex  py-2 mt-8 tablet:w-72 mobile:w-36 px-4'><AiOutlineShoppingCart className='mt-1 text-5xl mr-3 tablet:mt-3'/> <Link href="#">Start Shopping</Link></button>
                </div>
                <div className="right-side tablet:block hidden bg-[#ffece3] rounded-full h-[550px] w-[550px]">
                    <img width={600} className='absolute top-[14%] w-[600px] ' src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75' />
                </div>
            </div>
        </>
    )
}

export default Header
