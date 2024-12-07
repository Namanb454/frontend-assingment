import Image from 'next/image';
import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";

const Services = () => {
    return (
        <div>
            <div className="py-6  bg-[#101828] text-neutral-50 relative ">
                <Image width={100} height={100} className="absolute top-0 left-0 z-0" src="https://techype.in/spotlight.svg" />
                <div className="w-[80%] sm:w-10/12 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 relative z-10 md:gap-10"><h2 className="text-4xl font-semibold leading-normal md:my-0 my-3">
                        Discover
                        <br />Our Services</h2>
                        <p className="max-w-xl text-sm md:text-left ">
                            We Deliver Products that Boost Your Business. When we work, we work with a commitment to deliver products that stand out from the rest. We make sure that your impactful ideas are transformed into even more impactful products</p>
                    </div>
                    <div className="mb-4 relative z-10">
                        <button className="flex justify-between items-center w-full p-4 text-left border-b border-gray-600">
                            <span className="text-2xl  w-40 sm:w-full">Generative AI Solutions</span>
                            <span className="text-3xl font-bold transform transition-transform mr-10">
                                <BsArrowRightCircle />
                            </span>
                        </button>
                    </div>
                    <div className="mb-4 relative z-10">
                        <button className="flex justify-between items-center w-full p-4 text-left border-b border-gray-600">
                            <span className="text-2xl  w-40 sm:w-full">MVP Development</span>
                            <span className="text-3xl font-bold transform transition-transform mr-10">
                                <BsArrowRightCircle />
                            </span>
                        </button>
                    </div>
                    <div className="mb-4 relative z-10">
                        <button className="flex justify-between items-center w-full p-4 text-left border-b border-gray-600">
                            <span className="text-2xl  w-40 sm:w-full">SaaS Development</span>
                            <span className="text-3xl font-bold transform transition-transform mr-10">
                                <BsArrowRightCircle />
                            </span>
                        </button>
                    </div>
                    <div className="mb-4 relative z-10">
                        <button className="flex justify-between items-center w-full p-4 text-left border-b border-gray-600">
                            <span className="text-2xl  w-40 sm:w-full">Mobile Application Development</span>
                            <span className="text-3xl font-bold transform transition-transform mr-10">
                                <BsArrowRightCircle />
                            </span>
                        </button>
                    </div>
                    <div className="mb-4 relative z-10">
                        <button className="flex justify-between items-center w-full p-4 text-left border-b border-gray-600">
                            <span className="text-2xl  w-40 sm:w-full">End-to-End Software Development</span>
                            <span className="text-3xl font-bold transform transition-transform mr-10">
                                <BsArrowRightCircle />
                            </span>
                        </button>
                    </div>
                    <div className="mb-4 relative z-10">
                        <button className="flex justify-between items-center w-full p-4 text-left border-b border-gray-600">
                            <span className="text-2xl  w-40 sm:w-full">UI/UX Design</span>
                            <span className="text-3xl font-bold transform transition-transform mr-10">
                                <BsArrowRightCircle />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services