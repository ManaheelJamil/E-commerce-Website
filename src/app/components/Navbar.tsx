import React from 'react'
import Link from 'next/link'
import { BsCartCheck } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
const Navbar = () => {
    return (
        <div className='grid grid-cols-4 gap-3 place-items-center mx-12 items-center mt-10 justify-center'>

            <div>
                <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75' />
            </div>
            <div className='link space-x-8 text-[1vw] tablet:block hidden '>
                <Link href="#">Female</Link>
                <Link href="#">Male</Link>
                <Link href="#">Kids</Link>
                <Link href="#">All Products</Link>
            </div>
            <div className='ml-44 border  tablet:ml-44  border-gray-400 rounded-md w-80 flex p-1'><CiSearch />  <input type='text' className='pl-1 text-xs' placeholder='What you looking for?' /></div>
            <div >
                <BsCartCheck className='tablet:block hidden ' />
            </div>
            <div><HiOutlineMenuAlt1 className='tablet:hidden block' /></div>
        </div>
    )
}

export default Navbar
