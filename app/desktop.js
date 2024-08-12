"use client";
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

export default function Home() {
    const [meetup1, setMeetup1] = useState(true);
    const [meetup2, setMeetup2] = useState(true);
    const [meetup3, setMeetup3] = useState(true);
    const [meetup4, setMeetup4] = useState(true);
    const [meetup5, setMeetup5] = useState(true);
    const [rotate1, setRotate1] = useState(false);
    const [rotate2, setRotate2] = useState(false);
    const [rotate3, setRotate3] = useState(false);
    const [rotate4, setRotate4] = useState(false);
    const [rotate5, setRotate5] = useState(false);
    const [rotate6, setRotate6] = useState(false);
    const [rotate7, setRotate7] = useState(false);
    const [rotate8, setRotate8] = useState(false);
    const [rotate9, setRotate9] = useState(false);
    const [rotate10, setRotate10] = useState(false);
    const [rotate11, setRotate11] = useState(false);
    const [rotate12, setRotate12] = useState(false);
    const [rotate13, setRotate13] = useState(false);
    const [rotate14, setRotate14] = useState(false);
    const [rotate15, setRotate15] = useState(false);
    const [rotate16, setRotate16] = useState(false);
    const [rotate17, setRotate17] = useState(false);
    const [rotate18, setRotate18] = useState(false);
    const [rotate19, setRotate19] = useState(false);
    const [rotate20, setRotate20] = useState(false);
    const [rotate21, setRotate21] = useState(false);
    const [rotate22, setRotate22] = useState(false);
    const [rotate23, setRotate23] = useState(false);
    const [rotate25, setRotate25] = useState(false);
    const [rotate26, setRotate26] = useState(false);
    const [rotate27, setRotate27] = useState(false);
    const [rotate28, setRotate28] = useState(false);
    const [rotate29, setRotate29] = useState(false);
    const [rotate30, setRotate30] = useState(false);
    const [rotate31, setRotate31] = useState(false);
    const [rotate32, setRotate32] = useState(false);
    const [rotate33, setRotate33] = useState(false);
    const [rotate34, setRotate34] = useState(false);
    const [footerotate1, setFooterotate1] = useState(false);
    const [footerotate2, setFooterotate2] = useState(false);
    const [footerotate3, setFooterotate3] = useState(false);
    const [footerotate4, setFooterotate4] = useState(false);
    const [footerotate5, setFooterotate5] = useState(false);
    const [footerotate6, setFooterotate6] = useState(false);
    const [footerotate7, setFooterotate7] = useState(false);
    const [footerotate8, setFooterotate8] = useState(false);
    const [footerotate9, setFooterotate9] = useState(false);
    const [footerotate10, setFooterotate10] = useState(false);
    const [footerotate11, setFooterotate11] = useState(false);
    const [footerotate12, setFooterotate12] = useState(false);

    const [colorchange2, setColorchange2] = useState(false);
    const [colorchange, setColorchange] = useState(false);
    const [colorchange3, setColorchange3] = useState(false);
    const meetupfun1 = () => {
        setMeetup1(!meetup1);
    };
    const meetupfun2 = () => {
        setMeetup2(!meetup2);
    };
    const meetupfun3 = () => {
        setMeetup3(!meetup3)
    }
    const meetupfun4 = () => {
        setMeetup4(!meetup4)
    }
    const meetupfun5 = () => {
        setMeetup5(!meetup5)
    }
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
    const rotatefun6 = () => {
        setRotate6(true)
    }
    const rotatefun7 = () => {
        setRotate7(true)
    }
    const rotatefun8 = () => {
        setRotate8(true)
    }
    const rotatefun9 = () => {
        setRotate9(true)
    }
    const rotatefun10 = () => {
        setRotate10(true)
    }
    const rotatefun11 = () => {
        setRotate11(true)
    }
    const rotatefun12 = () => {
        setRotate12(true)
    }
    const rotatefun13 = () => {
        setRotate13(true)
    }
    const rotatefun14 = () => {
        setRotate14(true)
    }
    const rotatefun15 = () => {
        setRotate15(true)
    }
    const rotatefun16 = () => {
        setRotate16(true)
    }
    const rotatefun17 = () => {
        setRotate17(true)
    }
    const rotatefun18 = () => {
        setRotate18(true)
    }
    const rotatefun19 = () => {
        setRotate19(true)
    }
    const rotatefun20 = () => {
        setRotate20(true)
    }
    const rotatefun21 = () => {
        setRotate21(true)
    }
    const rotatefun22 = () => {
        setRotate22(true)
    }
    const rotatefun23 = () => {
        setRotate23(true)
    }
    const rotatefun25 = () => {
        setRotate25(true)
    }
    const rotatefun26 = () => {
        setRotate26(true)
    }
    const rotatefun27 = () => {
        setRotate27(true)
    }
    const rotatefun28 = () => {
        setRotate28(true)
    }
    const rotatefun29 = () => {
        setRotate29(true)
    }
    const rotatefun30 = () => {
        setRotate30(true)
    }
    const rotatefun31 = () => {
        setRotate31(true)
    }
    const rotatefun32 = () => {
        setRotate32(true)
    }
    const rotatefun33 = () => {
        setRotate33(true)
    }
    const rotatefun34 = () => {
        setRotate34(true)
    }
    const footerfunarr1 = () => {
        setFooterotate1(true)
    }
    const footerfunarr2 = () => {
        setFooterotate2(true)

    }
    const footerfunarr3 = () => {
        setFooterotate3(true)

    }
    const footerfunarr4 = () => {
        setFooterotate4(true)

    }
    const footerfunarr5 = () => {
        setFooterotate5(true)

    }
    const footerfunarr6 = () => {
        setFooterotate6(true)

    }
    const footerfunarr7 = () => {
        setFooterotate7(true)

    }
    const footerfunarr8 = () => {
        setFooterotate8(true)

    }
    const footerfunarr9 = () => {
        setFooterotate9(true)

    }
    const footerfunarr10 = () => {
        setFooterotate10(true)

    }
    const footerfunarr11 = () => {
        setFooterotate11(true)

    }
    const footerfunarr12 = () => {
        setFooterotate12(true)
    }
    const colorchanges = () => {
        setColorchange(!colorchange)
    }
    const colorchanges2 = () => {
        setColorchange2(!colorchange2)
    }
    const colorchanges3 = () => {
        setColorchange3(!colorchange3)
    }
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const rotationFactor = 0.1; // Adjust this value to control rotation speed
            const shapes = sectionRef.current.querySelectorAll('.rotate-shape');

            shapes.forEach((shape) => {
                const rotation = scrollPosition * rotationFactor;
                shape.style.transform = `rotate(${rotation}deg)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='h-full overflow-x-hidden bg-[#F7F7F7]'>
            <main main className="relative" >
                <div className="grid w-screen h-full " style={{ "gridTemplateColumns": "repeat(8, 1fr)", "backgroundColor": "#759bf8" }} >
                    <div className="w-25 h-25 flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold" style={{ "backgroundColor": "#FFE42B" }}>
                        <h1>UPG口ADE<br />ENGलिSH</h1>
                    </div>
                    <div onClick={rotatefun1} className={`relative ${rotate1 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr1.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onMouseOver={meetupfun1} className="relative ">
                        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup1 ? 'opacity-80' : 'opacity-0'}`} >
                            <Image
                                src="/util/img/arr2.svg"
                                layout="fill"
                                objectFit="cover"
                                alt="arrow"
                                className="meetup1"
                            />
                        </div>
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup1 ? 'opacity-0' : 'opacity-80'
                                }`}
                        >
                            <Image
                                src="/util/img/meetup1.jpeg"
                                layout="fill"
                                objectFit="cover"
                                alt="meetup"
                                className="meetup1"
                            />
                        </div>
                    </div>
                    <div onClick={rotatefun2} className={`relative ${rotate2 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr3.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />

                    </div>
                    <div onMouseOver={meetupfun2} className="relative ">
                        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup2 ? 'opacity-80' : 'opacity-0'}`} >
                            <Image
                                src="/util/img/arr4.svg"
                                layout="fill"
                                objectFit="cover"
                                alt="arrow"
                                className="meetup1"
                            />
                        </div>
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup2 ? 'opacity-0' : 'opacity-80'
                                }`}
                        >
                            <Image
                                src="/util/img/meetup2.jpeg"
                                layout="fill"
                                objectFit="cover"
                                alt="meetup"
                                className="meetup1"
                            />
                        </div>
                    </div>
                    <div onClick={rotatefun3} className={`relative ${rotate3 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr5.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun4} className={`relative ${rotate4 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr6.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun5} className={`relative ${rotate5 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr7.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div className="relative">
                        <Image src="/util/img/arr8.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow half-rotate2" />
                    </div>
                    <div onClick={rotatefun6} className={`relative ${rotate6 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr9.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun7} className={`relative ${rotate7 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr10.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun8} className={`relative ${rotate8 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr11.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun9} className={`relative ${rotate9 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr12.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun10} className={`relative ${rotate10 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr13.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun11} className={`relative ${rotate11 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr14.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun12} className={`relative ${rotate12 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr15.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onMouseOver={meetupfun4} className="relative ">
                        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup4 ? 'opacity-80' : 'opacity-0'}`} >
                            <Image
                                src="/util/img/arr16.svg"
                                layout="fill"
                                objectFit="cover"
                                alt="arrow"
                                className="meetup1"
                            />
                        </div>
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup4 ? 'opacity-0' : 'opacity-80'
                                }`}
                        >
                            <Image
                                src="/util/img/meetup4.jpeg"
                                layout="fill"
                                objectFit="cover"
                                alt="meetup"
                                className="meetup1"
                            />
                        </div>
                    </div>
                    <div onClick={rotatefun14} className={`relative ${rotate14 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr17.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun15} className={`relative ${rotate15 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr18.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun16} className={`relative ${rotate16 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr18.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun17} className={`relative ${rotate17 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr19.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun18} className={`relative ${rotate18 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr20.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun19} className={`relative ${rotate19 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr21.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun20} className={`relative ${rotate20 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr22.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun21} className={`relative ${rotate21 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr23.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun22} className={`relative ${rotate22 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr24.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun23} className={`relative ${rotate23 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr25.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div className='relative'>
                        <Image src="/util/img/arr26.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow half-rotate" />
                    </div>
                    <div onClick={rotatefun25} className={`relative ${rotate25 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr27.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun26} className={`relative ${rotate26 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr28.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun27} className={`relative ${rotate27 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr29.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onMouseOver={meetupfun3} className="relative ">
                        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup3 ? 'opacity-80' : 'opacity-0'}`} >
                            <Image
                                src="/util/img/arr30.svg"
                                layout="fill"
                                objectFit="cover"
                                alt="arrow"
                                className="meetup1"
                            />
                        </div>
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup3 ? 'opacity-0' : 'opacity-80'
                                }`}
                        >
                            <Image
                                src="/util/img/meetup3.jpeg"
                                layout="fill"
                                objectFit="cover"
                                alt="meetup"
                                className="meetup1"
                            />
                        </div>
                    </div>
                    <div onClick={rotatefun28} className={`relative ${rotate28 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr31.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun29} className={`relative ${rotate29 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr32.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun30} className={`relative ${rotate30 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr33.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onMouseOver={meetupfun5} className="relative ">
                        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup5 ? 'opacity-80' : 'opacity-0'}`} >
                            <Image
                                src="/util/img/arr30.svg"
                                layout="fill"
                                objectFit="cover"
                                alt="arrow"
                                className="meetup1"
                            />
                        </div>
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${meetup5 ? 'opacity-0' : 'opacity-80'
                                }`}
                        >
                            <Image
                                src="/util/img/meetup5.jpeg"
                                layout="fill"
                                objectFit="cover"
                                alt="meetup"
                                className="meetup1"
                            />
                        </div>
                    </div>
                    <div onClick={rotatefun31} className={`relative ${rotate31 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr35.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun32} className={`relative ${rotate32 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr36.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun33} className={`relative ${rotate33 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr37.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                    <div onClick={rotatefun34} className={`relative ${rotate34 ? 'rotate' : ''}`}>
                        <Image src="/util/img/arr38.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                    </div>
                </div>
                <div onMouseOver={colorchanges} className={`absolute cursor-default firstbox top-[70px] right-14 w-48 h-48 transition-colors duration-200 ease-in-out ${colorchange ? "bg-[#f29e90]" : "bg-[#5fc258]"}`}>
                    <p className='text-white font-bold pt-8 pl-8 leading-none'>PRACTICE <br />SPEAKING<br /> ENGLISH</p>
                </div>
                <div onMouseOver={colorchanges2} className={`absolute cursor-default secondbox top-60 right-[400px] w-48 h-48 transition-colors duration-200 ease-in-out ${colorchange2 ? "bg-[#E6A3D0]" : "bg-[#321BFF]"}`} >
                    <p className='text-white font-bold pt-8 pl-8 leading-none'>
                        LEVELUP <br /> ENGLISH
                    </p>
                </div>
                <div className='absolute cursor-default thirdbox w-[252px] h-[250px] top-[256px] left-[258px]'>
                    <div className="  bg-[#303030] h-full hover:bg-[#321BFF] transition-colors duration-200 ease-in-out">
                        <p className='text-white font-bold pt-8 pl-8 leading-none'>
                            SPEAK <br />CORRECT
                        </p>
                    </div>
                    <div className='bg-[#FFE42B] thirdminbox top-[249px] absolute w-full  h-20 absolute bottom-0 hovereffect'>
                        <p className='text-[#383838] hover:text-white font-medium text-2xl pl-8 pt-6'><a href='/home'>START</a></p>
                    </div>
                </div>

                <div onMouseOver={colorchanges3} className={`absolute cursor-default fourbox top-[628px] left-[65px] w-48 h-48 transition-colors duration-200 ease-in-out ${colorchange3 ? "bg-[#321BFF]" : "bg-[#5fc258] "}`} >
                    <p className='text-white font-bold pt-8 pl-8 leading-none'>
                        MAKE <br />COMFORTABLE
                    </p>
                </div>
                <div className={`absolute cursor-default fivethbox  top-[430px] left-[600px] w-48 h-48 transition-colors duration-200 ease-in-out`} >
                    <p className='text-[#383838] font-bold pt-8 pl-8 leading-none'>
                        OBSERVE<br />SPEAK
                    </p>
                </div>
                <div className={`absolute cursor-default sixthbox top-[620px] right-[400px] w-48 h-48 transition-colors duration-200 ease-in-out`} >
                    <p className='text-[#383838] font-bold pt-8 pl-8 leading-none'>
                        TAKE TIME <br /> SPEAK CORRECT
                    </p>
                </div>
            </main>
            <div className="container px-4">
                <div ref={sectionRef} className='flex cursor-default justify-center gap-5 mt-20 w-screen items-center'>
                    <div className="relative small_size_design w-full m-auto sm:w-[290px] h-[300px]">
                        <div className="rotate-shape absolute inset-0">
                            <Image
                                layout='fill'
                                objectFit='cover'
                                src="/util/img/sectiontwoimgone.webp"
                                alt="Workshop image"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-[#303030] font-medium text-xl px-4 py-2 rounded bg-opacity-70">
                                PERFECT
                            </p>
                        </div>
                    </div>
                    <div className='relative small_size_design_shape w-full m-auto sm:w-[200px] h-[200px]'>
                        <div className="rotate-shape absolute inset-0 bg-[#32DFAF] rounded-full" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <p className='text-[#303030] font-medium text-xl px-4 py-2 rounded'>
                                OPPORTUNITY
                            </p>
                        </div>
                    </div>
                    <div className='relative small_size_design w-full m-auto sm:w-[290px] h-[300px]'>
                        <div className="rotate-shape absolute inset-0">
                            <Image
                                layout='fill'
                                objectFit='cover'
                                src="/util/img/sectiontwoimgtwo.webp"
                                alt="Workshop image"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-[#303030] font-medium text-xl px-4 py-2 rounded bg-opacity-70">
                                TO BEGIN
                            </p>
                        </div>
                    </div>
                    <div className='relative small_size_design_shape w-full m-auto sm:w-[200px] h-[200px]'>
                        <div className="rotate-shape absolute inset-0 bg-[#FFE42B]" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <p className='text-[#303030] font-medium text-xl px-4 py-2 rounded'>
                                IN YOUR
                            </p>
                        </div>
                    </div>
                    <div className='relative mr-16 small_size_design_shape w-full sm:w-[200px] h-[200px]'>
                        <div className="rotate-shape absolute inset-0 bg-[#303030] rounded-full" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <p className='text-[#F7F7F7] font-medium text-xl px-4 py-2 rounded'>
                                THOUGHTS
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-24 relative'>
                    <div className='relative map_shapes_div w-screen text-3xl'>
                        <div className='w-screen map_div'>
                            <Image layout='responsive' width={1920} height={1080} src='/util/img/section_three_map.webp' alt="Map" />
                        </div>
                        <div className='absolute bottom-14 array_mark_map right-0'>
                            <div className='w-24 h-24 md:w-36 md:h-36 bg-[#759BF8] rounded-full flex items-center justify-center'>
                                <Image src="/util/img/arr37.svg" width={50} height={50} alt="arrow" className="w-16 md:w-24 rotate-[-40deg]" />
                            </div>
                        </div>
                        <p className="absolute first_text_map">Mastery</p>
                        <p className="absolute second_text_map">Proficiency</p>
                        <p className="absolute third_text_map">Versatility</p>
                        <p className="absolute forth_text_map">Confidence</p>
                        <p className="absolute five_text_map">Comprehension</p>
                        <p className="absolute six_text_map">Articulation</p>
                        <p className="absolute seven_text_map">Eloquence</p>
                        <p className="absolute eight_text_map">Fluency</p>
                    </div>
                </div>
            </div>
            <div>
                <div className=' pb-10'>
                    <div className="flex  w-screen h-full" >
                        <div onClick={footerfunarr1} className={`relative ${footerotate1 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr1.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                        <div onClick={footerfunarr2} className={`relative ${footerotate2 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr2.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow " />
                        </div>
                        <a href='/home'>
                            <div className='w-[45vw] h-[25vh] flex items-center justify-center text-white text-3xl bg-[#303030] hover:bg-[#2A27EB] '>
                                <p>Start Speaking</p>
                            </div>
                        </a>
                        <div onClick={footerfunarr3} className={`relative ${footerotate3 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr2.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                        <div onClick={footerfunarr4} className={`relative ${footerotate4 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr3.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                    </div>
                    <div className="grid w-screen h-full " style={{ "gridTemplateColumns": "repeat(8, 1fr)" }} >
                        <div onClick={footerfunarr5} className={`relative ${footerotate5 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr3.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                        <div onClick={footerfunarr6} className={`relative ${footerotate6 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr4.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow " />
                        </div>
                        <div onClick={footerfunarr7} className={`relative ${footerotate7 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr2.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                        <div onClick={footerfunarr8} className={`relative ${footerotate8 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr4.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                        <div onClick={footerfunarr9} className={`relative ${footerotate9 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr1.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                        <div onClick={footerfunarr10} className={`relative ${footerotate10 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr3.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow " />
                        </div>
                        <div onClick={footerfunarr11} className={`relative ${footerotate11 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr4.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                        <div onClick={footerfunarr12} className={`relative ${footerotate12 ? 'rotate' : ''}`}>
                            <Image src="/util/img/footer_arr2.svg" layout="responsive" width={80} height={80} alt="arrow" className="arrow" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
