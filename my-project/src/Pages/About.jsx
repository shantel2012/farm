import React from "react";
import Hero from "../Components/About/Hero";
import OrganicSection from "../Components/OrganicSection";
import Services from "../Components/About/Services";
import GreenBanner from "../Components/About/GreenBanner";
import Timeline from "../Components/About/Timeline";
import AwardBanner from "../Components/About/AwardBanner";
import Testimonials from "../Components/About/Testimonials";
import KeywordMarquee from "../Components/KeywordMarquee";

function App() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <OrganicSection />
      <KeywordMarquee/>
      <Services />
      <GreenBanner />
      <Timeline />
      <AwardBanner />
      <Testimonials />
    </div>
  );
}

export default App;
