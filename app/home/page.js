"use client";
import Image from 'next/image'
import React, { useState, useEffect, useCallback } from 'react'
import YouTubePlayer from './YouTubePlayer';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const page = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('Submitting...');
        try {
            const response = await fetch('/pages/submit-review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('Review submitted successfully!');
                setFormData({ email: '', message: '' });
            } else {
                setSubmitStatus(`Failed to submit review: ${data.error}`);
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setSubmitStatus(`An error occurred: ${error.message}`);
        }
    }

    const handleScroll = useCallback(() => {
        const header = document.getElementById("myHeader");
        if (!header) return;
        const scrollPosition = window.pageYOffset;
        console.log(scrollPosition);

        setIsSticky(scrollPosition > 667 && scrollPosition < 4000);
    }, []);
    useEffect(() => {
        handleScroll(); // Check initial position
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const toggleDisclosure = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };
    const methodSections = [
        {
            title: "METHOD 1: BBC Learning English",
            content: "BBC Learning English offers free audio, video, and text materials to help you improve your English skills. They provide lessons for various proficiency levels and cover topics like pronunciation, grammar, and vocabulary.",
            image: "data:image/png;base64,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",
            link: "https://www.bbc.co.uk/learningenglish/"
        },
        {
            title: "METHOD 2: Duolingo",
            content: "Duolingo is a popular language learning platform that offers a gamified approach to learning English. It's completely free and provides interactive lessons that cover reading, writing, listening, and speaking skills.",
            image: "data:image/png;base64,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",
            link: "https://www.duolingo.com/"
        },
        {
            title: "METHOD 3: EnglishCentral",
            content: "EnglishCentral focuses on improving your English speaking skills through video-based lessons. They offer a free tier that includes access to numerous videos with interactive transcripts and pronunciation practice.",
            image: "data:image/jpeg;base64,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",
            link: "https://www.englishcentral.com/"
        },
        {
            title: "METHOD 4: italki Community",
            content: "While italki is known for paid tutoring, they also have a free community feature where you can find language exchange partners. Practice speaking English with native speakers and help them learn your language in return.",
            image: "https://play-lh.googleusercontent.com/EiQQbOCf_dHv_hRiWREdGg0XEP9qSQ2KJ-cmYw7waZZwTqhjqEXOi3QqxXNz5wodGys=w526-h296-rw",
            link: "https://www.italki.com/community"
        },
        {
            title: "METHOD 5: VoiceTube",
            content: "VoiceTube provides free English video content with subtitles in multiple languages. You can improve your listening and speaking skills by watching videos on various topics and repeating after native speakers.",
            image: "data:image/jpeg;base64,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",
            link: "https://www.voicetube.com/"
        },
    ];

    return (
        <div className=' overflow-x-hidden'>
            <div className=' bg-[#6C9AFF] w-screen overflow-y-hidden h-screen pl-10 pr-16' >
                <Navbar />
                <div className='cursor-default'>
                    <h1 className='text-[97px] mt-10 font-bold xsm:text-[50px] sm:text-[50px] md:text-[50px] lg:text-[97px] xl:text-[97px] 2xl:text-[97px]'>Welcome to  UPG口ADE</h1>
                    <div className='flex justify-center items-top mt-36 h-screen xsm:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>
                        <div className='flex flex-col gap-10'>
                            <p className='text-2xl font-medium'>Begin Your Journey: Click the Button to <br /> Start Practicing.</p>
                            <p className=' text-xl font-bold absolute cursor-pointer bottom-0'><a href="#second_menu">Scroll Down</a></p>
                        </div>
                        <div>
                            <Image layout='responsive' className='relative right-[-50px]' alt="image" width={100} height={100} src="/util/img/home_front-page.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex relative cursor-default md:flex-wrap md:flex-col-reverse xsm:flex-wrap xsm:flex-col-reverse sm:flex-wrap sm:flex-col-reverse lg:flex-nowrap lg:flex-row xl:flex-nowrap xl:flex-row 2xl:flex-nowrap 2xl:flex-row '>
                <div className='bg-[#F7F7F7] w-screen pl-10 pr-16'>
                    <div>
                        <div id="second_menu" className={`flex gap-20 bg-[#F7F7F7] w-full font-semibold text-xl pt-5 pb-3 ${isSticky ? 'fixed top-0' : ''} `}>
                            <p><a href="#Programme">Programme structure </a></p>
                            <p><a href='#Speakers'>Speakers</a></p>
                            <p><a href='#Cost'>Cost & Accommodation</a></p>
                        </div>
                        <div className=' h-[1px] bg-[#E5E5E5] ml-[-40px] mr-[-64px]'></div>
                    </div>
                    <div>
                        <div className='w-full flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row  xl:flex-row 2xl:flex-row'>
                            <div className='w-1/2 xsm:hidden sm:hidden md:hidden lg:block xl:block 2xl:block'></div>
                            <div className='w-1/2 xsm:w-full mt-10 sm:w-full mt-10 md:w-full mt-10 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                <p className='mb-10 font-medium'>
                                    Welcome to our innovative English learning platform, designed and developed by a passionate individual committed to helping you improve your language skills.
                                </p>
                                <p className='mb-10 font-medium'>
                                    Greetings! Our pioneering English learning platform, designed with unwavering dedication by an ardent creator, is here to ignite your language learning adventure and help you achieve excellence.
                                </p>
                                <p className='mb-10 font-medium'>
                                    Step into our transformative English learning platform, designed by a passionate expert to inspire and guide you on your journey to language excellence.
                                </p>
                                <p className='mb-10 font-medium'>
                                    Our dynamic English learning platform, crafted with devotion by an enthusiast to motivate and elevate your English skills to new levels.
                                </p>
                            </div>
                        </div>
                        <div className='w-full flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                            <div className='w-1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                <h1 className='mb-10 font-bold text-2xl'>
                                    About the Developer
                                </h1>
                                <ul className='font-semibold'>
                                    <li>As a solo developer, I've created this tool with a singular vision: to provide an accessible, effective way for English learners to practice and refine their speaking skills. My background in language learning and technology has driven me to create a solution that addresses the real needs of language learners.</li>
                                </ul>
                            </div>
                            <div className='w-1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                <h1 className='mb-10 font-bold text-2xl'>
                                    How It Works
                                </h1>
                                <ul className='font-semibold '>
                                    <li>Speak Naturally: Start by clicking the "Record" button and speak freely in English.</li>
                                    <li>
                                        Instant Transcription: Our advanced technology converts your speech into text in real-time
                                    </li>
                                    <li>
                                        Review Your Words: See your spoken words displayed on the screen, allowing you to visually assess your speech.
                                    </li>
                                    <li>
                                        Get Feedback: Click the "Analyze" button to receive detailed feedback on your pronunciation, grammar, and fluency.
                                    </li>
                                    <li>
                                        Speech-to-Text Conversion: Accurately transcribes your spoken English
                                    </li>
                                    <li>
                                        Pronunciation Analysis: Identifies areas for improvement in your speech.
                                    </li>
                                    <li>
                                        Fluency Assessment: Provides feedback on your speaking pace and natural flow
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-[110%] h-[80vh] ml-[-40px] pr-[-64px] xsm:ml-[0px] pr-[0px] sm:ml-[0px] pr-[0px] md:ml-[0px] pr-[0px] lg:ml-[-40px] pr-[-64px] xl:ml-[-40px] pr-[-64px] 2xl:ml-[-40px] pr-[-64px]  mt-20 mb-20'>
                        <YouTubePlayer className='w-full' videoId="2YwfHN4PhUs" />
                        {/* https://youtu.be/ */}
                    </div>
                    <div id="Programme" className='w-full '>
                        <div className='h-full w-full'>
                            <h1 className='text-5xl font-bold mb-20'>Programme structure</h1>
                            <div className='100% flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                                <div className='w-1/2 mb-10  xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                    <h1 className='mb-10 font-bold text-xl'>
                                        Interactive Learning Sessions
                                    </h1>
                                </div>
                                <div className='w-1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                    <p className='mb-10 font-medium'>
                                        Immerse yourself in the English language through our interactive platform. Connect with the core aspects of language learning:

                                        Speaking Practice: Regular opportunities to speak and record your voice.
                                        Listening Comprehension: Engage with various audio materials to improve your listening skills.
                                        Real-time Feedback: Receive instant analysis on your pronunciation and grammar.
                                        Personalized Learning Path: Tailored exercises based on your performance and goals.
                                    </p>
                                </div>
                            </div>
                            <div className='100% flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                                <div className='w-1/2 mb-10 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                    <h1 className='mb-10 font-bold text-xl'>
                                        Virtual Language Immersion
                                    </h1>
                                </div>
                                <div className='w-1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                    <p className='mb-10 font-medium'>
                                        Experience English in context without leaving your home:

                                        Virtual City Tours: Explore English-speaking cities through interactive video tours.
                                        Cultural Insights: Learn about customs, idioms, and cultural nuances that influence language use.
                                        Scenario-based Learning: Practice English in simulated real-life situations like ordering food or asking for directions.
                                    </p>
                                </div>
                            </div>
                            <div className='100% flex xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                                <div className='w-1/2 items-center xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                    <h1 className='mb-10 font-bold text-xl'>
                                        Community and Networking
                                    </h1>
                                </div>
                                <div className='w-1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                    <p className='mb-10 font-medium'>
                                        Learning is not just about content, but also about connections:

                                        Discussion Forums: Engage with fellow learners to practice written communication.
                                        Language Exchange: Pair up with other users for conversation practice.
                                        Progress Sharing: Celebrate milestones and share experiences with the community.
                                        Live Q&A Sessions: Regular online meetups with language experts to address your questions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Speakers" className='w-full '>
                        <div className='h-full w-full'>
                            <h1 className='text-5xl font-bold mb-20'>Speakers</h1>
                            <div className=" w-full">
                                <div className="w-full  divide-y rounded-xl">
                                    {methodSections.map((section, index) => (
                                        <Disclosure key={index} as="div" className="p-6">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button
                                                        className="group flex w-full items-center justify-between"
                                                        onClick={() => toggleDisclosure(index)}
                                                    >
                                                        <span className="text-3xl font-medium">
                                                            {section.title}
                                                        </span>
                                                        <ChevronDownIcon className={`size-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel static className={`mt-2 text-lg ${openIndex === index ? '' : 'hidden'}`}>
                                                        <div className='flex w-full h-full xsm:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                                                            <div className='w-1/2 mt-10 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                                                <a href={section.link} >
                                                                    <img alt="image" className='h-[55vh] w-[20vw] xsm:h-[30vh] w-[40vw] sm:h-[30vh] w-[40vw] md:h-[30vh] w-[40vw] lg:h-[55vh] xl:h-[55vh] 2xl:h-[55vh]' src={section.image} />
                                                                </a>
                                                            </div>
                                                            <div className='w-1/2 xsm:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                                                {section.content}
                                                            </div>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                    <div id="Cost" className='w-full '>
                        <div className='h-full w-full'>
                            <h1 className='text-5xl font-bold mb-20'>PROGRAMME COST AND ACCOMMODATION</h1>
                            <div className='w-full flex xsm:flex-col items-center sm:flex-col items-center md:flex-col items-center lg:flex-row xl:flex-row 2xl:flex-row'>
                                <div className='w-1/2 font-semibold xsm:w-full mt-10 sm:w-full mt-10 md:w-full mt-10 lg:w-1/2 xl:w-1/2 2xl:w-1/2 '>
                                    <h1 className='mb-10 font-bold text-3xl'>
                                        Cost: Absolutely, Positively FREE!
                                    </h1>
                                    <ul>
                                        <li>
                                            That's right, folks! We're so committed to helping you learn English that we've made this program more free than a bird soaring through the sky (and trust us, those birds aren't paying rent).
                                        </li>
                                    </ul>
                                    <p className='mt-5'>Price doesn't include any thing. </p>
                                </div>
                                <div className='w-1/2 xsm:w-full mt-10 sm:w-full mt-10 md:w-full mt-10 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                    <p className='mb-5 font-semibold'>
                                        Since our program is 100% online, your "accommodation" is wherever you plant your posterior! But for the optimal learning experience, we recommend the following luxury locations:
                                    </p>
                                    <p className='mb-10 font-semibold'>
                                        The Couch of Comfort: Perfect for those who like to learn while horizontal.
                                    </p>
                                    <ul className='text-[#9FA19F]'>
                                        <li className=''>
                                            <p className='underline underline-offset-8 decoration-[#FFE32B] decoration-4 mb-2 text-black font-medium'>
                                                Madhusudhan<br />
                                            </p>
                                            Developer
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="myHeader" className='bg-[#1A1A1A] xsm:w-[100vw] sm:w-[100vw] md:w-[100vw] lg:w-[30vw] xl:w-[30vw] 2xl:w-[30vw] '>
                    <div className={`bg-[#1A1A1A] text-[#FFFFFF] p-5 ${isSticky ? 'xsm:relative sm:relative md:relative lg:fixed xl:fixed 2xl:fixed lg:top-0 xl:top-0 2xl:top-0 ' : ''}`}>
                        <h1 className='text-[#FFE32B] font-semibold  mb-3'>Share Your Experience</h1>
                        <p className=' mt-1 mb-10'>we believe in the power of community-driven growth. </p>
                        <h1 className='text-[#FFE32B] font-semibold mt-10 mb-3'>Review</h1>
                        <p className='mt-1 mb-10'>Your reviews aren't just testimonials; they're the building blocks of our evolution. Here's your feedback makes a difference</p>
                        <h1 className='text-[#FFE32B] font-semibold mb-3'>Review</h1>
                        <form onSubmit={handleSubmit} >
                            <input type='email' name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} className='bg-[#1A1A1A] border-[#FFE32B] border-2 rounded-md w-full p-2 mt-2' />
                            <textarea type='text' name="message" placeholder='Enter your review' value={formData.message} onChange={handleChange} className='bg-[#1A1A1A] border-[#FFE32B] border-2 rounded-md w-full p-2 mt-10' />
                            <button type="submit" className='bg-[#FFE32B] text-black w-full p-2 rounded-md mt-10'>Submit</button>
                            {submitStatus && <p className="mt-2 text-white">{submitStatus}</p>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page



