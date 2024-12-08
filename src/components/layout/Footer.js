import React from 'react'
import { BsDot } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {

    const footer = [
        {
            'tag': 'Company',
            links: ['Portfolio', 'About Us', 'Contact us', 'Career', 'Blogs', 'Terms & Condition', 'Privacy Policy']
        },
        {
            'tag': 'Expertise',
            links: ['Generative-AI-development', 'MVP-development', 'Mobile App Development', 'SaaS Development', 'Custom Software ', 'UI/UX design', 'Hybrid Teams']
        },
        {
            'tag': 'Contact us',
            links: ['+919289034933', 'business@techype.in', "Plot no. 100C, Sector 4, Vaishali Ghaziabad, uttar pardesh 201012", '440 N Barranca Ave #7914, Covina, CA 91723, USA']
        },
    ]

    return (
        <div>
            <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-24 mx-auto bg-gray-900 text-white">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
                    <div className="col-span-full lg:col-span-1 lg:block">
                        <a className="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Techype</a>
                        <p className="mt-3 text-sm text-gray-300">
                            Techype was built with all types of businesses & entrepreneurs in mind. Contact us with your requirements using this form for more.
                        </p>
                    </div>

                    {footer.map((tags) => {
                        return (
                            <div key={tags.tag}>
                                <h4 className="text-base font-semibold text-white uppercase">{tags.tag}</h4>
                                {tags.links.map((comTag) => {
                                    return (
                                        <div key={comTag} className="mt-3 flex space-y-3 items-center">
                                            <p><a className="inline-flex gap-x-2 text-white hover:text-white focus:outline-none focus:text-white items-end" href="#"><BsDot />{comTag}</a></p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}

                </div>
                <div className="pt-5 mt-5">
                    <div className="sm:flex sm:justify-between sm:items-center text-sm text-gray-600">
                        © Techype Technology Ltd 2024-present. All Rights Reserved.
                        <div className="flex flex-wrap justify-between items-center gap-3 md:text-2xl text-xl">
                            <div className="space-x-4 md:space-y-0 space-y-5">
                                <a className="inline-block text-white hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">
                                    <FaFacebookF />
                                </a>
                                <a className="inline-block text-white hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">
                                    <FaLinkedinIn />
                                </a>
                                <a className="inline-block text-white hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">
                                    <FaXTwitter />
                                </a>
                                <a className="inline-block text-white hover:text-gray-800 focus:outline-none focus:text-gray-800" href="#">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer