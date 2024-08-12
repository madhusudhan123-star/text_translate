"use client";
import Footer from '@/components/footer'
import GoogleMap from '@/components/googlemap'
import Navbar from '@/components/navbar'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';


const MapComponentWithNoSSR = dynamic(() => import('@/components/googlemap'), {
    ssr: false
});

const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Sending...');

        try {
            const response = await fetch('/pages/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                setSubmitStatus(result.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                const error = await response.json();
                setSubmitStatus(`Failed to send message: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('An error occurred. Please try again later.');
        }
    };
    return (
        <div className='overflow-x-hidden'>
            <div>
                <div className=' w-screen cursor-default overflow-y-hidden h-[80vh] pl-10 pr-16 bg-[#FFE32B]'>
                    <Navbar />
                    <div className=' w-full h-[60vh] flex justify-between items-end'>
                        <div> <p className='text-[90vh] font-semibold text-[#1A1A1A] xsm:text-[5vh] sm:text-[5vh] md:text-[5vh] lg:text-[10vh] xl:text-[10vh] 2xl:text-[10vh]'>feel free <br /> to contact us</p> </div>
                        <div className='font-bold'>
                            <p className='mb-10'>
                                H no 7-1-72/5 <br />
                                TPS Krishna nagar colony phase3 <br />
                                Godhumakunta village <br />
                                keesara mandal <br />
                                medchal-malkajgiri District. <br />
                                Pin code 501301 <br />
                            </p>
                            Call us on<br />
                            +91 6309792221</div>
                    </div>
                </div>
                <div className='w-screen h-[90vh]'>
                    <GoogleMap />
                </div>
                <div className='w-screen cursor-default flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                    <div className='w-screen cursor-default flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                        <div className='w-1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                            <h1 className='text-3xl font-bold p-7'>I'd love to hear from you</h1>
                            <p className='text-xl font-medium p-7'>For any inquiries or project discussions, please email me:<br />
                                <span className='underline decoration-2 decoration-[#FFE32B] hover:no-underline'>dmadhusudhan98@gmail.com</span></p>
                            <div className='w-full h-[1px] bg-[#E5E5E5]'></div>
                            <p className='text-xl font-medium p-7'>For technical support or bug reports:<br />
                                <span className='underline decoration-2 decoration-[#FFE32B] hover:no-underline'>dmadhusudhan98@gmail.com</span></p>
                        </div>
                    </div>
                    <div className='1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-[#FFE32B]'>
                        <div className='p-14'>
                            <h1 className='text-2xl font-light'>For the attention this has be design in this way</h1>
                            <form onSubmit={handleSubmit} className='pt-12 pb-5'>
                                <div className='flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-10 mb-5'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='border-black border-[1px] border-solid bg-[#ffffff00] p-3 font-bold focus:outline-none'
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='border-black border-[1px] border-solid bg-[#ffffff00] p-3 font-bold focus:outline-none'
                                        required
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full border-black border-[1px] border-solid bg-[#ffffff00] p-3 font-bold focus:outline-none mb-5'
                                    required
                                />
                                <button type="submit" className='bg-black text-[#FFE32B] w-full p-3 font-bold'>Submit</button>
                            </form>
                            {submitStatus && <p className='mt-4 font-bold'>{submitStatus}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page