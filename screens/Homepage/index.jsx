import React from "react";
import PublicLayout from "../../components/Layouts/PublicLayout";
import AboutUs from "./AboutUs";
import HeroSection from "./Hero";
import OurServices from "./OurServices";

const Homepage = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <AboutUs />
      <OurServices />
    </PublicLayout>
  );
};

export default Homepage;
