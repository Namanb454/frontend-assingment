import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const Testimonials = () => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const portfolio = [
        {
            title: [
                'Mobile APP',
                'Backend Development',
            ],
            'desc': 'A description for project Simplified. This is the project details go.',
            'name': 'Simplifies',
        },
        {
            title: [
                'UI/UX Design',
                'Web Development',
            ],
            'desc': 'A description for Project Hero. This is the project details go.',
            'name': 'Project Hero',
        },
        {
            title: [
                'UI/UX Design',
                'APP Design',
                'Landing Page Design',
                'App Development',
            ],
            'desc': 'Techype handles all HR matters. From onboarding to day-to-day employee management.',
            'name': 'RG Wellness',
        },

    ]
    return (
        <div>
            <div className="py-6 relative ">
                <div className="w-[80%] sm:w-10/12 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 relative z-10 md:gap-10"><h2 className="text-4xl font-semibold leading-normal md:my-0 my-3">
                        Our Recent
                        <br />
                        Work Portfolio
                    </h2>
                    </div>

                    {/* Icon Blocks */}
                    <section className="mx-auto w-full">



                        <div className='lg:w-[100%]'
                        >
                            <Slider {...settings}>
                                {portfolio.map((project) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="bg-[#101828] rounded-lg overflow-hidden cursor-pointer my-5 items-center"
                                    >
                                        <div className='md:flex'>

                                            <div className="p-6 lg:p-12 md:w-1/2">
                                                <div className="flex items-center mb-4">
                                                    <Image width={30} height={30} src="https://techype.in/PortfolioLogo.svg" />
                                                    <h3 className="ml-4 text-2xl font-semibold text-white">{project.name}</h3>
                                                </div>
                                                <div className='md:flex md:flex-wrap md:gap-5 my-3 md:space-y-0 space-y-2'>
                                                    {project.title.map((item) => {
                                                        return (
                                                            // eslint-disable-next-line react/jsx-key
                                                            <div className="">
                                                                <span className="bg-white text-black text-sm px-3 py-1 rounded-full">{item}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <p className="text-white mb-6">A description for project Simplified. This is where the project details go.</p>
                                            </div>

                                            <div className="md:w-1/2">
                                                <Image width={500} height={300} alt="Simplified image" className=" object-cover p-6" src="https://techype.in/Portfolio.svg" />
                                            </div>

                                        </div>
                                    </div>


                                ))}
                            </Slider>
                        </div>

                    </section>
                    {/* End Icon Blocks */}

                </div>
            </div>
        </div>

    )
}

export default Testimonials
