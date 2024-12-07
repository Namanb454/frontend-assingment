'use client'

import Footer from '@/components/layout/Footer'
import Hero from '@/components/layout/Hero'
import Main from '@/components/layout/Main'
import Navbar from '@/components/layout/Navbar'
import Testimonials from '@/components/layout/Portfolio'
import Services from '@/components/layout/Services'
import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Main />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default LandingPage