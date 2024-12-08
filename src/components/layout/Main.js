'use client'

import React from 'react'
import YCarousel from '../ui/YCarousel'
import Image from 'next/image'

const Main = () => {
    const process = [
        {
            'title': 'Share requirements',
            'desc': "How do you wish your product to look like? Share your requirements and trust us to develop a product that goes above and beyond your expectations.",
            'img': 'https://techype.in/ApproachLogo4.svg'
        },
        {
            'title': 'Discussing Details',
            'desc': "As a leading AI software development company, we carefully analyze all your requirements and share an estimate of product timeline and commercial details. Once you approve the collaboration, we ensure to assign the perfect team to develop a perfect product.",
            'img': 'https://techype.in/ApproachLogo5.svg',
        },
        {
            'title': 'Start Building',
            'desc': "Time to prove to you why we are considered the best AI software development company in the industry, as we bring your ideas to life.",
            'img': 'https://techype.in/ApproachLogo6.svg'
        },
    ]

    const industries = [
        {
            'title': 'FinTech & Finance',
            'img': 'https://techype.in/industry/pic1.svg',
        },
        {
            'title': 'E-commerce & Fashion',
            'img': 'https://techype.in/industry/pic2.svg',
        },
        {
            'title': 'Hospitality & Travel',
            'img': 'https://techype.in/industry/pic3.svg',
        },
        {
            'title': 'E-learning & Education',
            'img': 'https://techype.in/industry/pic4.svg',
        },
        {
            'title': 'Healthcare & Fitness',
            'img': 'https://techype.in/industry/pic5.svg',
        },
        {
            'title': 'Startups B2B & B2C',
            'img': 'https://techype.in/industry/pic6.svg',
        },
        {
            'title': 'Real State',
            'img': 'https://techype.in/industry/pic7.svg',
        },
        {
            'title': 'On Demand Solution',
            'img': 'https://techype.in/industry/pic8.svg',
        },
    ]
    return (
        <div>
            {/* Section 1 */}
            <div className="max-w-6xl p-10 mx-auto bg-white text-gray-900 py-10 md:py-20 flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="md:w-1/2 mb-10 md:mb-0 w-11/12 sm:w-10/11 mx-auto">
                    <h2 className="text-4xl mb-4">Get the right talent on board with Techype.</h2>
                    <p className="text-lg mb-6">Find top professionals with experience working in diverse job roles. Techype is your friend in need, helping you hire skilled teams and engineers who excel in different areas of technology.</p>
                    <div className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-[#101828] text-white cursor-pointer">More Insight</div>
                </div>
                <div className="relative md:w-1/2 md:ml-5">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10">
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10">
                    </div>
                    <div className="overflow-y-scroll h-64 hide-scrollbar"
                    // style="scrollbar-width:none;-ms-overflow-style:none"
                    >
                        <YCarousel />
                    </div>
                </div>
            </div>


            {/* Section 2 */}
            <div className="max-w-6xl p-10 mx-auto bg-white text-gray-900 py-10 md:py-20 flex-none flex-col md:flex-row justify-between items-center md:items-start">

                <div className="mb-10 md:mb-0 md:w-full w-11/12 sm:w-10/11 mx-auto">
                    <h2 className="text-4xl mb-4">Our Process!
                        <div>
                            The Journey of Your Ideas
                        </div>
                    </h2>
                </div>

                {/* Icon Blocks */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-24 lg:py-14 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">

                        {process.map((process) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <a className="group space-y-6 size-full border-l border-dashed border-black p-5" href="#">
                                    <Image width={30} height={30} className='w-[30%]' src={process.img} />
                                    <div>
                                        <div>
                                            <h3 className="block font-bold text-gray-800">{process.title}</h3>
                                            <p className="text-gray-600">{process.desc}</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                        {/* End Card */}
                    </div>
                </div>
                {/* End Icon Blocks */}
            </div>

            {/* Section 3 */}
            <div>
                <div className="py-6 relative ">
                    <div className="w-[80%] sm:w-10/12 max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 relative z-10 md:gap-10"><h2 className="text-4xl font-semibold leading-normal md:my-0 my-3">
                            Industries We Serve
                        </h2>
                            <p className="max-w-xl text-base md:text-left ">
                                We have a structured work process to ensure that the projects handled can be completed properly and according to your needs.</p>
                        </div>

                        {/* Icon Blocks */}
                        <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-0 lg:py-14 mx-auto">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-5">
                                {/* Card */}
                                {industries.map((industry) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <div className="bg-[#f4f8ff] shadow-lg md:py-10 py-6 px-2">
                                            <div className="flex items-center gap-x-10 mb-3">
                                                <div className="">
                                                    <Image width={100} height={100} className='w-[100%]' src={industry.img} />
                                                </div>
                                                <div className="shrink-0">
                                                    <h3 className="w-[80%] ml-auto block text-sm font-semibold text-gray-800">{industry.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* End Icon Blocks */}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main