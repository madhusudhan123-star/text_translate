"use client";
import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react';
import { IoMdClose } from "react-icons/io";


const Navbar = ({ onMobileMenuToggle }) => {
    const [togglemenu, setTogglemenu] = useState(false)
    const handleToggle = () => {
        const newToggleState = !togglemenu;
        setTogglemenu(newToggleState);
        onMobileMenuToggle(newToggleState);
    };

    useEffect(() => {
        if (togglemenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [togglemenu]);

    return (
        <div>
            <div className='flex justify-between text-xl pt-5 xsm:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex  '>
                <div className=' font-extrabold'>
                    <h1><a href='/'>UPG口ADE<br />ENGलिSH</a></h1>
                </div>
                <div className='flex gap-20 '>
                    <p> <a href="/product">Start Pratice</a></p>
                    <p><a href="/about">About developer</a></p>
                    <p><a href="/contact">Contact</a></p>

                </div>
            </div>
            <div className='xsm:block sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
                <div className='flex justify-between text-xl pt-5'>
                    <div className='font-extrabold'>
                        <h1><a href='/'>UPG口ADE<br />ENGलिSH</a></h1>

                    </div>
                    <button
                        onClick={handleToggle}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <Menu className="h-6 text-black w-6" />
                    </button>
                    {togglemenu && (
                        <div className="fixed w-screen h-screen left-0 top-0 overflow-hidden bg-[#1A1A1A] rounded-lg p-4">
                            <div className='w-screen flex justify-between items-start'>
                                <div className='text-[#FFE32B] leading-relaxed text-[20px] font-extrabold'>
                                    <h1>UPG口ADE<br />
                                        ENGलिSH</h1>
                                </div>
                                <button
                                    onClick={handleToggle}
                                    className="inline-flex items-center mr-24 text-white justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                >
                                    <IoMdClose className="h-6 w-6" />
                                </button>
                            </div>
                            <div className='text-[#FFE32B] w-screen h-full leading-relaxed mt-10 text-[50px]'>
                                <p><a href="/product">START PRACTICE </a></p>
                                <p><a href="/about"> ABOUT DEVELOPER </a></p>
                                <p><a href="/contact">CONTACT</a></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar