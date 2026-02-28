"use client";

import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import AboutUs from "./components/AboutUs";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import SectionReveal from "./components/SectionReveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyShroomWall</title>
        <meta name="description" content="Natural wellness with mushrooms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Navbar />

      <Hero />

      <SectionReveal revealDirection="up" revealDelay="delay-100">
        <ProductShowcase />
      </SectionReveal>

      <SectionReveal revealDirection="up" revealDelay="delay-150">
        <AboutUs />
      </SectionReveal>

      <SectionReveal revealDirection="up" revealDelay="delay-200">
        <FeaturedProducts />
      </SectionReveal>

      <SectionReveal revealDirection="fade" revealDelay="delay-200">
        <WhyChooseUs />
      </SectionReveal>

      <SectionReveal revealDirection="up" revealDelay="delay-300">
        <Testimonials />
      </SectionReveal>

      <SectionReveal
        revealDirection="up"
        revealDelay="delay-200"
        sectionClassName="py-12 md:py-12 lg:py-15 bg-gray-50"
      >
        <ContactUs />
      </SectionReveal>

      <Footer />
    </>
  );
}
