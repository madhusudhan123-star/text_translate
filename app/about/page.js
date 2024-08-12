"use client";
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className='overflow-x-hidden'>
                <div className=' w-screen overflow-y-hidden h-screen pl-10 pr-16 bg-[#FFE32B]'>
                    <Navbar />
                    <div className='w-full h-full flex items-end justify-start cursor-default'>
                        <h1 className='font-bold text-4xl mb-32'>Meet Our Creater</h1>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <div
                        className="relative w-[30vw] h-[70vh] xsm:w-[100vw] sm:w-[100vw] md:w-[100vw] lg:w-[30vw] xl:w-[30vw] 2xl:w-[30vw] cursor-pointer overflow-hidden"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            src="/util/img/developer.jpg"
                            alt="Clare Devine"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 ${isHovered ? 'hidden' : 'block'} `}>
                            <h2 className="text-xl font-bold">Madhu Sudhan</h2>
                            <p className="text-sm">Developer</p>
                        </div>
                        <div
                            className={`absolute inset-x-0 bottom-0 top-0 bg-black text-white p-4 transition-transform duration-500 ease-in-out ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
                        >
                            <h2 className="text-xl font-bold mb-2">Madhu Sudhan</h2>
                            <p className="text-sm mb-2">Developer</p>
                            <p className="text-sm">
                                From boxing rings to coding bootcamps, my path has been anything but ordinary. As a former competitive boxer, I learned the value of discipline, resilience, and strategic thinking - skills that I now apply to tackle the most complex coding challenges. This unique background allows me to approach web development with a fighter's spirit and a coder's precision..
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default page