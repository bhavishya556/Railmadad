import Image from 'next/image';
import { Roboto, Poppins } from 'next/font/google';
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import Particles from "./Particles";

const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins({
    weight: ['400', '500', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const Footer = () => {
    return (
        <footer className="bg-transparent  text-white relative overflow-hidden ">
            <div className="relative  px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className='relative inset-0 h-full w-full' >
                    <Particles className=" z-[-1000000] fixed w-full" />
                </div>
                <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Image
                            src='/img/r2.png'
                            alt="logo"
                            width="200"
                            height="200"
                            className='mr-5 mix-blend-multiply'
                        />
                        {/* <p className={`max-w-xs mt-4 text-sm text-white ${poppins.className}`}>
                        At BizElevators Consultancy, we believe businesses can soar with the right guidance. As a modern HR consultancy, we blend innovative approaches with seasoned expertise to provide strategic insights and tailored solutions. Our commitment includes swiftly filling vacancies, ensuring your organization remains agile and responsive to market demands.
                        </p> */}
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p className={`font-medium ${poppins.className}`}>
                                Quick Links
                            </p>
                            <nav className={`flex flex-col mt-4 space-y-2 text-sm text-gray-900 ${roboto.className}`}>
                                <Link className="hover:opacity-90 text-white" href="/">Train </Link>
                                <Link className="hover:opacity-90 text-white" href="/">Feedback </Link>
                                <Link className="hover:opacity-90 text-white" href="/">Enquriy </Link>
                                <Link className="hover:opacity-90 text-white" href="/">Track Your Concern </Link>
                                <Link className="hover:opacity-90 text-white" href="/">Suggestion</Link>
                                {/* <Link className="hover:opacity-90 text-white" href="/"> Returns Policy </Link> */}
                            </nav>
                        </div>
                        <div>
                            <p className={`font-medium ${poppins.className}`}>
                                About Us
                            </p>
                            <nav className={`flex flex-col mt-4 space-y-4 text-sm text-white ${roboto.className}`}>
                            Our AI-powered RailMadad software makes it incredibly easy to submit railway complaints. In just 30 seconds, you can capture a photo of your issue, add your PNR number, and our system will automatically forward it to the correct department. No login required—just a fast and seamless experience to ensure your concerns are addressed quickly.
                            </nav>
                        </div>
                        {/* <div>
                            <p className={`font-medium ${poppins.className}`}>
                                Social Links
                            </p>
                            <div className="flex mt-8 space-x-6 text-white text-xl">
                                <Link className="hover:opacity-90 text-white" href="https://www.facebook.com/profile.php?id=61560240480029&mibextid=LQQJ4d" target="_blank" rel="noreferrer">
                                    <FaFacebook />
                                </Link>
                                <Link className="hover:opacity-90 text-white" href="https://www.instagram.com/bizelevators?igsh=MWd5b2JpeGtwM21xbg" target="_blank" rel="noreferrer">
                                    <FaInstagram />
                                </Link>
                                <Link className="hover:opacity-90 text-white" href="https://www.linkedin.com/company/bizelevators/" target="_blank" rel="noreferrer">
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
                <p className={`mt-8 text-sm text-white font-[500] ${poppins.className}`}>
                    © 2024 Railmadad
                </p>
            </div>
            <div className="w-full py-5 bg-red-900 border-t-2 border-[black] text-center">
                <p className='text-white text-center'>
                    Copyright © 2024 <b className='font-bold  '> RAILMADAD</b> All Rights Reserved.
                    Designed and Developed By
                    <b className='font-bold  '> Team SmartX (SIH-2024)</b>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
