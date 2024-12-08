import React from 'react'
import Carousel from '../ui/Carousel'

const Hero = () => {
    return (
        <div>
            <div className="">

                <section className="relative w-full bg-[#f4f8ff] h-[60vh] flex items-center">
                    <div className="w-11/12 sm:w-10/12 max-w-6xl mx-auto">
                        <div className="max-w-2xl z-10 relative">
                            <h1 className="mb-6 text-4xl font-[600] tracking-tight text-black md:text-5xl lg:text-5xl leading-tight md:leading-[67.2px]">
                                Hype Your Ideas
                                <br />
                                With <span className="text-[#0c0eff]">Techype</span>
                            </h1>
                            <p className="mb-8 text-md text-black/80">
                                As the most trusted AI software developer, we create unique AI solutions, innovative mobile apps, and help you hire top global engineers, solving all your tech problems and bringing your ideas to life.
                            </p>
                            <a className="h-[40px] inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-[#101828] text-white" href="/hire/signup">
                                Schedule Call
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block absolute top-0 right-0 bottom-0 w-2/3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://techype.in/webp/Hero.webp)' }}>
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f4f8ff]">
                        </div>
                    </div>
                </section>

                <p className='w-fit mx-auto text-lg mt-20 tracking-wide text-gray-500'>
                    Trusted by leading brands and startups
                </p>
                <Carousel />
            </div>
        </div >

    )
}

export default Hero