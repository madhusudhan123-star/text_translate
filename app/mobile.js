"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MobileLayout = () => {
    const [rotate1, setRotate1] = useState(false);
    const [rotate2, setRotate2] = useState(false);
    const [rotate3, setRotate3] = useState(false);
    const [rotate4, setRotate4] = useState(false);
    const [rotate5, setRotate5] = useState(false);
    const rotatefun1 = () => {
        setRotate1(true)
    }
    const rotatefun2 = () => {
        setRotate2(true)
    }
    const rotatefun3 = () => {
        setRotate3(true)
    }
    const rotatefun4 = () => {
        setRotate4(true)
    }
    const rotatefun5 = () => {
        setRotate5(true)
    }
    return (
        <div className="bg-[#759bf8] h-full w-full p-4 overflow-x-hidden">
            <h1 className="text-2xl font-bold mb-4">UPG口ADE<br /> ENGलिSH</h1>
            <div className="grid grid-cols-2 relative gap-4">
                <div className="grid w-screen h-full " style={{ "gridTemplateColumns": "repeat(3, 1fr)", "backgroundColor": "#759bf8" }} >
                    <div onClick={rotatefun1} className={`relative ${rotate1 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile1.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun2} className={`relative ${rotate2 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile2.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun3} className={`relative ${rotate3 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile3.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun4} className={`relative ${rotate4 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile4.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun5} className={`relative ${rotate5 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile5.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun1} className={`relative ${rotate1 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile6.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun2} className={`relative ${rotate2 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile7.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun3} className={`relative ${rotate3 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile8.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun4} className={`relative ${rotate4 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile9.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun5} className={`relative ${rotate5 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile10.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun1} className={`relative ${rotate1 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile11.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun2} className={`relative ${rotate2 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile12.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun3} className={`relative ${rotate3 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile13.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun4} className={`relative ${rotate4 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile14.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun5} className={`relative ${rotate5 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr_mobile15.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='absolute top-0 left-0 w-full h-[50vh] flex flex-col justify-between glass-background px-10 pt-10'>
                        <h1 className='font-light text-white text-4xl text-center'>By Correct pronounce only you can speak better </h1>
                        <a href='/home'>
                            <buttom className="font-light text-black text-4xl  text-center glass-background px-10 py-5">Go to Home</buttom>
                        </a>
                        <div className='flex w-full '>
                            <div className='w-5 h-10'>
                                <Image src="/util/img/warning.svg" width={80} height={80} alt="arrow" className="arrow" />
                            </div>
                            <p className='font-light text-sm'>For the best experience, please use a laptop</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileLayout;
