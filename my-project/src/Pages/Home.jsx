
import React from "react";
// import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/HeroNew";
import Features from "../Components/Features";
import OrganicSection from "../Components/OrganicSection";
import ServicesSection from "../Components/ServicesSection";
import PerfectFieldSection from "../Components/PerfectFieldSection";
import KeywordMarquee from "../Components/KeywordMarquee";
import FarmingSection from "../Components/FarmingSection";
import BlogBannerSection from "../Components/BlogBannerSection";
import TimelineSection from "../Components/TimelineSection";
import Testimonials from "../Components/Testimonials";
import Gallery from "../Components/Gallery";
import LogoStrip from "../Components/LogoStrip";
import LeaderBanner from "../Components/LeaderBanner";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <OrganicSection/>
      <KeywordMarquee/>
      <ServicesSection/>
      <PerfectFieldSection/>
      <Gallery/>
      <Testimonials/>
      <LogoStrip/>
      <FarmingSection/>
      <LeaderBanner/>
      <BlogBannerSection/>
      <TimelineSection/>
      {/* <Products /> */}
      <Footer />
    </div>
  );
}

