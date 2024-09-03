'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto, Poppins } from 'next/font/google'
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const roboto = Roboto({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export default function Navbar() {
    const [show, setShow] = useState(false);


    const handleShow = () => {
        setShow((prev) => !prev);
    }

    return (
        <div
            className={` top-0 left-0 bg-white w-full md:h-[20vh] z-[990] transition-opacity duration-500 shadow-md border-b border-gray-200  `}
        >
            <div className='bg-white max-md:hidden'>

                <Marquee autoFill={true} className='flex justify-center items-center'>

                    <p className='ml-16   text-black font-semibold'>For Inquiry, Assistance & Grievance Redressal <span className='text-red-600 text-xl font bold'>RailMadad</span>  & for Security/Medical Assistance  <IoCall className='inline m-0 mb-1 text-xl text-red-600 ' /><span className='text-xl text-red-600  font bold'>139</span> </p>




                </Marquee>
            </div>
            <div className="w-full bg-white py-1.5 sm:py-3 px-3 sm:px-10 flex relative">
                <Link href="/">
                    <div className='flex gap-2 justify-start items-center flex-[25%] relative'>
                        <Image
                            src='/logo.png'
                            alt="logo"
                            width="300"
                            height="100"
                            className='mix-blend-multiply'
                        />

                    </div>
                </Link>

                <div className="flex justify-end items-center w-full lg:hidden ml-4">
                    <HiOutlineMenu className={`text-3xl cursor-pointer border-2  rounded-md duration-200 ${show ? "border-orange-600" : "border-white"}`} onClick={handleShow} />
                </div>

                {/* Desktop Navbar */}
                <div className=' flex-[75%] lg:flex items-center justify-end w-full hidden'>
                    <ul className={`flex gap-8  pr-12 text-base ${poppins.className} font-[500] tracking-wide text-gray-600`}>
                        <li className='hover:text-red-600 duration-150 hover:tracking-wider cursor-pointer py-2 relative group'>
                            <Link href="/">
                                <span>Train</span>
                                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                                <span className="absolute bottom-1 right-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                            </Link>
                        </li>

                        <li className='hover:text-red-600 duration-150 hover:tracking-wider cursor-pointer py-2 relative group'>
                            <Link href="/about">
                                <span>Feedback</span>
                                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                                <span className="absolute bottom-1 right-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                            </Link>
                        </li>

                        <li className='hover:text-red-600 duration-150 hover:tracking-wider cursor-pointer py-2 relative group'>
                            <Link href="/services">
                                <span>Enquriy</span>
                                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                                <span className="absolute bottom-1 right-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                            </Link>
                        </li>

                        <li className='hover:text-red-600 duration-150 hover:tracking-wider cursor-pointer py-2 relative group'>
                            <Link href="/blogs">
                                <span>Track Your Concern</span>
                                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                                <span className="absolute bottom-1 right-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                            </Link>
                        </li>
                 
                        <li className='group'>

                            <div className='hover:text-red-600  border-red-600 border-[1px] px-5 rounded-lg duration-150  cursor-pointer py-2 relative '>
                                <Link href="/career">
                                    <span>Suggestion</span>
                                    
                                </Link>

                              

                            </div>

                       

                        </li>
                        <li className='hover:text-red-600 text-white  hover:bg-white hover:border-red-600 border-[1px] bg-red-600 rounded-lg px-5 duration-150  cursor-pointer py-2 relative '>
                            <Link href="/contactus">
                                <span className=''>Feedback</span>
                                <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                                <span className="absolute bottom-1 right-1/2 w-0 h-[2px] bg-red-900 group-hover:w-1/2 group-hover:transition-all duration-150"></span>
                                <div className='bg-black animate-ping absolute top-[-8px] right-[-8px] rounded-full  h-4 w-4'></div>
                            </Link>
                        </li>

              
                    </ul>
                </div>

                {/* Mobile Navbar */}
                <ul
                    className={`
        lg:hidden z-[999]  fixed w-full top-[4rem] overflow-y-auto  py-4 px-10
        duration-500 ${show ? "right-0" : "right-[-100%]"} bg-gray-100 border-b-border-[1px] border-black shadow-md`}
                >
                    <li className={`py-2 ${poppins.className} font-[500]`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`py-2 ${poppins.className} font-[500]`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`py-2 ${poppins.className} font-[500]`}>
                        <Link href="/services">Services</Link>
                    </li>
                    <li className={`py-2 ${poppins.className} font-[500]`}>
                        <Link href="/cv">Submit CV</Link>
                    </li>
                    <li className={`py-2 ${poppins.className} font-[500]`}>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li className={`py-2 ${poppins.className} font-[500]`}>
                        <Link href="/career">Jobs</Link>
                    </li>
                    <li className={`py-2 ${poppins.className} font-[500]`}>
                        <Link href="/contactus">Contact Us</Link>
                    </li>

                    {/* <li className='py-2'>
                        <div onClick={() => setShow(false)}>

                            <AssociateButton
                                btnStyle="text-orange-600 border-2 border-orange-600 px-3 py-2 hover:bg-orange-600
                            hover:text-white duration-200 cursor-pointer rounded-md"
                                btnText="Let's Collab"
                            />
                        </div>
                    </li> */}
                </ul>
            </div>

        </div>
    )
}