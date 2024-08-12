import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='w-screen cursor-default  mt-10 bg-[#1A1A1A]'>
                <div className='flex h-full gap-10 text-[#999589] xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                    <div className='flex flex-col justify-between w-[35vw] xsm:w-full mt-10 sm:w-full mt-10 md:w-full mt-10 lg:w-[35vw] xl:w-[35vw] 2xl:w-[35vw]'>
                        <div className='p-10'>
                            <h1 className='text-3xl text-[#FFE32B]'>
                                FOLLOW US
                                ON SOCIAL MEDIA
                            </h1>
                            <div>
                                <div class="social-icons flex justify-center gap-3 p">
                                    <a href="https://x.com/EnglshUpgr97988" class="icon twitter w-11 h-11 bg-[#ffeb3b] rounded-full flex items-center justify-center text-black font-extrabold">t</a>
                                    <a href="https://www.instagram.com/upgradeenglish63/" class="icon instagram w-11 h-11 bg-[#ffeb3b] rounded-full flex items-center justify-center text-black font-extrabold">i</a>
                                    <a href="https://www.linkedin.com/in/upgrade-englsh-upgrade-english-1b991a321/" class="icon linkedin w-11 h-11 bg-[#ffeb3b] rounded-full flex items-center justify-center text-black font-extrabold">in</a>

                                </div>
                            </div>
                        </div>
                        <div className='p-10'>
                            <p>© 2024 Future student.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between w-[35vw] xsm:w-full mt-10 sm:w-full mt-10 md:w-full mt-10 lg:w-[35vw] xl:w-[35vw] 2xl:w-[35vw]'>
                        <div className='p-10'>
                            <h1 className='text-3xl text-[#FFE32B]'>
                                SUBSCRIBE TO
                                OUR NEWSLETTER
                            </h1>
                            <div>
                                <p>By leaving a review, you are subscribing to us.</p>
                            </div>
                        </div>
                        <div className='p-10'>
                            <p>Terms and conditions      Privacy policy</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between w-[35vw] xsm:w-full mt-10 sm:w-full mt-10 md:w-full mt-10 lg:w-[35vw] xl:w-[35vw] 2xl:w-[35vw]'>
                        <div>
                        </div>
                        <div className='p-10'>
                            <p>Developed By MADHUSUDHAN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer