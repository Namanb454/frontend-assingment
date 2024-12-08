'use client'

import Footer from "@/components/layout/Footer";
import Form from "@/components/layout/Form";
import Hero from "@/components/layout/Hero";
import Main from "@/components/layout/Main";
import Navbar from "@/components/layout/Navbar";
import Testimonials from "@/components/layout/Portfolio";
import Services from "@/components/layout/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Main />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
}
