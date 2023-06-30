"use client"
import React from 'react'
import Link from 'next/link'
import { BsCartCheck } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className='relative'>
                <div className='grid grid-cols-4 gap-3 place-items-center mobile:mx-10 mx-auto items-center mt-10 justify-center'>

                    <div>
                        <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75' />
                    </div>
                    <div className='link space-x-3  tablet:block hidden '>
                        <Link href="/female">Female</Link>
                        <Link href="/male">Male</Link>
                        <Link href="#">Kids</Link>
                        <Link href="#">All Products</Link>
                    </div>
                    <div className='ml-44 border tablet:block hidden tablet:ml-44  border-gray-400 rounded-md w-80 flex p-1'>  <input type='text' className='pl-1 text-xs' placeholder='What you looking for?' /></div>
                    <div >
                        <BsCartCheck className='tablet:block hidden  text-2xl' />
                    </div>
                    <div className={`i ${isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}`} onClick={toggleDropdown}>
                        <HiOutlineMenuAlt1 className='i tablet:hidden block absolute text-xl ml-20  mt-[-2%]' /></div>
                </div>
                {isOpen && (
                    <div className='dropdown-menu open  bg-white w-[90vw] h-[600px] ml-12 top-10 text-center absolute mx-auto hidden'>
                        <ul className='tablet:text-2xl mobile:text-sm space-y-5 pt-10 underline-offset-4 underline cursor-pointer'>
                            <li>   <Link href="/female">Female</Link></li>
                            <li> <Link href="/male">Male</Link></li>
                            <li>  <Link href="#">Kids</Link></li>
                            <li>  <Link href="#">All Products</Link></li>

                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar
